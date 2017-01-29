'use strict';

//Constructor Function
function BasicCard (front, back){

	if(!(this instanceof BasicCard)){
		return new BasicCard (front, back);
	}

	this.front = front;
	this.back = back;

	//Function that returns the front of the card
	this.showFront = function (){
		return this.front;
	}

	//Function that return the back of the card
	this.showBack = function(){
		return this.back;
	}
}

var austin = new BasicCard("What is the capital of Texas?", "Austin");

console.log(austin.showFront());
console.log(austin.showBack());



