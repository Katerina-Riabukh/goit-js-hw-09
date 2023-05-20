
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const body = document.body
const buttons = document.querySelectorAll('button')
const btnStart = buttons[0];
const btnStop = buttons[1]
let colorPicker;



btnStart.addEventListener('click', onStartChangeColor)
btnStop.addEventListener('click', onStopChangeColor)


function onStartChangeColor(event) {
    btnStart.disabled = true;
    btnStart.setAttribute('disabled', true)
    colorPicker = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
 
}


function onStopChangeColor(event) {
    btnStart.disabled = false;
    clearTimeout(colorPicker)
}
