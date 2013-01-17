// Global Variables
var domWidth = $(window).width();
var domHeight = $(window).height();
var browserVersion = $.browser.version;

// Import other JS with Jquery
$.getScript("js/Intro.js");

$(document).ready(function(){
	console.log(domWidth);
	console.log(domHeight);

	var intro = new Intro(domWidth, domHeight);
	
	
})

var browserDetect = function(){
	console.log(browserVersion);
}
