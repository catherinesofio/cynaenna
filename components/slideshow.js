const timer = 5000;
const smoothness = 1.5;
const transition_speed = 0.05;

function Slideshow(parent, folder, slideshow_imgs) {
    let slides = [];

    let slideshow = document.createElement("div");
    slideshow.classList.add("slideshow");

    slideshow_imgs.forEach((x, i) => {
        let slide = Slide(i, folder + x.filename, x.alt, x.text, x.href);
        slideshow.appendChild(slide);

        slides.push(slide);
    });

    document.getElementById(parent).appendChild(slideshow);

    changeSlide(0, slides);
}

function Slide(id, src, alt, text="", href="") {
    let slide = document.createElement("a");
    slide.href = href;

    slide.setAttribute("id", `slide-${id}`);
    slide.classList.add("slide");
    slide.style.opacity = 0;
    
    let img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    slide.appendChild(img);
    
    let h1 = document.createElement("h1");
    h1.innerHTML = text;
    slide.appendChild(h1);

    return slide;
}

function changeSlide(curr, slides) {
    slides[curr].classList.add("slide-curr");
    slides[curr].style.opacity = 1;
    
    setTimeout(() => {
        const next = (curr + 1) % slides.length;

        slides[next].classList.add("slide-next");
       
       transitionSlides(curr, next, slides)
    }, timer);
}

function transitionSlides(curr, next, slides) {
    let curr_slide = slides[curr];
    let next_slide = slides[next];

    let curr_op = parseFloat(curr_slide.style.opacity);
    let next_op = parseFloat(next_slide.style.opacity);

    curr_slide.style.opacity = (curr_op - transition_speed);
    next_slide.style.opacity = (next_op + transition_speed);

    if (curr_slide.style.opacity > 0) {
        setTimeout(() => { transitionSlides(curr, next, slides); }, smoothness);
    } else {
        curr_slide.style.opacity = 0;

        slides[curr].classList.remove("slide-curr");
        slides[next].classList.remove("slide-next");

        changeSlide(next, slides);
    }
}