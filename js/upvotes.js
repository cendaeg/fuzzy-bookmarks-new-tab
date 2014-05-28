$(function() {
	$(".InnerPage > ol").before("<a href='#sort=upvoted' class='sort'>Sort page by most upvoted</a>");
	$(document).on("click", ".sort", function() {
		sort();
		$(".sort").hide();
		$(".InnerPage > ol").before("<a href='#' class='unsort'>Sort page by natural order</a>");
	}).on("click", ".unsort", function() {
		location.href = "http://"+url('hostname')+url('path');
		$(".sort").show();
		$(".unsort").hide();
	});
	if(url("#sort")=="upvoted"){
		sort();
		$(".sort").hide();
		$(".InnerPage > ol").before("<a href='#' class='unsort'>Sort page by natural order</a>");
	}
	function sort() {
	
			console.log();
			var storyWrap = $(".InnerPage ol");
			var children = storyWrap.children(".Story").detach();
			children.sort(function(a, b) {
				return parseInt($(".PointCount", b).text(), 10) - parseInt($(".PointCount", a).text(), 10);
			});
			storyWrap.append(children);
	}
});