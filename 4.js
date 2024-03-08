let password = prompt("Enter your password:");

const minLength = 8;
const hasUpperCase = /[A-Z]/.test(password);
const hasLowerCase = /[a-z]/.test(password);
const hasNumber = /[0-9]/.test(password);
const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);

let feedback = "";
if (password.length < minLength) {
    feedback += "Password should be at least " + minLength + " characters long. ";
}

if (!hasUpperCase) {
    feedback += "Password should contain at least one uppercase letter. ";
}
if (!hasLowerCase) {
    feedback += "Password should contain at least one lowercase letter. ";
}
if (!hasNumber) {
    feedback += "Password should contain at least one number. ";
}
if (!hasSpecialChar) {
    feedback += "Password should contain at least one special character. ";
}

let strengthRating = "Weak";
if (password.length >= minLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar) {
    strengthRating = "Strong";
} else if (password.length >= minLength && (hasUpperCase || hasLowerCase || hasNumber || hasSpecialChar)) {
    strengthRating = "Moderate";
}

console.log("Strength Rating:", strengthRating);
console.log("Feedback:", feedback);
