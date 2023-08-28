let myPromise = new Promise(function(resolve,reject){
    let a=5;
    let b=0;
    if(a==b){
        resolve("Success..Promise resolved");
    }else{
        reject("Failed... Promise Rejected");
    }
})

myPromise.then(function(data){      // will run this method when promise resolved
    console.log(data);
})

myPromise.catch(function(data){    // will run this method when promise rejected
    console.log(data)
})

myPromise.finally(function(){        // will run this method either promise resolved or reject in both condition
    console.log("Promise state is fulfilled");
})
