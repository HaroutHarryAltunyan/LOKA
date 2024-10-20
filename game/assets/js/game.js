const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Adjust canvas size to fit the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Define player object (spaceship)
let player = {
    x: canvas.width / 2,
    y: canvas.height - 100,
    width: 50,
    height: 50,
    speed: 5,
    dx: 0, // change in x direction
    dy: 0  // change in y direction
};

// Draw the player (simple rectangle for now)
function drawPlayer() {
    ctx.fillStyle = 'white';
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

// Clear the canvas to redraw each frame
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Update player's position
function updatePlayerPosition() {
    player.x += player.dx;
    player.y += player.dy;

    // Prevent player from moving outside the canvas
    if (player.x < 0) player.x = 0;
    if (player.x + player.width > canvas.width) player.x = canvas.width - player.width;
    if (player.y < 0) player.y = 0;
    if (player.y + player.height > canvas.height) player.y = canvas.height - player.height;
}

// Main game loop
function gameLoop() {
    clearCanvas();
    drawPlayer();
    updatePlayerPosition();
    requestAnimationFrame(gameLoop);
}

// Move player based on keyboard input
function movePlayer(e) {
    if (e.key === 'ArrowRight') player.dx = player.speed;
    if (e.key === 'ArrowLeft') player.dx = -player.speed;
    if (e.key === 'ArrowUp') player.dy = -player.speed;
    if (e.key === 'ArrowDown') player.dy = player.speed;
}

// Stop player movement when key is released
function stopPlayer(e) {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') player.dx = 0;
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') player.dy = 0;
}

// Listen for keypresses
document.addEventListener('keydown', movePlayer);
document.addEventListener('keyup', stopPlayer);

// Start the game loop
gameLoop();