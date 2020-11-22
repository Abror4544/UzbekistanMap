$(function () {    
    $('header .tk, header .ct, .back, .mapTashkent').hide();

    $('.circle').on('click', function () {
        $('.map').hide(2000);
        $('header .uz, header .cr').fadeOut(200);
        $('header .tk, header .ct').fadeIn(2000);
        $('.mapTashkent').fadeIn(1000);
        $('.back').show();
    })

    $('.back').on('click', function () {
        $('header .tk, header .ct, .back, .mapTashkent').hide();
        $('.map, header .uz, header .cr').fadeIn();
    })
})