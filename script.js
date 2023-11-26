// Données du jeu
const gameData = [
    { word: 'Chien', image: 'https://raw.githubusercontent.com/VotreNomUtilisateur/NomDuDepot/main/images/chien.jpg' },
    { word: 'Chat', image: 'https://raw.githubusercontent.com/VotreNomUtilisateur/NomDuDepot/main/images/chat.jpg' },
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
