/*=============================================
POSICIÓN FIJA DEL NAV
=============================================*/
$(document).ready(function(){
	let altura = $('.menu').offset().top;

	$(window).on('scroll', function(){

		if ($(window).scrollTop() > altura ) {

			$('.menu').addClass('fixed-top')

		}else{
			$('.menu').removeClass('fixed-top')
		}

	});
});
/*=============================================

=============================================*/