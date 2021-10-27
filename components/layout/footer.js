function Footer() {
    let animation = "animate__animated animate__fadeIn";
    
    let footer = document.createElement("footer");
    footer.innerHTML = `<ul id="footer-social" class="flex-container">
        <li>
            <a href="https://www.behance.net/catherinesofio" target="_blank">
                <i class="fab fa-behance ${animation}"></i>
            </a>
        </li>
        <li>
            <a href="https://www.artstation.com/catherinesofio" target="_blank">
                <i class="fab fa-artstation ${animation}"></i>
            </a>
        </li>
        <li>
            <a href="https://www.deviantart.com/catherinesofio" target="_blank">
                <i class="fab fa-deviantart ${animation}"></i>
            </a>
        </li>
        <li>
            <a href="https://twitter.com/cynaenna" target="_blank">
                <i class="fab fa-twitter ${animation}"></i>
            </a>
        </li>
        <li>
            <a href="https://www.instagram.com/cynaenna/" target="_blank">
                <i class="fab fa-instagram ${animation}"></i>
            </a>
        </li>
        <li>
            <a href="https://m.facebook.com/cynaenna.art/" target="_blank">
                <i class="fab fa-facebook ${animation}"></i>
            </a>
        </li>
        <li>
            <a href="https://cynaenna.tumblr.com/" target="_blank">
                <i class="fab fa-tumblr ${animation}"></i>
            </a>
        </li>
    </ul>
    <p id="footer-copyright">© Copyright 2021 Cynaenna. All rights reserved.<br>Made by <a href='https://www.linkedin.com/in/catalina-sofio-avogadro/' target='_blank'>Catalina Sofio Avogadro</a></p>`;

    document.body.appendChild(footer);
}

Footer();