
	$(document).ready(function(){
		// jQuery Sticky Menu
		if (!!$('#navbar-top').offset()) {
			var stickyTop = $('#navbar-top').offset().top;
			$(window).scroll(function() {
			var windowTop = $(window).scrollTop();
			if (stickyTop < windowTop){
				$('#navbar-top').css({ position: 'fixed', top: 0, display: 'block', width: '100%', border: 'none', background: '#fff', 'z-index': '999999', });
				$('.navbar-brand').css({background: 'url(./img/stick_logo.png) no-repeat', width: '253px', 'margin-top': '15px' });
				$('.navbar-brand img').css({display: 'none',width: '100%', });
				$('.navbar-default .navbar-nav > li > a').css({color: '#000', });
				$('.search_right .fa').css({color: '#000', });
			}
			else {
				$('#navbar-top').css({position:'inherit', 'border-top': '0px solid #FFBE00',background: 'transparent',});
				$('.navbar-brand').css({background: 'inherit', 'margin-top': 'inherit'});
				$('.navbar-brand img').css({display: 'block', });
				$('.navbar-default .navbar-nav > li > a').css({color: '#E1E1E1', });
				$('.search_right .fa').css({color: '#E1E1E1', });
			}
		});
		}	
	  // ADD SLIDEDOWN ANIMATION TO DROPDOWN //
	  $('.dropdown').on('show.bs.dropdown', function(e){
		$(this).find('.dropdown-menu').first().stop(true, true).slideDown();
	  });

	  // ADD SLIDEUP ANIMATION TO DROPDOWN //
	  $('.dropdown').on('hide.bs.dropdown', function(e){
		$(this).find('.dropdown-menu').first().stop(true, true).slideUp();
	  });	
	
	 $("#arif_slider").owlCarousel({
	 
	navigation : false, // Show next and prev buttons
	slideSpeed : 300,
	paginationSpeed : 400,
	singleItem:true,
	autoPlay: true,
	 
	// "singleItem:true" is a shortcut for:
	// items : 1,
	// itemsDesktop : false,
	// itemsDesktopSmall : false,
	// itemsTablet: false,
	// itemsMobile : false
	 
	});	
	
	 $("#owl-unser").owlCarousel({
	 
	navigation : false, // Show next and prev buttons
	slideSpeed : 300,
	paginationSpeed : 400,
	singleItem:true,
	 autoPlay: true
	// "singleItem:true" is a shortcut for:
	// items : 1,
	// itemsDesktop : false,
	// itemsDesktopSmall : false,
	// itemsTablet: false,
	// itemsMobile : false
	 
	});	
	jQuery('.mobile_arif nav').meanmenu({
		meanScreenWidth: "768",
		meanNavPush: ".mobile_arif"
	});


$("html").niceScroll({
  cursorcolor:"#1ABC9C",
  cursorwidth:"12px",
  cursorborder:"none",
  cursorborderradius:"none",
  autohidemode:"false",	
  zindex :99999,
  scrollspeed: 80,
  cursorminheight: 200,		  			  
 });



	
});


