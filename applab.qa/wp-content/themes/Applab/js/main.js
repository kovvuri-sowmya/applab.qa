var siteScript = {
    init: function() {
        this.stickyHeader();
        this.subnav();
        this.homeSlider();
        this.clientSlider1();
        this.projectSlider();
        this.annotationSlider();
        this.featuredSlider();
        this.detailSlider();
        this.awardsSlider();
        this.relatedSlider();
        this.customSelect();
        this.smoothScroll();
        this.eqHeight();
        this.resize();
    },

    stickyHeader: function() {
        var spotH = $('#home-slider').outerHeight();

        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            if ($(this).scrollTop() > 100) {
                $('header').addClass("sticky");
            } else {
                $('header').removeClass("sticky");
            }
        });

        var position = $(window).scrollTop();

        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            if (scroll > position) {
                $('header').addClass("up");
            } else {
                $('header').removeClass("up");
            }
            position = scroll;
        });

        // 		$(window).scroll(function() {
        // 			if ($(this).scrollTop() > 100) {
        // 				$('header').addClass("sticky");
        // 			} else {
        // 				$('header').removeClass("sticky");
        // 			}
        // 		});


    },

    subnav: function() {
        var forEach = function(t, o, r) {
            if ("[object Object]" === Object.prototype.toString.call(t))
                for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
            else
                for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t)
        };

        var hamburgers = document.querySelectorAll(".hamburger");
        if (hamburgers.length > 0) {
            forEach(hamburgers, function(hamburger) {
                hamburger.addEventListener("click", function() {
                    this.classList.toggle("is-active");
                    $('body').toggleClass('nav-on');
                }, false);
            });
            $('.fx-nav .close').on('click', function() {
                $('body').removeClass('nav-on');
            });
        }

        $('header.fixed-header').attr("tabindex", "-1");
    },

    homeSlider: function() {
        if ($.fn.owlCarousel) {
            $('.home-slider').on('initialized.owl.carousel changed.owl.carousel', function(e) {
                if (!e.namespace) {
                    return;
                }
                var carousel = e.relatedTarget;

                var cSlide = carousel.relative(carousel.current()) + 1;
                var tSlide = carousel.items().length;

                if (tSlide > 1) {
                    $('.slider-counter').html("<span>" + cSlide + "</span> <div class='progressbar'><div class='line'></div></div> <span>" + tSlide + "</span>");
                    $('.slider-counter .progressbar').removeClass('animate');
                }

            }).owlCarousel({
                animateOut: 'fadeOut',
                items: 1,
                autoplay: true,
                nav: false,
                loop: false,
                dots: false,
                autoplayTimeout: 8000,
                autoplayHoverPause: true
                // 			    navText: []
            });
            $('.home-slider').on('changed.owl.carousel', function(e) {
                $('.slider-counter .progressbar').addClass('animate');
            })
        }
    },

    clientSlider1: function() {
        var lang = $('html').attr('lang');
        if ($.fn.grouploop) {
            if ($('.clientSlider-wrapper').length) {
                $('.client-slider-1').grouploop({
                    velocity: 0.5,
                    forward: false,
                    childNode: ".item",
                    childWrapper: ".slide-wrapper",
                    pauseOnHover: false,
                    stickFirstItem: false
                });
                $('.client-slider-2').grouploop({
                    velocity: 0.5,
                    forward: true,
                    childNode: ".item",
                    childWrapper: ".slide-wrapper",
                    pauseOnHover: false,
                    stickFirstItem: false
                });
            }
        }
    },
    projectSlider: function() {
        var lang = $('html').attr('lang');
        if ($.fn.owlCarousel) {
            if (lang == 'ar') {
                $(".project-slider").owlCarousel({
                    nav: false,
                    rtl: true,
                    // autoplay: true,
                    // loop: true,
                    mouseDrag: false,
                    autoHeight: true,
                    dotsEach: true,
                    responsiveClass: true,
                    responsive: {
                        0: {
                            items: 1,
                            dots: true,
                        },
                        768: {
                            items: 1,
                            dots: true,
                        },
                        992: {
                            items: 2
                            // mouseDrag: true
                        }
                    }
                });
            } else {
                $(".project-slider").owlCarousel({
                    nav: false,
                    // rtl: true,
                    // autoplay: true,
                    // loop: true,
                    mouseDrag: false,
                    autoHeight: true,
                    dotsEach: true,
                    responsiveClass: true,
                    responsive: {
                        0: {
                            items: 1,
                            dots: true,
                        },
                        768: {
                            items: 1,
                            dots: true,
                        },
                        992: {
                            items: 2
                            // mouseDrag: true
                        }
                    }
                });
            }
        }

    },

    annotationSlider: function() {
        var lang = $('html').attr('lang');
        if ($.fn.owlCarousel) {
            if (lang == 'ar') {
                $(".annotation-slider").owlCarousel({
                    nav: false,
                    dots: false,
                    rtl: true,
                    autoplay: true,
                    loop: true,
                    mouseDrag: false,
                    autoHeight: true,
                    animateOut: 'slideOutUp',
                    animateIn: 'slideInUp',
                    responsiveClass: true,
                    responsive: {
                        0: {
                            items: 1
                        },
                        768: {
                            items: 1
                        },
                        992: {
                            items: 1
                        }
                    }
                });
            } else {
                $(".annotation-slider").owlCarousel({
                    nav: false,
                    dots: false,
                    autoplay: true,
                    loop: true,
                    mouseDrag: false,
                    autoHeight: true,
                    animateOut: 'slideOutUp',
                    animateIn: 'slideInUp',
                    responsiveClass: true,
                    responsive: {
                        0: {
                            items: 1
                        },
                        768: {
                            items: 1
                        },
                        992: {
                            items: 1
                        }
                    }
                });
            }
        }
    },

    featuredSlider: function() {
        var lang = $('html').attr('lang');
        if ($.fn.owlCarousel) {
            if (lang == 'ar') {
                $(".featured-slider").owlCarousel({
                    nav: false,
                    dots: false,
                    rtl: true,
                    autoplay: true,
                    loop: true,
                    mouseDrag: false,
                    autoHeight: true,
                    animateOut: 'slideOutUp',
                    animateIn: 'slideInUp',
                    responsiveClass: true,
                    responsive: {
                        0: {
                            items: 1
                        },
                        768: {
                            items: 1
                        },
                        992: {
                            items: 1
                        }
                    }
                });
            } else {
                $(".featured-slider").owlCarousel({
                    nav: true,
                    dots: true,
                    // 					navText: [],
                    // autoplay: true,
                    // loop: true,
                    // mouseDrag: false,
                    autoHeight: true,
                    animateOut: 'fadeOut',
                    animateIn: 'fadeIn',
                    responsiveClass: true,
                    responsive: {
                        0: {
                            items: 1,
                            nav: false
                        },
                        768: {
                            items: 1,
                            nav: false
                        },
                        992: {
                            items: 1,
                            nav: false
                        }
                    }
                });
            }
        }
    },

    detailSlider: function() {
        var lang = $('html').attr('lang');
        if ($.fn.owlCarousel) {
            if (lang == 'ar') {
                $(".detail-slider").owlCarousel({
                    nav: false,
                    dots: false,
                    rtl: true,
                    autoplay: true,
                    loop: true,
                    mouseDrag: false,
                    autoHeight: true,
                    animateOut: 'slideOutUp',
                    animateIn: 'slideInUp',
                    responsiveClass: true,
                    responsive: {
                        0: {
                            items: 1
                        },
                        768: {
                            items: 1
                        },
                        992: {
                            items: 1
                        }
                    }
                });
            } else {
                $(".detail-slider").owlCarousel({
                    nav: true,
                    dots: true,
                    // 					navText: [],
                    // autoplay: true,
                    // loop: true,
                    mouseDrag: false,
                    autoHeight: true,
                    animateOut: 'fadeOut',
                    animateIn: 'fadeIn',
                    responsiveClass: true,
                    responsive: {
                        0: {
                            items: 1,
                            nav: false
                        },
                        768: {
                            items: 1,
                            nav: false
                        },
                        992: {
                            items: 1,
                            nav: false
                        }
                    }
                });
            }
        }
    },

    awardsSlider: function() {
        var lang = $('html').attr('lang');
        if ($.fn.owlCarousel) {
            if (lang == 'ar') {
                $(".awards-slider").owlCarousel({
                    nav: false,
                    dots: false,
                    rtl: true,
                    autoplay: true,
                    loop: true,
                    // mouseDrag: false,
                    autoHeight: true,
                    animateOut: 'slideOutUp',
                    animateIn: 'slideInUp',
                    responsiveClass: true,
                    responsive: {
                        0: {
                            items: 1
                        },
                        768: {
                            items: 1
                        },
                        992: {
                            items: 1
                        }
                    }
                });
            } else {
                $(".awards-slider").owlCarousel({
                    // nav: true,
                    // dots: true,
                    // mouseDrag: false,
                    // animateOut: 'fadeOut',
                    // animateIn: 'fadeIn',
                    // autoplaySpeed: 1000,
                    // 					navText: [],
                    autoplay: true,
                    loop: true,
                    center: true,
                    autoHeight: true,
                    stagePadding: 300,
                    responsiveClass: true,
                    responsive: {
                        0: {
                            items: 1,
                            stagePadding: 0,
                        },
                        991: {
                            items: 1,
                            stagePadding: 150,
                        },
                        1399: {
                            items: 1,
                            stagePadding: 300,
                        }
                    }
                });
            }
        }
    },

    relatedSlider: function() {
        var lang = $('html').attr('lang');
        if ($.fn.owlCarousel) {
            if (lang == 'ar') {
                $(".related-slider").owlCarousel({
                    nav: false,
                    dots: false,
                    rtl: true,
                    autoplay: true,
                    loop: true,
                    // mouseDrag: false,
                    autoHeight: true,
                    animateOut: 'slideOutUp',
                    animateIn: 'slideInUp',
                    responsiveClass: true,
                    responsive: {
                        0: {
                            items: 1
                        },
                        768: {
                            items: 1
                        },
                        992: {
                            items: 1
                        }
                    }
                });
            } else {
                $(".related-slider").owlCarousel({
                    // nav: true,
                    // dots: true,
                    mouseDrag: false,
                    // animateOut: 'fadeOut',
                    // animateIn: 'fadeIn',
                    // autoplaySpeed: 1000,
                    // 					navText: [],
                    autoplay: true,
                    // loop: true,
                    // autoHeight: true,
                    responsiveClass: true,
                    responsive: {
                        0: {
                            items: 1
                        },
                        991: {
                            items: 1
                        },
                        1399: {
                            items: 2
                        }
                    }
                });
            }
        }
    },

    customSelect: function() {

        $('.owl-carousel').find('button.owl-dot').html("<span class='d-none' aria-hidden='true'>0</span>");

        if ($.fn.selectBoxIt) {
            $("select.select").selectBoxIt();
        }

        if ($.fn.fancybox) {
            $("[data-fancybox]").fancybox({

            });
        }

        AOS.init({
            duration: 500,
            easing: 'ease-out-quart',
            once: true
        });

        $('[data-toggle="tooltip"]').tooltip({
            container: 'body'
        })

        $('.btn-share').on('click', function() {
            $(this).toggleClass('on');
            $(this).parents('.share-wrapper').find('.social').stop().slideToggle('slow');
        });
    },

    smoothScroll: function() {
        if ($('#stage-list').length) {
            const slider = document.querySelector('.items');
            let isDown = false;
            let startX;
            let scrollLeft;

            slider.addEventListener('mousedown', (e) => {
                isDown = true;
                slider.classList.add('active');
                startX = e.pageX - slider.offsetLeft;
                scrollLeft = slider.scrollLeft;
                cancelMomentumTracking();
            });


            slider.addEventListener('mouseleave', () => {
                isDown = false;
                slider.classList.remove('active');
            });


            slider.addEventListener('mouseup', () => {
                isDown = false;
                slider.classList.remove('active');
                beginMomentumTracking();
            });


            slider.addEventListener('mousemove', (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - slider.offsetLeft;
                const walk = (x - startX) * 3; //scroll-fast
                var prevScrollLeft = slider.scrollLeft;
                slider.scrollLeft = scrollLeft - walk;
                velX = slider.scrollLeft - prevScrollLeft;
            });

            // Momentum 

            var velX = 0;
            var momentumID;

            slider.addEventListener('wheel', (e) => {
                cancelMomentumTracking();
            });

            function beginMomentumTracking() {
                cancelMomentumTracking();
                momentumID = requestAnimationFrame(momentumLoop);
            }

            function cancelMomentumTracking() {
                cancelAnimationFrame(momentumID);
            }

            function momentumLoop() {
                slider.scrollLeft += velX;
                velX *= 0.95;
                if (Math.abs(velX) > 0.5) {
                    momentumID = requestAnimationFrame(momentumLoop);
                }
            }
        }




        $('.share-toggle').on('click', function() {
            // $('section#challenge').addClass('active');

            var id = $(this).parents('.share-wrapper').next('section').attr('data-number');
            var next = (Number(id) + 1);
            window.scrollTo(0, $(`section[data-number=${next}]`).offset().top);
        });

        $('.work-list .figcaption .btn').focus(function() {
            $(this).parents('.item').addClass('focus');
        });
        $('.work-list .figcaption .btn').blur(function() {
            $(this).parents('.item').removeClass('focus');
        });
    },

    eqHeight: function() {
        // var maxHeight1 = 0;
        // $('.about-slider .item .content').each(function() {
        // 	maxHeight1 = ($(this).outerHeight() > maxHeight1) ? $(this).outerHeight() : maxHeight1;
        // });
        // $('.about-slider .item .content').css("height", maxHeight1);
    },

    resize: function() {
        $(window).on('resize', function() {

            // $('.about-slider .item .content, .our-services .service-list-holder').css("height", 'auto');
            // siteScript.eqHeight();
        });
    }
}

$(function() {
    siteScript.init();
});