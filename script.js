$(document).ready(function(){
	function slideInImages(event){
		var scrollTop = $(window).scrollTop();
		var scrollBottom = scrollTop+$(window).height();
		var images = $(".image-inset");
		images.each(function(){
			var image = $(this);
			var imageTop = image.offset().top;
			var imageBottom = imageTop+image.height();
			if (scrollBottom>imageTop && scrollTop<imageBottom){
				window.setTimeout(function(){image.addClass("show");}, 100);
			}
		});
	}
	$(window).on("scroll", slideInImages);
	slideInImages();
});