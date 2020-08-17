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

if (screenWidth < 1262) {
    serverInfoCont.style.width = '98%';
};

if (screenWidth < 390) {
    navLogo.style.height = '35px';
    navLogo.style.width = '35px';
    navLogo.style.borderStyle = 'none';
    navLogo.style.marginTop = '2%';
};
