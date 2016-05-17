$(function() {


	$(document).ready(function () {
     //initialize swiper when document ready
     var mySwiper = new Swiper ('.swiper-container', {
       // Optional parameters
       direction: 'horizontal',
       loop: true,
			 breakpoints: {
    // when window width is <= 320px
    320: {
      slidesPerView: 1,
      spaceBetweenSlides: 10
    },
    // when window width is <= 480px
    480: {
      slidesPerView: 2,
      spaceBetweenSlides: 20
    },
    // when window width is <= 640px
    640: {
      slidesPerView: 3,
      spaceBetweenSlides: 30
    }
  }
     
   });

$(".alert").click(function () {
	alert("ddwd");
});



	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
