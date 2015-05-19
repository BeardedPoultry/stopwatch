(function() {
	'use strict';
	var startTime;
	
	function startClicked(event){
		startTime = new Date();
		console.log(startTime);
		window.setInterval(logElapsedTime, 1000);
	}
	function logElapsedTime() {
		var currentTime = new Date();
		console.log(currentTime - startTime);
	}
	document.querySelector('.start').addEventListener('click', startClicked);
})();