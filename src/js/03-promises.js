import { Notify } from 'notiflix/build/notiflix-notify-aio';

//operate submit btn
document.querySelector('.form').addEventListener('submit', event => {
  //dont restart page on submit
  event.preventDefault();
  //get controls
  const formEls = event.currentTarget.elements;
  let delay = Number(formEls.delay.value);
  let step = Number(formEls.step.value);
  let amount = Number(formEls.amount.value);
  //for position displaying and cycle operating
  let position = 1;

  //create cycle of promises
  for (; position <= amount; position++) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });

    //increase delay on step
    delay += step;
  }
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
