
const statusText = document.getElementById("playing-status");

const beachAudio = new Audio('sounds/beach.mp3');
const forestAudio = new Audio('sounds/forest.mp3');
const cityAudio = new Audio('sounds/city.mp3');

beachAudio.loop = true;
forestAudio.loop = true;
cityAudio.loop = true;

let currentAudio = null;
let currentSoundName = null;

function toggleSound(soundName, audioObject) {
    if (currentSoundName === soundName) {
        audioObject.pause();
        currentSoundName = null;
        currentAudio = null;
        statusText.innerText = "No sounds playing.";
    } else {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0; 
        }
        
        audioObject.play();
        currentAudio = audioObject;
        currentSoundName = soundName;
        statusText.innerText = `Currently playing: ${soundName} sounds 🎵`;
    }
}

document.getElementById("sound-beach").addEventListener("click", () => toggleSound("Beach Waves", beachAudio));
document.getElementById("sound-forest").addEventListener("click", () => toggleSound("Forest Birds", forestAudio));
document.getElementById("sound-city").addEventListener("click", () => toggleSound("Bustling City", cityAudio));

const trackerList = document.getElementById("tracker-list");

function loadTracker() {
    trackerList.innerHTML = "";
    const tracks = JSON.parse(localStorage.getItem("travelTracker")) || [];
    tracks.forEach(track => {
        const li = document.createElement("li");
        li.innerText = `${track.dest} - [${track.status}]`;
        trackerList.appendChild(li);
    });
}

document.getElementById("add-track-btn").addEventListener("click", () => {
    const dest = document.getElementById("track-dest").value;
    const status = document.getElementById("track-status").value;

    if (dest) {
        const tracks = JSON.parse(localStorage.getItem("travelTracker")) || [];
        tracks.push({ dest, status });
        localStorage.setItem("travelTracker", JSON.stringify(tracks));
        document.getElementById("track-dest").value = ""; // Clear input
        loadTracker(); // Refresh list
    } else {
        alert("Please enter a destination.");
    }
});

loadTracker();