let portfolio = $("#portfolio");

portfolio.slick({
    arrows: false,
    dots: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 2,
});

$("#pt_prev").on('click', function(event) {
    event.preventDefault();

    portfolio.slick('slickPrev');
});

$("#pt_next").on('click', function(event) {
    event.preventDefault();

    portfolio.slick('slickNext');
});