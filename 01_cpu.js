//Load All Event Listeners
loadEventListeners();

function loadEventListeners() {
	choice.addEventListener('blur', rPS);
}

//COMPUTER'S Choice & WINNER FUNCTION
function rPS(e) {
	//FOR LOOP...ADD HERE
	const input = document.getElementById('choice').value;

	// if (input === '') {
	// 	document.getElementById('form').style.display = 'none';
	// }

	if (input === '') {
		choiceOne.remove();
		choiceTwo.remove();
		choiceThree.remove();
	}

	let num = Math.floor(Math.random() * 3 + 1);
	if (num === 1) {
		choiceOne('Computer picked THE ROCK');
	} else if (num === 2) {
		choiceTwo('Computer picked PAPER');
	} else if (num === 3) {
		choiceThree('Computer picked SCISSORS');
	} else {
		console.log('No selection found');
	}

	if (input === num) {
		winnerBoth('You tied');
	} else if (input == 1 && num == 2) {
		rockLost('Sorry Rock, you lost');
	} else if (input == 1 && num == 3) {
		rockWin('You win Rock, LAY the smack down!');
		rockImg();
	} else if (input == 2 && num == 1) {
		paperWin('Congrats DoeBoy! You won.');
		paperImg();
	} else if (input == 2 && num == 3) {
		paperLost('Sorry PaperBoy, no luck here!');
	} else if (input == 3 && num == 1) {
		scissorsLost('Mama, there"s a GATOR in the house :( Sorry, you lost');
	} else if (input == 3 && num == 2) {
		scissorsWin('Did you feel the Force on that one. You WON!');
		scissorsImg();
	}

	e.preventDefault();
}

function choiceOne(message) {
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

	//Differenece between setTimeout and setInterval...might NEED to change this
	setTimeout(clearPopUp, 4000);

	//Clear PopUP Message
	function clearPopUp() {
		document.querySelector('.alert').remove();
	}
}

function choiceTwo(message) {
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

function choiceThree(message) {
	//Create a div
	const outputDiv = document.createElement('div');

	//Get elements
	const card = document.querySelector('.body');
	const heading = document.querySelector('.heading');

	//Add class
	outputDiv.className = 'alert alert-success';

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

//Outcome and ANNOUCEMENT OF WINNER
function winnerBoth(message) {
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

function rockLost(message) {
	//Create a div
	const outputDiv = document.createElement('div');

	//Get elements
	const card = document.querySelector('.body');
	const heading = document.querySelector('.heading');

	//Add class
	outputDiv.className = 'alert alert-danger';

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

function rockWin(message) {
	//Create a div
	const outputDiv = document.createElement('div');

	//Get elements
	const card = document.querySelector('.body');
	const heading = document.querySelector('.heading');

	//Add class
	outputDiv.className = 'alert alert-danger';

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

// Displaying Rock GIF
function rockImg() {
	const img = document.createElement('img');
	// img.src = '/img/rock.gif';
	img.src = 'img/rock_img.gif';
	// img.class = "img-fluid";
	const block = document.getElementById('output-div');

	block.appendChild(img);
	block.style.marginTop = '125px';

	//Hide everything below img (Listen for BLUR on function rockImg)
	document.getElementById('lucky').addEventListener('blur', rockImg);
	document.getElementById('form').style.display = 'none';
	setTimeout(clearPopUp, 4000);

	//clearImg
	function clearPopUp() {
		document.getElementById('output-div').remove();
	}
}

function paperWin(message) {
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

//Displaying Paper GIF
function paperImg() {
	const img = document.createElement('img');
	img.src = '/img/homer_simpson_papercut.gif';
	const block = document.getElementById('output-div');

	block.appendChild(img);
	block.style.marginTop = '125px';

	setTimeout(clearPopUp, 8000);

	//Hide everything below img (Listen for BLUR on function paperImg)
	document.getElementById('lucky').addEventListener('blur', rockImg);
	document.getElementById('form').style.display = 'none';

	//clearImg
	function clearPopUp() {
		document.querySelector('#output-div').remove();
	}
}

function paperLost(message) {
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

function scissorsLost(message) {
	//Create a div
	const outputDiv = document.createElement('div');

	//Get elements
	const card = document.querySelector('.body');
	const heading = document.querySelector('.heading');

	//Add class
	outputDiv.className = 'alert alert-danger';

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

function scissorsWin(message) {
	//Create a div
	const outputDiv = document.createElement('div');

	//Get elements
	const card = document.querySelector('.body');
	const heading = document.querySelector('.heading');

	//Add class
	outputDiv.className = 'alert alert-danger';

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

//Displaying SCISSORS GIF

function scissorsImg() {
	//NEED TO GRAB THIS IS REGULAR CSS TO MANIPULATE MOBILE RESPONSIVENESS
	//Create a div
	// const outputDiv = document.createElement('div');
	// //Add class
	// outputDiv.className = 'resize-img';

	const img = document.createElement('img');
	img.src = '/img/big_bang.gif';
	const block = document.getElementById('output-div');

	block.appendChild(img);
	block.style.marginTop = '125px';

	//Hide everything below img (Listen for BLUR on function scissorsImg)
	document.getElementById('lucky').addEventListener('blur', rockImg);
	document.getElementById('form').style.display = 'none';

	setTimeout(clearPopUp, 8000);

	//clearImg
	function clearPopUp() {
		document.querySelector('#output-div').remove();
	}
}

{
	/* <div style="width:100%;height:0;padding-bottom:57%;position:relative;"><iframe src="https://giphy.com/embed/qTq6HU4Msku54V4Wqr" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/macysparade-macys-parade-thanksgiving-day-2020-qTq6HU4Msku54V4Wqr">via GIPHY</a></p> */
}

{
	/* <iframe src="https://giphy.com/embed/qTq6HU4Msku54V4Wqr" width="480" height="274" style="" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/macysparade-macys-parade-thanksgiving-day-2020-qTq6HU4Msku54V4Wqr">via GIPHY</a></p> */
}
