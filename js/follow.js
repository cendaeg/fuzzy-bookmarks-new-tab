function updateStories() {
	$(".followedStories").remove();
	$("#Navigation").append("<div class='followedStories'>Followed Stories<br /><div></div></div>");
	var followedStories = JSON.parse(localStorage.getItem('followed-posts')) || [];
	for(i=0;i<followedStories.length;i++){
		$(".followedStories div").append("<a href='#' class='FollowRemove'>\u2716</a><a href='"+followedStories[i].url+"' class='FollowedLink'>"+followedStories[i].title+"</a><hr />");
	}
}
$(function(){
	$(".InnerPage h1").after("<span class='followStory' style='cursor:pointer;'>+Follow</span>");
	$(document).on('click', '.followStory', function() {
		var currentFollows = JSON.parse(localStorage.getItem('followed-posts'));
		if(currentFollows===null) {
			currentFollows = [];
		}
		currentFollows.push({url:location.href,title:document.title});
		localStorage.setItem('followed-posts', JSON.stringify(currentFollows));
		updateStories();
	});
	updateStories();
	$(document).on('click', ".FollowRemove", function() {
		var currentFollows = JSON.parse(localStorage.getItem('followed-posts'));
		var RemoveStory = $(this).next(".FollowedLink").text();
		for(i=0;i<currentFollows.length;i++) {
			if(currentFollows[i].title == RemoveStory) {
				currentFollows.splice(i, 1);
			}
		}
		localStorage.setItem('followed-posts', JSON.stringify(currentFollows));
		updateStories();
	});
});
