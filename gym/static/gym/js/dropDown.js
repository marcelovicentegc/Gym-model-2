var menuBtn = document.querySelector('#dropdown-btn');
var menuItem = document.querySelectorAll('.dropdown-options');
var menuItemBg = document.querySelectorAll('.dropdown-options-wrapper');
var body = document.querySelector('body');
            
function toggleMenu() {
    var menu = document.querySelector('#dropdown');
    var comptStyle = window.getComputedStyle(menu, null).display;
        
    if (comptStyle === 'block') {
        menu.style.animationName = 'slideOut';
        menu.style.animationDuration = '.2s';
        menu.style.animationDirection = 'linear';
        setTimeout(function() {
            menu.style.display = 'none'
        }, 200)
    } else {
        menu.style.display = 'block';
        menu.style.animationName = 'slideIn';
        menu.style.animationDuration = '.2s';
        menu.style.animationDirection = 'linear';
        menu.style.top = '100px';
    }
};

function toggleMenuOnWindowResize() {
    var menu = document.querySelector('#dropdown');

    if (x.matches) {
                   
    } else {
        menu.style.animationName = 'slideOut';
        menu.style.animationDuration = '.2s';
        menu.style.animationDirection = 'linear';
        setTimeout(function() {
            menu.style.display = 'none' 
        }, 200)
    }
};
            
menuBtn.addEventListener('click', function() {
    toggleMenu();
});

var x = window.matchMedia('(max-width: 1023px)');
toggleMenuOnWindowResize(x);
x.addListener(toggleMenuOnWindowResize);

menuItem.forEach(function(item) {
    item.addEventListener('mouseover', function() {
        mouseOver(item.parentElement);
    });
    item.addEventListener('mouseout', function() {
        mouseOut(item.parentElement);
    });
});

function mouseOver(elem) {
    elem.style.backgroundColor = '#000'; 
};

function mouseOut(elem) {
    elem.style.backgroundColor = 'transparent';
};