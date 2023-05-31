const startBtnEl = document.querySelector('button[data-start]');
const stopBtnEl = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');
let timerId = null;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};

function changeBGColor () {
    bodyEl.style.backgroundColor = getRandomHexColor();
};

function onStartBtnElClick(event) {
    changeBGColor ();

    timerId = setInterval(() => {
        bodyEl.style.backgroundColor = getRandomHexColor()}, 1000);

    startBtnEl.disabled = true;
    stopBtnEl.disabled = false;
};

function onStopBtnClick(event) {
    clearInterval(timerId);

    stopBtnEl.disabled = true;
    startBtnEl.disabled = false;
}

function onBtnClick(event) {
    if (event.target.hasAttribute('data-start')) { 
        onStartBtnElClick();
    }; 
    if (event.target.hasAttribute('data-stop')){
        onStopBtnClick();
    };
};

bodyEl.addEventListener('click', onBtnClick);

