import { Notify } from 'notiflix/build/notiflix-notify-aio';

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }

// function createPromise() {
//   console.log('creating promise');
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('setTimeout');

//       const shouldResolve = Math.random() > 0.5;
//       console.log(`shouldResolve is ${shouldResolve}`);
//       if (shouldResolve) {
//         resolve('promise resolved');
//       } else {
//         reject('promise rejected');
//       }
//     }, 1000);
//   });
// }

// createPromise()
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => console.log(err));

let delay = 500;
let position = 1;

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.5;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

for (let i = 0; i < 5; i++) {
  createPromise(position, delay)
    .then(({ position, delay }) => {
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, {
        timeout: 5000,
        position: 'center-right',
      });
    })
    .catch(({ position, delay }) => {
      Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, {
        timeout: 5000,
        position: 'center-right',
      });
    });

  position += 1;
  delay += 500;
}
