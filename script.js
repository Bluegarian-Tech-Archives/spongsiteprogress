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

    if (screenWidth < 1262) 
    {
        document.getElementById('SERVER-INFO-ID').style.width = '98%';
        document.getElementById('serverIPLogo').style.marginRight = 'auto';
        document.getElementById('serverIPLogo').style.marginLeft = 'auto';
    };

    if (screenWidth < 490) 
    {
        document.getElementById('navBarLogoSmall').style.height = '35px';
        document.getElementById('navBarLogoSmall').style.width = '35px';
        document.getElementById('navBarLogoSmall').style.borderStyle = 'none';
        document.getElementById('navBarLogoSmall').style.marginTop = '0.8%';
        document.getElementById('NAV-BAR-ID').style.fontSize = '18px';
        document.getElementById('NAV-BAR-IDB').style.fontSize = '18px';
        document.getElementById('NAV-BAR-IDC').style.fontSize = '18px';
        document.getElementById('example').style.width = '99.5%';
        document.getElementById('example2').style.width = '99.5%';
        document.getElementById('example3').style.width = '99.5%';
        document.getElementById('descriptiontxt').style.fontSize = '15px';
        document.getElementById('serverIPLogo').style.height = 'auto';
    };

    if (screenWidth < 560) {
        document.getElementById('NAV-BAR-IDD').style.display = 'none';
    }

    if (screenHeight < 870) {
        document.getElementById('foot').style.height = '420px';
    };

document.getElementById('navBarLogoSmall').addEventListener('click', function() {
    window.location.href = 'https://bluegarian-tech-archives.github.io/spongsiteprogress/';
})

document.getElementById('NAV-BAR-IDC').addEventListener('click', function(){
    alert('Sorry, the server doesn\'t have shop yet, this button is useless!');
})
document.getElementById('NAV-BAR-IDB').addEventListener('click', function(){
    alert('Sorry, the server doesn\'t have voting system yet, this button is useless!');
})