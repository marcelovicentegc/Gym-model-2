var topBtnWrapper = document.getElementById('top-btn-wrapper');
var topBtn = document.getElementById('top-btn');

var prevScrollPos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (200 >= currentScrollPos && prevScrollPos > currentScrollPos) {
        topBtn.style.animationName = 'showUpOrGetOut';
        topBtn.style.animationDuration = '.2s';
        topBtn.style.animationDirection = 'reverse';
        setTimeout(function() {
            topBtn.style.opacity = '0';
            topBtn.style.fontSize = '0';
            topBtn.style.padding = '0px 0px 0px 0px';
        }, 100);
    } else {
        topBtn.style.animationName = 'showUpOrGetOut';
        topBtn.style.animationDuration = '.2s';
        topBtn.style.animationDirection = 'linear';
        setTimeout(function() {
            topBtn.style.opacity = '1';
            topBtn.style.fontSize = '100%';
            topBtn.style.padding = '15px 15px 15px 15px';
        }, 1);
    }
    prevScrollPos = currentScrollPos;
};