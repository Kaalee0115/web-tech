function validateForm() {
    // Reset error messages
    resetErrors();

    // Get form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    let isValid = true;

    // First Name validation
    if (!/^[A-Za-z]+$/.test(firstName) || firstName.length < 6) {
        document.getElementById('firstNameError').innerText = "First Name must contain only alphabets and be at least 6 characters long.";
        isValid = false;
    }

    // Last Name validation
    if (lastName.trim() === "") {
        document.getElementById('lastNameError').innerText = "Last Name cannot be empty.";
        isValid = false;
    }

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerText = "Please enter a valid email address (e.g., name@domain.com).";
        isValid = false;
    }

    // Password validation
    if (password.length < 6) {
        document.getElementById('passwordError').innerText = "Password must be at least 6 characters long.";
        isValid = false;
    }

    // Mobile Number validation
    if (!/^\d{10}$/.test(phone)) {
        document.getElementById('phoneError').innerText = "Mobile number must be 10 digits long.";
        isValid = false;
    }

    // Address validation
    if (address.trim() === "") {
        document.getElementById('addressError').innerText = "Address cannot be empty.";
        isValid = false;
    }

    return isValid;
}

function resetErrors() {
    document.getElementById('firstNameError').innerText = '';
    document.getElementById('lastNameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('passwordError').innerText = '';
    document.getElementById('phoneError').innerText = '';
    document.getElementById('addressError').innerText = '';
}
