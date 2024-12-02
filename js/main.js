// js/main.js

// Função para scroll suave ao clicar nos links do menu
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Evita comportamento padrão do link
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Botão de voltar ao topo
const backToTopBtn = document.createElement('button');
backToTopBtn.textContent = '⬆';
backToTopBtn.id = 'back-to-top';
document.body.appendChild(backToTopBtn);

// Estilizando o botão dinamicamente (ou use CSS)
backToTopBtn.style.position = 'fixed';
backToTopBtn.style.bottom = '20px';
backToTopBtn.style.right = '20px';
backToTopBtn.style.padding = '10px';
backToTopBtn.style.border = 'none';
backToTopBtn.style.borderRadius = '50%';
backToTopBtn.style.backgroundColor = '#FDD835';
backToTopBtn.style.color = '#4F4F4F';
backToTopBtn.style.cursor = 'pointer';
backToTopBtn.style.display = 'none'; // Escondido inicialmente

// Mostrar/esconder botão com base no scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

// Ação do botão para voltar ao topo
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
// Menu responsivo
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

