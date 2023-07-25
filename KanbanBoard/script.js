let addBtn = document.querySelector(".add-btn");
let modal = document.querySelector(".modal-cont");
let allPriorityColor = document.querySelectorAll(".priority-color");
let textAreaCont = document.querySelector(".textarea-cont");
let mainCont = document.querySelector(".main-cont");
let removeBtn = document.querySelector(".remove-btn");
let allFilterColor = document.querySelectorAll(".color");

let color = ["red","blue","green","black"];
let modalPriorityColor = "black";
let modalPriorityText = "";
let addModal = true;
let removeFlag = false;
let uid = new ShortUniqueId();
let ticketArr = [];


// Code for filter ticket by color

if(localStorage.getItem("ticket")){
    let strArr = localStorage.getItem("ticket");
    let arr = JSON.parse(strArr);
    for(let i=0;i<arr.length;i++){
        let ticket = arr[i];
        createTicket(ticket.task,ticket.color,ticket.id);
    }
}

for(let i=0;i<allFilterColor.length;i++){
    allFilterColor[i].addEventListener("click",()=>{
        let allTicketColor = document.querySelectorAll(".ticket-color");
        let currentSelectedColor = allFilterColor[i].classList[1];
        for(let j=0; j<allTicketColor.length;j++){
            let currentTicketColor = allTicketColor[j].classList[1];
            if(currentSelectedColor==currentTicketColor){
                allTicketColor[j].parentElement.style.display="block";
            }else{
                allTicketColor[j].parentElement.style.display="none";
            }
        } 
    })
    //  code for show all tickets on double click
    allFilterColor[i].addEventListener("dblclick",()=>{
        let allTicketColor = document.querySelectorAll(".ticket-color");
        for(let k=0;k<allTicketColor.length;k++){
            allTicketColor[k].parentElement.style.display="block";
        }
    })
}

// code for add modal container
addBtn.addEventListener("click", () => {
    if (addModal) {
        modal.style.display = "flex";   // show modal
        addModal = false;                 // setting it false for next click
    } else {
        modal.style.display = "none";   // on next click hide model
        addModal = true;                // setting it true for next click
    }
    textAreaCont.focus();
})

// code for remove icon color change
removeBtn.addEventListener("click", () => {
    if (removeFlag) {
        removeBtn.style.color = "black";
        removeFlag = false
    } else {
        removeBtn.style.color = "red";
        removeFlag = true;
    }
})

// code for ticket creation
textAreaCont.addEventListener("keydown", (e) => {
    let key = e.key;
    let task = e.target.value;
    if (key == "Enter") {
        createTicket(task,modalPriorityColor);
        textAreaCont.value = "";
        modal.style.display = "none";
        addModal = true;
    }
})

// code for highlight priority color in ticket creation
for (let i = 0; i < allPriorityColor.length; i++) {
    allPriorityColor[i].addEventListener("click", () => {
        for (let j = 0; j < allPriorityColor.length; j++) {
            if (allPriorityColor[j].classList.contains("active")) {
                allPriorityColor[j].classList.remove("active");
            }
        }
        allPriorityColor[i].classList.add("active");
        modalPriorityColor = allPriorityColor[i].classList[1];
        // modalPriorityText =  allPriorityColor[i].textContent;
    })
}

function createTicket(task,modalPriorityColor,ticketId) {
        if(task == ""){
            return;
        }
        let id;
        if(ticketId){
            id = ticketId
        }else{
            id = uid();
        }
        let ticketCont = document.createElement("div")
        ticketCont.setAttribute("class", "ticket-cont");
        ticketCont.innerHTML = `<div class="ticket-color ${modalPriorityColor}"></div>
                                <div class="ticket-id">#1${id}</div>
                                <div class="ticket-area">${task}</div>
                                <div class="lock-unlock"><i class="fa-solid fa-lock"></i></div>`;  
        
        mainCont.appendChild(ticketCont);
        ticketArr.push({color:modalPriorityColor,task:task,id:id});
        updateLocalStorage();

        handleDelete(ticketCont,id)   // for delete ticket
        ticketColorChange(ticketCont,id);  // for ticket priority color change
        editTextarea(ticketCont,id)   // lock - unlock icon code
        
        
}

function handleDelete(ticketCont,id){
    ticketCont.addEventListener("click", () => {
        if (removeFlag) {
            ticketCont.remove();
            let idx = ticketArr.findIndex((index)=>{
                return index.id == id;
           })         
               ticketArr.splice(idx,1);
               updateLocalStorage();  
        }   
    })
}

function ticketColorChange(ticketCont,id){
    let ticketColor = ticketCont.querySelector(".ticket-color");
        ticketColor.addEventListener("click",()=>{
            let currentColor = ticketColor.classList[1];
            let currentColorIndex = color.findIndex((col)=>{
                return col == currentColor; 
            })

            let nextColorIndex = currentColorIndex+1;
            if(nextColorIndex==4){
                nextColorIndex=0;
            }
            let nextColor = color[nextColorIndex];
            ticketColor.classList.remove(currentColor);
            ticketColor.classList.add(nextColor);
           
            let idx = ticketArr.findIndex((index)=>{
                        return index.id == id;
            })
            ticketArr[idx].color = nextColor;
            updateLocalStorage();
        })
}

function editTextarea(ticketCont,id){
    let lockUnlockBtn = ticketCont.querySelector(".lock-unlock i");
        let taskArea = ticketCont.querySelector(".ticket-area");
        lockUnlockBtn.addEventListener("click",()=>{
            if(lockUnlockBtn.classList.contains("fa-lock")){
                lockUnlockBtn.classList.remove("fa-lock");
                lockUnlockBtn.classList.add("fa-lock-open");
                taskArea.setAttribute("contenteditable","true");
            }else{
                lockUnlockBtn.classList.remove("fa-lock-open");
                lockUnlockBtn.classList.add("fa-lock");
                taskArea.setAttribute("contenteditable","false");
            }

            let idx = ticketArr.findIndex((index)=>{
                return index.id == id;
            })
            ticketArr[idx].task = taskArea.innerText;   
            updateLocalStorage();
        })
}

function updateLocalStorage(){
    let strArray = JSON.stringify(ticketArr);
    localStorage.setItem("ticket",strArray);
}
