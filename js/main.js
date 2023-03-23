function log(text){
    console.log(text);
}

import daysOfWeek from "./data.json" assert {type: "json"}

const bars = document.querySelectorAll(".bars");
const dayValue = document.querySelectorAll(".day-value");

for (let index = 0; index < bars.length; index++) {

    bars[index].style.height = daysOfWeek[index].amount + "px";  

    bars[index].addEventListener("click", ()=>{
        dayValue[index].innerText= "R$ " + daysOfWeek[index].amount;
        dayValue[index].style.border = ("2px solid transparent"); 
        dayValue[index].style.background = ("lightsalmon");
        dayValue[index].style.transition = ("400ms");
    })  

    bars[index].addEventListener("mouseout", ()=>{
        dayValue[index].innerText= "";
        dayValue[index].style.border = ""; 
        dayValue[index].style.background = "";
    })
}

const totalExpenses = document.getElementById("balance__value2");
totalExpenses.innerText += daysOfWeek[0].amount 
                        + daysOfWeek[1].amount
                        + daysOfWeek[2].amount
                        + daysOfWeek[3].amount
                        + daysOfWeek[4].amount
                        + daysOfWeek[5].amount
                        + daysOfWeek[6].amount;




