function orderPlaced(drink) {

    return new Promise(function (resolve, reject) {
        if (drink == "Coffee") {
            resolve(`Order Placed for ${drink}`);
        } else {
            reject(`Order not Placed`);
        }
    })
}

function processOrder(orderStatus) {
    return new Promise(function (resolve) {
        resolve(`${orderStatus} and Processed`);
    })
}

function generateBill(OrderProcess) {
    return new Promise(function (resolve) {
        resolve(`${OrderProcess} and Bill is 150 Rs.`);
    })
}

let orderPromise = orderPlaced("Coffee");

orderPromise.then(function (orderStatus) {
    return processOrder(orderStatus);
}).then(function (OrderProcess) {
    return generateBill(OrderProcess);
}).then(function (bill) {
    console.log(bill)
}).catch(function (error) {
    console.log(error);
})


// orderPromise.then(function (orderStatus) {
//     return processOrder(orderStatus)
//         .then(function (OrderProcess) {
//             return generateBill(OrderProcess);
//         })
//         .then(function (bill) {
//             console.log(bill);
//         })
// }).catch(function (error) {
//     console.log(error);
// })


