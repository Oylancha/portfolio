/* ============================================
   LANGUAGE SWITCHER
   ============================================ */
function setLanguage(lang) {
  // Update HTML elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update active class on buttons
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    }
  });

  // Save preference
  localStorage.setItem('preferredLang', lang);
  document.documentElement.lang = lang;
}

// Initialize language on load
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('preferredLang') || 'en';
  setLanguage(savedLang);

  // Add click listeners to all language buttons
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const lang = e.target.getAttribute('data-lang');
      setLanguage(lang);
    });
  });
});


/* ============================================
   TYPING ANIMATION
   ============================================ */
const typedTextEl = document.getElementById('typedText');
if (typedTextEl) {
  const phrases = [
    'cat projects.json',
    'echo "Welcome to my portfolio"',
    'ls ~/projects/',
    'git log --oneline -1',
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 80;

  function typeWriter() {
    const currentPhrase = phrases[phraseIndex];

    if (!isDeleting) {
      typedTextEl.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentPhrase.length) {
        isDeleting = true;
        typeSpeed = 2000; // pause before deleting
      } else {
        typeSpeed = 60 + Math.random() * 60;
      }
    } else {
      typedTextEl.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 400; // pause before next phrase
      } else {
        typeSpeed = 30;
      }
    }

    setTimeout(typeWriter, typeSpeed);
  }

  // Start typing
  setTimeout(typeWriter, 800);
}


/* ============================================
   SCROLL REVEAL (IntersectionObserver)
   ============================================ */
const revealElements = document.querySelectorAll(
  '.project-card, .about__text, .about__stats, .about__tech, .contact-card'
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

revealElements.forEach((el) => revealObserver.observe(el));


/* ============================================
   COUNTER ANIMATION
   ============================================ */
const statNumbers = document.querySelectorAll('.stat__number[data-target]');

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.dataset.target);
        animateCounter(entry.target, target);
        counterObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

statNumbers.forEach((el) => counterObserver.observe(el));

function animateCounter(el, target) {
  let current = 0;
  const increment = Math.max(1, Math.floor(target / 30));
  const duration = 1500;
  const stepTime = duration / (target / increment);

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = current;
  }, stepTime);
}


/* ============================================
   MOBILE MENU TOGGLE
   ============================================ */
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');

if (navToggle && mobileMenu) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    mobileMenu.classList.toggle('active');
  });

  // Close mobile menu when clicking a link
  mobileMenu.querySelectorAll('.mobile-menu__link').forEach((link) => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      mobileMenu.classList.remove('active');
    });
  });
}


/* ============================================
   SMOOTH SCROLL for nav links
   ============================================ */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});


/* ============================================
   NAV BACKGROUND on scroll
   ============================================ */
let lastScroll = 0;
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;

  if (currentScroll > 100) {
    nav.style.background = 'rgba(10, 15, 13, 0.9)';
  } else {
    nav.style.background = 'rgba(10, 15, 13, 0.7)';
  }

  lastScroll = currentScroll;
});


/* ============================================
   ACCORDION TOGGLE
   ============================================ */
document.querySelectorAll('.accordion__trigger').forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const accordion = trigger.closest('.accordion');
    const panel = accordion.querySelector('.accordion__panel');
    const isActive = accordion.classList.contains('active');

    if (isActive) {
      // Collapse
      panel.style.maxHeight = panel.scrollHeight + 'px';
      // Force reflow so the browser registers the start height
      panel.offsetHeight;
      panel.style.maxHeight = '0';
      accordion.classList.remove('active');
      trigger.setAttribute('aria-expanded', 'false');
    } else {
      // Expand
      accordion.classList.add('active');
      trigger.setAttribute('aria-expanded', 'true');
      panel.style.maxHeight = panel.scrollHeight + 'px';

      // After transition, remove fixed max-height so content can reflow
      panel.addEventListener('transitionend', function handler() {
        if (accordion.classList.contains('active')) {
          panel.style.maxHeight = 'none';
        }
        panel.removeEventListener('transitionend', handler);
      });
    }
  });
});
