//console.log("connected");

let hour = document.querySelector(".hour-hand");
let min = document.querySelector(".min-hand");
let sec = document.querySelector(".sec-hand");

function clock()
{
    const deg = 6;
    let day = new Date();
    let dHour = (day.getHours()%12) *30 ;
    let dMin = day.getMinutes() * deg ;
    let dSec = day.getSeconds() * deg;
    console.log(dHour+" "+dMin+" "+dSec);
    
    hour.style.transform = `rotate(${dHour+(dMin/12)}deg)`;
    min.style.transform = `rotate(${dMin}deg)`;
    sec.style.transform = `rotate(${dSec}deg)`;

// document.getElementById("myDIV").style.transform = "rotate(7deg)";
}

//document.body.addEventListener('onload',setInterval);

setInterval(clock,1000);
