const start_btn = document.getElementById("start-btn");
const pause_btn = document.getElementById("pause-btn");
const lap_btn = document.getElementById("lap-btn");
const stop_btn = document.getElementById("stop-btn");
const reset_lap = document.getElementById("reset-lap");
const content = document.getElementById("content");
const lap_content = document.getElementById("laps");

let ms = 0,
  s = 0,
  m = 0,
  h = 0,
  timer;

//start stopwatch
start_btn.addEventListener("click", (e) => {
  timer = setInterval(add, 10);
  e.preventDefault();
});

//clear stopwathc
stop_btn.addEventListener("click", (e) => {
  (ms = 0), (s = 0), (m = 0), (h = 0);
  clearInterval(timer);
  addContent();
  e.preventDefault();
});

//clear lap
reset_lap.addEventListener("click", (e) => {
  lap_content.innerHTML = "";
  e.preventDefault();
});

//pause
pause_btn.addEventListener("click", (e) => {
  clearInterval(timer);
  e.preventDefault();
});

//create lap
lap_btn.addEventListener("click", (e) => {
  if (ms == 0 && s == 0 && m == 0 && h == 0) {
    return false;
  } else if (
    lap_content.childNodes.length >= 1 &&
    lap_content.lastChild.getAttribute("id") == ms + s + m + h
  ) {
    return;
  } else {
    lap_content.innerHTML += `<p class="mt-1" id=${ms + s + m + m + h}>
      ${
        (h < 10 ? "0" + h : h) +
        ":" +
        (m < 10 ? "0" + m : m) +
        ":" +
        (s < 10 ? "0" + s : s) +
        ":" +
        (ms < 10 ? "0" + ms : ms)
      }
      </p>`;
  }
  e.preventDefault();
});

const add = () => {
  ms++;
  if (ms >= 100) {
    ms = 0;
    s++;
    if (s >= 60) {
      s = 0;
      m++;
      if (m >= 60) {
        m = 0;
        h++;
      }
    }
  }
  addContent();
};

const addContent = () => {
  content.innerHTML =
    (h < 10 ? "0" + h : h) +
    ":" +
    (m < 10 ? "0" + m : m) +
    ":" +
    (s < 10 ? "0" + s : s) +
    ":" +
    (ms < 10 ? "0" + ms : ms);
};
