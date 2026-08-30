// =====================================
// 1. Multi-Language (ID / EN) & Dark Mode System
// =====================================
const i18n = {
  id: {
    nav_home: 'Beranda',
    nav_about: 'Tentang',
    nav_stack: 'Tech Stack',
    nav_experience: 'Pengalaman',
    nav_portfolio: 'Portofolio',
    nav_contact: 'Kontak',

    hero_status: '🟢 Available for Freelance & Full-time (Jakarta / Remote)',
    hero_bio: 'Developer yang antusias mengembangkan aplikasi web berkinerja tinggi, arsitektur database efisien, serta sistem full-stack modern.',
    hero_contact_btn: 'Hubungi WA',
    hero_share_btn: 'Share Portofolio',

    about_title: 'Tentang & Filosofi',
    about_quote: '"Pada hantaman palu ke-101, batu tersebut terbelah. Bukan karena hantaman terakhirnya, melainkan akumulasi dari seluruh usaha sebelumnya."',
    about_desc: 'Setiap baris kode dan eksperimen adalah investasi jangka panjang untuk membangun perangkat lunak berkualitas.',

    stack_title: 'Keahlian & Tech Stack',
    stack_subtitle: 'Teknologi utama yang digunakan dalam membangun solusi web yang scalable.',
    stack_backend: 'Backend & Logic',
    stack_database: 'Database & DevOps',
    stack_frontend: 'Frontend, UI & Tools',

    exp_title: 'Pengalaman & Edukasi',
    exp_subtitle: 'Rekam jejak profesional dan latar belakang sertifikasi.',
    exp_work_title: '💼 Pengalaman Kerja',
    exp_edu_title: '🎓 Edukasi & Sertifikasi',

    work_1_title: 'PT Gadai Mulia',
    work_1_period: 'Mei 2025 - Sekarang',
    work_1_role: 'Full-Stack Developer',

    work_2_title: 'PT Integra Putra Mandiri',
    work_2_period: 'Jan 2023 - Apr 2025',
    work_2_role: 'Web Developer',

    edu_1_title: 'BNSP Certification',
    edu_1_desc: 'Junior Web Dev & Graphic Designer',

    edu_2_title: 'BuildWithAngga',
    edu_2_desc: 'Full-Stack React & Laravel',

    portfolio_title: 'Katalog Portofolio Lengkap',
    portfolio_subtitle: 'Kumpulan aplikasi & sistem unggulan yang telah dikembangkan.',

    contact_title: 'Kontak & Diskusi',
    contact_subtitle: 'Punya ide projek atau ingin berdiskusi? Jangan ragu menghubungi saya!',
    contact_submit: 'Kirim Pesan',

    ig_title: 'Instagram Feed (Static No-Backend)',
    ig_subtitle: 'Feed galeri aktivitas dan kreasi terbaru dari Instagram.'
  },
  en: {
    nav_home: 'Home',
    nav_about: 'About',
    nav_stack: 'Tech Stack',
    nav_experience: 'Experience',
    nav_portfolio: 'Portfolio',
    nav_contact: 'Contact',

    hero_status: ' Available for Freelance & Full-time (Jakarta / Remote)',
    hero_bio: 'Passionate developer building high-performance web applications, efficient database architectures, and modern full-stack systems.',
    hero_contact_btn: 'Contact WA',
    hero_share_btn: 'Share Portfolio',

    about_title: 'About & Philosophy',
    about_quote: '"At the 101st blow, the stone splits. Not because of that last strike alone, but from the accumulation of all previous efforts."',
    about_desc: 'Every line of code and experiment is a long-term investment in building top-quality software.',

    stack_title: 'Skills & Tech Stack',
    stack_subtitle: 'Core technologies used to build scalable web solutions.',
    stack_backend: 'Backend & Logic',
    stack_database: 'Database & DevOps',
    stack_frontend: 'Frontend, UI & Tools',

    exp_title: 'Experience & Education',
    exp_subtitle: 'Professional track record and background certifications.',
    exp_work_title: '💼 Work Experience',
    exp_edu_title: '🎓 Education & Certifications',

    work_1_title: 'PT Gadai Mulia',
    work_1_period: 'May 2025 - Present',
    work_1_role: 'Full-Stack Developer',

    work_2_title: 'PT Integra Putra Mandiri',
    work_2_period: 'Jan 2023 - Apr 2025',
    work_2_role: 'Web Developer',

    edu_1_title: 'BNSP Certification',
    edu_1_desc: 'Junior Web Dev & Graphic Designer',

    edu_2_title: 'BuildWithAngga',
    edu_2_desc: 'Full-Stack React & Laravel',

    portfolio_title: 'Full Portfolio Catalog',
    portfolio_subtitle: 'A collection of featured applications & systems built with care.',

    contact_title: "Contact & Let's Talk",
    contact_subtitle: 'Have a project idea or want to collaborate? Feel free to reach out!',
    contact_submit: 'Send Message',

    ig_title: 'Instagram Feed (Static No-Backend)',
    ig_subtitle: 'Gallery feed of recent activities and updates from Instagram.'
  }
};

