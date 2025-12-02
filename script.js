// 1. Siteye Hoşgeldin Mesajı (Konsola)
console.log("Siteye hoşgeldiniz!");

// 2. Menü Aç/Kapa Butonu
const menuBtn = document.querySelector('.menu-button');
const navMenu = document.querySelector('nav ul');

if (menuBtn && navMenu) {
  menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

// 3. Footer'da Dinamik Yıl Gösterme
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// 4. İçerik Göster/Gizle Butonu
const toggleBtn = document.getElementById('toggle-btn');
const extraContent = document.getElementById('extra-content');

if (toggleBtn && extraContent) {
  toggleBtn.addEventListener('click', () => {
    if (extraContent.style.display === 'none' || extraContent.style.display === '') {
      extraContent.style.display = 'block';
      toggleBtn.textContent = 'Daha Az Göster';
    } else {
      extraContent.style.display = 'none';
      toggleBtn.textContent = 'Daha Fazla Göster';
    }
  });
}

// 5. Basit Form Doğrulama
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', (e) => {
    const emailInput = form.email;
    if (emailInput && !emailInput.value.includes('@')) {
      alert('Lütfen geçerli bir e-posta girin.');
      e.preventDefault();
    }
  });
}
