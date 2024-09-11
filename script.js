// Toggle extra CV information
function toggleCV() {
    const extraCvSection = document.getElementById('extra-cv');
    if (extraCvSection.style.display === 'none') {
        extraCvSection.style.display = 'block';
    } else {
        extraCvSection.style.display = 'none';
    }
}

// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const responseDiv = document.getElementById('formResponse');
    responseDiv.innerHTML = `<p>Tack, ${name}. Vi kommer att kontakta dig inom kort!</p>`;

    // Clear form
    document.getElementById('contactForm').reset();
});
