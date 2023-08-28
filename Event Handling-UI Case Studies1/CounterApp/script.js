let btnPlus = document.querySelector(".incr");
let btnMinus = document.querySelector(".decr");
let btnReset = document.querySelector(".reset")
let counterValue = document.querySelector("h2");
let input =document.querySelector("input");
let incDecrBy = 1

input.addEventListener("change",()=>{
    let value = input.value;
    if(value==""){
        incDecrBy = 1;
        return;
    }
    else if(value<=0){
        incDecrBy=1;
        alert("Enter Positive Value");
        input.value="";
        return;
    }
    incDecrBy = parseInt(value);
})


btnPlus.addEventListener("click",()=>{
    let value = parseInt(counterValue.innerText);
    value = value + incDecrBy;
    counterValue.innerText=value;
})

btnMinus.addEventListener("click",()=>{
    let value = parseInt(counterValue.innerText);
    if(value<=0){
        return;
    }
    value = value - incDecrBy;
    counterValue.innerText=value;
})

btnReset.addEventListener("click",()=>{
    counterValue.innerText="0";
    input.value="";
})