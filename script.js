// Données du jeu
let gameData = [];
let currentRound = 0;
let score = 0;
let debutJeu;
let questionsRestantes = 10

// Fonction pour commencer une nouvelle manche
function startGame() {
    questionsRestantes = 10; // Réinitialiser le nombre de questions restantes
    gameData = chargerPhotosDepuisGitHub();
    melangerPhotos();
    debutJeu = Date.now();
    afficherQuestion();
}

// Fonction pour charger les photos depuis GitHub (à remplacer par une vraie implémentation)
function chargerPhotosDepuisGitHub() {
    // Ici, vous devrez implémenter la logique pour récupérer les photos depuis GitHub.
    // Remplacez ce tableau statique par votre propre mécanisme pour récupérer les données.
    return [
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/1.JPG', mot: 'un' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/2.JPG', mot: 'un' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/3.JPG', mot: 'un' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/4.JPG', mot: 'un' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/5.JPG', mot: 'un' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/6.JPG', mot: 'un' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/7.JPG', mot: 'un' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/8.JPG', mot: 'un' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/9.JPG', mot: 'un' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/10.JPG', mot: 'un' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/11.JPG', mot: 'un' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/12.JPG', mot: 'un' },
        // Ajoutez d'autres données selon vos besoins
    ];
}

// Fonction pour mélanger les photos
function melangerPhotos() {
    gameData = shuffleArray(gameData);
}

// Fonction pour afficher une question
function afficherQuestion() {
    const imageContainer = document.getElementById('image-container');
    const wordInput = document.getElementById('word-input');
    const resultElement = document.getElementById('result');

    // Réinitialiser le champ de saisie et le résultat
    wordInput.value = '';
    resultElement.textContent = '';

    // Vérifier si toutes les questions ont été posées
    if (currentRound < gameData.length) {
        // Mettre à jour l'image
        const currentImage = gameData[currentRound].url;
        imageContainer.innerHTML = `<img src="${currentImage}" alt="Image">`;
    } else {
        // Fin du jeu
        endGame();
    }
}

// Fonction pour vérifier la réponse
function checkAnswer() {
    const userInput = document.getElementById('word-input').value.toLowerCase();
    const correctAnswer = gameData[currentRound].mot.toLowerCase();
    const resultElement = document.getElementById('result');

    if (userInput === correctAnswer) {
        resultElement.textContent = 'Correct !';
        score++;
    } else {
        resultElement.textContent = `Incorrect. La réponse était ${correctAnswer}`;
    }
}

// Fonction pour passer à la question suivante
function nextRound() {
    currentRound++;

    // Passer à la question suivante
    afficherQuestion();
    questionsRestantes--;
    
    // Vérifier si toutes les questions ont été posées
    if (questionsRestantes === 0) {
        // Fin du jeu
        endGame();
    }
}

// Fonction pour terminer le jeu
function endGame() {
    const finJeu = Date.now();
    const tempsJeu = (finJeu - debutJeu) / 1000; // Convertir en secondes

    alert(`Fin du jeu ! Votre score est de ${score} sur 10. Temps total : ${tempsJeu} secondes.`);
    // Vous pouvez ajouter d'autres actions ici, comme réinitialiser le jeu.
    startGame();
}

// Fonction pour mélanger un tableau de manière aléatoire
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Démarrer le jeu lors du chargement de la page
startGame();
