var NOTE = function(type, title, message, iconUrl) {
	var opt = {
		type: type,
		title: title,
		message: message,
		iconUrl: iconUrl
	};
	return opt;
};

var makeNotification = NOTE("basic", "Hello", "this is a message", chrome.runtime.getURL("logo.png"));

var id = chrome.experimental.notification.create("", makeNotification, function() {
	console.log("notification sent");
});