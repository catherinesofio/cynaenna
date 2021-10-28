function CardContainer(parent, folder, cards_imgs, size=null, popup=false) {
    let cardContainer = document.createElement("div");
    cardContainer.classList.add("flex-container");

    cards_imgs.forEach(x => {
        let card = Card(folder + x.filename, x.alt, size, popup);
        cardContainer.appendChild(card);
    });
    
    document.getElementById(parent).appendChild(cardContainer);
}

function Card(src, alt, size, popup) {
    let card = document.createElement("div");
    card.classList.add("box", "card", "animate__animated", "animate__bounceIn");

    let img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    if (popup) {
        img.setAttribute("popup", true);
        img.onclick = (e) => {
            OpenPopUp(src, alt);
        };
    }
    card.appendChild(img);
    if (size) {
        img.style.width = size;
        img.style.height = size;
    }
    
    let p = document.createElement("p");
    p.innerText = alt;
    card.appendChild(p);

    return card;
}

function OpenPopUp(src, alt) {
    let content = document.createElement("img");
    content.src = src;
    content.alt = alt;

    PopUp(content);
}