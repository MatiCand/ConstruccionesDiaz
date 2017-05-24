(function ($) {
	"use strict";

	// Page Loaded...
	$(document).ready(function () {

		/*==========  Accordion  ==========*/
		$('.panel-heading a').on('click', function() {
			$('.panel-heading').removeClass('active');
			$(this).parents('.panel-heading').addClass('active');
			$('.panel-heading .icon').removeClass('rotate');
			$(this).find('.icon').addClass('rotate');
		});

		/*==========  Responsive Navigation  ==========*/
		$('.main-nav').children().clone().appendTo('.responsive-nav');
		$('.responsive-menu-open').on('click', function(event) {
			event.preventDefault();
			$('body').addClass('no-scroll');
			$('.responsive-menu').addClass('open');
			return false;
		});
		$('.responsive-menu-close').on('click', function(event) {
			event.preventDefault();
			$('body').removeClass('no-scroll');
			$('.responsive-menu').removeClass('open');
			return false;
		});

		/*==========  Clients Slider  ==========*/
		$('#clients-slider').owlCarousel({
			loop: true,
			autoplay: true,
			margin: 18,
			responsive: {
				0: {
					items: 1
				},
				768: {
					items: 3
				},
				1200: {
					items: 5
				}
			}
		});

		/*==========  Portfolio  ==========*/
		var $portfolioContainer = $('#portfolio').imagesLoaded(function() {
			$portfolioContainer.isotope({
				itemSelector: '.item',
				layoutMode: 'masonry',
				percentPosition: true,
				masonry: {
					columnWidth: $portfolioContainer.find('.portfolio-sizer')[0]
				}
			});
			return false;
		});
		$('#portfolio-filters').on('click', 'button', function() {
			$('#portfolio-filters button').removeClass('active');
			$(this).addClass('active');
			var filterValue = $(this).attr('data-filter');
			$portfolioContainer.isotope({filter: filterValue});
		});

		/*==========  Welcome Slider  ==========*/
		$('#welcome-slider').flexslider({
			selector: '.slides > .slide',
			controlNav: 'thumbnails'
		});

		/*==========  Team Slider  ==========*/
		$('#team-slider').flexslider({
			selector: '.slides > .slide',
			controlNav: 'thumbnails'
		});

		/*==========  Testimonial Slider  ==========*/
		$('#testimonial-slider').flexslider({
			selector: '.slides > .slide',
			controlNav: false
		});

		/*==========  Flexslider Thumbnails  ==========*/
		var thumbCount = $('.flex-control-thumbs li').length;
		var thumbWidth = 100 / thumbCount + '%';
		$('.flex-control-thumbs li').css('width', thumbWidth);

	});

	/*==========  Newsletter Form  ==========*/
	var $form = $('#mc-embedded-subscribe-form');
	$form.submit(function() {
		$('#newsletter-error').fadeOut();
		$('#newsletter-success').fadeOut();
		$('#newsletter-loading').fadeOut();
		$('#newsletter-info').fadeOut();
		$('#newsletter-loading').fadeIn();
		if (validateEmail($('#mce-EMAIL').val()) && $('#mce-EMAIL').val().length !== 0) {
			$.ajax({
				type: $form.attr('method'),
				url: $form.attr('action'),
				data: $form.serialize(),
				cache: false,
				dataType: 'json',
				contentType: 'application/json; charset=utf-8',
				error: function(err) {
					$('#newsletter-error').fadeOut();
					$('#newsletter-success').fadeOut();
					$('#newsletter-loading').fadeOut();
					$('#newsletter-info').fadeOut();
					$('#newsletter-error .message').html(err.msg);
					$('#newsletter-error').fadeIn();
				},
				success: function(data) {
					if (data.result !== 'success') {
						$('#newsletter-error').fadeOut();
						$('#newsletter-success').fadeOut();
						$('#newsletter-loading').fadeOut();
						$('#newsletter-info').fadeOut();
						$('#newsletter-info .message').html(data.msg);
						$('#newsletter-info').fadeIn();
					} else {
						$('#newsletter-error').fadeOut();
						$('#newsletter-success').fadeOut();
						$('#newsletter-loading').fadeOut();
						$('#newsletter-info').fadeOut();
						$('#newsletter-success .message').html(data.msg);
						$('#newsletter-success').fadeIn();
					}
				}
			});
		} else {
			$('#newsletter-error').fadeOut();
			$('#newsletter-success').fadeOut();
			$('#newsletter-loading').fadeOut();
			$('#newsletter-info').fadeOut();
			$('#newsletter-error .message').html('Ingresar un mail valido.');
			$('#newsletter-error').fadeIn();
		}
		return false;
	});

	/*==========  Map  ==========*/
	var map;
	function initialize_full_width_map() {
		if ($('.map').length) {
			var myLatLng = new google.maps.LatLng(-34.500365, -58.692365);
			var mapOptions = {
				zoom: 15,
				center: myLatLng,
				scrollwheel: false,
				panControl: false,
				zoomControl: false,
				scaleControl: false,
				mapTypeControl: false,
				streetViewControl: false
			};
			map = new google.maps.Map(document.getElementById('map'), mapOptions);
			var marker = new google.maps.Marker({
				position: myLatLng,
				map: map,
				title: 'Envato',
				icon: './images/marker.png'
			});
		} else {
			return false;
		}
		return false;
	}
	google.maps.event.addDomListener(window, 'load', initialize_full_width_map);

})(jQuery);
