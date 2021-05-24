//displaying today's date
var currentDay = moment().format("MMM Do YYYY"); 
$('#currentDay').html(currentDay);

//listening for click event on save button
$(document).ready(function() {
    $(".saveBtn").on("click", function() {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        //saving items in local storage
        localStorage.setItem(time, text);
     })

     // checking current time to color code hour blocks
     function timeCheck() {
         var timeNow = moment().hour();

         $(".time-block").each(function () {
             var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

             // check current time against specified time blocks to color code 
            if (timeBlock < timeNow) {
                 $(this).removeClass("future");
                 $(this).removeClass("present");
                 $(this).addClass("past");
             }
            else if (timeBlock === timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("past");
                $(this).addClass("present");
             }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
             }
         })
     }

     $("#hr9 .description").val(localStorage.getItem("hr9"));
     $("#hr10 .description").val(localStorage.getItem("hr10"));
     $("#hr11 .description").val(localStorage.getItem("hr11"));
     $("#hr12 .description").val(localStorage.getItem("hr12"));
     $("#hr1 .description").val(localStorage.getItem("hr1"));
     $("#hr2 .description").val(localStorage.getItem("hr2"));
     $("#hr3 .description").val(localStorage.getItem("hr3"));
     $("#hr4 .description").val(localStorage.getItem("hr4"));
     $("#hr5 .description").val(localStorage.getItem("hr5"));

     timeCheck();

    })