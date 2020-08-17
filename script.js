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

let serverInfoCont = document.getElementById('SERVER-INFO-ID');
let navLogo = document.getElementById('navBarLogoSmall');
let screenWidth = window.screen.width;
let navTextSize = document.getElementById('NAV-BAR-ID');
let navTextSize2 = document.getElementById('NAV-BAR-IDB');
let navTextSize3 = document.getElementById('NAV-BAR-IDC');

    if (screenWidth < 1262) 
    {
        serverInfoCont.style.width = '98%';
    };

    if (screenWidth < 490) 
    {
        navLogo.style.height = '35px';
        navLogo.style.width = '35px';
        navLogo.style.borderStyle = 'none';
        navLogo.style.marginTop = '0.8%';
    };

    if (screenWidth < 490) 
    {
        navTextSize.style.fontSize = '18px';
    };

    if (screenWidth < 490) 
    {
        navTextSize2.style.fontSize = '18px';
    };

    if (screenWidth < 490) 
    {
        navTextSize3.style.fontSize = '18px';
    };

navTextSize2.addEventListener('click', function(){
    alert('Sorry, the server doesn\'t have shop yet, this button is useless!');
})
navTextSize3.addEventListener('click', function(){
    alert('Sorry, the server doesn\'t have voting system yet, this button is useless!');
})