$(function() {
    $(".Comment").each(function() {
        $(this).prepend("<a class='CommentLink' href='javascript:void();' data-url='"+location.href+"#"+$(this).attr('id')+"'>\u2605</a>");
    });
    $(".CommentLink").on('click', function() {
        prompt("Hit your regular copy command to copy this comment url:", $(this).data('url'));
    });
});