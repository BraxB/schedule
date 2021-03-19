
// clears localStorage and refreshes page, resetting all blocks
$(".clearBtn").on("click", function(){
    localStorage.clear();
    window.location.reload();
})

// set the local date and time in the jumbotron
var currentDay = moment().format("dddd, MMMM Do YYYY");
$('#currentDay').text(currentDay);

// save buttons will grab the text in the sibling textarea and save it to local storage
$(".saveBtn").on("click", function(){
    var userText = $(this).siblings("textarea").val();
    var time = $(this).siblings("textarea").attr("id");
    localStorage.setItem(time, userText);
})

// loop that sets the value of each block to what is in localstorage
for (i = 9; i < 18; i++) {
    $("#" + i).val(localStorage.getItem(i));
}

//Create a for loop that colors blocks conditionally by time
for (i = 9; i < 18; i++) {
    var currentTime = moment().format("H");
    if (i < currentTime) {
        $("#" + i).addClass("past");
    }
    else if (i > currentTime) {
        $("#" + i).addClass("future");
    }
    else {
        $("#" + i).addClass("present");
    }
}