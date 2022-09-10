var swiper = new Swiper('.swiper-container', {
			effect: 'coverflow',
			grabCursor: true,
			centeredSlides: true,
			slidesPerView: 3,//we can change the slide here instead of auto
			coverflowEffect: {
				rotate: 0,
				stretch: -20,
				depth: 80,
				modifier: 3,
				slideShadows: true,
				slideToShow: 5,
			},
			loop: true,
			autoplay: true,
			// autoplaySpeed: 100,
		});