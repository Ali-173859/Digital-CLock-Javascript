

 setInterval(function(){
    var hours = document.getElementById("hours")
var minutes = document.getElementById("minutes")
var seconds = document.getElementById("seconds")
var ampm = document.getElementById("ampm")


var hh = document.getElementById("hh")
var mm = document.getElementById("mm")
var ss = document.getElementById("ss")

var hr_dot = document.querySelector(".hr_dot");
var min_dot = document.querySelector(".min_dot");
var sec_dot = document.querySelector(".ec_dot");

var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();

    var am = h >= 12  ? "PM" : "AM";



    var currentDate = new Date();
    var currentHour = currentDate.getHours();

    hours.innerText = currentDate.getHours();
    minutes.innerText = currentDate.getMinutes();
    seconds.innerText = currentDate.getSeconds();

h = (h < 10) ? "0" + h : h;
m = (m < 10) ? "0" + m : m;
s = (s < 10) ? "0" + s : s;

hours.innerHTML = h;
minutes.innerHTML = m;
seconds.innerHTML = s;

}, 1000);



