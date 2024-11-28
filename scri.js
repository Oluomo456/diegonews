// Get the registration form
const registerForm = document.getElementById('register-form');

// Add event listener to the form 
registerForm.addEventListener('submit', (e) => {
    // Prevent default form submission
    e.preventDefault();

    // Get input values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Validate user input
    if (password !== confirmPassword) {
        alert('Passwords do not match');
    } else {
        // Send data to backend
        fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                email,
                password,
            }),
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.error(err));
    }
});