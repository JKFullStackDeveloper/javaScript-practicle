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


async function cafe(){
    let orderStatus = await orderPlaced("Coffee");
    let orderProcess = await processOrder(orderStatus);
    let billGenerate = await generateBill(orderProcess);
    console.log(billGenerate);
}

cafe();