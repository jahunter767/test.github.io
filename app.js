"use strict";

async function loadPage(page){
    let main = document.getElementById("main");
    main.innerHTML = await fetch(page)
        .then(res => {
            let modDate = res.headers.get("Last-Modified");
            document.getElementById("last-modified")
                .innerText = `Last Modified: ${modDate}`;
            return res.text();
        }).then(res => res);
} // End-loadPage

window.onload = async function () {
    await loadPage("./home.html");
}; // End-window.onload
