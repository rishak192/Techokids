const express = require('express');
const cors = require('cors');
const app = express();
var multer = require('multer');
var path = require('path');
const fs = require('fs');

const Product = require('./Models/product')
const Cart = require('./Models/cart');

const mongoose = require('mongoose')

require('dotenv/config')

var bodyParse = require('body-parser');
const { ObjectId } = require('mongodb');
app.use(cors());

app.use(bodyParse.urlencoded({
    extended: true
}));
app.use(bodyParse.json());

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

mongoose.connect(process.env.URL, { useNewUrlParser: true, useUnifiedTopology: true }, err => {
    console.log("Connected to mongoose");
})

app.use('/addproduct', express.static(path.join(__dirname, '/uploads')));


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        console.log("file", file["originalname"]);
        cb(null, file["originalname"] + path.extname(file["originalname"]));
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/jpg' || file.mimetype == 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

const upload = multer({ storage: storage, fileFilter: fileFilter });

app.get('/', (req, res) => {
    res.render('index')
});

app.post("/addproduct", upload.single('image'), async (req, res, next) => {

    console.log(req.body);
    var uf = res.req.file
    console.log(uf);

    try {
        console.log("Succes");
    } catch (error) {
        console.error(error);
    }

    var product = new Product({
        Name: req.body.Name,
        Description: req.body.Description,
        UnitPrice: req.body.UnitPrice,
        Quantity: req.body.Quantity,
    })

    await product.save().then(result => {
        fs.rename(uf.path, uf.path.split('/')[0] + "/" + result._id + "." + uf.mimetype.split('/')[1], () => {
        });
        res.send(result)
    })

});

app.get('/getproduct', async (req, res) => {
    const imageFolder = './uploads/'
    var allp = []

    await Product.find({}).then(result => {
        console.log(result);
        fs.readdir(imageFolder, (err, files) => {
            files.forEach(file => {
                var id = file.split(".")[0]
                for(i in result){
                    if(result[i]._id==id){
                        allp.push({"image":file,"product":result[i]})
                    }
                }
            });
            console.log(allp);
            res.json({"mes":allp})
        });
    })
})

app.get('/addtocart/:id', async (req, res) => {

    Product.find({ _id: req.params.id }).then(result => {
        console.log(result[0]);
        var ncart = new Cart({
            Pid: result[0]._id,
            Name: result[0].Name,
            Description: result[0].Description,
            UnitPrice: result[0].UnitPrice,
            Quantity: result[0].Quantity
        })
        ncart.save().then(result => {
            res.json({"mes":"added to cart "+result})
        })
    })
})

app.get('/update/:id/:newquant', async (req, res) => {

    await Cart.updateOne({ _id: ObjectId(req.params.id) },
        { $set: { Quantity: req.params.newquant } }).then(result => {
            res.json({"mes":"Quantity updated "+result})
        })
})

app.get('/cartitems', async (req, res) => {
    await Cart.find({}).then(result => {
        res.send({"mes":"cart items "+result})
    })
})

app.listen(process.env.PORT || 4000);
