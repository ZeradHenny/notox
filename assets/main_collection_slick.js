$(document).ready(function(){    

        $('#mobile_product-grid').slick({
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        lazyLoad: 'ondemand',
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true           
                    }
                }           
            ]
        });


   
    
});