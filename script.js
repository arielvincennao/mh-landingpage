document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menu-btn");
    const line1 = document.getElementById("line1");
    const line2 = document.getElementById("line2");
    const line3 = document.getElementById("line3");
    const mobileMenu = document.getElementById("mobile-menu"); // 🔹 Selecciona el menú

    // Posicionar las líneas correctamente
    line1.style.top = "25%";
    line2.style.top = "50%";
    line3.style.top = "75%";

    menuBtn.addEventListener("click", () => {
        menuBtn.classList.toggle("open");

        if (menuBtn.classList.contains("open")) {
            line1.style.transform = "translateY(10px) rotate(45deg)";
            line2.style.opacity = "0";
            line3.style.transform = "translateY(-10px) rotate(-45deg)";

            // 🔹 Mostrar menú
            mobileMenu.classList.remove("hidden");
            mobileMenu.classList.add("flex", "flex-col");
        } else {
            line1.style.transform = "translateY(0) rotate(0)";
            line2.style.opacity = "1";
            line3.style.transform = "translateY(0) rotate(0)";

            // 🔹 Ocultar menú
            mobileMenu.classList.add("hidden");
            mobileMenu.classList.remove("flex", "flex-col");
        }
    });

    // 🔹 Cerrar menú al hacer scroll
    window.addEventListener("scroll", () => {
        if (!mobileMenu.classList.contains("hidden")) {
            mobileMenu.classList.add("hidden");
            menuBtn.classList.remove("open");

            line1.style.transform = "translateY(0) rotate(0)";
            line2.style.opacity = "1";
            line3.style.transform = "translateY(0) rotate(0)";
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
        { selector: ".fadeIn", classes: ["animate__animated", "animate__fadeIn", "animate__fast"] },
        { selector: ".slideLeft", classes: ["animate__animated", "animate__slideInLeft", "animate__fast"] },
        { selector: ".slideRight", classes: ["animate__animated", "animate__slideInRight", "animate__fast"] },
        { selector: ".flipX", classes: ["animate__animated", "animate__flipInX", "animate__fast"] },
        { selector: ".flipY", classes: ["animate__animated", "animate__flipInY", "animate__fast"] },
        { selector: ".fadeInUp", classes: ["animate__animated", "animate__fadeInUp", "animate__fast"] }
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