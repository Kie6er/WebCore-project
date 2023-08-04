let slider;

export function mobileSwiper() {
	mobileSlider();
	initializedBrandSwiper();

	window.addEventListener('resize', () => {
		mobileSlider();
		initializedBrandSwiper();
	});
}

const allSwiper = document.querySelectorAll('[data-swiper]');

function mobileSlider() {
	allSwiper.forEach((el) => {
		let data = el.dataset.swiper;

		if (window.outerWidth <= 575) {
			addClasses(el, data);
		} else {
			removeClasses(el, data);
		}
	});
}

function removeClasses(element, d) {
	if (d == 'swiper') {
		element.classList.remove('swiper');
	} else if (d == 'swiper-wrapper') {
		element.classList.remove('swiper-wrapper');
	} else if (d == 'swiper-slide') {
		element.classList.remove('swiper-slide');
	} else if (d == 'swiper-pagination') {
		element.classList.remove('swiper-pagination');
	}
}

function addClasses(element, d) {
	if (d == 'swiper') {
		element.classList.add('swiper');
	} else if (d == 'swiper-wrapper') {
		element.classList.add('swiper-wrapper');
	} else if (d == 'swiper-slide') {
		element.classList.add('swiper-slide');
	} else if (d == 'swiper-pagination') {
		element.classList.add('swiper-pagination');
	}
}

function initializedBrandSwiper() {
	const brandsSwiper = document.querySelector('.brands-show');

	if (window.outerWidth <= 575 && brandsSwiper.dataset.mobile == 'false') {
		slider = new Swiper(brandsSwiper, {
			slidesPerView: "auto",
			spaceBetween: 10,
			pagination: {
				el: '.brands-wrapper__pagination',
				clickable: true
			},
		});
		brandsSwiper.dataset.mobile = 'true';
	}

	if (window.outerWidth > 575) {
		if (brandsSwiper.classList.contains('swiper-initialized')) {
			slider.destroy()
		}
		brandsSwiper.dataset.mobile = 'false';
	}
}