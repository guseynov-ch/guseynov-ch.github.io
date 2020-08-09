 $(document).ready(function(){

	/*===============================
		 Shop page
	==================================*/

	/*===== Product View Mode Change =====*/
	var viewItemClick = $(".product-view-mode li"),
			productWrapper = $(".shop-page-products-wrapper .products-wrapper");

	viewItemClick.each(function (index, elem) {
			var element = $(elem),
					viewStyle = element.data('viewmode');

			viewItemClick.on('click', function () {
					var viewMode = $(this).data('viewmode');
					productWrapper.removeClass(viewStyle).addClass(viewMode);
					viewItemClick.removeClass('active');
					$(this).addClass('active')
			});
	});

	/*=============================
		Mfp Modal Active JS
	==============================*/
	// $(".modalActive").magnificPopup({
	// 		type: 'inline',
	// 		midClick: true,
	// 		mainClass: 'veeraModal',
	// 		preloader: false
	// });

	/*=============================
		Nice Select Js
	==============================*/
	$('select').niceSelect();

	/*=============================
		Price Range Slider JS
	==============================*/

	var rangeSlider = $(".price-range"),
			amount = $("#amount"),
			minPrice = rangeSlider.data('min'),
			maxPrice = rangeSlider.data('max');
	rangeSlider.slider({
			range: true,
			min: minPrice,
			max: maxPrice,
			values: [minPrice, maxPrice],
			slide: function (event, ui) {
					amount.val( ui.values[0] + " р - " + ui.values[1] + " р");
			}
	});
	amount.val( rangeSlider.slider("values", 0) +
			" р - " + rangeSlider.slider("values", 1) + " р" );

	/*=============================
		Product Quantity
	==============================*/
	var proQty = $(".pro-qty");
	proQty.append('<a href="#" class="inc qty-btn">+</a>');
	proQty.append('<a href="#" class= "dec qty-btn">-</a>');
	$('.qty-btn').on('click', function (e) {
			e.preventDefault();
			var $button = $(this);
			var oldValue = $button.parent().find('input').val();
			if ($button.hasClass('inc')) {
					var newVal = parseFloat(oldValue) + 1;
			} else {
					// Don't allow decrementing below zero
					if (oldValue > 0) {
							var newVal = parseFloat(oldValue) - 1;
					} else {
							newVal = 0;
					}
			}
			$button.parent().find('input').val(newVal);
	});

	/*==================================
			Single Product Zoom
	===================================*/
	$('.product-thumb-large-view .product-thumb-item').zoom();

	/*==================================
			Single Product Thumbnail JS
	===================================*/
	$('.product-thumb-carousel').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: '.product-thumbnail-nav, .vertical-tab-nav'
	});

	// Horizontal Nav Style
	$('.product-thumbnail-nav').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			asNavFor: '.product-thumb-carousel',
			dots: false,
			arrows: false,
			centerMode: true,
			centerPadding: 0,
			variableWidth: false,
			focusOnSelect: true
	});

	// Vertical Nav Style
	$('.vertical-tab-nav').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			asNavFor: '.product-thumb-carousel',
			dots: false,
			arrows: false,
			focusOnSelect: true,
			vertical: true
	});

	/*=============================
		Checkout Page Checkbox
	==============================*/
	$("#create_pwd").on("change", function () {
			$(".account-create").slideToggle("100");
	});

	$("#ship_to_different").on("change", function () {
			$(".ship-to-different").slideToggle("100");
	});

	/*=============================
		Payment Method Accordion
	==============================*/
	$('input[name="paymentmethod"]').on('click', function () {

			var $value = $(this).attr('value');

			$('.payment-method-details').slideUp();
			$('[data-method="' + $value + '"]').slideDown();
	});


	 /* Search
  -------------------------------------------------------*/
  $('.search-trigger').on('click',function(e){
    e.preventDefault();
    $('.search-wrap').animate({opacity: 'toggle'},500);
    $('.nav-search, #search-close').addClass("open");
    $('.search-wrap .form-control').focus();

  });

  $('.search-close').on('click',function(e){
    e.preventDefault();
    $('.search-wrap').animate({opacity: 'toggle'},500);
    $('.nav-search, #search-close').removeClass("open");

  });

  function closeSearch(){
    $('.search-wrap').fadeOut(200);
    $('.nav-search, #search-close').removeClass("open");
  }

  $(document.body).on('click',function(e) {
    closeSearch();
  });

  $(".search-wrap, .search-trigger").on('click',function(e) {
    e.stopPropagation();
  });

	/*=============================
		Tabs
	==============================*/
	function createCookie(name,value,days) {
		if (days) {
		  var date = new Date();
		  date.setTime(date.getTime()+(days*24*60*60*1000));
		  var expires = "; expires="+date.toGMTString();
		}
		else var expires = "";
		document.cookie = name+"="+value+expires+"; path=/";
	  }
	  function readCookie(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
		  var c = ca[i];
		  while (c.charAt(0)==' ') c = c.substring(1,c.length);
		  if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
	  }
	  function eraseCookie(name) {
		createCookie(name,"",-1);
	  }	
	 
	  $('ul.tabs__caption').each(function(i) {
		var cookie = readCookie('tabCookie' + i);
		if (cookie) {
		  $(this).find('li').removeClass('tabs__btn_active').eq(cookie).addClass('tabs__btn_active')
		  .closest('div.tabs').find('div.tabs__content').removeClass('active').eq(cookie).addClass('active');
		}
	  });
	 
	  $('ul.tabs__caption').on('click', 'li:not(.tabs__btn_active)', function() {
		$(this)
		.addClass('tabs__btn_active').siblings().removeClass('tabs__btn_active')
		.closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
		var ulIndex = $('ul.tabs__caption').index($(this).parents('ul.tabs__caption'));
		eraseCookie('tabCookie' + ulIndex);
		createCookie('tabCookie' + ulIndex, $(this).index(), 365);
	  });

});

