// script.js
function validateForm(name, email, password) {
  if (!name || !email || !password) {
    return "All fields are required";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return "Invalid email format";
  }

  if (password.length < 6) {
    return "Password must be at least 6 characters";
  }

  if (!/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
    return "Password must contain at least one uppercase letter and one number";
  }

  return "Valid";
}

// Export for testing
module.exports = validateForm;
