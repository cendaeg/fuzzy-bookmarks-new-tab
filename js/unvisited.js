$(function() {
	$(".StoryUrl").click(function(){
		localStorage.setItem($(this).html(),$(this).attr('href'));
	});
	var modifier = {};
	$('body').keydown(function(e) {
		if(e.keyCode == 16) {
			modifier.shift = true;
		} else if(e.keyCode == 17){
			modifier.ctrl = true;
		} else if(e.keyCode == 91){
			modifier.cmd = true;
		}
		if(modifier!==undefined && (modifier.cmd || modifier.ctrl) && modifier.shift && e.keyCode == 79) {
			if(confirm("Are you sure you want to open all unvisited links?")) {
				$('.StoryUrl').each(function(){
					if(!localStorage.getItem($(this).html())){
						$(this)[0].click();
					}
				});
			}
		}
	}).keyup(function() {
		modifier.shift = false;
		modifier.ctrl = false;
		modifier.cmd = false;
	});
});
