var main = function() {
	$('.nav-icon').click(function() {
			console.log('icon clikced');
			$('.nav-icon').toggleClass('turn');
			$('nav ul').toggleClass('close');
			$('nav ul').toggleClass('open');
	});
	// We listen to the resize event
	// window.addEventListener('resize', () => {
	// 	// We execute the same script as before
	// 	let vh = window.innerHeight * 0.01;
	// 	document.documentElement.style.setProperty('--vh', `${vh}px`);
	// });
};

$(document).ready(main);