const count = document.getElementById("count");
const saved = document.getElementById("saved")
let pasengers = 0;

saved.innerText = ""



const increment = () => {
    pasengers++;
    count.innerText = pasengers;
}


const saveCount = () => {
    saved.innerText += ` ${pasengers}`
    pasengers = 0 ; 
    count.innerText = pasengers;

    
}