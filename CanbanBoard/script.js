let addBtn = document.querySelector(".add-btn");
let modal = document.querySelector(".modal-cont");
let allPriorityColor = document.querySelectorAll(".priority-color");
let textAreaCont = document.querySelector(".textarea-cont");
let mainCont = document.querySelector(".main-cont");
let addModal = true;

addBtn.addEventListener("click",()=>{
    if(addModal){
    modal.style.display = "flex";   // show modal
    addModal=false;                 // setting it false for next click
    }else{
     modal.style.display="none";   // on next click hide model
     addModal=true;                // setting it true for next click
    }
})

textAreaCont.addEventListener("keydown",(e)=>{
    let key = e.key;
    if(key=="Enter"){
        createTicket(e);
        textAreaCont.value="";
        modal.style.display="none";
        addModal=true;
    }
})

for(let i=0; i<allPriorityColor.length;i++){
allPriorityColor[i].addEventListener("click",()=>{
    for(let j=0;j<allPriorityColor.length;j++){
        if(allPriorityColor[j].classList.contains("active")){
            allPriorityColor[j].classList.remove("active");
        }
    }
    allPriorityColor[i].classList.add("active");

})
}

function createTicket(e){
    
    let value = e.target.value;
    if(value == ""){
        alert("Enter Task Details");
    }else{
    let ticketCont = document.createElement("div")
    ticketCont.setAttribute("class","ticket-cont");
    ticketCont.innerHTML = `<div class="ticket-color red"></div>
    <div class="ticket-id">#Eid455</div>
    <div class="ticket-area">${value}</div>`;
    mainCont.appendChild(ticketCont);
    }
}
