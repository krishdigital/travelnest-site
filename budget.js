// budget
document.getElementById("calc-btn").addEventListener("click", () => {
    const dest = document.getElementById("b-dest").value;
    const days = parseInt(document.getElementById("b-days").value);
    const daily = parseInt(document.getElementById("b-daily").value);

    if (!dest || isNaN(days) || isNaN(daily)) {
        alert("Please fill out all fields correctly.");
        return;
    }

    const total = days * daily;
    document.getElementById("total-cost").innerText = total;

    let status = "Moderate";
    if (daily < 50) status = "Low";
    if (daily > 200) status = "Luxury";
    
    document.getElementById("budget-status").innerText = status;

    // Save to localStorage
    const tripData = { destination: dest, totalCost: total, status: status };
    localStorage.setItem("savedTripBudget", JSON.stringify(tripData));
    alert("Trip budget saved to local storage!");
});