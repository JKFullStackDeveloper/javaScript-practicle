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


// async function cafe(){
//     try{
//         let orderStatus = await orderPlaced("Coffee");
//         let orderProcess = await processOrder(orderStatus);
//         let billGenerate = await generateBill(orderProcess);
//         console.log(billGenerate);
//     }catch(error){
//         console.log(error);
//     }
    
// }

// cafe();


// IIFE Function (Immediately Invoked Function Expression)

async function cafe(){
    try{
        let orderStatus = await orderPlaced("Coffee");
        let orderProcess = await processOrder(orderStatus);
        let billGenerate = await generateBill(orderProcess);
        return billGenerate;
    }catch(error){
        console.log(error);
    }
    
}

(async function(){
    let bill = await cafe();
    console.log(bill);
})()