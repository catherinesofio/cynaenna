function PopUp(content) {
    let popUp = document.createElement("div");
    popUp.setAttribute("id", "popup");

    let popUpBackground = document.createElement("div");
    popUpBackground.classList.add("popup-background");
    popUpBackground.onclick = ClosePopUp;
    popUp.appendChild(popUpBackground);

    let popUpContent = document.createElement("div");
    popUpContent.classList.add("popup-content");
    popUpContent.appendChild(content);
    popUp.appendChild(popUpContent);

    document.body.appendChild(popUp);
}

function ClosePopUp() {
    let popUp = document.getElementById("popup").remove();
}