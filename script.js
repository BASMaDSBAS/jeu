// Données du jeu
const gameData = [
    { word: 'un', image: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/photo/1.jpg' },
    { word: 'deux', image: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/photo/2.jpg' },
    { word: 'deux', image: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/photo/3.jpg' },
    { word: 'deux', image: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/photo/4.jpg' },
    { word: 'deux', image: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/photo/5.jpg' },
    { word: 'deux', image: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/photo/6.jpg' },
    { word: 'deux', image: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/photo/7.jpg' },
    { word: 'deux', image: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/photo/8.jpg' },
    { word: 'deux', image: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/photo/9.jpg' },
    { word: 'deux', image: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/photo/10.jpg' },
    { word: 'deux', image: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/photo/11.jpg' },
    // Ajoutez d'autres données selon vos besoins
];

let currentRound = 0;
let score = 0;

// Fonction pour vérifier la réponse
function checkAnswer() {
    const userInput = document.getElementById('word-input').value.toLowerCase();
    const correctAnswer = gameData[currentRound].word.toLowerCase();
    const resultElement = document.getElementById('result');

    if (userInput === correctAnswer) {
        resultElement.textContent = 'Correct !';
        score++;
    } else {
        resultElement.textContent = 'Incorrect. La réponse était ' + correctAnswer;
    }
}

// Fonction pour passer à la question suivante
function nextRound() {
    const wordInput = document.getElementById('word-input');
    const resultElement = document.getElementById('result');

    // Réinitialiser le champ de saisie et le résultat
    wordInput.value = '';
    resultElement.textContent = '';

    // Passer à la question suivante
    currentRound++;

    // Vérifier si toutes les questions ont été posées
    if (currentRound < gameData.length) {
        // Mettre à jour l'image
        const imageContainer = document.getElementById('image-container');
        const currentImage = gameData[currentRound].image;
        imageContainer.innerHTML = `<img src="${currentImage}" alt="Image">`;
    } else {
        // Fin du jeu
        endGame();
    }
}

// Fonction pour terminer le jeu
function endGame() {
    alert(`Fin du jeu ! Votre score est de ${score} sur 10.`);
    // Vous pouvez ajouter d'autres actions ici, comme réinitialiser le jeu.
}
