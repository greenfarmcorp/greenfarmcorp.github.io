/* ===================================================================
    
    Author          : Valid Theme
    Template Name   : Farmi - Organic Farm Agriculture Template
    Version         : 1.0
    
* ================================================================= */

(function($) {
    "use strict";

    $(document).on('ready', function() {


        /* ==================================================
            # Wow Init
         ===============================================*/
        var wow = new WOW({
            boxClass: 'wow', // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 0, // distance to the element when triggering the animation (default is 0)
            mobile: true, // trigger animations on mobile devices (default is true)
            live: true // act on asynchronously loaded content (default is true)
        });
        wow.init();
        

        /* ==================================================
            # Tooltip Init
        ===============================================*/
        $('[data-toggle="tooltip"]').tooltip(); 
        

        /* ==================================================
            # Smooth Scroll
         ===============================================*/
        $("body").scrollspy({
            target: ".navbar-collapse",
            offset: 200
        });
        $('a.smooth-menu').on('click', function(event) {
            var $anchor = $(this);
            var headerH = '75';
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });


        /* ==================================================
            # Banner Animation
        ===============================================*/
        function doAnimations(elems) {
            //Cache the animationend event in a variable
            var animEndEv = 'webkitAnimationEnd animationend';
            elems.each(function() {
                var $this = $(this),
                    $animationType = $this.data('animation');
                $this.addClass($animationType).one(animEndEv, function() {
                    $this.removeClass($animationType);
                });
            });
        }

        //Variables on page load
        var $immortalCarousel = $('.animate_text'),
            $firstAnimatingElems = $immortalCarousel.find('.item:first').find("[data-animation ^= 'animated']");
        //Initialize carousel
        $immortalCarousel.carousel();
        //Animate captions in first slide on page load
        doAnimations($firstAnimatingElems);
        //Other slides to be animated on carousel slide event
        $immortalCarousel.on('slide.bs.carousel', function(e) {
            var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
            doAnimations($animatingElems);
        });


        /* ==================================================
            # Youtube Video Init
         ===============================================*/
        $('.player').mb_YTPlayer();


        /* ==================================================
            # imagesLoaded active
        ===============================================*/
        $('#portfolio-grid,.blog-masonry').imagesLoaded(function() {

            /* Filter menu */
            $('.mix-item-menu').on('click', 'button', function() {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });

            /* filter menu active class  */
            $('.mix-item-menu button').on('click', function(event) {
                $(this).siblings('.active').removeClass('active');
                $(this).addClass('active');
                event.preventDefault();
            });

            /* Filter active */
            var $grid = $('#portfolio-grid').isotope({
                itemSelector: '.pf-item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.pf-item',
                }
            });

            /* Filter active */
            $('.blog-masonry').isotope({
                itemSelector: '.blog-item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.blog-item',
                }
            });

        });


         /* ==================================================
            # Fun Factor Init
        ===============================================*/
        $('.timer').countTo();
        $('.fun-fact').appear(function() {
            $('.timer').countTo();
        }, {
            accY: -100
        });


        /* ==================================================
            # Magnific popup init
         ===============================================*/
        $(".popup-link").magnificPopup({
            type: 'image',
            // other options
        });

        $(".popup-gallery").magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            },
            // other options
        });

        $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });

        $('.magnific-mix-gallery').each(function() {
            var $container = $(this);
            var $imageLinks = $container.find('.item');

            var items = [];
            $imageLinks.each(function() {
                var $item = $(this);
                var type = 'image';
                if ($item.hasClass('magnific-iframe')) {
                    type = 'iframe';
                }
                var magItem = {
                    src: $item.attr('href'),
                    type: type
                };
                magItem.title = $item.data('title');
                items.push(magItem);
            });

            $imageLinks.magnificPopup({
                mainClass: 'mfp-fade',
                items: items,
                gallery: {
                    enabled: true,
                    tPrev: $(this).data('prev-text'),
                    tNext: $(this).data('next-text')
                },
                type: 'image',
                callbacks: {
                    beforeOpen: function() {
                        var index = $imageLinks.index(this.st.el);
                        if (-1 !== index) {
                            this.goTo(index);
                        }
                    }
                }
            });
        });


        /* ==================================================
            # Specialty Carousel
         ===============================================*/
        $('.specialty-carousel').owlCarousel({
            loop: false,
            margin: 30,
            nav: true,
            navText: [
                "<i class='ti-angle-left'></i>",
                "<i class='ti-angle-right'></i>"
            ],
            dots: false,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                1000: {
                    items: 2
                }
            }
        });


        /* ==================================================
            # Services Carousel
         ===============================================*/
        $('.services-carousel').owlCarousel({
            loop: false,
            margin: 30,
            nav: true,
            navText: [
                "<i class='ti-angle-left'></i>",
                "<i class='ti-angle-right'></i>"
            ],
            dots: false,
            autoplay: false,
            responsive: {
                0: {
                    items: 1
                },
                800: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });


        /* ==================================================
            Timeline Carousel Customization
         ===============================================*/
        var $owl = $('.timeline-carousel');

        $owl.children().each( function( index ) {
          $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
        });

        $owl.owlCarousel({
            loop: true,
            center: true,
            margin: 30,
            nav: true,
            navText: [
                "<i class='ti-angle-left'></i>",
                "<i class='ti-angle-right'></i>"
            ],
            dots: false,
            autoplay: false,
            responsive: {
                0: {
                    items: 2,
                    center: false
                },
                400: {
                    items: 3
                },
                800: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        });

        $(document).on('click', '.owl-item>li', function() {
          // see https://owlcarousel2.github.io/OwlCarousel2/docs/api-events.html#to-owl-carousel
          var $speed = 300;  // in ms
          $owl.trigger('to.owl.carousel', [$(this).data( 'position' ), $speed] );
        });

        /* Add active class to item */
        $('.history-area .history-items .owl-item').on('click', function() {
            $('.history-area .history-items .owl-item').removeClass("current");
            $(this).addClass("current");
        });


        /* ==================================================
            # Offer Product Carousel
         ===============================================*/
        $('.offer-pro-carousel').owlCarousel({
            loop: false,
            nav: true,
            dots: false,
            autoplay: false,
            items: 1,
            navText: [
                "<i class='ti-angle-left'></i>",
                "<i class='ti-angle-right'></i>"
            ],
        });


        /* ==================================================
            # Partner Carousel
         ===============================================*/
        $('.partner-carousel').owlCarousel({
            loop: false,
            margin: 30,
            nav: false,
            navText: [
                "<i class='ti-angle-left'></i>",
                "<i class='ti-angle-right'></i>"
            ],
            dots: false,
            autoplay: true,
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items: 3,
                    margin: 50
                },

                1000: {
                    items: 5,
                    margin: 80
                }
            }
        });


        /* ==================================================
            Preloader Init
         ===============================================*/
        $(window).on('load', function() {
            // Animate loader off screen
            $(".se-pre-con").fadeOut("slow");;
        });


        /* ==================================================
            Nice Select Init
         ===============================================*/
        $('select').niceSelect();


        /* ==================================================
            Contact Form Validations
        
        $('.contact-form').each(function() {
            var formInstance = $(this);
            formInstance.submit(function() {

                var action = $(this).attr('action');

                $("#message").slideUp(750, function() {
                    $('#message').hide();

                    $('#submit')
                        .after('<img src="assets/img/ajax-loader.gif" class="loader" />')
                        .attr('disabled', 'disabled');

                    $.post(action, {
                            name: $('#name').val(),
                            email: $('#email').val(),
                            phone: $('#phone').val(),
                            comments: $('#comments').val()
                        },
                        function(data) {
                            document.getElementById('message').innerHTML = data;
                            $('#message').slideDown('slow');
                            $('.contact-form img.loader').fadeOut('slow', function() {
                                $(this).remove()
                            });
                            $('#submit').removeAttr('disabled');
                        }
                    );
                });
                return false;
            });
        });
		================================================== */

    }); // end document ready function
})(jQuery); // End jQuery