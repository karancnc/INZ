var $ = jQuery.noConflict();

$(window).load(function(){
    setTimeout(function(){

    });

// on Load go to the section
//     var _has =  window.location.hash.slice(1);
//     console.log(_has);
//     if(_has){
//     jQuery( 'html, body' ).animate({
//           scrollTop: jQuery('.'+_has).offset().top - 50
//       },1000);        
//     }  

// });

// on click go to the section
// jQuery( '' ).on( 'click', function(){
//     var href = jQuery(this).prop("hash").substr(1);
//     console.log(href);
//     jQuery( 'html, body' ).animate({
//         scrollTop: jQuery('.'+href).offset().top - 50
//     },1000);
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

  jQuery("#checkbox").on("change", function () {
    if (jQuery(this).is(":checked")) {
      jQuery(".checkbox").addClass("checked");
    } else {
      jQuery(".checkbox").removeClass("checked");
    }
  });

  // convenient_contact start
  jQuery( '.main .convenient_contact h3' ).on( 'click', function(){
    jQuery(this).toggleClass('open');
    jQuery(this).next().slideToggle();
   
  });
  // convenient_contact end

  // organization_events_slider
 

  if(jQuery(window).width() < 1400 && jQuery(window).width() > 1279){
        $(".organization_events_slider .img svg clipPath path").attr("d", "M 254 33.5 A 33.5 33.5 0 0 1 287.5 0 H 660 A 110 100 0 0 1 750 100 V 216 A 100 100 0 0 1 650 300 H 550 a 33 33 0 0 0 -33 33 a 33 33 0 0 1 -33 33 H 100 A 100 100 0 0 1 0 292 V 167 A 100 100 0 0 1 100 67 H 220.5 A 33.5 33.5 0 0 0 254 33.5 Z");
  } 
  if(jQuery(window).width() < 1279 && jQuery(window).width() > 767){
    $(".organization_events_slider .img svg clipPath path").attr("d", "M 254 33.5 A 33.5 33.5 0 0 1 287.5 0 H 450 A 100 100 0 0 1 530 70 V 140 A 100 80 0 0 1 460 209 H 340 a 33 33 0 0 0 -33 33 a 33 33 0 0 1 -33 33 H 100 A 110 100 0 0 1 0 170 V 167 A 100 100 0 0 1 100 68 H 220.5 A 33.5 33.5 0 0 0 254 33.5 Z");
  } 
  
  if(jQuery('.organization_events_slider').length > 0){
    setTimeout(function(){
      $(".organization_events_slider .colin").each(function () {
        let animationId = $(this).attr('data-id'); // Get CSS variable
        if (animationId) {
            let clipPathId = animationId.replace(/['"#]/g, ""); // Clean value
            $(this).find(".gradient-overlay").css("clip-path", `url(#${clipPathId})`);
          }
      });

    },50);

    if(jQuery(window).width() > 767){
      jQuery(".organization_events_slider .inner").addClass('owl-carousel');
      var organization_events_slider = jQuery(".organization_events_slider .inner");
      organization_events_slider.owlCarousel({
        items:2,
        margin:50,
        center:true,
        loop: true,
        nav: true, 
        autoWidth:true, 
        rtl:true,    
        responsive:{
          0:{
          
          },
          768:{
            margin:20,
          },
          1280:{
            margin:50,
          }
        }
  
      });
      // next prev
      
        $(".organization_events_slider .next_prev_col .arrow.prev").click(function () {
            $(".organization_events_slider .owl-prev").trigger("click");
        });
    
        $(".organization_events_slider .next_prev_col .arrow.next").click(function () {
            $(".organization_events_slider .owl-next").trigger("click");
        });

    }else{
      $(".organization_events_slider .img svg clipPath path").attr("d", "M288,40A40,40,0,0,0,248,0H40A40,40,0,0,0,0,40V210a22,22,0,0,0,22,22H32a12,12,0,0,0,12-12,12,12,0,0,1,12-12H248a40,40,0,0,0,40-40Z");
    }

  }

  // organization_events_slider end
  // events_slider 
  var _rtl = false;
  if(jQuery(window).width() < 768){
    var _rtl = true;
  }

  if(jQuery('.events_slider').length > 0){
    var events_slider = jQuery(".events_slider .owl-carousel");
    events_slider.owlCarousel({
      items:3,
      margin:22,      
      loop: false,
      nav: true, 
      autoWidth:true, 
      rtl:_rtl,   
      dots:true,   
    });
  };
  
  // events_slider end

  if(jQuery('.central_district ').length > 0){
    var image_slider = jQuery(".image_slider");
    image_slider.owlCarousel({
      items:1,
      margin:0,      
      loop: false,
      nav: true, 
      autoWidth:false, 
      rtl:true,   
      dots:false,   
    });
  };

  if(jQuery(window).width() < 768){
    if(jQuery('.news_announcements ').length > 0){
      jQuery(".news_announcements .inner").addClass('owl-carousel'); 
          setTimeout(function(){
            var news_announcements = jQuery(".news_announcements .inner");
            news_announcements.owlCarousel({
              items:1,
              margin:12,      
              loop: false,
              nav: false, 
              autoWidth:true, 
              rtl:true,   
              dots:false,   
        });

      },50);
    };
  }

  // mobile menu 
  
  if(jQuery(window).width() > 1023){
    jQuery('.search_box').hover(
      function() {
        jQuery(this).addClass('open'); 
        jQuery('header').addClass('open');
        jQuery('.overlay').addClass('open'); 
      }, 
      function() {
        jQuery(this).removeClass('open'); 
        jQuery('header').removeClass('open');
        jQuery('.overlay').removeClass('open');
      }
    );
    jQuery('nav>ul>li.drop').hover(
      function() {
        jQuery(this).addClass('open'); 
        jQuery('header').addClass('open'); 
        jQuery('.overlay').addClass('open'); 
      }, 
      function() {
        jQuery(this).removeClass('open');
        jQuery('header').removeClass('open');
        jQuery('.overlay').removeClass('open');
      }
    );

  }
  if(jQuery(window).width() < 1400){
    $(".menu_dropdown .img svg clipPath path").attr("d", "M 0 30 A 30 30 0 0 1 30 0 H 247 a 30 30 0 0 1 30 30 h 0 a 30 30 0 0 0 30 30 h 90 a 30 30 0 0 1 30 30 V 250 a 30 30 0 0 1 -30 30 H 182.366 a 26.634 26.634 0 0 1 -26.634 -26.634 h 0 A 26.634 26.634 0 0 0 129.1 229.732 H 30 a 30 30 0 0 1 -30 -30 Z");
   
  }
  if(jQuery(window).width() < 1024){
    jQuery('.mobile_menu').html(jQuery('.search_dropdown').clone());

    jQuery('.mobile_menu .search_dropdown').after(jQuery('nav').clone());
    
    jQuery('.mobile_menu .menu_dropdown .img svg clipPath').attr('id', 'menu_path1');
    
    var _user = jQuery('header .user').clone();
    var _social = jQuery('header .social').clone();
    var socialUserContainer = jQuery('<div class="social_user"></div>'); 
    socialUserContainer.append(_user).append(_social);
    
    jQuery('.mobile_menu nav').after(socialUserContainer);
    
    jQuery('.mobile_menu .social_user').after(jQuery('.sidebar_right').clone());

    jQuery( '.mobile_menu .convenient_contact h3' ).on( 'click', function(){
      jQuery(this).toggleClass('open');
      jQuery(this).next().slideToggle();
     
    });

    jQuery('.mobile_menu nav>ul>li.drop>.arrow').click(function(){
      var _this = jQuery(this);
      if(_this.hasClass('open')){
        jQuery(this).removeClass('open');
        jQuery(this).next().slideUp();
      }else{
        jQuery(this).addClass('open');
        jQuery(this).next().slideDown();
      }
    });


    jQuery('.ham').click(function(){
      jQuery(this).toggleClass('open');
      jQuery('.mobile_menu').toggleClass('open');
      jQuery('header').toggleClass('open');
      
    });
    if(jQuery(window).width() < 768){
      $(".menu_dropdown .img svg clipPath path").attr("d", "M0,28A28,28,0,0,1,28,0H140a21,21,0,0,1,21,21,21,21,0,0,0,21,21h78a28,28,0,0,1,28,28V204a28,28,0,0,1-28,28H167a26,26,0,0,1-26-26,26,26,0,0,0-26-26H28A28,28,0,0,1,0,152Z");
    }
  }
  
  // sticky nav start
  jQuery('.sticky_nav.sticky_default .sticky_ham').click(function(){
      var _this = jQuery(this);
      if(_this.hasClass('open')){
        _this.removeClass('open');
        jQuery('.sticky_nav.sticky_open').removeClass('open');
        jQuery('.overlay').removeClass('opensticky');
      }else{
        _this.addClass('open');
        jQuery('.sticky_nav.sticky_open').addClass('open');
        jQuery('.overlay').addClass('opensticky');
      }
  });
  jQuery('.sticky_nav.sticky_open .sticky_ham').click(function(){
      jQuery('.sticky_nav.sticky_default .sticky_ham').removeClass('open');
      jQuery('.sticky_dropbox .dropbox').removeClass('open');
      jQuery('.sticky_nav.sticky_open').removeClass('open');
      jQuery('.overlay').removeClass('opensticky');

  });

  jQuery('.sticky_open>ul>li').click(function(){
    var _this = jQuery(this).attr('data-id');
    jQuery('.sticky_dropbox .dropbox').removeClass('open');
    jQuery('.sticky_dropbox #'+_this).addClass('open');

  });

  jQuery(document).on("click", function (event) {
    if (!jQuery(event.target).closest('.sticky_nav, .sticky_ham, .sticky_dropbox').length) {
        jQuery('.sticky_nav.sticky_open').removeClass('open');
          jQuery('.sticky_nav.sticky_default .sticky_ham').removeClass('open');
          jQuery('.sticky_dropbox .dropbox').removeClass('open');
          jQuery('.overlay').removeClass('opensticky');
      }
  });

// sticky nav end


    //  tab about
    jQuery('.mgt_tab .mgt_contants')
    .toggleClass('bordertop', jQuery('.mgt_tab .mgt_title li:first-child').hasClass('active'))
    .toggleClass('borderbottom', jQuery('.mgt_tab .mgt_title li:last-child').hasClass('active'));

    jQuery('.mgt_tab .mgt_title li').click(function(){
      var _this = jQuery(this);
      jQuery('.mgt_tab .mgt_title li').removeClass('active');
      _this.addClass('active');
      var _attr = _this.attr('data-tab');
      jQuery('.mgt_tab .mgt_contants .mgt_comman').removeClass('active');
      jQuery('.mgt_tab .mgt_contants #'+_attr).addClass('active');

      // if(jQuery('.mgt_tab .mgt_title li:first-child').hasClass('active')){
      //   jQuery('.mgt_tab .mgt_contants').addClass('bordertop');
      // }else{
      //   jQuery('.mgt_tab .mgt_contants').removeClass('bordertop');
      // }
      // if(jQuery('.mgt_tab .mgt_title li:last-child').hasClass('active')){
      //   jQuery('.mgt_tab .mgt_contants').addClass('borderbottom');
      // }else{
      //   jQuery('.mgt_tab .mgt_contants').removeClass('borderbottom');
      // }
      jQuery('.mgt_tab .mgt_contants')
      .toggleClass('bordertop', jQuery('.mgt_tab .mgt_title li:first-child').hasClass('active'))
      .toggleClass('borderbottom', jQuery('.mgt_tab .mgt_title li:last-child').hasClass('active'));
    });

    // how_does_orgn_work
    
      if(jQuery('.how_does_orgn_work ').length > 0){
              var how_does_orgn_work = jQuery(".how_does_orgn_work .inner");
              how_does_orgn_work.owlCarousel({
                items:1,
                margin:0,      
                loop: false,
                nav: true,                 
                rtl:true,   
                dots:true,   
          });
  
      };
  
    // how_does_orgn_work
    // about tabbing 
    jQuery('.mgt_tab .mgt_contants .mgt_comman .mobtitle').click(function(){
        var _this = jQuery(this);
        if(_this.hasClass('open')){
          _this.removeClass('open');
          _this.next().slideUp();
          _this.next().removeClass('open');
        }else{
          _this.addClass('open');
          _this.next().addClass('open');
          _this.next().slideDown();
        }
    });
    // new_job_orgn
    if(jQuery(window).width() < 768){
      if(jQuery('.new_job_orgn ').length > 0){
        jQuery(".new_job_orgn .inner").addClass('owl-carousel'); 
            setTimeout(function(){
              var new_job_orgn = jQuery(".new_job_orgn .inner");
              new_job_orgn.owlCarousel({
                items:1,
                margin:8,      
                loop: false,
                nav: false, 
                autoWidth:true, 
                rtl:true,   
                dots:false,   
          });
  
        },50);
      };
    }
  
    // districts_blogs
    if(jQuery(window).width() < 768){
      jQuery('.districts_blogs .title').click(function(){
        var _this = jQuery(this);
        if(_this.hasClass('open')){
          _this.removeClass('open');
          _this.next().slideUp();
        }else{
          _this.addClass('open');
          _this.next().slideDown();
        }
      });
    }
    jQuery('.download_blog .left_col .mobile_serch').click(function(){
      jQuery(this).toggleClass('open');
      jQuery(this).next().slideToggle();
    });

    // apply position form 
    $(".apply_position #fileUpload").change(function () {
        let fileName = $(this).val().split("\\").pop(); // Extract file name
        if (fileName) {
            $(".apply_position #file-name").text(fileName);
        } else {
            $(".apply_position #file-name").text("העלאת קורות חיים"); // Reset if no file selected
        }
    });

    // photo_gallery_slider
    if(jQuery('.photo_gallery_slider ').length > 0){        
              var new_job_orgn = jQuery(".photo_gallery_slider .inner");
              new_job_orgn.owlCarousel({
                //items:1,
                margin:19,      
                loop: false,
                nav: true, 
                autoWidth:true, 
                rtl:true,   
                dots:false,
                responsive:{
                  0:{
                    dots:true,
                  },
                  768:{
                    dots:false,
                  }
                }   
          });
  
    };
  // career_lobby_blog
  if(jQuery(window).width() < 768){
    jQuery(' .career_lobby_blog .colin .sub_title').click(function(){
      jQuery(this).toggleClass('open');
      jQuery(this).next().slideToggle();
    });
  }
  // subsistence_accordion
  jQuery('.subsistence_accordion .colin .title').click(function(){
    jQuery(this).toggleClass('open');
    jQuery(this).next().toggleClass('open');
  });


  if(jQuery('.funday_year').length > 0){
    var image_slider = jQuery(".image_slider");
    image_slider.owlCarousel({
      items:1,
      margin:0,      
      loop: false,
      nav: true, 
      autoWidth:false, 
      rtl:true,   
      dots:false,   
      responsive:{
        0:{
          dots:true,
        },
        768:{
          dots:false,
        }
      }   
    });
  };

  if(jQuery('.article_slider_containt').length > 0){
    var image_slider = jQuery(".image_slider");
    image_slider.owlCarousel({
      items:1,
      margin:0,      
      loop: false,
      nav: true, 
      autoWidth:false, 
      rtl:true,   
      dots:false,   
      responsive:{
        0:{
          dots:true,
        },
        768:{
          dots:false,
        }
      }   
    });
  };

    if(jQuery(window).width() < 768){    
      if(jQuery('.orgn_rights_benefits').length > 0){
        jQuery(".orgn_rights_benefits .inner").addClass('owl-carousel'); 
            var image_slider = jQuery(".orgn_rights_benefits .inner");
            image_slider.owlCarousel({
              items:1,
              margin:10,      
              loop: false,
              nav: false, 
              autoWidth:true, 
              rtl:true,   
              dots:false,   
          });
      };
    };
    if(jQuery(window).width() < 768){    
      if(jQuery('.other_events_interest_you').length > 0){
        jQuery(".other_events_interest_you .inner").addClass('owl-carousel'); 
            var image_slider = jQuery(".other_events_interest_you .inner");
            image_slider.owlCarousel({
              items:1,
              margin:12,      
              loop: false,
              nav: false, 
              autoWidth:true, 
              rtl:true,   
              dots:false,   
          });
      };
    };

  // funday_total 
    if(jQuery('.funday_total').length > 0){
      $(".funday_total .increment").click(function() {
        let value = parseInt($(".funday_total #number").val()) || 0;
          $(".funday_total #number").val(value + 1);
      });
  
      $(".funday_total .decrement").click(function() {
          let value = parseInt($(".funday_total #number").val()) || 0;
          if (value > 1) {
              $(".funday_total #number").val(value - 1);
          }
      });
    }

  // join us start
    jQuery(document).on("change", ".input_form input[type='radio']", function () {
        var $label = jQuery(this).closest("label");
        var $group = $label.closest(".input_form");

        // Remove 'checked' class from all labels in the group
        $group.find("label").removeClass("checked");

        // Add 'checked' class to the selected label
        if (jQuery(this).is(":checked")) {
            $label.addClass("checked");
        }
    });

    $(document).on("change", ".joinus_form .file-input", function () {
      let fileName = $(this).val().split("\\").pop(); // Get file name
      if (fileName) {
          // Update the file name in the corresponding h4
          $(this).siblings("label").find(".file-name").text(fileName);
        } else {
            $(this).siblings("label").find(".file-name").text("test");
        }
    });

    jQuery(".check_all input[type='checkbox']").on("change", function () {
      if (jQuery(this).is(":checked")) {
        jQuery(this).parent().addClass("checked");
      } else {
        jQuery(this).parent().removeClass("checked");
      }
    });
    // join us end

    // event_ticket_purchase steps

    if(jQuery(window).width() < 768 ){
      jQuery('.ticket_step.step1,.ticket_step.step2').addClass('next');
      jQuery('.timeline li.step1').addClass('active');
    }

    jQuery('.ticket_step').each(function() {
        var _this = jQuery(this);
        var _textcol = _this.find('.text_col').clone();
        console.log(_textcol);
        _this.find('.text').append(_textcol);

    });


    jQuery('.ticket_step').each(function(index) {
      var step = index + 2;
      var $step = jQuery('.ticket_step.step' + step);
  
      $step.find('.input_form .in').keyup(function() {
          var _input = jQuery(this).val();
          $step.toggleClass('notsend', _input === '');
  
  
          var inputVal = jQuery('.personal_code').val();
            if (!inputVal.length === 6) {
              jQuery('.ticket_step.step4').removeClass('wrong right');
            }
  
          if(step == 4){
            $step.addClass('notsend');
            
            jQuery('.ticket_step .code_arrow a').click(function(event){
              event.preventDefault();
              if (inputVal.length === 6) {
                  jQuery('.ticket_step.step4').removeClass('wrong').addClass('right');
                  $step.removeClass('notsend');
              } else {
                jQuery('.ticket_step.step4').removeClass('right').addClass('wrong');
              }
            });
          }
  
      });
      $step.find('.text .sending').click(function(e) {
          e.preventDefault();
          $step.addClass('done');
          jQuery('.ticket_step.step' + (step + 1)).addClass('next');
          if(step == 2){
            jQuery('.ticket_step.step1').removeClass('next');
            jQuery('.timeline li.step1').addClass('done');
            jQuery('.timeline li.step2').addClass('active');
          }
          if(step == 3){
            jQuery('.ticket_step.step3').removeClass('next');
            jQuery('.timeline li.step1,.timeline li.step2').addClass('done');
            jQuery('.timeline li.step3').addClass('active');
          }
          
      });
  }); 


    // jQuery('.ticket_step.step2 .input_form .in').keyup(function(){
    //   var _input = jQuery(this).val();
    //   if(!_input == ''){
    //     jQuery('.ticket_step.step2').removeClass('notsend');
    //   }else{
    //     jQuery('.ticket_step.step2').addClass('notsend');
    //   }
    // });
    // jQuery('.ticket_step.step2 .text .sending').click(function(e){
    //   e.preventDefault();
    //   jQuery('.ticket_step.step2').addClass('done');
    //   jQuery('.ticket_step.step3').addClass('next');

    // });

    // jQuery('.ticket_step.step3 .input_form .in').keyup(function(){
    //   var _input = jQuery(this).val();
    //   if(!_input == ''){
    //     jQuery('.ticket_step.step3').removeClass('notsend');
    //   }else{
    //     jQuery('.ticket_step.step3').addClass('notsend');
    //   }
    // });
    // jQuery('.ticket_step.step3 .text .sending').click(function(e){
    //   e.preventDefault();
    //   jQuery('.ticket_step.step3').addClass('done');
    //   jQuery('.ticket_step.step4').addClass('next');

    // });





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

