var start = document.getElementById("start");
var stop = document.getElementById("stop");
var reset = document.getElementById("reset");
var seconds = 00;
var millsecond = 00;
var minutes = 0;
var timer;
var plusZsecond = "";
var plusZmillsecond = "";
var plusZminutes = "";
function count() {
  millsecond++;
  if (millsecond >= 99) {
    millsecond = 00;
    seconds++;
  }
  if (seconds >= 59) {
    seconds = 00;
    minutes++;
  }
  if (seconds < 10) {
    plusZsecond = "0";
  } else {
    plusZsecond = "";
  }
  if (millsecond < 10) {
    plusZmillsecond = "0";
  } else {
    plusZmillsecond = "";
  }
  if (minutes < 10) {
    plusZminutes = "0";
  } else {
    plusZminutes = "";
  }
  document.getElementById("time").innerHTML =
    plusZminutes +
    minutes +
    ":" +
    plusZsecond +
    seconds +
    ":" +
    plusZmillsecond +
    millsecond;
}
start.addEventListener("click", function () {
  clearInterval(timer);
  timer = setInterval(count, 10);
});
stop.addEventListener("click", function () {
  clearInterval(timer);
});
reset.addEventListener("click", function () {
  seconds = 0;
  millsecond = 0;
  minutes = 0;
  document.getElementById("time").innerHTML =
    "0" + minutes + ":" + "0" + seconds + ":" + "0" + millsecond;
  clearInterval(timer);
});
var go = document.getElementById('beck').addEventListener('click', function(){
  window.location.href = ('../index.html')
})