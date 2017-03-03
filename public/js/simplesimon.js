// $(document).ready(function(){
"use strict";
var colors = ["red", "yellow", "green", "blue"];
var computerSequence = [];
var iterator = 0;
var userInput = [];
var start = "off";

//====================================================
//		Start/Restart Button, need to connect to game
//====================================================
$("#start").click(function(){
	computerSequence == [];
	userInput ==[];
	$("#start").hide();
	$("#restart").show();
});
$("#restart").click(function(){
	computerSequence == [];
	userInput ==[];
	$("#restart").hide();
	$("#start").show();
});

//====================================================
//		User click Function to light up squares
//====================================================
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

//====================================================
//		How to generate random colors
//====================================================
function getRandomColor(){
	var randomNumber = Math.floor(Math.random()* 4);
	return colors[randomNumber];
}

//====================================================
//		This adds getRandomColor to end of computerSequence array
//====================================================
function addNewSquare() {
	computerSequence.push(getRandomColor());
	return computerSequence;
}

//====================================================
//	This doesn't work, but supposed to light up squares
//====================================================
function animateRandomSquare() {
	var squareToAnimate = computerSequence[iterator];
	animate(squareToAnimate);
	$(element).removeClass("down");
	$(element).addClass("up");
	setTimeout(function(){
		$(element).removeClass("up");
		$(element).addClass("down");
	}, 1000);

}

getRandomColor();

// });