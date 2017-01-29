'use strict';



var blank = " ";


function ClozeCard (text, cloze){
	
	if(!(this instanceof ClozeCard)){
		return new ClozeCard (text, cloze);
	}

	this.text = text;
	this.cloze = cloze;

	//Function that shows text
	this.showText = function(){
		return this.text;
	}

	//Function that shows all results.
	this.showAll = function(){
		return this.cloze + " " + this.text;
	}
}


var brazil = new ClozeCard ("is the capital of Brazil.", "Brasilia");

console.log("Question: " + blank + brazil.showText());	
console.log(brazil.showAll());