import Notiflix from 'notiflix';

 const form = document.querySelector('form')
const button = document.querySelector('button')

 
form.addEventListener('blur', formSubmit)
form.addEventListener('submit', formSubmit)

function formSubmit(event) {
  event.preventDefault()

  const amount = event.currentTarget.elements.amount.value;
  const delay = event.currentTarget.elements.delay.valueAsNumber
  const stepDelay = event.currentTarget.elements.step.valueAsNumber;

 
  for (let i = 0; i < amount; i++){

    createPromise(i + 1, delay + stepDelay * i)
      .then(({ position, delay }) => {
     Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
    })
     .catch(({ position, delay }) => {
     Notiflix.Notify.warning(`❌ Rejected promise ${position} in ${delay}ms`);
    });
  
  }
 
}

function createPromise(position, delay) {

  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
      
      setTimeout(() => {
        if (shouldResolve) {
          resolve({ position , delay });
        }
        
        reject({ position, delay })
        
      }, delay);
  
  })

} 


