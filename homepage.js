$(document).ready(function(){
	var image = $('.homepage-top-image');
	var number = Math.ceil(Math.random()*17);
	if (number < 10) {
		number = '0' + number;
	}
	image.attr('src', 'img/homepage/main-'.concat(number).concat('.jpg'));
	image.on('load', function(){image.addClass('show')});
});
