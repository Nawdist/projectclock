function numberedTime() {
    var time = new Date();
    var minisecond = time.getMilliseconds();
    var seconds = time.getSeconds();
    var minutes = time.getMinutes();
    var hours = time.getHours();
    var days = time.getDate();
    var month = time.getMonth() + 1;
    var year = time.getFullYear();
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    if (seconds < 10) {
        seconds = "0" + seconds
    }
    if (hours < 10) {
        hours = "0" + hours
    }
    if (minisecond < 100 || minisecond < 10) {
        minisecond = "0" + minisecond
    }
    document.getElementById("time").innerHTML = hours + ":" + minutes + ":" + seconds + ":" + minisecond;
    document.getElementById("date").innerHTML = days + "/" + month + "/" + year
}
function labeledTime() {
    var timer = new Date();
    //timer.setDate();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    var days = ["Sunday", "Monday", "Tuseday", "Wednesday", "Thrusday", "Friday", "Saturday"]
    var currentMonth = timer.getMonth();
    var currentDate = timer.getDate().toString();
    var currentDay = timer.getDay();
    var the = " the "
    if (currentDate < 10) {
        currentDate = " " + currentDate;
        the = " the"
    }
    if (currentDate.indexOf("1") == 1  && currentDate.indexOf("1") != 0) {
        currentDate = currentDate + "st";
    } else if (currentDate.indexOf("3") == 1 && currentDate.indexOf("1") != 0) {
        currentDate = currentDate + "rd";
    } else if (currentDate.indexOf("2") == 1  && currentDate.indexOf("1") != 0) {
        currentDate = currentDate + "nd"
    } else if (currentDate == '22') {
        currentDate = currentDate + "nd";
    } else {
        currentDate = currentDate + "th";
    }
    


    document.getElementById("label").innerHTML = "It is " + days[currentDay] + "," + the + currentDate + " of " + months[currentMonth];
}
setInterval(numberedTime, 1);
setInterval(labeledTime, 1);
var go = document.getElementById('back').addEventListener('click', function(){
    window.location.href = ('../index.html')
})