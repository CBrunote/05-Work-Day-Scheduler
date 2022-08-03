// Variable/function with moment.js to grab and display the current date to display on the planner
var currentDay = moment().format("MMMM Do, YYYY");
$("#currentDay").text(currentDay);

// function to color code the hours based on past, present, future
function hourColor() {
    // variable to get the current numbered hour of the day
    var currentHour = moment().hour();
    $(".time-block").each(function () {
        var hourRow = parseInt($(this).attr("id").split("hour")[1]);
        // console.log(hourRow);
        if (hourRow < currentHour){
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        } else if (hourRow === currentHour){
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    }
    )
    }

// Calling the color coding function
hourColor();

$(document).ready(function(){
    $(".saveBtn").click(function() {
        var task = $(this).parent().children("textarea").val();
            console.log(task);
        var time = $(this).parent().attr("id");
            console.log(time);
    localStorage.setItem(time, task);
})});

// Variables and function to insert items from local storage back to their proper hour blocks
var text8 = localStorage.getItem("hour8")
$("#hour8").children("textarea").val(text8);

var text9 = localStorage.getItem("hour9")
$("#hour9").children("textarea").val(text9);

var text10 = localStorage.getItem("hour10")
$("#hour10").children("textarea").val(text10);

var text11 = localStorage.getItem("hour11")
$("#hour11").children("textarea").val(text11);

var text12 = localStorage.getItem("hour12")
$("#hour12").children("textarea").val(text12);

var text13 = localStorage.getItem("hour13")
$("#hour13").children("textarea").val(text13);

var text14 = localStorage.getItem("hour14")
$("#hour14").children("textarea").val(text14);

var text15 = localStorage.getItem("hour15")
$("#hour15").children("textarea").val(text15);

var text16 = localStorage.getItem("hour16")
$("#hour16").children("textarea").val(text16);

var text17 = localStorage.getItem("hour17")
$("#hour17").children("textarea").val(text17);
