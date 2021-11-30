
const seconds = document.querySelector('#seconds');
const minutes = document.querySelector('#minutes');
const hours = document.querySelector('#hours');

const startTime = document.querySelector('#start');
const stopTime = document.querySelector('#stop');
const resetTime = document.querySelector('#reset');

let running = false;
let sec = 0;
let min = 1;
let hr = 0;

const increment = () => {

    sec++;
    sec = sec % 60;
    min = min % 60;
    hr = hr % 24;

    if(sec <= 9){
        seconds.innerText = "0" + sec;
    }
    else {
        seconds.innerText = sec;
    }
    if(sec == 00){
        if(min <= 9){
            minutes.innerText = "0" + min;
            min++;
        }
        else {
            minutes.innerText = min;
            min++;
        }
    }
    if(Number(minutes.innerText) == 00 && Number(seconds.innerText) == 00){
        if(Number(hours.innerText) < 9){
            hr++;
            hours.innerText = "0" + hr;
        }
        else {
            hr++;
            hours.innerText = hr;
        }
    }
    if(Number(hours.innerText) == 24 && Number(minutes.innerText) == 00){
        sec = 0;
        min = 0;
        hr = 0;
        const text = document.querySelector('#text');
        text.innerText = "Sorry! No one uses stopwatch for 24 hours. Lmao...";
    }
}

setInterval(() => {
    if(running) increment();
    }, 1000);

function startTimer() {
    startTime.innerText = "START";
    text.innerText = "";
    running = true;
}
function stopTimer() {
    startTime.innerText = "RESUME";
    text.innerText = "";
    running = false;
}
function resetTimer() {
    sec = 0;
    min = 1;
    hr = 0;
    seconds.innerText = "00";
    minutes.innerText = "00";
    hours.innerText = "00";
    startTime.innerText = "START";
    text.innerText = "";
    running = false;
}
startTime.addEventListener('click', startTimer);
stopTime.addEventListener('click', stopTimer);
resetTime.addEventListener('click', resetTimer);






