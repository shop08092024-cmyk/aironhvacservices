// Mobile menu toggle — simple slide-down nav for small screens
const menuToggle = document.getElementById('menuToggle');
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    const nav = document.querySelector('.primary-nav');
    const isOpen = nav.style.display === 'flex';
    nav.style.display = isOpen ? 'none' : 'flex';
    nav.style.flexDirection = 'column';
    nav.style.position = 'fixed';
    nav.style.top = '64px';
    nav.style.left = '0';
    nav.style.right = '0';
    nav.style.background = '#07131f';
    nav.style.padding = '20px 24px';
    nav.style.gap = '18px';
    nav.style.borderBottom = '1px solid #2e4a61';
    menuToggle.textContent = isOpen ? '☰' : '✕';
  });

  // close menu after tapping a link (mobile)
  document.querySelectorAll('.primary-nav a').forEach(link => {
    link.addEventListener('click', () => {
      const nav = document.querySelector('.primary-nav');
      if (window.innerWidth <= 980) {
        nav.style.display = 'none';
        menuToggle.textContent = '☰';
      }
    });
  });
}

// Contact form — routes the enquiry to WhatsApp with prefilled details
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const service = document.getElementById('service').value;
    const msg = document.getElementById('msg').value.trim();

    const text = `Hi AIRON HVAC, I'd like to request a callback.%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AService: ${encodeURIComponent(service)}%0ADetails: ${encodeURIComponent(msg || 'N/A')}`;
    window.open(`https://wa.me/918128138302?text=${text}`, '_blank');
  });
}
