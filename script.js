'use strict';

document.getElementById('copyIPbtn').addEventListener('click', function()
    {
        let copyText = document.getElementById("copyIP");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
        alert("IP Copied!");
    }
)
