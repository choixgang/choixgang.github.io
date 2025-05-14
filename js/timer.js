const dateString = "2025/03/22 13:00:00";

let days;
let hours;
let minutes;
let sec;

const $counter = document.querySelector(".count");
const $day = document.getElementById("timer-days");
const $hour = document.getElementById("timer-hours");
const $minute = document.getElementById("timer-minute");
const $second = document.getElementById("timer-seconds");


const setZero = numbers => {
  if (numbers.toString().length < 2) {
    return "0" + numbers.toString();
  }
  return numbers;
};

function millisecondToDate(ms) {
  days = setZero(Math.floor(ms / (24 * 60 * 60 * 1000)));
  let daysms = ms % (24 * 60 * 60 * 1000);
  hours = setZero(Math.floor(daysms / (60 * 60 * 1000)));
  let hoursms = ms % (60 * 60 * 1000);
  minutes = setZero(Math.floor(hoursms / (60 * 1000)));
  let minutesms = ms % (60 * 1000);
  sec = setZero(Math.floor(minutesms / 1000));
}
setTimes();

function setTimes() {
  let now = new Date();
  let finishDate = new Date(dateString).getTime() + 9 * 60 * 60 * 1000;
  let today = now.getTime() + 9 * 60 * 60 * 1000;
  let diffDate = today - finishDate;
  millisecondToDate(diffDate);
}

function setTimerElement() {
  $day.innerHTML = days;
  $hour.innerHTML = hours;
  $minute.innerHTML = minutes;
  $second.innerHTML = sec;
}


let isMain = true;
setTimes();

const counter = ($counter, max) => {
        setTimes();
        setTimerElement();
};

setInterval(onLoadEvent, 1000);



function onLoadEvent(){
    setTimeout(() => counter($day, days), 500);
    setTimeout(() => counter($hour, hours), 500);
    setTimeout(() => counter($minute, minutes), 500);
    setTimeout(() => counter($second, sec), 500);
};
