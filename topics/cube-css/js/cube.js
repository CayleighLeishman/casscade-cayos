// Select the interactive cube element
const cube = document.querySelector('.interactive-cube');

// Variables to store initial positions
let isDragging = false;
let initialX, initialY, currentX = 0, currentY = 0;

// Event listener to start dragging
cube.addEventListener('mousedown', (e) => {
    isDragging = true;
    initialX = e.clientX - currentX;
    initialY = e.clientY - currentY;
    cube.style.cursor = 'grabbing'; // Change cursor when dragging
});

// Event listener to stop dragging
document.addEventListener('mouseup', () => {
    isDragging = false;
    cube.style.cursor = 'grab'; // Change cursor back when not dragging
});

// Event listener for mousemove to rotate the cube
document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    e.preventDefault();
    currentX = e.clientX - initialX;
    currentY = e.clientY - initialY;

    // Apply 3D rotation based on mouse movement
    cube.style.transform = `rotateX(${currentY}deg) rotateY(${currentX}deg)`;
});
