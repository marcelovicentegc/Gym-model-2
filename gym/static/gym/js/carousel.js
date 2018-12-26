$(document).ready(function(){
    var owl = $('.owl-carousel');
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
    });

    owl.owlCarousel();

    $('.owl-next').click(function() {
        owl.trigger('next.owl.carousel');
    });

    $('.owl-prev').click(function() {
        owl.trigger('prev.owl.carousel', [300]);
    });
});