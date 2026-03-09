// scripts.js - Fonctions communes
function initPreHeader() {
    const preHeader = document.getElementById('preHeader');
    if (!preHeader) return;
    window.addEventListener('scroll', () => {
        preHeader.classList.toggle('hide', window.scrollY > 60);
    });
}

function setActiveNavLink() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === currentPage);
    });
}

// Optionnel : Pause du défilement des logos au survol
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.partners-track');
    if (track) {
        track.addEventListener('mouseenter', () => {
            track.style.animationPlayState = 'paused';
        });
        track.addEventListener('mouseleave', () => {
            track.style.animationPlayState = 'running';
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    initPreHeader();
    setActiveNavLink();
});