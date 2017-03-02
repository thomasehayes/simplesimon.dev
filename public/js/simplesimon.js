"use strict";

var colors = ["red", "yellow", "green", "blue"];

function color(){
	var randomNumber = Math.floor(Math.random()*4);
	console.log(colors[randomNumber]);
}
color();

$(".square").click(function(click){
	console.log(click)
	animate($(this));
});

function animate(element) {
	$(element).removeClass("down");
	$(element).addClass("up");
	setTimeout(function(){
		$(element).removeClass("up");
		$(element).addClass("down");
	}, 100);
}