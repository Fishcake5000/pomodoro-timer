const timerMinutes = document.querySelector('#time-display-minutes');
const timerSeconds = document.querySelector('#time-display-seconds');
const sessionSetting = document.querySelector('#session-display');
const breakSetting = document.querySelector('#break-display');

const buttons = document.querySelectorAll('.bttn');
buttons.forEach(bttn => bttn.addEventListener('click', function(e) {
    switch (e.target.id) {
        case 'start':
            start();
            break;
        case 'reset':
            reset();
            break;
        case 'pause':
            pause();
            break;
        case 'stop':
            stop();
    } 
}));

function updateDisplay() {
    timerMinutes.textContent = minutes;
    if (seconds < 10) {
        timerSeconds.textContent = '0' + seconds;
    } else {
        timerSeconds.textContent = seconds;
    }
}

function decreaseTimer() {
    if (seconds === 0) {
        minutes--;
        seconds = 59;
    } else {
        seconds--;
    }
    updateDisplay();
}

function start() {
    interval = window.setInterval(decreaseTimer, 1000);
}

function reset() {
    sessionSetting.textContent = '25';
    breakSetting.textContent = '5';
    stop();
}

function pause() {
    window.clearInterval(interval);
}

function stop() {
    window.clearInterval(interval);
    minutes = parseInt(sessionSetting.textContent,10);
    seconds = 0;
    updateDisplay();
}

let minutes = 25;
let seconds = 0;
let interval = null;