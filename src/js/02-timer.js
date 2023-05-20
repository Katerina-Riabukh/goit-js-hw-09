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
      //window.alert("Please choose a date in the future")
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

      
      //console.log(`${convertTime.days}::${convertTime.hours}::${convertTime.minutes}::${convertTime.seconds}`);

      if ( convertTime.days === '00' && convertTime.hours === '00' &&  convertTime.minutes === '00' &&  convertTime.seconds === '00') {
        clearInterval(timerId)
        console.log('timer stop');
      }
    }, 1000);
  },


}


// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     console.log(selectedDates[0]);
//   },
// };


// Notiflix.Notify.init({
//   width: '280px',
//   position: 'center-top', // 'right-top' - 'right-bottom' - 'left-top' - 'left-bottom' - 'center-top' - 'center-bottom' - 'center-center'
//   distance: '10px',
//   opacity: 1,
//   borderRadius: '5px',
//   rtl: false,
//   timeout: 3000,
//   messageMaxLength: 110,
//   backOverlay: false,
//   backOverlayColor: 'rgba(0,0,0,0.5)',
//   plainText: true,
//   showOnlyTheLastOne: false,
//   clickToClose: false,
//   pauseOnHover: true,

//   ID: 'NotiflixNotify',
//   className: 'notiflix-notify',
//   zindex: 4001,
//   fontFamily: 'Quicksand',
//   fontSize: '13px',
//   cssAnimation: true,
//   cssAnimationDuration: 400,
//   cssAnimationStyle: 'fade', // 'fade' - 'zoom' - 'from-right' - 'from-top' - 'from-bottom' - 'from-left'
//   closeButton: false,
//   useIcon: true,
//   useFontAwesome: false,
//   fontAwesomeIconStyle: 'basic', // 'basic' - 'shadow'
//   fontAwesomeIconSize: '34px',

//   success: {
//     background: '#32c682',
//     textColor: '#fff',
//     childClassName: 'notiflix-notify-success',
//     notiflixIconColor: 'rgba(0,0,0,0.2)',
//     fontAwesomeClassName: 'fas fa-check-circle',
//     fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
//     backOverlayColor: 'rgba(50,198,130,0.2)',
//   },

//   failure: {
//     background: '#ff5549',
//     textColor: '#fff',
//     childClassName: 'notiflix-notify-failure',
//     notiflixIconColor: 'rgba(0,0,0,0.2)',
//     fontAwesomeClassName: 'fas fa-times-circle',
//     fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
//     backOverlayColor: 'rgba(255,85,73,0.2)',
//   },

//   warning: {
//     background: '#eebf31',
//     textColor: '#fff',
//     childClassName: 'notiflix-notify-warning',
//     notiflixIconColor: 'rgba(0,0,0,0.2)',
//     fontAwesomeClassName: 'fas fa-exclamation-circle',
//     fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
//     backOverlayColor: 'rgba(238,191,49,0.2)',
//   },

//   info: {
//     background: '#26c0d3',
//     textColor: '#fff',
//     childClassName: 'notiflix-notify-info',
//     notiflixIconColor: 'rgba(0,0,0,0.2)',
//     fontAwesomeClassName: 'fas fa-info-circle',
//     fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
//     backOverlayColor: 'rgba(38,192,211,0.2)',
//   },
// });

