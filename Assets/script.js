$(".saveBtn").on("click", function(){
    var userText = $(this).siblings("textarea").val();
    var time = $(this).siblings("textarea").attr("id");
    localStorage.setItem(time, userText);
})

$("#9").val(localStorage.getItem("9"));

for (i = 9; i < 18; i++) {
    $("#" + i).val(localStorage.getItem(i));
}