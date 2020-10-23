// hamburger
window.addEventListener('DOMContentLoaded', () => {
	const menu = document.querySelector('.main-menu__menu'),
		menuItem = document.querySelectorAll('.main-menu__item'),
		hamburger = document.querySelector('.hamburger');

	hamburger.addEventListener('click', () => {
		hamburger.classList.toggle('hamburger_active');
		menu.classList.toggle('main-menu_active');
	});

	menuItem.forEach(item => {
		item.addEventListener('click', () => {
			hamburger.classList.toggle('hamburger_active');
			menu.classList.toggle('main-menu_active');
		});
	});
});

// sick slider
$(document).ready(function () {
	$('.carousel').slick({
		infinite: true,
		autoplay: true,
		autoplaySpeed: 6000,
		centerMode: true,
		centerPadding: '10px',
		slidesToShow: 3,
		speed: 300,
		prevArrow: '<button type="button" class="slick-prev"><img src="./logistics/icons/prev.png"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="./logistics/icons/next.png"></button>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1
				}
			},
			{
				breakpoint: 767,
				settings: {
					arrows: false,
					slidesToShow: 1
				}
			},
			{
				breakpoint: 575,
				settings: {
					arrows: false,
					slidesToShow: 1
				}
			}
		]
	});
});
