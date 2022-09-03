const panels = document.querySelectorAll(".panels");



panels.forEach(panel => {
    
    panel.addEventListener("click",open)
    panel.addEventListener("transitionend",getTexts)

});



function open(e){

this.classList.toggle("open")

}

function getTexts (e){
    e.propertyName.includes("flex") ? this.classList.toggle("open-active"): ""


}