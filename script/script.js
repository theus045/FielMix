// =========================
// ANIMAÇÃO AO ROLAR A PÁGINA
// =========================

// Seleciona todos os elementos que possuem a classe animar-scroll
const elementosAnimados = document.querySelectorAll(".animar-scroll");

// Cria um observador para detectar quando os elementos entram na tela
const observador = new IntersectionObserver(
    (entradas) => {
        entradas.forEach((entrada) => {

            // Se o elemento estiver visível
            if (entrada.isIntersecting) {
                entrada.target.classList.add("aparecer");

                // Para de observar depois que a animação acontece
                observador.unobserve(entrada.target);
            }

        });
    },
    {
        threshold: 0.15
    }
);

// Faz o observador acompanhar cada elemento
elementosAnimados.forEach((elemento) => {
    observador.observe(elemento);
});

// =========================
// MENU MOBILE
// =========================

const botaoMenu = document.querySelector(".menu-toggle");
const linksMenu = document.querySelector(".links-menu");

botaoMenu.addEventListener("click", () => {
    linksMenu.classList.toggle("ativo");
});

// =========================
// SLIDER DO HERO
// =========================

const slides = document.querySelectorAll(".slide");

let slideAtual = 0;

function trocarSlide() {

    slides[slideAtual].classList.remove("ativo");

    slideAtual++;

    if (slideAtual >= slides.length) {
        slideAtual = 0;
    }

    slides[slideAtual].classList.add("ativo");
}

setInterval(trocarSlide, 5000);