// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navMobile = document.getElementById('navMobile');

if (navToggle && navMobile) {
  navToggle.addEventListener('click', () => {
    navMobile.classList.toggle('open');
  });

  // Close mobile nav when a link is clicked
  navMobile.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navMobile.classList.remove('open'));
  });
}

// Close mobile nav on resize
window.addEventListener('resize', () => {
  if (window.innerWidth > 720 && navMobile) {
    navMobile.classList.remove('open');
  }
});

// Contact form — show success state on submit
// Replace this handler with your backend/email integration when ready
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

if (contactForm && formSuccess) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Basic required field validation
    const required = contactForm.querySelectorAll('[required]');
    let valid = true;

    required.forEach(field => {
      field.style.borderColor = '';
      if (!field.value.trim()) {
        field.style.borderColor = 'var(--red)';
        valid = false;
      }
    });

    if (!valid) return;

    // Collect form data (wire up to your email service here)
    const data = {
      firstName: contactForm.firstName.value.trim(),
      lastName:  contactForm.lastName.value.trim(),
      email:     contactForm.email.value.trim(),
      company:   contactForm.company.value.trim(),
      teamSize:  contactForm.teamSize.value,
      message:   contactForm.message.value.trim(),
    };

    console.log('Form submission:', data);

    // Show success message
    contactForm.style.display = 'none';
    formSuccess.style.display = 'block';
  });

  // Clear red border on input
  contactForm.querySelectorAll('input, textarea').forEach(field => {
    field.addEventListener('input', () => { field.style.borderColor = ''; });
  });
}
