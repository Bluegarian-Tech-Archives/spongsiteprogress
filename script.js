'use strict';

document.getElementById('copyIPbtn').addEventListener('click', function()
    {
        let copyText = document.getElementById("copyIP");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
        alert("IP Copied!");
    }
);

let screenWidth = window.screen.width;
let screenHeight = window.screen.height;
let serverInfoCont = document.getElementById('SERVER-INFO-ID');
let navLogo = document.getElementById('navBarLogoSmall');
let navTextSize = document.getElementById('NAV-BAR-ID');
let navTextSize2 = document.getElementById('NAV-BAR-IDB');
let navTextSize3 = document.getElementById('NAV-BAR-IDC');
let btnTop = document.getElementById('NAV-BAR-IDD');
let ipLogo = document.getElementById('serverIPLogo');

    if (screenWidth < 1262) 
    {
        serverInfoCont.style.width = '98%';
        ipLogo.style.marginRight = 'auto';
        ipLogo.style.marginLeft = 'auto';
    };

    if (screenWidth < 490) 
    {
        navLogo.style.height = '35px';
        navLogo.style.width = '35px';
        navLogo.style.borderStyle = 'none';
        navLogo.style.marginTop = '0.8%';
        navTextSize.style.fontSize = '18px';
        navTextSize2.style.fontSize = '18px';
        navTextSize3.style.fontSize = '18px';
        document.getElementById('example').style.width = '99.5%';
        document.getElementById('example2').style.width = '99.5%';
        document.getElementById('example3').style.width = '99.5%';
        document.getElementById('descriptiontxt').style.fontSize = '15px';
        document.getElementById('serverIPLogo').style.height = 'auto';
    };

    if (screenWidth < 560) {
        btnTop.style.display = 'none';
    }

    if (screenHeight < 870) {
        document.getElementById('foot').style.height = '420px';
    };

document.getElementById('navBarLogoSmall').addEventListener('click', function() {
    window.location.href = 'https://bluegarian-tech-archives.github.io/spongsiteprogress/';
})

navTextSize3.addEventListener('click', function(){
    alert('Sorry, the server doesn\'t have shop yet, this button is useless!');
})
navTextSize2.addEventListener('click', function(){
    alert('Sorry, the server doesn\'t have voting system yet, this button is useless!');
})