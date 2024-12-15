document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('#bath-scene-container');

    // Create bathtub scene
    const createBathScene = () => {
        const scene = document.createElement('div');
        scene.className = 'bath-scene';
        
        // Create bathtub image
        const bathtub = document.createElement('img');
        bathtub.src = 'images/bathtub with bubbles.webp';
        bathtub.alt = 'Bathtub with bubbles';
        bathtub.className = 'bathtub';
        
        scene.appendChild(bathtub);
        return scene;
    };

    const bathScene = createBathScene();
    container.appendChild(bathScene);

    // Add styles for bath scene
    const style = document.createElement('style');
    style.textContent = `
        .bath-scene {
            position: relative;
            width: 200px;
            display: flex;
            align-items: flex-end;
            margin-bottom: 1rem;
        }

        .bathtub {
            width: 100%;
            height: auto;
            object-fit: contain;
        }
    `;
    document.head.appendChild(style);
}); 