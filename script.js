// script.js

// Toggle Mobile Menu
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Function to Simulate Price Fetching
function getfareEstimate() {
    event.preventDefault(); // Prevent page reload

    // Get pickup and drop values
    const pickup = document.getElementById('pickup').value;
    const drop = document.getElementById('drop').value;
    const time = document.getElementById('time').value;

    if (pickup === '' || drop === '' || time === '') {
        alert('Please fill in all fields!');
        return;
    }

    // Simulated random fare generation (replace with API call if required)
    const olaPrice = (Math.random() * (250 - 100) + 100).toFixed(2);
    const uberPrice = (Math.random() * (280 - 120) + 120).toFixed(2);
    const rapidoPrice = (Math.random() * (180 - 80) + 80).toFixed(2);

    // Populate the price table
    document.getElementById('olaPrice').innerText = `₹${olaPrice}`;
    document.getElementById('uberPrice').innerText = `₹${uberPrice}`;
    document.getElementById('rapidoPrice').innerText = `₹${rapidoPrice}`;

    // Update booking links dynamically
    document.querySelector('.ola-btn').href = `https://www.olacabs.com/`;
    document.querySelector('.uber-btn').href = `https://www.uber.com/`;
    document.querySelector('.rapido-btn').href = `https://www.rapido.bike/`;
}

// FAQ Accordion Functionality
const faqButtons = document.querySelectorAll('.faq-question');

// faqButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         const faqAnswer = button.nextElementSibling;

//         // Toggle active class
//         button.classList.toggle('active');

//         // Open or collapse answer
//         if (faqAnswer.style.display === 'block') {
//             faqAnswer.style.display = 'none';
//         } else {
//             faqAnswer.style.display = 'block';
//         }
//     });
// });

// FAQ Toggle Functionality
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqAnswer = button.nextElementSibling;
        button.classList.toggle('active');
        faqAnswer.style.display = faqAnswer.style.display === 'block' ? 'none' : 'block';
    });
});


// Handle Contact Form Submission
document.getElementById('supportForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all the fields!');
        return;
    }

    alert(`Thank you, ${name}! Your message has been sent successfully.`);
    // Reset form after submission
    this.reset();
});

// Newsletter Form Submission
document.getElementById('newsletter-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('✅ Thank you for subscribing! Stay tuned for updates.');
});

