document.addEventListener("DOMContentLoaded", () => {
    const gridContainer = document.querySelector('.grid');
    const gridSize = 16; 
    
    for (let i = 0; i < gridSize * gridSize; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        gridContainer.appendChild(cell);
    }
});