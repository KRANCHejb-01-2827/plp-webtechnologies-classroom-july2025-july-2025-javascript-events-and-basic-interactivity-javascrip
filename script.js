// ================================
// Part 1: Event Handling
// ================================
const messageButton = document.getElementById("messageButton");
const message = document.getElementById("message");

messageButton.addEventListener("click", () => {
  message.textContent = "Button clicked! Event handling works!";
});

// ================================
// Part 2: Interactive Elements
// ================================

// Light/Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  themeToggle.textContent = 
    document.body.classList.contains("dark-mode") 
    ? "Switch to Light Mode" 
    : "Switch to Dark Mode";
});

// Counter
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const counterSpan = document.getElementById("counter");
let count = 0;

increaseBtn.onclick = () => {
  count++;
  counterSpan.textContent = count;
};

decreaseBtn.onclick = () => {
  count--;
  counterSpan.textContent = count;
};

// FAQ Toggle
const faqQuestion = document.querySelector(".faq-question");
const faqAnswer = document.querySelector(".faq-answer");

faqAnswer.style.display = "none"; // start hidden

faqQuestion.addEventListener("click", () => {
  faqAnswer.style.display = 
    faqAnswer.style.display === "none" ? "block" : "none";
});

// ================================
// Part 3: Form Validation
// ================================
const signupForm = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const formMessage = document.getElementById("formMessage");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent form submission by default

  let errors = [];

  // Name validation
  if (nameInput.value.trim() === "") {
    errors.push("Name is required.");
  }

  // Email validation (simple regex)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    errors.push("Please enter a valid email.");
  }

  // Password validation
  if (passwordInput.value.length < 6) {
    errors.push("Password must be at least 6 characters.");
  }

  // Show messages
  if (errors.length > 0) {
    formMessage.textContent = errors.join(" ");
    formMessage.style.color = "red";
  } else {
    formMessage.textContent = "Form submitted successfully!";
    formMessage.style.color = "green";
    // Normally, you’d submit the form here
  }
});
