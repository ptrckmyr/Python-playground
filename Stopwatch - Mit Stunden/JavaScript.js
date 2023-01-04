// Global Vars
const time_el = document.querySelector(".Content .Timer");
const start_btn = document.getElementById("start-button");
const stop_btn = document.getElementById("stop-button");
const reset_btn = document.getElementById("Reset");

let seconds = 0;
let interval = null;

// Event Listener
start_btn.addEventListener("click", start);
stop_btn.addEventListener("click", stop);
reset_btn.addEventListener("click", reset);


// Timer function

function timer () {
  seconds++;

  // formate timer
  let hrs = Math.floor(seconds / 3600);
  let mins = Math.floor((seconds - (hrs * 3600)) / 60);
  let secs = seconds % 60;
  
  if (secs < 10) secs = "0" + secs
  if (mins < 10) mins = "0" + mins
  if (hrs < 10) hrs = "0" + hrs
  
  time_el.innerText = `${hrs}:${mins}:${secs}`;
}

function start () {
  if (interval) {
    return
  }

  interval = setInterval(timer, 1000);
}

function stop () {
  clearInterval(interval);
  interval = null;
}

function reset () {
  stop();
  seconds = 0
  time_el.innerText = `00:00:00`
}

