//variables for the date
var currentDay = document.querySelector('#currentDay');

//variables for text are

var nine = document.querySelector('#nine');
var ten = document.querySelector('#ten');
var eleven = document.querySelector('#eleven');
var twelve = document.querySelector('#twelve');
var thirteen = document.querySelector('#thirteen');
var fourteen = document.querySelector('#fourteen');
var fifteen = document.querySelector('#fifteen');
var sixteen = document.querySelector('#sixteen');
var seventeen = document.querySelector('#seventeen');

var input;
var time;
var bookTime = moment().hour();

var saveBtn = document.querySelector('.saveBtn');


function displayTime() {
    var currentTime = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    currentDay.textContent = currentTime;
}
    function display() {
        var date9 = JSON.parse(window.localStorage.getItem("nine"))
        nine.value = date9;

        var date10 = JSON.parse(window.localStorage.getItem(input))
        ten.value = date10;

        var date11 = JSON.parse(window.localStorage.getItem(input))
        eleven.value = date11;

        var date12 = JSON.parse(window.localStorage.getItem(input))
        twelve.value = date12;

        var date13 = JSON.parse(window.localStorage.getItem(input))
        thirteen.value = date13;

        var date14 = JSON.parse(window.localStorage.getItem(input))
        fourteen.value = date14;

        var date15 = JSON.parse(window.localStorage.getItem(input))
        fifteen.value = date15;

        var date16 = JSON.parse(window.localStorage.getItem(input))
        sixteen.value = date16;

        var date17 = JSON.parse(window.localStorage.getItem(input))
        seventeen.value = date17;
        }

          
function changeBackgroundColor(){
    $('.form-control').each(function() {
        var apptTime = parseInt($(this).attr("id"));
        bookTime = parseInt(bookTime);
        if (bookTime > apptTime) {
            $(this).addClass("past")
        } else if (bookTime < apptTime) {
            $(this).addClass("future")
        } else {
            $(this).addClass("present")
        }
    }
    )}

    

setInterval (displayTime, 1000);

saveBtn.addEventListener("click", function() {
    // var textArea = document.querySelector('.form-control');
        input = $(this).siblings('.form-control').val()
        time = $(this).siblings('.input-group-prepend').text()
        localStorage.setItem(time, JSON.stringify(input));
        changeBackgroundColor();
        display();
        
})
    