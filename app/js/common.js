$(function() {

	// Скролинг по якорям
	$('.anchor').bind("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top-0 // отступ от меню
		}, 500);
	e.preventDefault();
	});

	// Меню при скроле
	$(window).scroll(function(){
		var topline = $(window).scrollTop();
		if ( topline > 650 ) {
			$(".posf").addClass('show');
		} else {
			$(".posf").removeClass('show');
		};
	});

	// Клик по гамбургеру на моб версии
	$('.mob-mnu__humb').click(function() {
		$('.mob-mnu-list').toggleClass('show');
	});
	$('.mob-mnu__li').click(function() {
		$('.mob-mnu-list').removeClass('show');
	});

	// Формирование полей и заголовков формы в мод окне
	$('.open').click(function(){
		var ttl = $(this).data('title');
		var subTtl = $(this).data('subtitle');
		var text = $(this).data('text');
		var btn = $(this).data('btn');
		var goal = $(this).data('goal');
		var subject = $(this).data('subject');
		$('.ttl').html(ttl);
		$('.subTtl').html(subTtl);
		$('.text').html(text);
		$('.btn').html(btn);
		$('.goal').val(goal);
		$('.subject').val(subject);
	});

	// Отправка формы
	$('form').submit(function() {
		var data = $(this).serialize();
		var goalId = $(this).find('input[ name="goal"]').val();
		data += '&ajax-request=true';
		$.ajax({
			type: 'POST',
			url: 'mail.php',
			dataType: 'json',
			data: data,
			success: (function() {
				$.fancybox.close();
				$.fancybox.open('<div class="thn"><h3>Заявка отправлена!</h3><p>С Вами свяжутся в ближайшее время.</p></div>');
				//gtag('event','submit',{'event_category':'submit','event_action':goalId});
				//fbq('track', 'Lead');
			})()
		});
		return false;
	});

	// Инит фансибокса
	$('.fancybox, .open').fancybox({
		margin: 0,
		padding: 0,
		touch: false
	});

	//Якорь наверх
	$("[href='#top']").click(function(e){
		$('html, body').stop().animate({
			scrollTop: $('#top').offset().top
		}, 300);
		e.preventDefault();
	});

	// Функция для анимации
	$(".scroll").each(function () {
		var block = $(this);
		$(window).scroll(function() {
			if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
				var top = block.offset().top-400;
			} else {
				var top = block.offset().top+400;
			}
			var bottom = block.height()+top;
			top = top - $(window).height();
			var scroll_top = $(this).scrollTop();
			if ((scroll_top > top) && (scroll_top < bottom)) {
				if (!block.hasClass("animated")) {
					block.addClass("animated");
					block.trigger('animatedIn');
				}
			}
		});
	});

	// Инит слайдера Slick
	$('.head-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		autoplaySpeed: 2000,
		autoplay: true
	});

	$('.slider1').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		centerMode: true,
		infinite: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					centerMode: false,
					infinite: true
				}
			}
		]
	});

	$('.style-select.first').click(function() {
		$(this).addClass('active');
		$('.style-select.second').removeClass('active');
		$('.tab.first').addClass('active');
		$('.tab.second').removeClass('active');
		$('html, body').stop().animate({
			scrollTop: $('#tab1').offset().top-0 // отступ от меню
		}, 300);
	});

	$('.style-select.second').click(function() {
		$(this).addClass('active');
		$('.style-select.first').removeClass('active');
		$('.tab.second').addClass('active');
		$('.tab.first').removeClass('active');
		$('html, body').stop().animate({
			scrollTop: $('#tab2').offset().top-0 // отступ от меню
		}, 300);
		$('.slider2').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: false,
			arrows: true,
			centerMode: true,
			infinite: false,
			responsive: [
				{
					breakpoint: 768,
					settings: {
						centerMode: false,
						infinite: true
					}
				}
			]
		});
	});

	/*$(window).on('load', function() {
		$('.head-slider').slick('slickPlay');
		setTimeout(function() {
				$('.head-slider').slick('slickPause');
			}, 1500);
		setInterval(function() {
			$('.head-slider').slick('slickPlay');
			setTimeout(function() {
				$('.head-slider').slick('slickPause');
			}, 1500);	
		}, 6000);
	});*/

	$('.trainer-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		fade: true
	});

});
