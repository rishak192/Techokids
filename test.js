

fetch('http://localhost:4000/getproduct', {
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

fetch('http://localhost:4000/addtocart/6020d6f7471dd4356d63b777', {
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

fetch('http://localhost:4000/update/6020dc9210803c3c88c23a0b/200', {
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

fetch('http://localhost:4000/cartitems', {
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
