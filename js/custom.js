$(document).ready(function () {
    $("#slider1").owlCarousel({
        items: 1,
        margin: 10,
        dots: false,
        navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
        loop: true,
        mouseDrag: false,
        smartSpeed: 1000,
        autoplay: true,
        nav: true
    });

    $("#slider2").owlCarousel({
        items: 1,
        mouseDrag: false,
    });

    $("#slider2-1").owlCarousel({
        items: 1,
    });

    $("#slider3").owlCarousel({
        items: 1,
        mouseDrag: false,
        // dots: false,
    });

    new WOW().init();
});

// function btn1()
// {
//     document.getElementById('btn1').style.color="green";
// }

// function btn1()
// {
//     document.getElementById('btn1').style.color="green";
// }


// X Small 0 to 575px
var xsm = window.matchMedia("(min-width: 0px)");
var xsm = window.matchMedia("(max-width: 575px)");

// Small 576px to 767px
var sm = window.matchMedia("(min-width: 576px)");
var sm = window.matchMedia("(max-width: 767px)");

// Medium 768px to 991px
var md = window.matchMedia("(min-width:768px)");
var md = window.matchMedia("(max-width:991px)");

// Large 992 to  Up

var lg = window.matchMedia("(min-width:992px)");

if (xsm.matches) {
    document.getElementById('a1').style.borderBottom = '1px solid black';
    document.getElementById('a2').style.borderBottom = '1px solid transparent';
    document.getElementById('a3').style.borderBottom = '1px solid transparent';

    document.getElementById('a1').style.fontWeight = 'bold';
}

let tabOne=true,tabTwo=false,tabThree=false;

