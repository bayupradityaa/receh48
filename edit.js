function toggleMenu() {
  const nav = document.getElementById('nav-menu');
  const menuToggle = document.querySelector('.menu-toggle');
  nav.classList.toggle('active');
  menuToggle.classList.toggle('active');
}

function closeMenu() {
  const nav = document.getElementById('nav-menu');
  const menuToggle = document.querySelector('.menu-toggle');
  nav.classList.remove('active');
  menuToggle.classList.remove('active');
}

// form pemesanan
const scriptURL = 'https://script.google.com/macros/s/AKfycby3sA8zkYrn-15VNn7j0HZNlaCs8X1Z0CnojLPEED2SLMHIMu4ctQXwk4WesKQkludpCw/exec';
const form = document.forms['form-vc-receh48'];
const loading = document.getElementById('loading');
const output = document.getElementById('output');

// Tambahkan variabel untuk mengontrol status form
let formIsOpen = false;  // Set ke 'false' untuk menutup form

form.addEventListener('submit', e => {
  e.preventDefault();
  
  // Periksa apakah form sedang terbuka
  if (!formIsOpen) {
    Swal.fire({
      icon: 'error',
      title: 'Masih Kami Tutup',
      text: 'Sabar yaa belum ada jadwal timetable nya.',
      confirmButtonText: 'OK'
    });
    return;
  }
});

// animasi password
const passwordField = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');

togglePassword.addEventListener('click', function() {
  const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordField.setAttribute('type', type);
  this.textContent = type === 'password' ? '👁️' : '😎';
});

// Animasi Masuk Section Home/Beranda
ScrollReveal().reveal('.home-content h1', { delay: 400, origin: 'top', distance: '100px' });
ScrollReveal().reveal('.home-content h3', { delay: 600, origin: 'bottom', distance: '100px' });
ScrollReveal().reveal('.home-content p', { delay: 900, origin: 'left', distance: '100px' });
ScrollReveal().reveal('.social-icons p', { delay: 900, origin: 'right', distance: '100px' });
ScrollReveal().reveal('.home-img', { delay: 700, origin: 'left', distance: '200px' });