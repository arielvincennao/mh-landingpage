document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    const line1 = document.getElementById("line1");
    const line2 = document.getElementById("line2");
    const line3 = document.getElementById("line3");


    const toggleMenu = () => {
        mobileMenu.classList.toggle("hidden");

        if (!mobileMenu.classList.contains("hidden")) {
            line1.classList.add("rotate-45", "translate-y-[7px]", "w-6");
            line2.classList.add("opacity-0");
            line3.classList.add("-rotate-45", "-translate-y-[7px]", "w-6");
        } else {
            line1.classList.remove("rotate-45", "translate-y-[7px]", "w-6");
            line2.classList.remove("opacity-0");
            line3.classList.remove("-rotate-45", "-translate-y-[7px]", "w-6");
        }
    };


    menuBtn.addEventListener("click", toggleMenu);


    window.addEventListener("scroll", () => {
        if (!mobileMenu.classList.contains("hidden")) {
            mobileMenu.classList.add("hidden");
            line1.classList.remove("rotate-45", "translate-y-[7px]", "w-6");
            line2.classList.remove("opacity-0");
            line3.classList.remove("-rotate-45", "-translate-y-[7px]", "w-6");
        }
    });
});

$(document).ready(function () {
    $('.client-carousel').slick({
        dots: true,
        infinite: true,           // Carrusel infinito
        speed: 500,               // Velocidad de transición
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,           // Autoplay activado
        autoplaySpeed: 3500,      // Tiempo de espera entre slides
        arrows: false,
        pauseOnHover: true,
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const elements = [
        { selector: ".fadeIn", classes: ["animate__animated", "animate__fadeIn", "animate__slower"] },
        { selector: ".slideLeft", classes: ["animate__animated", "animate__slideInLeft", "animate__slow"] },
        { selector: ".slideRight", classes: ["animate__animated", "animate__slideInRight", "animate__slow"] },
        { selector: ".flipX", classes: ["animate__animated", "animate__flipInX", "animate__slow"] },
        { selector: ".flipY", classes: ["animate__animated", "animate__flipInY", "animate__slow"] },
        { selector: ".fadeInUp", classes: ["animate__animated", "animate__fadeInUp", "animate__slow"] }
    ];

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const targetElement = entry.target;
                    const animation = elements.find(el => targetElement.classList.contains(el.selector.replace(".", "")));

                    if (animation) {
                        setTimeout(() => {
                            targetElement.classList.remove("hiddenElement");
                            targetElement.classList.add(...animation.classes);
                        }, 100);

                        observer.unobserve(targetElement);
                    }
                }
            });
        },
        { threshold: 0.2 }
    );

    elements.forEach(({ selector }) => {
        document.querySelectorAll(selector).forEach((element) => {
            observer.observe(element);
        });
    });
});