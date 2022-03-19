import '../css/common.css';

//get controls
const bodyEl = document.querySelector('body');
const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};
refs.stopBtn.disabled = true;
let timerId = null;
const interval = 1000;

//toogle buttons activity
function toggleBtns(...buttons) {
  buttons.forEach(button =>
    button.disabled ? (button.disabled = false) : (button.disabled = true),
  );
}

//listen buttons clicks
refs.startBtn.addEventListener('click', () => {
  toggleBtns(refs.stopBtn, refs.startBtn);
  switchBobyBgColorLoop(interval);
});

refs.stopBtn.addEventListener('click', () => {
  toggleBtns(refs.stopBtn, refs.startBtn);
  clearInterval(timerId);
});

function switchBobyBgColorLoop(interval) {
  //switch color on first click without delay
  bodyEl.style.backgroundColor = getRandomHexColor();

  //switch color with interval
  timerId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, interval);
}

//get random color
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
