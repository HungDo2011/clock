var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

function showClock() {
    var clock = $('#clock')
    var calendar = $('#calendar')
    var curenTime = new Date()

    var day = curenTime.getDay()
    var month = curenTime.getUTCMonth()
    var year = curenTime.getFullYear()
    var hours = curenTime.getHours()
    var minutes = curenTime.getMinutes()
    var seconds = curenTime.getSeconds()
    
    if (day < 10) {
        day = '0' + day
    }

    if (month < 10) {
        month = '0' + month
    }

    if (minutes < 10) {
        minutes = '0' + minutes
    }

    if (seconds < 10) {
        seconds = '0' + seconds
    }


    const timeNow = hours + ':' + minutes + ':' + seconds + '!';
    const toDay = day + '-' + month + '-' + year;

    clock.innerText = timeNow

    calendar.innerText = toDay
}


function updateClock() {
    
    showClock()
}

setInterval(updateClock, 1000)
