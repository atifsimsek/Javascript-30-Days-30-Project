const second = document.querySelector(".second");
const minute = document.querySelector(".min");
const hour = document.querySelector(".hour");

function clock(){

    const time = new Date();

    const sec = time.getSeconds();

    const secDegrees = ((sec/60)*360)-90;

    second.style.transform = `rotate(${secDegrees}deg)`;



    const min = time.getMinutes();

    const minDegrees = ((min/60)*360)-90;

    minute.style.transform = `rotate(${minDegrees}deg)`;



    const hours = time.getHours();

    const hourDegrees = ((hours/12)*360)-90;

    hour.style.transform = `rotate(${hourDegrees}deg)`;


}



setInterval(clock,1000);