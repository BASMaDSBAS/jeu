// Générer un nombre aléatoire entre 1 et 100
const secretNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;

function checkGuess() {
    // Récupérer la valeur entrée par l'utilisateur
    const userGuess = document.getElementById('user-guess').value;

    // Vérifier si la valeur est correcte
    if (userGuess == secretNumber) {
        displayMessage(`Bravo ! Vous avez deviné le nombre en ${attempts} tentatives.`);
    } else if (userGuess < secretNumber) {
        displayMessage('Le nombre est plus grand. Essayez à nouveau.');
    } else {
        displayMessage('Le nombre est plus petit. Essayez à nouveau.');
    }

    // Incrémenter le nombre de tentatives
    attempts++;
}

function displayMessage(message) {
    // Afficher le message
    const messageElement = document.getElementById('message');
    messageElement.textContent = message;
}
