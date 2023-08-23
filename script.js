// Sélection des jetons
const jetons = document.querySelectorAll('.jeton');

let jetonSelectionne = null;
let initialX = 0;
let initialY = 0;



// Fonction de gestion du début du drag
function startDrag(event) {
    jetonSelectionne = event.target;
    initialX = event.clientX;
    initialY = event.clientY;
    jetonSelectionne.classList.add('selected');
}

// Fonction de gestion du mouvement de la souris
function drag(event) {
    if (!jetonSelectionne) return;
    
    const deltaX = event.clientX - initialX;
    const deltaY = event.clientY - initialY;
    // Mettez à jour la position du jeton en fonction du déplacement
    jetonSelectionne.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
}

// Fonction de gestion du relâchement
function stopDrag() {
    if (!jetonSelectionne) return;

    // Ici, vous pouvez appliquer la logique pour déplacer la balle en fonction du vecteur
    // et réinitialiser la position du jeton
    
    jetonSelectionne.classList.remove('selected');
    jetonSelectionne.style.transform = 'translate(0, 0)';

    jetonSelectionne = null;
}

// Ajout des écouteurs d'événements
jetons.forEach(jeton => {
    jeton.addEventListener('mousedown', startDrag);
});

document.addEventListener('mousemove', drag);
document.addEventListener('mouseup', stopDrag);
