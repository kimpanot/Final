document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting
        
        const fullName = form.querySelector('input[type="text"]').value.trim();
        const email = form.querySelector('input[type="email"]').value.trim();
        const phoneNumber = form.querySelector('input[type="tel"]').value.trim();
        const birthDate = form.querySelector('input[type="date"]').value.trim();
        const age = parseInt(form.querySelector('input[type="number"]').value.trim());
        const gender = form.querySelector('input[name="gender"]:checked');

        if (fullName === '') {
            alert('Please enter your full name.');
            return;
        }

        if (email === '') {
            alert('Please enter your email address.');
            return;
        }

        if (phoneNumber === '') {
            alert('Please enter your phone number.');
            return;
        }

        if (birthDate === '') {
            alert('Please enter your birth date.');
            return;
        }

        if (isNaN(age)) {
            alert('Please enter a valid age.');
            return;
        }

        if (gender === null) {
            alert('Please select your gender.');
            return;
        }

        // If all fields are filled, submit the form
        alert('Form submitted successfully!');
        form.reset(); // Reset the form after submission
    });
});