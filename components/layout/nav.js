function Nav() {
    let location = window.location.pathname;
    let empty = "javascript: void(0)";
    let animation = "animate__animated animate__fadeIn";

    let nav = document.createElement("nav");
    nav.innerHTML = `<h2 id="brand" class="animate__animated animate__slideInLeft">Cynaenna</h2>
    <ul id="navigation" class="flex-container ${animation}">
        <li>
            <a
                href="${(location =="/index.html" || location == "/") ? empty : "/index.html"}"
                class="${(location =="/index.html" || location == "/") ? "active" : ""}"
            >
            <i class="fa fa-home"></i>
            </a>
        </li>
        <li>
            <a 
                href="${(location == "/about.html") ? empty : "/about.html"}"
                class="${(location =="/about.html") ? "active" : ""}"
            >
                <i class="fa fa-user"></i>
            </a>
        </li>
        <li>
            <a 
                href="${(location == "/portfolio.html") ? empty : "/portfolio.html"}"
                class="${(location =="/portfolio.html") ? "active" : ""}"
            >
                <i class="fa fa-palette"></i>
            </a>
        </li>
        <li>
            <a 
                href="${(location == "/commissions.html") ? empty : "/commissions.html"}"
                class="${(location =="/commissions.html") ? "active" : ""}"
            >
                <i class="fa fa-briefcase"></i>
            </a>
        </li>
        <li>
            <a 
                href="${(location == "/contact.html") ? empty : "/contact.html"}"
                class="${(location =="/contact.html") ? "active" : ""}"
            >
                <i class="fa fa-envelope"></i>
            </a>
        </li>
    </ul>`;

    document.body.appendChild(nav);
}

Nav();