function showRate() {

	var rateValue = document.getElementById('rate');
	var displayRate = document.getElementById('displayRate');

	if (rateValue.style.display == 'block') {
		rateValue.style.display = 'none';
		displayRate.innerHTML = 'Growth Rate';
	}
	else {
		rateValue.style.display = 'block';
		displayRate.innerHTML = 'Hide';
	}
}

function rateCalculator() {
	
	// var contribution = parseInt(document.getElementById("contribution").value);
	var initialValue = parseInt(document.getElementById("initialValue").value);
	var finalValue = parseInt(document.getElementById("finalValue").value);
	var time = parseInt(document.getElementById("time").value);
	var rate = (((finalValue / initialValue) **  (1 / time) - 1) * 100).toFixed(2);
	
	if(!isNaN(rate)) {
	
		document.getElementById("growthRate").innerHTML = "Your investment growth rate is " + rate + " %.";
	}
}


function showCagr() {

	var cagrValue = document.getElementById('cagr');
	var displayCagr = document.getElementById('displayCagr');

	if (cagrValue.style.display == 'block') {
		cagrValue.style.display = 'none';
		displayCagr.innerHTML = 'Future Value';
	}
	else {
		cagrValue.style.display = 'block';
		displayCagr.innerHTML = 'Hide';
	}
}

function cagrCalculator() {
	
	var contribution = parseInt(document.getElementById("contribution").value);
	var presentValue = parseInt(document.getElementById("presentValue").value);
	var interestRate = parseInt(document.getElementById("interestRate").value);
	var time = parseInt(document.getElementById("time").value);
	var cagr = ((presentValue * (1 + interestRate * 0.01) ** time) + contribution * ((1 + interestRate * 0.01) ** time - 1) / (interestRate*0.01)).toFixed();
	
	if(!isNaN(cagr)) {
	
		document.getElementById("futureValue").innerHTML = "Your investment will be worth " + cagr + " dollars.";
	}
}



function toggleClouds() {

	var myCalc = document.getElementById('clouds');
	var displayClouds = document.getElementById('displayClouds');

	if (myCalc.style.display == 'block') {
		myCalc.style.display = 'none';
		displayClouds.innerHTML = 'Cloud Base';
	}
	else {
		myCalc.style.display = 'block';
		displayClouds.innerHTML = 'Hide';
	}
}

function baseHeightCalculator() {

	var Temperature = parseInt(document.getElementById("temp").value);
	var Dewpoint = parseInt(document.getElementById("dewpt").value);
	var baseHeight = (Temperature - Dewpoint) * 220;

	if (!isNaN(baseHeight)) {

		document.getElementById("answer").innerHTML = "Your cloud base is approximately " + baseHeight + " feet.";

	}

}

function showCalc() {

	var theCalc = document.getElementById('calculate');
	var displayCalc = document.getElementById('displayCalc');

	if (theCalc.style.display == 'block') {
		theCalc.style.display = 'none';
		displayCalc.innerHTML = 'Calculator';
	}
	else {
		theCalc.style.display = 'block';
		displayCalc.innerHTML = 'Hide';
	}
}


function toggleNews() {

	var myNews = document.getElementById('frame1');
	var newsButton = document.getElementById('displayNews');

	if (myNews.style.display == 'block') {
		myNews.style.display = 'none';
		newsButton.innerHTML = 'News';
	}
	else {
		myNews.style.display = 'block';
		newsButton.innerHTML = 'Hide';
	}
}

function toggleSatellite() {

	var mySat = document.getElementById('satellite');
	var showSat = document.getElementById('satFrame');

	if (mySat.style.display == 'block') {
		mySat.style.display = 'none';
		showSat.innerHTML = 'Satellite';
	}
	else {
		mySat.style.display = 'block';
		showSat.innerHTML = 'Hide';
	}
}


function leaderBoard() {

	var leaders = document.getElementById('board');
	var displayBoard = document.getElementById('displayLeaderboard');

	if (leaders.style.display == 'block') {
		leaders.style.display = 'none';
		displayBoard.innerHTML = 'Leaderboard';
	}
	else {
		leaders.style.display = 'block';
		displayBoard.innerHTML = 'Hide';
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

function toggleBlog() {
	
	var displayBlog = document.getElementById('displayBlog');
	
	if (document.getElementById('frame1').style.display == 'block') {
		document.getElementById('frame1').style.display = 'none';
		displayBlog.innerHTML = 'RhodyWeather';
	} 
	else {
		document.getElementById('frame1').style.display = 'block';
		displayBlog.innerHTML = 'Hide';
	}
}






