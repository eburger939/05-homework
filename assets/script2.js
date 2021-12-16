
var saveBtn = document.querySelector('.saveBtn');

function displayTime() {
    var currentTime = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    currentDay.textContent = currentTime;
}

// function timeTracker(){
    // var timeNow = moment().hours();
    // $(".time-block").each(function (){
    // var columnTime = parseInt($(this).attr('id').split("")[1]);
    // console.log(columnTime)

    // if (timeNow > columnTime) {
        // $(this).addClass("past")
    // } else if (timeNow < columnTime) {
        // $(this).addClass("future")
    // } else {
        // $(this).addClass("present")
    // }
// });
// }


function addAppt(event) {
    var apptTime = $(this).attr("id")
    var submission = $(this).parent().children().siblings(".form-control").val()
    localStorage.setItem(apptTime, submission);
    console.log(apptTime);
    console.log(submission);
}

$("#nine").val(localStorage.getItem('09'))
$("#ten").val(localStorage.getItem('10'))
$("#eleven").val(localStorage.getItem('11'))
$("#twelve").val(localStorage.getItem('12'))
$("#thirteen").val(localStorage.getItem('13'))
$("#fourteen").val(localStorage.getItem('14'))
$("#fifteen").val(localStorage.getItem('15'))
$("#sixteen").val(localStorage.getItem('16'))
$("#seventeen").val(localStorage.getItem('17'))


saveBtn.addEventListener("click", addAppt)


setInterval (displayTime, 1000);
