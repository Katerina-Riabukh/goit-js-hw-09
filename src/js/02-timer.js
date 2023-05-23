import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';


const input = document.getElementById('datetime-picker')
const button = document.querySelector('button')
const elementsTimer = document.querySelectorAll('.value')

Notiflix.Notify.init({
  position: 'center-top',
})

const date = Date.now()
const options = {
  //minDate: "today",
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const convertedtime = selectedDates[0].getTime()

    if (convertedtime < date) {
      Notiflix.Notify.warning("Please choose a date in the future");
      return
    } else {
       button.disabled = false
    }
  },
};
const fp = flatpickr("#datetime-picker", options);

button.disabled = true
button.addEventListener('click', ()=>{timer.start()})



function convertMs(ms) {
 
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

 
  const days = String(Math.floor(ms / day)).padStart(2,'0');
  const hours = String(Math.floor((ms % day) / hour)).padStart(2,'0');
  const minutes = String(Math.floor(((ms % day) % hour) / minute)).padStart(2,'0');
  const seconds = String(Math.floor((((ms % day) % hour) % minute) / second)).padStart(2,'0');

  return { days, hours, minutes, seconds };
  
}

const timer = {
  start() { 
    button.disabled = true
    const startingPoint = new Date(input.value).getTime()
    Notiflix.Notify.success('Let`s start!');
    const timerId = setInterval(() => {
      const currentTime = Date.now()
      const deltaTime = startingPoint - currentTime
      const convertTime = convertMs(deltaTime)
      
      elementsTimer[0].textContent = convertTime.days
      elementsTimer[1].textContent = convertTime.hours
      elementsTimer[2].textContent = convertTime.minutes
      elementsTimer[3].textContent = convertTime.seconds

      if ( convertTime.days === '00' && convertTime.hours === '00' &&  convertTime.minutes === '00' &&  convertTime.seconds === '00') {
        clearInterval(timerId)
      }
    }, 1000);
  },


}


