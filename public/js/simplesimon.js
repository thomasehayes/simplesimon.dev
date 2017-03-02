$(document).ready(function(){
"use strict";


$(".square").click(function(click){
	animateClick($(this));
});

function animateClick(element) {
	$(element).removeClass("down");
	$(element).addClass("up");
	setTimeout(function(){
		$(element).removeClass("up");
		$(element).addClass("down");
	}, 100);
}

var colors = ["red", "yellow", "green", "blue"];

function getRandomColor(){
	var randomNumber = Math.floor(Math.random()* 4);
	console.log(colors[randomNumber]);
}

function animateRandomSquare() {
	var squareToAnimate = getRandomColor();
	animate(squareToAnimate);
}

getRandomColor();

});