function under_line(n) {

    // X SMALL
    if (xsm.matches) {
        if (n == 1) {
            document.getElementById('a' + n).style.borderBottom = '1px solid black';
            document.getElementById('a2').style.borderBottom = '1px solid transparent';
            document.getElementById('a3').style.borderBottom = '1px solid transparent';

            document.getElementById('a' + n).style.fontWeight = 'bold';
            document.getElementById('a2').style.fontWeight = 'normal';
            document.getElementById('a3').style.fontWeight = 'normal';

            document.getElementById('a' + n).style.transition = "0.3s";
        }
        else if (n == 2) {
            document.getElementById('a' + n).style.borderBottom = '1px solid black';
            document.getElementById('a1').style.borderBottom = '1px solid transparent';
            document.getElementById('a3').style.borderBottom = '1px solid transparent';

            document.getElementById('a' + n).style.fontWeight = 'bold';
            document.getElementById('a1').style.fontWeight = 'normal';
            document.getElementById('a3').style.fontWeight = 'normal';

            document.getElementById('a' + n).style.transition = "0.3s";
        }
        else if (n == 3) {
            document.getElementById('a' + n).style.borderBottom = '1px solid black';
            document.getElementById('a1').style.borderBottom = '1px solid transparent';
            document.getElementById('a2').style.borderBottom = '1px solid transparent';

            document.getElementById('a' + n).style.fontWeight = 'bold';
            document.getElementById('a1').style.fontWeight = 'normal';
            document.getElementById('a2').style.fontWeight = 'normal';

            document.getElementById('a' + n).style.transition = "0.3s";
        }
    }
    // Small
    else if (sm.matches) {
        if (n == 1) {
            document.getElementById('a' + n).style.border = '1px solid #044B61';
            document.getElementById('a2').style.border = '1px solid transparent';
            document.getElementById('a3').style.border = '1px solid transparent';

            document.getElementById('a' + n).style.borderRadius = '40px';

            document.getElementById('a' + n).style.fontWeight = 'bold';
            document.getElementById('a2').style.fontWeight = 'normal';
            document.getElementById('a3').style.fontWeight = 'normal';

            document.getElementById('a' + n).style.padding = '8px 20px';
            document.getElementById('a2').style.padding = '8px 15px';
            document.getElementById('a3').style.padding = '8px 15px';

            document.getElementById('a' + n).style.transition = "0.3s";

        }
        else if (n == 2) {
            document.getElementById('a' + n).style.border = '1px solid #044B61';
            document.getElementById('a1').style.border = '1px solid transparent';
            document.getElementById('a3').style.border = '1px solid transparent';

            document.getElementById('a' + n).style.borderRadius = '40px';

            document.getElementById('a' + n).style.fontWeight = 'bold';
            document.getElementById('a1').style.fontWeight = 'normal';
            document.getElementById('a3').style.fontWeight = 'normal';

            document.getElementById('a' + n).style.padding = '8px 20px';
            document.getElementById('a1').style.padding = '8px 15px';
            document.getElementById('a3').style.padding = '8px 15px';
            document.getElementById('a' + n).style.transition = "0.3s";


        }
        else if (n == 3) {
            document.getElementById('a' + n).style.border = '1px solid #044B61';
            document.getElementById('a1').style.border = '1px solid transparent';
            document.getElementById('a2').style.border = 'transparent';

            document.getElementById('a' + n).style.borderRadius = '40px';

            document.getElementById('a' + n).style.fontWeight = 'bold';
            document.getElementById('a1').style.fontWeight = 'normal';
            document.getElementById('a2').style.fontWeight = 'normal';

            document.getElementById('a' + n).style.padding = '8px 20px';
            document.getElementById('a1').style.padding = '8px 15px';
            document.getElementById('a2').style.padding = '8px 15px';
            document.getElementById('a' + n).style.transition = "0.3s";
        }
    }
    // Medium
    else if (md.matches) {
        if (n == 1) {
            document.getElementById('a' + n).style.border = '1px solid #044B61';
            document.getElementById('a2').style.border = '1px solid transparent';
            document.getElementById('a3').style.border = '1px solid transparent';

            document.getElementById('a' + n).style.fontWeight = 'bold';
            document.getElementById('a2').style.fontWeight = 'normal';
            document.getElementById('a3').style.fontWeight = 'normal';

            document.getElementById('a' + n).style.transition = '0.3s';
        }
        else if (n == 2) {
            document.getElementById('a' + n).style.border = '1px solid #044B61';
            document.getElementById('a1').style.border = '1px solid transparent';
            document.getElementById('a3').style.border = '1px solid transparent';

            document.getElementById('a' + n).style.fontWeight = 'bold';
            document.getElementById('a1').style.fontWeight = 'normal';
            document.getElementById('a3').style.fontWeight = 'normal';

            document.getElementById('a' + n).style.transition = '0.3s';
        }
        else if (n == 3) {
            document.getElementById('a' + n).style.border = '1px solid #044B61';
            document.getElementById('a1').style.border = '1px solid transparent';
            document.getElementById('a2').style.border = '1px solid transparent';

            document.getElementById('a' + n).style.fontWeight = 'bold';
            document.getElementById('a1').style.fontWeight = 'normal';
            document.getElementById('a2').style.fontWeight = 'normal';

            document.getElementById('a' + n).style.transition = '0.3s';
        }
    }
    // Large
    else if (lg.matches) {
        if (n == 1) {
            document.getElementById('a' + n).style.border = '1px solid #044B61';
            document.getElementById('a2').style.border = '1px solid transparent';
            document.getElementById('a3').style.border = '1px solid transparent';

            document.getElementById('a' + n).style.fontWeight = 'bold';
            document.getElementById('a2').style.fontWeight = 'normal';
            document.getElementById('a3').style.fontWeight = 'normal';

            document.getElementById('a' + n).style.transition = '0.3s';
        }
        else if (n == 2) {
            document.getElementById('a' + n).style.border = '1px solid #044B61';
            document.getElementById('a1').style.border = '1px solid transparent';
            document.getElementById('a3').style.border = '1px solid transparent';

            document.getElementById('a' + n).style.fontWeight = 'bold';
            document.getElementById('a1').style.fontWeight = 'normal';
            document.getElementById('a3').style.fontWeight = 'normal';

            document.getElementById('a' + n).style.transition = '0.3s';
        }
        else if (n == 3) {
            document.getElementById('a' + n).style.border = '1px solid #044B61';
            document.getElementById('a1').style.border = '1px solid transparent';
            document.getElementById('a2').style.border = '1px solid transparent';

            document.getElementById('a' + n).style.fontWeight = 'bold';
            document.getElementById('a1').style.fontWeight = 'normal';
            document.getElementById('a2').style.fontWeight = 'normal';

            document.getElementById('a' + n).style.transition = '0.3s';
        }
    }

    showTab(n);
}


function showTab(tabNumber) {
    // Hide all tab contents
    const allTabs = document.querySelectorAll('.tab-content');
    allTabs.forEach(tab => {
      tab.style.display = 'none';
    });
  
    // Show the selected tab
    document.getElementById(`tab${tabNumber}`).style.display = 'flex';
  
    // Update active button
  }
  
  // Show the first tab by default
  showTab(1);
  


