//imports
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

Notify.success('ok!', {
  timeout: 1000,
});

//get controls
const flatPicker = flatpickr('input#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates, dateStr) {
    console.log('calendar closed with selected dates: ', selectedDates[0]);
    console.log('dateStr: ', dateStr);
  },
});
