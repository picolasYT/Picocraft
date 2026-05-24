const panel = document.getElementById("clientPanel");
const fpsDiv = document.getElementById("fps");
const pingDiv = document.getElementById("ping");

let panelVisible = false;

document.addEventListener("keydown", (e) => {
    if (e.code === "ShiftRight") {
        panelVisible = !panelVisible;
        panel.classList.toggle("hidden");
    }
});

document.getElementById("fpsToggle").addEventListener("change", (e) => {
    fpsDiv.style.display = e.target.checked ? "block" : "none";
});

document.getElementById("pingToggle").addEventListener("change", (e) => {
    pingDiv.style.display = e.target.checked ? "block" : "none";
});

let lastFrame = performance.now();
let frames = 0;

function updateFPS() {
    frames++;
    const now = performance.now();

    if (now >= lastFrame + 1000) {
        fpsDiv.innerText = "FPS: " + frames;
        frames = 0;
        lastFrame = now;
    }

    requestAnimationFrame(updateFPS);
}

updateFPS();

// Drag panel
let dragging = false;
let offsetX = 0;
let offsetY = 0;

panel.addEventListener("mousedown", (e) => {
    dragging = true;
    offsetX = e.clientX - panel.offsetLeft;
    offsetY = e.clientY - panel.offsetTop;
});

document.addEventListener("mousemove", (e) => {
    if (!dragging) return;

    panel.style.left = (e.clientX - offsetX) + "px";
    panel.style.top = (e.clientY - offsetY) + "px";
});

document.addEventListener("mouseup", () => {
    dragging = false;
});
