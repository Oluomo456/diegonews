// Get the form elements
const form = document.querySelector('form');
const usernameInput = document.querySelector('input[name="username"]');
const passwordInput = document.querySelector('input[name="password"]');

// Add event listener to form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validate inputs
    if (usernameInput.value.trim() === '') {
        alert('Username is required');
        return;
    }

    if (passwordInput.value.trim() === '') {
        alert('Password is required');
        return;
    }

    // Submit form data to server
    const formData = new FormData(form);
    fetch('/login', {
        method: 'POST',
        body: formData,
    })
    .then((response) => response.json())
    .then((data) => {
        if (data.success) {
            // Login successful, redirect to dashboard
            window.location.href = '/dashboard';
        } else {
            // Login failed, display error message
            alert(data.message);
        }
    })
    .catch((error) => {
        console.error(error);
    })
});

const passwordStrengthIndicator = document.querySelector('.password-strenght-indicator');
passwordInput.addEventListener('input', () => {
    const passwordStrength = getPasswordStrength(passwordInput.value);
    passwordStrengthIndicator.textContent = passwordStrength;
});

function getPasswordStrength(password) {
    const strenght = {
        weak: 'Weak',
        medium: 'Medium',
        strong: 'Strong',
    };

    const passwordLength = password.length;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChars = /[^A-Za-z0-9]/.test(password);

    let passwordStrength = strenght.weak;

    if (passwordLength >= 8 && hasUppercase && hasLowercase && hasNumbers) {
        passwordStrength = strenght.medium;
    }

    if (passwordLength >= 12 && hasUppercase && hasLowercase && hasNumbers && hasSpecialChars) {
        passwordStrength = strenght.strong;
    }

    return passwordStrength;
}

const passwordToggle = document.querySelector('password-toggle');
passwordToggle.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
});

const passwordInput = document.querySelector('input[name="password"]');
const passwordStrengthIndicator = document.querySelector('.password-strength-indicator');
passwordInput.addEventListener('input', () => {
    const passwordStrength = getPasswordStrength(passwordInput.value);
    passwordStrengthIndicator.textContent = passwordStrength;
});

passwordStrengthIndicator.classList.remove('weak', 'medium', 'strong');
passwordStrengthIndicator.classList.add(passwordStrength.toLowerCase());