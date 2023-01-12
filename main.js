let para = document.getElementById("stime")
let start1 = document.getElementById("start")
let stop11 = document.getElementById("stop")
let reset1 = document.getElementById("reset")
let hour = document.getElementById("hour")
let min = document.getElementById("min")
let sec = document.getElementById("sec")
let milisecond = document.getElementById("milisec")
let set;
let set2;
let hours = 00;
let minute = 00;
let second = 00;
let milisec = 00;
function show() {
    set = setInterval(display, 1000)
    set2 = setInterval(display2, 10)
}
function stop1() {
    clearInterval(set)
    clearInterval(set2);
}
function reset() {
    clearInterval(set)
    clearInterval(set2)
    hours = 00;
    minute = 00;
    milisec = 00;
    second = 00;
    hour.innerHTML = hours
    min.innerHTML = minute
    sec.innerHTML = second
    milisecond.innerHTML = milisec;
}
function display() {
    second++
    if (second < 10) {
        sec.innerHTML = "0" + second;

    }
    else {
        sec.innerHTML = second;
    }
    if (second >= 59) {
        second = 00;
        minute++;
    }
    if (minute < 10) {
        min.innerHTML = "0" + minute;
    }
    if (minute >= 59) {
        minute = 00;
        hours++;
        min.innerHTML = minute;
    }
    if (hours < 10)
        hour.innerHTML = "0" + hours;
    else
        hour.innerHTML = hours;
}
function display2() {
    milisec++
    if (milisec > 60) milisec = 0;
    milisecond.innerHTML = milisec;
}
start1.addEventListener("click", show);
stop11.addEventListener("click", stop1);
reset1.addEventListener("click", reset);