function toggleMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');
  const body = document.querySelector('body');
  menuToggle.classList.toggle('active');
  nav.classList.toggle('active');
  
  if (menuToggle.classList.contains('active')) {
      menuToggle.innerHTML = '&times;'; // Cross icon
  } else {
      menuToggle.innerHTML = '&#9776;'; // Burger icon
  }
}

let navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
      const nav = document.querySelector('nav');
      const menuToggle = document.querySelector('.menu-toggle');
      const body = document.querySelector('body');
      
      nav.classList.remove('active');
      menuToggle.classList.remove('active');
      body.classList.remove('blur-bg');
      menuToggle.innerHTML = '&#9776;'; 
  });
});

// form pemesanan
const scriptURL = 'https://script.google.com/macros/s/AKfycby3sA8zkYrn-15VNn7j0HZNlaCs8X1Z0CnojLPEED2SLMHIMu4ctQXwk4WesKQkludpCw/exec';
const form = document.forms['form-vc-receh48'];
const loading = document.getElementById('loading');
const output = document.getElementById('output');

// Tambahkan variabel untuk mengontrol status form
let formIsOpen = false;  // Set ke 'false' untuk menutup form

form.addEventListener('submit', e => {
  e.preventDefault();

  form.reset();

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

// eye password
let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");

eyeicon.onclick = function () {
  if (password.type == "password") {
    password.type = "text";
    eyeicon.src = "eye-open.png";
  } else {
    password.type = "password";
    eyeicon.src = "eye-close.png";
  }
}


// Animasi Masuk Section Home/Beranda
ScrollReveal().reveal('.home-content h1', { delay: 400, origin: 'top', distance: '100px' });
ScrollReveal().reveal('.home-content h3', { delay: 600, origin: 'bottom', distance: '100px' });
ScrollReveal().reveal('.home-content p', { delay: 900, origin: 'left', distance: '100px' });
ScrollReveal().reveal('.social-icons p', { delay: 900, origin: 'right', distance: '100px' });
ScrollReveal().reveal('.home-img', { delay: 700, origin: 'left', distance: '200px' });
