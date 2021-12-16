

function displayTime() {
    var currentTime = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    currentDay.textContent = currentTime;
}

function timeTracker(){
    var timeNow = moment().hour();
    $(".time-block").each(function (){
    var columnTime = parseInt($(this).attr("id").split("time")[1]);
    console.log(columnTime, timeNow)
    
    if (columnTime > timeNow) {
        $(this).children().eq(1).addClass("future")
    } else if (columnTime < timeNow) {
        $(this).children().eq(1).addClass("past")
    } else {
        $(this).children().eq(1).addClass("present")
    }
})
}

$('.saveBtn').on("click", function() {
    var apptTime = $(this).parent().attr("id")
    var submission = $(this).siblings(".form-control").val()
    localStorage.setItem(apptTime, submission);
    console.log(apptTime);
    console.log(submission);
});


$("#time9 .form-control").val(localStorage.getItem("time9"))
$("#time10 .form-control").val(localStorage.getItem("time10"))
$("#time11 .form-control").val(localStorage.getItem("time11"))
$("#time12 .form-control").val(localStorage.getItem("time12"))
$("#time13 .form-control").val(localStorage.getItem("time13"))
$("#time14 .form-control").val(localStorage.getItem("time14"))
$("#time15 .form-control").val(localStorage.getItem("time15"))
$("#time16 .form-control").val(localStorage.getItem("time16"))
$("#time17 .form-control").val(localStorage.getItem("time17"))




setInterval (displayTime, 1000);
timeTracker();