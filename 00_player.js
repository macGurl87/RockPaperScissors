//Load All Event Listeners

loadEventListeners();

function loadEventListeners() {
	choice.addEventListener('blur', pleaseChoose);
}

function pleaseChoose(e) {
	const input = document.getElementById('choice').value;

	//Alert if BLANK validation
	if (input === '') {
		// console.log('No input');
		alert('Type in your selection');
	} else if (input == 1) {
		showRock('You picked THE ROCK!!!');
	} else if (input == 2) {
		showPaper('You picked PAPER');
	} else if (input == 3) {
		showScissors('You picked SCISSORS');
	} else {
		alert('Please enter a number');

		//where should this be nested between?
		e.preventDefault();
	}
}

//ROCK FUNCTION
function showRock(message) {
	//Create a div
	const outputDiv = document.createElement('div');

	//Get elements
	const card = document.querySelector('.body');
	const heading = document.querySelector('.heading');

	//Add class
	outputDiv.className = 'alert alert-info';

	//Create text node and append to div
	outputDiv.appendChild(document.createTextNode(message));

	//Insert error above heading
	card.insertBefore(outputDiv, heading);

	setTimeout(clearPopUp, 4000);

	//Clear PopUP Message
	function clearPopUp() {
		document.querySelector('.alert').remove();
	}
}

//PAPER FUNCTION
function showPaper(message) {
	//Create a div
	const outputDiv = document.createElement('div');

	//Get elements
	const card = document.querySelector('.body');
	const heading = document.querySelector('.heading');

	//Add class
	outputDiv.className = 'alert alert-warning';

	//Create text node and append to div
	outputDiv.appendChild(document.createTextNode(message)); //want to insert something into the DOM above the heading & card div(create variables(uptop)

	//Insert error above heading
	card.insertBefore(outputDiv, heading);

	setTimeout(clearPopUp, 4000);

	//Clear PopUP Message
	function clearPopUp() {
		document.querySelector('.alert').remove();
	}
}

//SCISSORS FUNCTION
function showScissors(message) {
	//Create a div
	const outputDiv = document.createElement('div');

	//Get elements
	const card = document.querySelector('.body');
	const heading = document.querySelector('.heading');

	//Add class
	outputDiv.className = 'alert alert-success';

	//Create text node and append to div
	outputDiv.appendChild(document.createTextNode(message)); //want to insert something into the DOM above the heading & card div(create variables(uptop)

	//Insert error above heading
	card.insertBefore(outputDiv, heading);

	setTimeout(clearPopUp, 4000);

	//Clear PopUP Message
	function clearPopUp() {
		document.querySelector('.alert').remove();
	}
}

//should i do more form validation such as red error message when you put invalid in index.html code under the form class to present my statement of" Pick a number 1-3. Choose 1 for The Rock, 2 for LetterDestroyer and 3 for Johnny Scissors Hand
//AND should i use reg expresssions to make sure the numbers stay inbound of 1-3. Display error if outside of range?

//Use alert windw (for now) to display choice validation  question (Are you sure in your selection...how to make into template literal ` to verify selection using a variable (this.whatever...) --> `Are you sure in your selection of ${this.choice} ?`); what will be my id to grab this from html from user's input of choice
//try catch if needed
