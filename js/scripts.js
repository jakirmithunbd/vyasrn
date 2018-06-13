(function($){
  "use strict";

  $(".navbar-toggle").click(function() {
	  	$(this).toggleClass('in');
	});


	/*** Sticky header */
	$(window).scroll(function() {
		if ($(window).scrollTop() > 30) {
			$(".header").addClass("sticky");
		} 
		else {
			$(".header").removeClass("sticky");
		}
	});

	
 
})(jQuery);