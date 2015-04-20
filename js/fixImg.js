$(".Comment img").each(function() {
  var url = $(this).attr("src");
  if(url.indexOf("https://camo.layervault.com")>-1) {
    var urlParams = url.split("=");
    var index = urlParams.indexOf("&url");
    $(this).attr("src", decodeURIComponent(urlParams[index+1]));
  }
});
