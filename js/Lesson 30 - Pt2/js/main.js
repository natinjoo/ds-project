var wakeuptime;
var dstime;
var sleeptime;
var noon = 12;


function showCurrentTime() {
    var clock = document.getElementById('clock');
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
}


if (hours >= 12) {
    meridian = "PM";
}

var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian;
clock.innerText = clockTime;
//need to run this function every second

function changeimage() {
    var time= new Date().getHours();
    console.log(time);

    var image="img/ds_clock.png";
    var imagehtml=document.getElementById("timeimage");
    if (time==wakeuptime){
        image="img/morning.png";
        console.log("mornin");
    }
    else if (time==dstime){
        image="img/class.png";
        console.log("class");
    }
    else if (time==sleeptime){
        image="img/night.png";
        console.log("night");
    }
}


