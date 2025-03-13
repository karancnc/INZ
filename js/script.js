var $ = jQuery.noConflict();

$(window).load(function(){
    setTimeout(function(){

    });

// on Load go to the section
    var _has =  window.location.hash.slice(1);
    console.log(_has);
    if(_has){
    jQuery( 'html, body' ).animate({
          scrollTop: jQuery('.'+_has).offset().top - 50
      },1000);        
    }  

});

// on click go to the section
jQuery( '' ).on( 'click', function(){
    var href = jQuery(this).prop("hash").substr(1);
    console.log(href);
    jQuery( 'html, body' ).animate({
        scrollTop: jQuery('.'+href).offset().top - 50
    },1000);
  });
  

jQuery(window).scroll(function(){
    var sticky = jQuery('header'),
        scroll = jQuery(window).scrollTop();
  
    if (scroll >= 50) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
  });
  
$(document).ready(function(){
    if (!("ontouchstart" in document.documentElement)) {
		document.documentElement.className += " no-touch";
	} else {
		document.documentElement.className += " touch";
	}
  // Fix header
    if($('html').hasClass('no-touch')){
        const lenis = new Lenis({
        autoRaf: true,
        });
    }

    // partnership_blobal_brand end
// if(jQuery('').length > 0){
//     var recent_news = jQuery(".owl-carousel");
//     recent_news.owlCarousel({
//       items: 2,
//       margin:32,
//       loop: false,
//       nav: true, 
//       navText: [
//         '<img src="images/nav_right.svg" alt="Previous">',
//         '<img src="images/nav_right.svg" alt="Next">'
//       ],
//           responsive : {
//             0 : {
//               margin:0,
//               items: 1,
//             },
//         }
//     });
//   }

  jQuery("#checkbox").on("change", function () {
    if (jQuery(this).is(":checked")) {
      jQuery(".checkbox").addClass("checked");
    } else {
      jQuery(".checkbox").removeClass("checked");
    }
  });

  // convenient_contact start
  jQuery( '.convenient_contact h3' ).on( 'click', function(){
    jQuery(this).toggleClass('open');
    jQuery(this).next().slideToggle();
   
  });
  // convenient_contact end


});


// image Show animate
// (function($) {
//     $.fn.visible = function(partial) {
//         var $t            = $(this),
//             $w            = $(window),
//             viewTop       = $w.scrollTop(),
//             viewBottom    = viewTop + $w.height(),
//             top           = $t.offset().top,
//             bottom        = top + $t.height(),
//             compareTop    = partial === true ? bottom : top,
//             compareBottom = partial === true ? top : bottom;
  
//         return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
//     };
//   })(jQuery);
  
//   $(window).scroll(function() {
//     var win = $(window);
//     var allMods = $("");
    
//     allMods.each(function(i, el) {
//         var el = $(el);
//         if (el.visible(true)) {
//             setTimeout(function(){
//                 el.addClass("come-in");
//             },i*50);
//         } 
//     });
//   });

