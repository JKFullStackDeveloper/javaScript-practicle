let starGroup = document.querySelector(".icon");
let allStar = document.querySelectorAll(".star");
let rating = document.querySelector("h3");
let prevStar = 0;

starGroup.addEventListener("click",(e)=>{
    let currentStar = e.target.dataset.position;

    for(let i=0;i<prevStar;i++){
        allStar[i].classList.remove("gold");
    }

    for(let i=0;i<currentStar;i++){
        allStar[i].classList.add("gold");
    }

    prevStar=currentStar;

    rating.innerText="Rating : " +currentStar;
})

starGroup.addEventListener("mouseover",(e)=>{
    let currentStar = e.target.dataset.position;
    
    for(let i=0;i<allStar.length;i++){
        if(allStar[i].classList.contains("gold")){
            allStar[i].classList.remove("gold");
        }
    }
    for(let i=0;i<currentStar;i++){
        allStar[i].classList.add("gold");
    }
})

starGroup.addEventListener("mouseleave",()=>{
    
    for(let i=0;i<allStar.length;i++){
        allStar[i].classList.remove("gold");
    }
    
    for(let i=0; i<prevStar;i++){
        allStar[i].classList.add("gold");
    }
})


