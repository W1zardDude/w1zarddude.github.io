var comingdate = new Date("Oct 5, 2019 00:00:00");

var d = document.getElementById('d');
var h = document.getElementById("h");
var m = document.getElementById("m");
var s = document.getElementById("s");


var x = setInterval(function(){
    var now = new Date();
    var des = comingdate.getTime() -  now.getTime();
    var days = Math.floor(des/(1000 * 60 * 60 * 24));
    var hours = Math.floor(des%(1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var mins = Math.floor(des%(1000 * 60 * 60) / (1000 * 60));
    var secs = Math.floor(des%(1000 * 60) / 1000);

    d.innerHTML = days;
    h.innerHTML = hours;
    m.innerHTML = mins;
    s.innerHTML = secs;

    if(des <= 0) clearInterval(x);
}, 1000)
var b = document.getElementsByClassName("show");
var a = document.getElementsByClassName("anim1");
function fun1(){
   b[0].style.display = "flex";
   a[0].style.display = 'block';
}
function fun2(){
    b[0].style.display = "none";
    a[0].style.display = 'none';

 }