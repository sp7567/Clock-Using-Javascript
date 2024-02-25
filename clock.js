let hr = document.querySelector("#Hour");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");

function displayTime() { // Corrected function name
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes(); // Corrected variable name
    let ss = date.getSeconds(); // Corrected variable name
    let hRotation = 30 * hh + mm / 2; 
    let mRotation = 6 * mm; 
    let sRotation = 6 * ss; 

    hr.style.transform = `rotate(${hRotation}deg)`; // Corrected property name
    min.style.transform = `rotate(${mRotation}deg)`; // Corrected property name
    sec.style.transform = `rotate(${sRotation}deg)`; // Corrected property name
}

setInterval(displayTime, 1000);
