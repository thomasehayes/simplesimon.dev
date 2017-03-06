// $(document).ready(function(){
"use strict";
var simonSequence = [];
var counter = 0;

//====================================================
//		User click Function to light up squares
//====================================================

	function animateClick(element) {
		$(element).removeClass("down");
		$(element).addClass("up");
		setTimeout(function(){
			$(element).removeClass("up");
			$(element).addClass("down");
		}, 300);
	}


	$(".square").click(function(click){
		animateClick($(this));

			if($(this).attr("data") == simonSequence[counter]){
				
				if(counter == (simonSequence.length -1)) {
					counter = 0;
					simonMove();
				} else {
					counter++;
				}
			} else {
				simonSequence = [];
				counter = 0;
				console.log("you have lost")
				reset();
			}
		
	});
//====================================================
//		How to Start game
//====================================================
 function startGame (){
 		simonMove();
 }
//====================================================
//		How to Reset game
//====================================================

	function reset(){
		simonSequence = [];
		counter = 0;
	}
//====================================================
//		How to generate random box colors
//====================================================
	function getRandomColor(){
		var colors = ["red", "yellow", "green", "blue"];
		var randomNumber = Math.floor(Math.random()* 4);
		return (colors[randomNumber]);
	}

//====================================================
//		Simon's Move to Adding to Array
//====================================================
	function simonMove(){
		var square = getRandomColor();
		simonSequence.push(square);
		playSimonSequence(simonSequence);
	}

//====================================================
//		How to generate Simon's Sequence
//====================================================
	
	function playSimonSequence(simonSequence) {
		var i = 0;
		var intervalId = setInterval(function(){
			switch (simonSequence[i]) {
				case "red": 
					animateClick($(".red"))
					break;
				case "yellow": 
					animateClick($(".yellow"))
					break;
				case "green": 
					animateClick($(".green"))
					break;
				case "blue": 
					animateClick($(".blue"))
					break;										
			}
			if(i < simonSequence.length){
				i++;
			} else {
				clearInterval(intervalId);
			}
		}, 500);
	}

//====================================================
//		How to Start Game with button
//====================================================
$("#start").click(function(){
	startGame();
})

//====================================================
//		Need to add Round Counter
//====================================================






// });
