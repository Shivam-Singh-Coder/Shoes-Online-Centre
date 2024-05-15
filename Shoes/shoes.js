$(document).ready(function () {
    $('#bars').click(function () {
        if ($('nav ul').css('display') == 'flex') {
            $('#bars').css('display', 'none');
            $('#cross').css('display', 'block');
            $('nav').css('height', '5rem');
            $('nav').css('border', '2px solid white');
        }
        else if ($('nav ul').css('display') == 'block') {
            $('#bars').css('display', 'none');
            $('#cross').css('display', 'block');
            $('nav').css('height', '23rem');
            $('nav').css('border', '2px solid white');
        }
    });
    $('#cross').click(function () {
        $('#bars').css('display', 'block');
        $('#cross').css('display', 'none');
        $('nav').css('height', '0rem');
        $('nav').css('border', 'none');
    });
});
// Slick slider
$(document).ready(function () {
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        dots: false,
        pauseOnHover: false,
        prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><i class="fa-solid fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><i class="fa-solid fa-chevron-right"></i></button>',
    });
});
$(document).ready(function () {
    $('.productbox').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: false,
        pauseOnHover: true,
        prevArrow: '<button type="button" data-role="none" class="slick-prev1" aria-label="Previous" tabindex="0" role="button"><i class="fa-solid fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" data-role="none" class="slick-next1" aria-label="Next" tabindex="0" role="button"><i class="fa-solid fa-chevron-right"></i></button>',
        responsive: [
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }]
    });
});
$(document).ready(function () {
    $('.fproductbox').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: false,
        pauseOnHover: true,
        prevArrow: '<button type="button" data-role="none" class="slick-prev1" aria-label="Previous" tabindex="0" role="button"><i class="fa-solid fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" data-role="none" class="slick-next1" aria-label="Next" tabindex="0" role="button"><i class="fa-solid fa-chevron-right"></i></button>',
        responsive: [
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }]
    });
});
$(document).ready(function () {
    $('.tproductbox').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        dots: false,
        pauseOnHover: true,
        prevArrow: '<button type="button" data-role="none" class="slick-prev1" aria-label="Previous" tabindex="0" role="button"><i class="fa-solid fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" data-role="none" class="slick-next1" aria-label="Next" tabindex="0" role="button"><i class="fa-solid fa-chevron-right"></i></button>',
        responsive: [
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }]
    });
});
$(document).ready(function () {
    $('.blogslider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        dots: false,
        pauseOnHover: true,
        prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><i class="fa-solid fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><i class="fa-solid fa-chevron-right"></i></button>',
        responsive: [
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }

            }]
    });
});
