$(document).ready(function(){
    console.log('slider')
    $('.hero-slider--wrapper').slick({
        dots: true,
        arrows: false,
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        slidesToScroll: 1
    });
});