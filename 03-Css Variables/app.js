const inputs =  document.querySelectorAll("#input");

inputs.forEach(input => {

    input.addEventListener("change",update)
    input.addEventListener("mousemove",update)

    
})


function update(){
const px = this.dataset.sizing || "";
document.documentElement.style.setProperty(`--${this.name}`,this.value+px);

}
