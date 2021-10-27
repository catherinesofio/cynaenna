function Banner(id, src, alt, title) {
    let parent = document.getElementById(id);

    let img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    parent.appendChild(img);
    
    let h1 = document.createElement("h1");
    h1.innerHTML = title;
    parent.appendChild(h1);
}