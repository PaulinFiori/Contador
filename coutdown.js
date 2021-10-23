loadEventListeners();

function loadEventListeners() {
	document.addEventListener('DOMContentLoaded', function() { Timer(); });
};

var timeTo = document.getElementById('DataInput').value,
		date,
		now = new Date(),
		newYear = new Date('1.1.2021').getTime(),
		startTimer = '';

function Timer(dates) {
    clearInterval(startTimer);

    if(typeof(dates) == 'undefined'){
		date = new Date().getTime();
	}else {
		date = new Date(dates).getTime();
	}

    console.log(dates);

    function updateTimer(date){
		var now = new Date().getTime();
		var distance = date - now;

		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		document.querySelector('.clock-dia').innerHTML = days;
		document.querySelector('.clock-hora').innerHTML = hours;
		document.querySelector('.clock-minuto').innerHTML = minutes;
		document.querySelector('.clock-segundo').innerHTML = seconds;

		if(now >= date){
			clearInterval(startTimer);
			document.querySelector('.clock-dia').innerHTML = 'D';
			document.querySelector('.clock-hora').innerHTML = 'O';
			document.querySelector('.clock-minuto').innerHTML = 'N';
			document.querySelector('.clock-segundo').innerHTML = 'E';
		}
	}

    startTimer = setInterval(function() { updateTimer(date); }, 1000);
}

function colocaNome(nome) {
    document.querySelector('.Clock-Nome').innerHTML = nome;
}

function chamarContador() {
    document.querySelector('#cronometro').style.display='block';
}

function deschamarContador() {
    document.querySelector('#cronometro').style.display='none';
}