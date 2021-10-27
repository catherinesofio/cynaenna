function Nav() {
    let location = window.location.pathname;
    let empty = "javascript: void(0)";
    let animation = "animate__animated animate__fadeIn";

    let nav = document.createElement("nav");
    nav.innerHTML = `<h2 id="brand" class="animate__animated animate__slideInLeft">Cynaenna</h2>
    <ul id="navigation" class="flex-container ${animation}">
        <li>
            <a
                href="${(location =="/cynaenna/index.html" || location == "/cynaenna/") ? empty : "/cynaenna/index.html"}"
                class="${(location =="/cynaenna/index.html" || location == "/cynaenna/") ? "active" : ""}"
            >
            <i class="fa fa-home"></i>
            </a>
        </li>
        <li>
            <a 
                href="${(location == "/cynaenna/about.html") ? empty : "/cynaenna/about.html"}"
                class="${(location =="/cynaenna/about.html") ? "active" : ""}"
            >
                <i class="fa fa-user"></i>
            </a>
        </li>
        <li>
            <a 
                href="${(location == "/cynaenna/portfolio.html") ? empty : "/cynaenna/portfolio.html"}"
                class="${(location =="/cynaenna/portfolio.html") ? "active" : ""}"
            >
                <i class="fa fa-palette"></i>
            </a>
        </li>
        <li>
            <a 
                href="${(location == "/cynaenna/commissions.html") ? empty : "/cynaenna/commissions.html"}"
                class="${(location =="/cynaenna/commissions.html") ? "active" : ""}"
            >
                <i class="fa fa-briefcase"></i>
            </a>
        </li>
        <li>
            <a 
                href="${(location == "/cynaenna/contact.html") ? empty : "/cynaenna/contact.html"}"
                class="${(location =="/cynaenna/contact.html") ? "active" : ""}"
            >
                <i class="fa fa-envelope"></i>
            </a>
        </li>
    </ul>`;

    document.body.appendChild(nav);
}

Nav();