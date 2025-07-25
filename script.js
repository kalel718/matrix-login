// WHY: This is the Matrix rain engine!
// We want the effect to feel alive, so we use requestAnimationFrame for smoothness.
// The Japanese characters and neon green color make it instantly recognizable. 🟩🌧️

const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

// WHY: Always fill the whole screen, even if the user resizes.
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

// WHY: Authentic Matrix vibes! Japanese katakana + numbers = hacker aesthetic. 👾
const characters = 'アァカサタナハマヤラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユルグズヅブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨロヲゴゾドボポヴッン0123456789';
const fontSize = 16;
const columns = width / fontSize;

// WHY: Each column is a stream of falling characters.
const drops = [];
for (let i = 0; i < columns; i++) {
    drops[i] = 1;
}

// WHY: Draw the rain! Lower alpha for more trails, higher for sharper lines.
function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, width, height);

    // WHY: Neon green for that classic Matrix look.
    ctx.fillStyle = '#39ff14';
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // WHY: Randomly reset drops to keep the rain unpredictable.
        if (drops[i] * fontSize > height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
    requestAnimationFrame(drawMatrix);
}

// WHY: Start the animation as soon as the page loads.
window.onload = function() {
    drawMatrix();
};

// WHY: Make sure the rain always fills the screen, even if the user resizes.
window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    const newColumns = width / fontSize;
    drops.length = newColumns;
    for (let i = 0; i < newColumns; i++) {
        if (drops[i] === undefined) {
            drops[i] = 1;
        }
    }
});
