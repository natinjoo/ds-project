// var button1=document.getElementById('btn1');
// button1.onclick=function(){
//     alert('hello')
// }

var button2=document.getElementById('btn2');
button2.onmouseover=function(){
    alert('bye')
}

var button3=document.getElementById('btn3')
button3.onmouseleave=function(){
    alert('bye but cooler')
}



var button=document.getElementById('btn1');

var txt1=document.getElementById('txt1');

button.onclick=function(){
    txt1.style.color="red";
    txt1.style.backgroundColor="black";
    txt1.style.textAlign="center";
    txt1.style.padding="20px";
    txt1.style.fontSize="100px";

  
}
