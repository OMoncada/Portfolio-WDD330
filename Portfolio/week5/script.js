// Geolocation API
const demo = document.getElementById("demo");
const mapContainer = document.getElementById("map");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        demo.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    demo.innerHTML = `Latitude: ${lat} <br> Longitude: ${lon}`;

    // Show map using OpenStreetMap
    const map = document.createElement("iframe");
    map.width = "100%";
    map.height = "400";
    map.src = `https://www.openstreetmap.org/export/embed.html?bbox=${lon - 0.1}%2C${lat - 0.1}%2C${lon + 0.1}%2C${lat + 0.1}&layer=mapnik&marker=${lat}%2C${lon}`;
    map.style.border = "none";
    mapContainer.innerHTML = "";
    mapContainer.appendChild(map);
}


// Canvas API
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let isHappy = true;

// Dibuja una cara feliz
function drawHappyFace() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Cara
    ctx.beginPath();
    ctx.arc(200, 200, 100, 0, Math.PI * 2, true); // Círculo exterior
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.stroke();

    // Ojos
    ctx.beginPath();
    ctx.arc(160, 160, 10, 0, Math.PI * 2, true);  // Ojo izquierdo
    ctx.arc(240, 160, 10, 0, Math.PI * 2, true);  // Ojo derecho
    ctx.fillStyle = 'black';
    ctx.fill();

    // Boca (feliz)
    ctx.beginPath();
    ctx.arc(200, 210, 50, 0, Math.PI, false);  // Arco de la boca
    ctx.stroke();
}

// Dibuja una cara triste
function drawSadFace() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Cara
    ctx.beginPath();
    ctx.arc(200, 200, 100, 0, Math.PI * 2, true); // Círculo exterior
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.stroke();

    // Ojos
    ctx.beginPath();
    ctx.arc(160, 160, 10, 0, Math.PI * 2, true);  // Ojo izquierdo
    ctx.arc(240, 160, 10, 0, Math.PI * 2, true);  // Ojo derecho
    ctx.fillStyle = 'black';
    ctx.fill();

    // Boca (triste)
    ctx.beginPath();
    ctx.arc(200, 250, 50, Math.PI, 2 * Math.PI, false);  // Arco de la boca
    ctx.stroke();
}

// Alterna entre las caras al hacer clic
canvas.addEventListener('click', () => {
    if (isHappy) {
        drawSadFace();
    } else {
        drawHappyFace();
    }
    isHappy = !isHappy;
});

// Dibujar la primera cara feliz al cargar la página
drawHappyFace();
