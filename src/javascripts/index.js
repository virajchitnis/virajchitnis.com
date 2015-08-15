$(document).ready(function() {
	$(window).scrollLeft($(window).width());
});

$(window).resize(function() {
	$(window).scrollLeft($(window).width());
});

function scrollToResume() {
	animateNavBar();
	$('html, body').animate({scrollLeft: 0}, 750);
}

function scrollToBlog() {
	$('html, body').animate({scrollLeft: ($(window).width() * 2)}, 750);
}

function scrollToAbout() {
	$('html, body').animate({scrollTop: $(window).height()}, 750);
}

function animateNavBar() {
	$('ul.nav-bar').addClass('nav-bar-animate-resume');
}