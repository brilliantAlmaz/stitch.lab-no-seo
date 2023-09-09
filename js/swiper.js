const swiper = new Swiper('.swiper', {

	pagination: {
		el: '.swiper-pagination',
	},
	slidesPerView: 2,
	slidesPerGroup: 1,

	spaceBetween: 20,


});

if (window.innerWidth <= 511)
	swiper.params.slidesPerView = 1;
else {
	swiper.params.slidesPerView = 2;
}

window.addEventListener('resize', function () {
	if (window.innerWidth <= 511)
		swiper.params.slidesPerView = 1;
	else {
		swiper.params.slidesPerView = 2;
	}
})