let currentLang = localStorage.getItem('lang') || 'id';

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  
  const langFlag = document.querySelector('#lang-flag');
  const langLabel = document.querySelector('#lang-label');
  if (langFlag && langLabel) {
    langFlag.textContent = lang === 'id' ? 'id' : 'en';
    langLabel.textContent = lang.toUpperCase();
  }

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang] && i18n[lang][key]) {
      el.textContent = i18n[lang][key];
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  applyLanguage(currentLang);

  const langBtn = document.querySelector('#lang-toggle');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      const nextLang = currentLang === 'id' ? 'en' : 'id';
      applyLanguage(nextLang);
    });
  }
});

// =====================================
// 2. Dark Mode Toggle
// =====================================
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

if (!localStorage.theme) {
  localStorage.theme = 'dark';
}

if (localStorage.theme === 'dark') {
  html.classList.add('dark');
  if (darkToggle) darkToggle.checked = true;
} else {
  html.classList.remove('dark');
  if (darkToggle) darkToggle.checked = false;
}

if (darkToggle) {
  darkToggle.addEventListener('change', function () {
    if (darkToggle.checked) {
      html.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      html.classList.remove('dark');
      localStorage.theme = 'light';
    }
  });
}

// =====================================
// 3. Navbar Fixed & Scroll Progress
// =====================================
const header = document.querySelector('header');
const backToTop = document.querySelector('#back-to-top');
const scrollProgressBar = document.querySelector('#scroll-progress');

window.onscroll = function () {
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }

  if (window.pageYOffset > 400) {
    if (backToTop) {
      backToTop.classList.remove('hidden');
      backToTop.classList.add('flex');
    }
  } else {
    if (backToTop) {
      backToTop.classList.remove('flex');
      backToTop.classList.add('hidden');
    }
  }

  if (scrollProgressBar) {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    scrollProgressBar.style.width = scrolled + '%';
  }

  highlightNavOnScroll();
};

if (backToTop) {
  backToTop.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// =====================================
// 4. Hamburger Menu
// =====================================
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
  });

  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('hamburger-active');
      navMenu.classList.add('hidden');
    });
  });

  window.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
      hamburger.classList.remove('hamburger-active');
      navMenu.classList.add('hidden');
    }
  });
}

// =====================================
// 5. Highlight Nav Menu on Scroll
// =====================================
function highlightNavOnScroll() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('#nav-menu a[href^="#"]');
  let currentSectionId = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;
    if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
      currentSectionId = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('text-primary', 'font-bold');
    if (link.getAttribute('href') === `#${currentSectionId}`) {
      link.classList.add('text-primary', 'font-bold');
    }
  });
}

// =====================================
// 6. Dynamic Typing Animation for Roles
// =====================================
const typingElement = document.querySelector('#typing-text');
if (typingElement) {
  const words = [
    'Full-Stack Web Developer',
    'Laravel & Vue.js Specialist',
    'React & Node.js Engineer',
    'RESTful API Architect',
    'Scalable Web Solution Builder'
  ];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typeSpeed = 90;
  const deleteSpeed = 50;
  const delayNext = 2000;

  function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
      typingElement.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingElement.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    let timeout = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && charIndex === currentWord.length) {
      timeout = delayNext;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      timeout = 400;
    }

    setTimeout(type, timeout);
  }

  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, 500);
  });
}

// =====================================
// 7. IntersectionObserver Scroll Reveal
// =====================================
document.addEventListener('DOMContentLoaded', () => {
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));
});

// =====================================
// 8. Interactive Portfolio Filters
// =====================================
document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectItems = document.querySelectorAll('.project-card');

  if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => {
          b.classList.remove('bg-primary', 'text-white', 'shadow-lg');
          b.classList.add('bg-slate-200', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300');
        });

        btn.classList.remove('bg-slate-200', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300');
        btn.classList.add('bg-primary', 'text-white', 'shadow-lg');

        const filter = btn.getAttribute('data-filter');

        projectItems.forEach(item => {
          if (filter === 'all' || item.getAttribute('data-category').includes(filter)) {
            item.style.display = 'block';
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'scale(1)';
            }, 50);
          } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.95)';
            setTimeout(() => {
              item.style.display = 'none';
            }, 300);
          }
        });
      });
    });
  }
});

// =====================================
// 9. Contact Form Interactive Feedback
// =====================================
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;
    
    btn.innerHTML = `<span class="inline-flex items-center gap-2"><svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Sending...</span>`;
    btn.disabled = true;

    setTimeout(() => {
      btn.innerHTML = `<span class="inline-flex items-center gap-2">✓ Pesan Terkirim!</span>`;
      btn.classList.remove('bg-primary');
      btn.classList.add('bg-emerald-500');

      showToast('Terima kasih! Pesan Anda telah berhasil terkirim ✨');
      contactForm.reset();

      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.disabled = false;
        btn.classList.remove('bg-emerald-500');
        btn.classList.add('bg-primary');
      }, 3500);
    }, 1200);
  });
}

function showToast(message) {
  let toast = document.querySelector('#toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notification';
    toast.className = 'fixed bottom-8 right-8 z-[99999] bg-slate-900 text-white px-6 py-4 rounded-xl shadow-2xl border border-primary/40 flex items-center gap-3 transition-all duration-500 transform translate-y-20 opacity-0';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span class="text-primary text-xl">🎉</span> <span>${message}</span>`;
  
  setTimeout(() => {
    toast.classList.remove('translate-y-20', 'opacity-0');
  }, 10);

  setTimeout(() => {
    toast.classList.add('translate-y-20', 'opacity-0');
  }, 4000);
}