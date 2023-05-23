import Notiflix from 'notiflix';


{/* <form class="form">
  <label>
    First delay (ms)
    <input type="number" name="delay" required />
  </label>
  <label>
    Delay step (ms)
    <input type="number" name="step" required />
  </label>
  <label>
    Amount
    <input type="number" name="amount" required />
  </label>
  <button type="submit">Create promises</button>
</form> */}


const form = document.querySelector('form')
const button = document.querySelector('button')
console.log(button);

form.addEventListener('input', formSubmit)
form.addEventListener('submit', formSubmit)
button.addEventListener('click', formSubmit)

function formSubmit(event) {
  event.preventDefault()

  console.log(event.target);
  const amount = event.currentTarget.elements.amount.value;
  const delay = event.currentTarget.elements.delay.value
  const stepDelay = event.currentTarget.elements.step.value;

  for (let i = 1; i <= amount; i++){
   console.log(i);
    new Promise(() => {

     
    })

  
  }

  //createPromise(position, delay)
}
  
  




function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}


// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });