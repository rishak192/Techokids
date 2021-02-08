

fetch('https://ristechkids.herokuapp.com/getproduct', {
    method: 'get',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
}).then((res) => res.json())
    .then((json) => {
        console.log(json.mes);
    })
    .catch((error) => {
        console.error(error);
    });

fetch('https://ristechkids.herokuapp.com/addtocart/6020d6f7471dd4356d63b777', {
    method: 'get',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
}).then((res) => res.json())
    .then((json) => {
        console.log(json.mes);
    })
    .catch((error) => {
        console.error(error);
    });

fetch('https://ristechkids.herokuapp.com/update/6020dc9210803c3c88c23a0b/200', {
    method: 'get',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
}).then((res) => res.json())
    .then((json) => {
        console.log(json.mes);
    })
    .catch((error) => {
        console.error(error);
    });

fetch('https://ristechkids.herokuapp.com/cartitems', {
    method: 'get',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
}).then((res) => res.json())
    .then((json) => {
        console.log(json.mes);
    })
    .catch((error) => {
        console.error(error);
    });
