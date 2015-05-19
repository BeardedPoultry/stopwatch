(function() {
	'use strict';
	var startTime;
	var $hours = document.querySelector('.elapsed-time .hours');
	var $minutes = document.querySelector('.elapsed-time .minutes');
	var $seconds = document.querySelector('.elapsed-time .seconds');
	
	function startClicked(event){
		startTime = new Date();
		console.log(startTime);
		window.setInterval(logElapsedTime, 1000);
	}
	function logElapsedTime() {
		var currentTime = new Date();
		var interval = currentTime - startTime;
		var elapsed = millisecondsToInterval(interval);
		displayInterval(elapsed);
	}
	
	function displayInterval(interval) {
		$seconds.textcontent = interval[2];
	}
	function formatInterval(interval) {
		var formatted = [];
		formatted[0] = ("0" + interval[0]);
	}
	
	function millisecondsToInterval(ms) {
		var msLeft = ms;
		
		var msInHour = 3600000;
		var msInMin = 60000;
		var msInSec = 1000;
		
		var hours = Math.floor(msLeft / msInHour);
		msLeft = msLeft % msInHour;
		
		var minutes = Math.floor(msLeft / msInMin);
		msLeft = msLeft % msInMin;
		var seconds = Math.floor(msLeft / msInSec);
		msLeft = msLeft % msInSec;
		
		return [hours, minutes, seconds];
	}
	document.querySelector('.start').addEventListener('click', startClicked);
})();