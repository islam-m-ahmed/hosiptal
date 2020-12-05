$(window).on('load', function() {

    // Nav bar (Scroll)

    $(window) .on('scroll' , function () { 

        if ( $(window).scrollTop() > 60 ) {

            $('.navbar') .addClass('fixed-top');

        } else {

            $('.navbar') .removeClass('fixed-top');

        }

    });



    });


// watch
    
    var h = document.getElementById("h"),
    m = document.getElementById("m"),
    s = document.getElementById("s"),
    t = document.getElementById("t"),
    type = "AM";
myTime();
function myTime(){
var Time = new Date();
hours = Time.getHours(),
minutes = Time.getMinutes(),
seconds = Time.getSeconds();

if(hours > 12){
type = "PM";
hours -= 12;
}
if(hours < 10){
hours = '0' + hours;
}
if(minutes < 10){
minutes = '0' + minutes;
}
if(seconds < 10){
seconds = '0' + seconds;
}
h.innerText =hours;
m.innerText =minutes;
s.innerText =seconds;
t.innerText =type;
setTimeout(myTime, 1000);
}