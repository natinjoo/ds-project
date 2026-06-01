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
 changeimage();

var onesecond = 1000;
setTimeout(showCurrentTime, onesecond);

function changeimage() {
    var time= new Date().getHours();
    console.log(time);

    var image="img/ds_clock.png";
    var imagehtml=document.getElementById("timeimage");

    if (time==wakeuptime){
        image="img/morning.gif";
        console.log("mornin");
    }else if (time==dstime){
        image="img/class.gif";
    }
    else if (time==sleeptime){
        image="img/night.gif";
    }
}


imageHTML.src=image;
console.log(imageHTML.src);


function updateclock    () {
    var wakeuptime=document.getElementById("wakeuptimeselect");  
    wakeuptime= wakeuptime.value;

    var dstime=document.getElementById("dstimeselect");  
    dstime= dstime.value;

    var sleeptime=document.getElementById("sleeptimeselect");  
    sleeptime= sleeptime.value;
}

var savebutton=document.getElementById("savebutton");