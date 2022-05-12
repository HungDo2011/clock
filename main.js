var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);
var partyTime;

function showClock() {
    var clock = $('#clock')
    var lunch = 12

    var curenTime = new Date()
    var hours = curenTime.getHours()
    var minutes = curenTime.getMinutes()
    var seconds = curenTime.getSeconds()

    var meridian = 'AM'

    if (hours > lunch) {
        meridian = 'PM'
    }

    if (hours >= 12) {
        hours = hours - 12
    }

    if (minutes < 10) {
        minutes = '0' + minutes
    }

    if (seconds < 10) {
        seconds = '0' + seconds
    }

    const timeNow = hours + ':' + minutes + ':' + seconds + '-' + meridian + '!';
    
    clock.innerText = timeNow
}


function updateClock() {
    
    showClock()
}

setInterval(updateClock, 1000)

var partyButton = document.getElementById("partyTimeButton");

var partyEvent = function()
{
    if (partyTime < 0) 
    {
        partyTime = new Date().getHours();
        partyTimeButton.innerText = "Party Over!";
        partyTimeButton.style.backgroundColor = "#0A8DAB";
    }
    else
    {
        partyTime = -1;
        partyTimeButton.innerText = "Party Time!";
        partyTimeButton.style.backgroundColor = "#222";
    }
};

partyButton.addEventListener("click", partyEvent);
partyEvent(); 