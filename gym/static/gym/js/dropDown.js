var menuBtn = document.querySelector('#dropdown-btn');
var menuItem = document.querySelectorAll('.dropdown-options');
var menuItemBg = document.querySelectorAll('.dropdown-options-wrapper');
var body = document.querySelector('body');
            
function toggleMenu() {
    var wdth = window.innerWidth;
    var menu = document.querySelector('#dropdown');
    var comptStyle = window.getComputedStyle(menu, null).display;
    
    const smallDevice = 320;
    const mediumDevice = 760;

    if (comptStyle === 'block') {
        closeMenu();
    } else {
        if (wdth <= smallDevice) {
            menu.style.display = 'block';
            menu.style.animationName = 'slideIn';
            menu.style.animationDuration = '.2s';
            menu.style.animationDirection = 'linear';
            menu.style.top = '80px';
        } else if (wdth > smallDevice && wdth < mediumDevice) {
            menu.style.display = 'block';
            menu.style.animationName = 'slideIn';
            menu.style.animationDuration = '.2s';
            menu.style.animationDirection = 'linear';
            menu.style.top = '90px';
        } else if (wdth >= mediumDevice) {
            menu.style.display = 'block';
            menu.style.animationName = 'slideIn';
            menu.style.animationDuration = '.2s';
            menu.style.animationDirection = 'linear';
            menu.style.top = '90px';
        } else {
            menu.style.display = 'block';
            menu.style.animationName = 'slideIn';
            menu.style.animationDuration = '.2s';
            menu.style.animationDirection = 'linear';
            menu.style.top = '100px';
        }
    }
};

function toggleMenuOnWindowResize() {    
    if (x.matches) {
        
    } else {
        closeMenu();
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
    item.addEventListener('click', function() {
        closeMenu();
    });
});

function mouseOver(elem) {
    elem.style.backgroundColor = '#000'; 
};

function mouseOut(elem) {
    elem.style.backgroundColor = 'transparent';
};

function closeMenu() {
    var menu = document.querySelector('#dropdown');

    menu.style.animationName = 'slideOut';
    menu.style.animationDuration = '.2s';
    menu.style.animationDirection = 'linear';
    setTimeout(function() {
        menu.style.display = 'none' 
    }, 200)
};
