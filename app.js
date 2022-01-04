"use strict";

async function loadPage(page){
    let main = document.getElementById("main");
    main.innerHTML = await fetch(page)
        .then(res => {
            for (let v of res.headers.keys()){
                console.log(v);
            }
            console.log(res.headers.get("Last-Modified"));
            return res.text();
        }).then(res => res);

    let modDate = document.getElementById("last-modified");
    modDate.innerText = `Last Modified: ${document.lastModified}`;
} // End-loadPage

window.onload = async function () {
    await loadPage("./home.html");
}; // End-window.onload
