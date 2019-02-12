$(document).ready(function(){
	var image = $('.homepage-top-image');
	var number = Math.ceil(Math.random()*14);
	if (number < 10) {
		number = '0' + number;
	}
	image.attr('src', 'img/homepage/main-'.concat(number).concat('.jpg'));
});