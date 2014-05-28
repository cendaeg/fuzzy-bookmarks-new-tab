function editorClear() {
    $("#ProfilePicture .Cell").each(function() {
        $(this).css("background-color", "rgb(255,255,255)");
    });
}
var tools = document.createElement("div"),
    clear = document.createElement("a");

$(clear).attr("href", "#");
$(clear).text("Clear");

$(clear).on('click', function() {
    editorClear();
});

$("#ProfilePicture").prepend(clear);

console.log($("ProfilePicture").data("acceptable-colors"));