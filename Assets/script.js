$(".clearBtn").on("click", function(){
    localStorage.clear();
    window.location.reload();
})

// set the local date and time in the jumbotron
var currentDay = moment().format("dddd, MMMM Do YYYY");
$('#currentDay').text(currentDay);

$(".saveBtn").on("click", function(){
    var userText = $(this).siblings("textarea").val();
    var time = $(this).siblings("textarea").attr("id");
    localStorage.setItem(time, userText);
})

for (i = 9; i < 18; i++) {
    $("#" + i).val(localStorage.getItem(i));
}