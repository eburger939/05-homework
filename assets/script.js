//variables for the date
var currentDay = document.querySelector('#currentDay');

//variables for text are
var textArea = document.querySelector('.form-control');
var nine = document.querySelector('#nine');
var ten = document.querySelector('#ten');
var eleven = document.querySelector('#eleven');
var twelve = document.querySelector('#twelve');
var thirteen = document.querySelector('#thirteen');
var fourteen = document.querySelector('#fourteen');
var fifteen = document.querySelector('#fifteen');
var sixteen = document.querySelector('#sixteen');
var seventeen = document.querySelector('#seventeen');



var saveBtn = document.querySelector('.saveBtn');


function displayTime() {
    var currentTime = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    currentDay.text(currentTime);
}
  

setInterval (displayTime, 1000);

saveBtn.addEventListener("click", function() {
}
