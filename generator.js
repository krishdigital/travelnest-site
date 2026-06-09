// generator.js

// Sample data for the generator
const tripData = [
    { name: "Backpacking in Vietnam", type: "adventure", budget: "low" },
    { name: "Swiss Alps Hiking", type: "nature", budget: "high" },
    { name: "Kyoto Temples", type: "cultural", budget: "medium" },
    { name: "Maldives Resort", type: "relaxation", budget: "high" },
    { name: "Costa Rica Rainforest", type: "nature", budget: "medium" },
    { name: "Bali Beach Hostel", type: "relaxation", budget: "low" }
];

const surpriseBtn = document.getElementById("surprise-btn");
const resultContainer = document.getElementById("result-container");
const destText = document.getElementById("generated-dest");

surpriseBtn.addEventListener("click", () => {
    // Add simple animation
    surpriseBtn.classList.remove("animate-pop");
    void surpriseBtn.offsetWidth; 
    surpriseBtn.classList.add("animate-pop");

    const selectedType = document.getElementById("gen-type").value;
    const selectedBudget = document.getElementById("gen-budget").value;

    // Filter matching trips
    const matches = tripData.filter(trip => trip.type === selectedType && trip.budget === selectedBudget);

    if (matches.length > 0) {
        // Pick a random match
        const randomTrip = matches[Math.floor(Math.random() * matches.length)];
        destText.innerText = randomTrip.name;
        resultContainer.style.display = "block";
        document.getElementById("wishlist-msg").innerText = ""; 
    } else {
        destText.innerText = "No exact matches found. Try different filters!";
        resultContainer.style.display = "block";
    }
});


document.getElementById("wishlist-btn").addEventListener("click", () => {
    const currentDest = destText.innerText;
    if (currentDest && !currentDest.includes("No exact matches")) {
        let wishlist = JSON.parse(localStorage.getItem("tripWishlist")) || [];
        wishlist.push(currentDest);
        localStorage.setItem("tripWishlist", JSON.stringify(wishlist));
        document.getElementById("wishlist-msg").innerText = "Saved to your wishlist!";
    }
});