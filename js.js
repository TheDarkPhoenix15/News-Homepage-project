
document.addEventListener('DOMContentLoaded', function() {
    var col = document.getElementsByClassName('h1');
    var hl1 = document.getElementById('article2_link1');
    var hl2 = document.getElementById('article2_link2');
    var hl3 = document.getElementById('article2_link3');
    var col2 = document.getElementsByClassName('span');
    var hl4 = document.getElementById('hl4');
    var hl5 = document.getElementById('hl5');
    var hl6 = document.getElementById('hl6');

    hl1.addEventListener('mouseover', func)
    hl1.addEventListener('mouseleave', func11)
    hl2.addEventListener('mouseover', func2)
    hl2.addEventListener('mouseleave', func11)
    hl3.addEventListener('mouseover', func3)
    hl3.addEventListener('mouseleave', func11)
    hl4.addEventListener('mouseover', func4)
    hl4.addEventListener('mouseleave', func11)
    hl5.addEventListener('mouseover', func5)
    hl5.addEventListener('mouseleave', func11)
    hl6.addEventListener('mouseover', func6)
    hl6.addEventListener('mouseleave', func11)

    function func(){
        hl1.style.cursor = 'pointer'
        col[0].style.color = 'hsl(35, 77%, 62%)'
    }

    function func2(){
        hl2.style.cursor = 'pointer'
        col[1].style.color = 'hsl(35, 77%, 62%)'
    }

    function func3(){
        hl3.style.cursor = 'pointer'
        col[2].style.color = 'hsl(35, 77%, 62%)'
    }

    function func4(){
        hl4.style.cursor = 'pointer'
        col2[0].style.color = 'hsl(5, 85%, 63%)'
    }

    function func5(){
        hl5.style.cursor = 'pointer'
        col2[1].style.color = 'hsl(5, 85%, 63%)'
    }

    function func6(){
        hl6.style.cursor = 'pointer'
        col2[2].style.color = 'hsl(5, 85%, 63%)'
    }

    function func11(){
        col[0].style.color = 'white'
        col[1].style.color = 'white'
        col[2].style.color = 'white'
        col2[0].style.color = 'black'
        col2[1].style.color = 'black'
        col2[2].style.color = 'black'
    }

    var menuLogo = document.getElementById('menu_logo');
    var sideMenu = document.getElementById('side_menu');
    var closeMenu = document.getElementById('close_menu');
    var overlay = document.getElementById('overlay')

    menuLogo.addEventListener('click', function() {
        sideMenu.style.right = '0';
        overlay.style.display = 'block';
    });

    closeMenu.addEventListener('click', function() {
        sideMenu.style.right = '-330px';
        overlay.style.display = 'none';
    });

    overlay.addEventListener('click', function() {
        sideMenu.style.right = '-330px';
        overlay.style.display = 'none';
    })
})



