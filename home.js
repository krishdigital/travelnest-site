const quotes = [
    "Adventure is worthwhile.",
    "Travel is the only thing you buy that makes you richer.",
    "To travel is to live."
];
let quoteIndex = 0;
const quoteDisplay = document.getElementById("quote-display");

setInterval(() => {
    quoteDisplay.innerText = quotes[quoteIndex];
    quoteIndex = (quoteIndex + 1) % quotes.length;
}, 3000); 

const destinations = ["Paris, France", "China, Japan", "Bali, Indonesia", "Sri Lanka, India"];
const today = new Date().getDay();
document.getElementById("dotd-name").innerText = destinations[today % destinations.length];

document.getElementById("subscribe-btn").addEventListener("click", () => {
    const email = document.getElementById("email-input").value;
    if (email) {
        localStorage.setItem("newsletterEmail", email);
        document.getElementById("subscribe-msg").innerText = "Subscribed successfully!";
    } else {
        alert("Please enter a valid email.");
    }
});