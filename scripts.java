// Smooth scroll to sections
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple form validation
    if (name && email && message) {
        document.getElementById('form-response').textContent = 'Thank you, ' + name + '! Your message has been sent.';
        this.reset(); // Reset the form
    } else {
        document.getElementById('form-response').textContent = 'Please fill in all fields.';
    }
});
