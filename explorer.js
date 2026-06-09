// explorer.js

const destData = [
    { name: "Paris, France", continent: "Europe", image: "france.jpeg", desc: "City of Light and romance.", attractions: ["Eiffel Tower", "Louvre"], cost: "$150/day" },
    { name: "London, UK", continent: "Europe", image: "uk.jpeg", desc: "Historic and diverse capital.", attractions: ["Big Ben", "Tower of London"], cost: "$160/day" },
    { name: "Moscow, Russia", continent: "Europe", image: "russia.jpeg", desc: "Iconic cultural and political hub.", attractions: ["Red Square", "The Kremlin"], cost: "$100/day" },
    { name: "Tokyo, Japan", continent: "Asia", image: "japan.jpeg", desc: "Bustling modern metropolis.", attractions: ["Shibuya Crossing", "Mt. Fuji"], cost: "$120/day" },
    { name: "New Delhi, India", continent: "Asia", image: "india.jpeg", desc: "Vibrant capital rich in history.", attractions: ["India Gate", "Red Fort"], cost: "$50/day" },
    { name: "Colombo, Sri Lanka", continent: "Asia", image: "srilanka.jpeg", desc: "Beautiful coastal commercial capital.", attractions: ["Lotus Tower", "Galle Face Green"], cost: "$60/day" },
    { name: "Cairo, Egypt", continent: "Africa", image: "egypt.jpeg", desc: "Heart of ancient history.", attractions: ["Pyramids of Giza", "Egyptian Museum"], cost: "$70/day" },
    { name: "Toronto, Canada", continent: "North America", image: "canada.jpeg", desc: "Diverse and modern metropolis.", attractions: ["CN Tower", "Royal Ontario Museum"], cost: "$130/day" },
    { name: "Havana, Cuba", continent: "North America", image: "cuba.jpeg", desc: "Colorful colonial city.", attractions: ["Old Havana", "Malecón"], cost: "$80/day" }
];

const container = document.getElementById("card-container");
const modal = document.getElementById("dest-modal");

// Function to render cards
function renderCards(filter) {
    container.innerHTML = "";
    destData.forEach(dest => {
        if (filter === "All" || dest.continent === filter) {
            const card = document.createElement("div");
            card.className = "card";
            
            // Added the image tag right above the destination name
            card.innerHTML = `
                <img src="images/${dest.image}" alt="${dest.name}" style="width: 100%; height: 150px; object-fit: cover; border-radius: 4px; margin-bottom: 10px;">
                <h3>${dest.name}</h3>
                <p>${dest.continent}</p>
            `;
            
            card.addEventListener("click", () => openModal(dest));
            container.appendChild(card);
        }
    });
}

// Filter logic
document.getElementById("continent-filter").addEventListener("change", (e) => {
    renderCards(e.target.value);
});

// Modal logic
function openModal(dest) {
    document.getElementById("modal-title").innerText = dest.name;
    document.getElementById("modal-desc").innerText = dest.desc;
    
    const attrList = document.getElementById("modal-attractions");
    attrList.innerHTML = "";
    dest.attractions.forEach(attr => attrList.innerHTML += `<li>${attr}</li>`);
    
    document.getElementById("modal-costs").innerHTML = `<tr><th>Est. Cost</th><td>${dest.cost}</td></tr>`;
    
    modal.style.display = "flex";
}

document.getElementById("close-modal").addEventListener("click", () => {
    modal.style.display = "none";
});

// Initial render
renderCards("All");