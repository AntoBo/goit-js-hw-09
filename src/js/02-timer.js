//imports
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

//get controls
let currentDate = new Date();
let futureDate = null;
let timeDelta = null;

const startBtn = document.querySelector('[data-start]');
startBtn.addEventListener('click', startCountdown);
startBtn.disabled = true;
const flatPicker = flatpickr('input#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    futureDate = selectedDates[0];
    timeDelta = futureDate.getTime() - currentDate.getTime();
    checkFutureDate();
  },
});

function checkFutureDate() {
  if (timeDelta < 0) {
    Notify.failure('Please choose a date in future', {
      timeout: 2000,
      showOnlyTheLastOne: true,
      position: 'center-top',
    });
    startBtn.disabled = true;

    return;
  }
  startBtn.disabled = false;
}

function startCountdown() {
  console.log('startCountdown');
  console.log(convertMs(timeDelta));
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
