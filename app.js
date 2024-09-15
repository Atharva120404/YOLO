document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.more-info');

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const tourId = e.target.dataset.tour;
            alert(`More information about Tour ${tourId}`);
        });
    });

    // Simple form validation
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent the form from submitting
            alert('Thank you for your message!');
        });
    }
});

