$(document).ready(function() {
    let currentIndex = 0;
    const slides = $('.slide');
    const totalSlides = slides.length;
    function showSlide(index) {
        slides.removeClass('active').eq(index).addClass('active');
        const offset = -index * 100 + '%';
        $('.slides').css('transform', 'translateX(' + offset + ')');
        $('.indicator').removeClass('active').eq(index).addClass('active');
    }
    $('.next').on('click', function() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    });
    $('.prev').on('click', function() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
    });
    $('.indicator').on('click', function() {
        currentIndex = $(this).index();
        showSlide(currentIndex);
    });
    showSlide(currentIndex);
});