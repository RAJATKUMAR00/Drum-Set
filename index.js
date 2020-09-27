var numofDrumbutton = document.querySelectorAll(".drum").length;
for (var i = 0; i<numofDrumbutton; i++) {
	document.querySelectorAll(".drum")[i].addEventListener("click", function(){
		
		var buttonInnerHTML = this.innerHTML;

		makeSound(buttonInnerHTML);

		buttonAnimation(buttonInnerHTML);	
	});
}
document.addEventListener("keypress", function(event) {
	makeSound(event.key);
	buttonAnimation(event.key);
})
function makeSound(key) {

	switch(key) {

		case "a":
			var tom1 = new Audio("Sounds/tom-1.mp3");
			tom1.play();
			break;

		 case "s":
			 var tom2 = new Audio("Sounds/tom-2.mp3");
			 tom2.play();
			 break;
				
		 case "d":
			 var tom3 = new Audio("Sounds/tom-3.mp3");
			 tom3.play();
			 break;

		 case "f":
			 var tom4 = new Audio("Sounds/tom-1.mp3");
			 tom4.play();
			 break;

		 case "j":
			 var snare = new Audio("Sounds/snare.mp3");
			 snare.play();
			 break;
							
		 case "k":
			 var crash = new Audio("Sounds/crash.mp3");
			 crash.play();
			 break;

		 case "l":
			 var kick = new Audio("Sounds/kick-bass.mp3");
			 kick.play();
			 break;

		   default: console.log(buttonInnerHTML);	
	}

}
function buttonAnimation(currentkey) {
	var activebutton = document.querySelector("." + currentkey);
	activebutton.classList.add("pressed");

	setTimeout(function(){
		activebutton.classList.remove("pressed");
	}, 100);
}


