// Initialize EmailJS
emailjs.init('AuAQoAZaoepDhYweJ');

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

// Contact form — send emails via EmailJS
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

    // Collect form data
    const data = {
      firstName: contactForm.firstName.value.trim(),
      lastName:  contactForm.lastName.value.trim(),
      email:     contactForm.email.value.trim(),
      company:   contactForm.company.value.trim(),
      teamSize:  contactForm.teamSize.value,
      message:   contactForm.message.value.trim(),
    };

    // Send email via EmailJS
    const templateParams = {
      to_email: 'spencer.skaggs@switchflowsoftware.com, tanner.cantlay@switchflowsoftware.com',
      from_name: `${data.firstName} ${data.lastName}`,
      from_email: data.email,
      company: data.company,
      team_size: data.teamSize || 'Not specified',
      message: data.message,
    };

    // Disable submit button while sending
    const submitBtn = contactForm.querySelector('.form-submit');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
      .then((resposervice_nc7dx4f', 'template_1p2a1i5
        console.log('Email sent successfully!', response);
        // Show success message
        contactForm.style.display = 'none';
        formSuccess.style.display = 'block';
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        alert('Failed to send message. Please try again or email us directly.');
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message →';
      });
  });

  // Clear red border on input
  contactForm.querySelectorAll('input, textarea').forEach(field => {
    field.addEventListener('input', () => { field.style.borderColor = ''; });
  });
}
