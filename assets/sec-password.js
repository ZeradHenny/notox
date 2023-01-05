// modal
const height = $(document).height();
var scrollBottom = $(window).scrollTop() + $(window).height();
$(window).scroll(function(){
    scrollBottom = $(window).scrollTop() + $(window).height();
    console.log(scrollBottom)
    if (scrollBottom > (height-1)) {
        $('.modal.fade').addClass('show');
        $('.modal.fade').attr('style', 'display:block');
        $('.close').click(function(){
            $('.modal.fade').removeClass('show');
        })
    } 
})

var client_pass;
var server_pass = $('.password_result').val();
$('.confirm').click(function(){
    var client_pass = $('.password_text').val();
    console.log('aaa')
    console.log(client_pass, 'here')
    console.log(server_pass, 'here')
   if( client_pass == server_pass ) {
        var url = $('.link_result').val();
        location.replace(url);
   }
})

   
