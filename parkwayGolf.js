/* global $ */

function pgaBoard() {

	var leaders = document.getElementById('board');
	var displayBoard = document.getElementById('pgaBoard');

	if (leaders.style.display == 'block') {
		leaders.style.display = 'none';
		displayBoard.innerHTML = 'PGA Tour';
	}
	else {
		leaders.style.display = 'block';
		displayBoard.innerHTML = 'Hide';
	}
}

function WebBoard() {

	var leaders = document.getElementById('board');
	var displayBoard = document.getElementById('WebBoard');

	if (leaders.style.display == 'block') {
		leaders.style.display = 'none';
		displayBoard.innerHTML = 'Web.com Tour';
	}
	else {
		leaders.style.display = 'block';
		displayBoard.innerHTML = 'Hide';
	}
}

function openSwingMenu() {
	
	var displayMenu = document.getElementById('swingMenu');
	
	if (document.getElementById('proSwingMenu').style.display === 'block') {
		document.getElementById('bottompic').style.marginLeft = '0px';
		document.getElementById('proSwingMenu').style.display = 'none';
		displayMenu.innerHTML = 'Swing Menu';
	}
	else {
		document.getElementById('proSwingMenu').style.display = 'block';
		document.getElementById('bottompic').style.marginLeft = '160px';
		displayMenu.innerHTML = 'Hide';
	}
}


function toggleMap() {
	
	var displayMap = document.getElementById('mapButton');
	
	if (document.getElementById('map').style.display == 'block') {
		document.getElementById('map').style.display = 'none';
		displayMap.innerHTML = 'Map';
	} 
	else {
		document.getElementById('map').style.display = 'block';
		displayMap.innerHTML = 'Hide';
	}
}

function toggleApp() {
	
	var displayApp = document.getElementById('displayApp');
	
	if (document.getElementById('app').style.display == 'block') {
		document.getElementById('app').style.display = 'none';
		displayApp.innerHTML = 'RhodyGolf';
	} 
	else {
		document.getElementById('app').style.display = 'block';
		displayApp.innerHTML = 'Hide';
	}
}

function toggleSwing() {
	
	if (document.getElementById('swing').style.display == 'block') {
		document.getElementById('swing').style.display = 'none';
	} 
	else {
		document.getElementById('swing').style.display = 'block'
	}
}

function analyzeBob() {
	
	if (document.getElementById('bobSwingText').style.display == 'block') {
		document.getElementById('bobSwingText').style.display = 'none';
	}
	else {
		document.getElementById('bobSwingText').style.display = 'block';
	}
}

function clear() {
	document.getElementById("calculate").reset();
}






