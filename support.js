// support.js

// 1. Form Validation & LocalStorage
document.getElementById("feedback-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Stop page from refreshing

    const name = document.getElementById("fb-name").value;
    const email = document.getElementById("fb-email").value;
    const message = document.getElementById("fb-message").value;

    // Simple custom validation logic
    if (name.length < 2) {
        alert("Name must be at least 2 characters long.");
        return;
    }

    const feedbackData = { name, email, message };
    localStorage.setItem("userFeedback", JSON.stringify(feedbackData));
    
    document.getElementById("fb-status").innerText = "Thank you! Your feedback has been saved.";
    this.reset(); // Clear the form
});

// 2. FAQ Accordion Logic
const questions = document.querySelectorAll(".faq-question");

questions.forEach(question => {
    question.addEventListener("click", function() {
        // Toggle the display of the next sibling element (the answer div)
        const answer = this.nextElementSibling;
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
});