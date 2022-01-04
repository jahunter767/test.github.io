"use strict";

window.onload = async function () {
    let body = document.getElementsByTagName("body")[0];

    let navBar = await fetch("./nav-bar.html")
        .then(res => res.text())
        .then(res => res);

    let footer = await fetch("./footer.html")
        .then(res => res.text())
        .then(res => res);

    body.innerHTML = `${navBar}\n${body.innerHTML}\n${footer}`;

    let modDate = document.getElementById("last-modified");
    modDate.innerText = `Last Modified: ${document.lastModified}`;
}; // End-window.onload
