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
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/1.JPG', mot: 'Clément Joseph' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/2.JPG', mot: 'Clara Hummel' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/3.JPG', mot: 'Lisa Ximenez' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/4.JPG', mot: 'Arthur Piednoir' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/5.JPG', mot: 'Elsa Fekkak' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/6.JPG', mot: 'Guillaume Zandecki' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/7.JPG', mot: 'Raphael Pincet' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/8.JPG', mot: 'Titouan Montembault' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/9.JPG', mot: 'Caroline Loutrage' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/10.JPG', mot: 'Damien Roty' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/11.JPG', mot: 'Matisse Da Silveira' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/12.JPG', mot: 'Maxime Mingot' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/13.JPG', mot: 'Marion Ribard' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/14.JPG', mot: 'Louis Charton' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/15.JPG', mot: 'Thomas Pin' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/16.JPG', mot: 'Antoine Diep-Minh-Sum' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/17.JPG', mot: 'Elena Cosson' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/18.JPG', mot: 'Joaquim Blazy' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/19.JPG', mot: 'Charbel Doumat' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/20.JPG', mot: 'Typhaine Lim' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/21.JPG', mot: 'Jean-Baptiste Legeard' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/22.JPG', mot: 'Romane Sandra' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/23.JPG', mot: 'Louis Evrard' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/24.JPG', mot: 'Carmen Fanet' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/25.JPG', mot: 'Léna Phan' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/26.JPG', mot: 'Célia Thalinger' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/27.JPG', mot: 'Enora Tempier' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/28.JPG', mot: 'Marion Adam' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/29.JPG', mot: 'Julie Fournier' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/30.JPG', mot: 'Hugo Brustel' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/31.JPG', mot: 'Ruben Moor' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/32.JPG', mot: 'Clara Bernard' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/33.JPG', mot: 'Audrey Minard' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/34.JPG', mot: 'Marjolaine Fauve' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/35.JPG', mot: 'Arthur Forestier' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/36.JPG', mot: 'Léa Monti' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/37.JPG', mot: 'Thibault Allenbach' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/38.JPG', mot: 'Charlotte Paul-Boncour' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/39.JPG', mot: 'Lomane Berthy' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/40.JPG', mot: 'Chloé Gutter' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/41.JPG', mot: 'Félix Göbel' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/42.JPG', mot: 'Marie David' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/43.JPG', mot: 'Gaspard Langlois' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/44.JPG', mot: 'Manissa Saïri' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/45.JPG', mot: 'Yoann Tran' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/46.JPG', mot: 'Hannah Kaczorowski' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/47.JPG', mot: 'Virginie Pruneau' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/48.JPG', mot: 'Martin Hilt' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/49.JPG', mot: 'Lou Muylle' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/50.JPG', mot: 'Hugo Montan' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/51.JPG', mot: 'Julie Allamand' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/52.JPG', mot: 'Adam Elias' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/53.JPG', mot: 'Célia Joyet' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/54.JPG', mot: 'Colin Cacheux' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/55.JPG', mot: 'Eva Perrin' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/56.JPG', mot: 'Marion Hucher' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/57.JPG', mot: 'Nicolas Chauvet' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/59.JPG', mot: 'Aloïs Clerget' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/60.JPG', mot: 'Ambre Reynaud' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/61.JPG', mot: 'Manon Bonenfant' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/62.JPG', mot: 'Thomas Gendre' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/63.JPG', mot: 'Victor Gallin' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/64.JPG', mot: 'Aurore Flament' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/65.JPG', mot: 'Axel Delente' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/66.JPG', mot: 'Julie Holzinger' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/67.JPG', mot: 'Pauline Lafargue' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/68.JPG', mot: 'Juliette Royer' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/69.JPG', mot: 'Yassine Abdessamie Belaziz' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/70.JPG', mot: 'Lilian Salmon' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/71.JPG', mot: 'Pierre-Guillaume Assier' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/72.JPG', mot: 'Joanna Prous' },
       
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/74.JPG', mot: 'Sara Sanchez' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/75.JPG', mot: 'Alin-Mihai Bîrjoianu' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/76.JPG', mot: 'Sophie Hurst-Fraunhofer' },
        
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/78.JPG', mot: 'Emma-Lise Belayche' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/79.JPG', mot: 'Clémence Villefroy' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/80.JPG', mot: 'Christopher Azzam' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/81.JPG', mot: 'Amandine Chon' },
        
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/83.JPG', mot: 'Xavier Nestile' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/84.JPG', mot: 'Morgane Legendre' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/85.JPG', mot: 'Lysiane Regnard' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/86.JPG', mot: 'Camille Bigourie' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/87.JPG', mot: 'Romann Pontoireau' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/88.JPG', mot: 'Alex Echasserieau' },
        
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/90.JPG', mot: 'Elodie Lepeltier' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/91.JPG', mot: 'Laure Minin' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/92.JPG', mot: 'Mathilde Meyer' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/93.JPG', mot: 'Chloé Routy' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/94.JPG', mot: 'Matthias Bayer' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/95.JPG', mot: 'Elisabeth Hilgenfeld' },
        
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/97.JPG', mot: 'Lou Bantignies-Le Bars' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/98.JPG', mot: 'Lilian Lecocq' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/99.JPG', mot: 'Anisa Sula' },
        
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/101.JPG', mot: 'Stéphane Tra' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/102.JPG', mot: 'Mathilde Nicod' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/103.JPG', mot: 'Anaë Girault-Fodil' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/104.JPG', mot: 'Tatiana Liguine' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/105.JPG', mot: 'Mattéo Beylard' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/106.JPG', mot: 'Charlie Triballeau' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/107.JPG', mot: 'Pierre-Alexandre Escarcega' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/108.JPG', mot: 'Floriane Visentin' },
       
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/110.JPG', mot: 'Louan Cuoq' },
        
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/112.JPG', mot: 'Sarah-Maria Römer' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/113.JPG', mot: 'Le Puuuannt' },
        
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/115.JPG', mot: 'Hugo Barsot' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/116.JPG', mot: 'Julie Dumousseaux' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/117.JPG', mot: 'Brunelle Ode' },

        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/119.JPG', mot: 'Clément Calvel' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/120.JPG', mot: 'Aymeric Protsch' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/121.JPG', mot: 'Cloé Bertona' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/122.JPG', mot: 'Anais Pierron' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/123.JPG', mot: 'Lisa Rommé' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/124.JPG', mot: 'Guillaume Bréviaire' },
    
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/126.JPG', mot: 'Lou Regnard' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/127.JPG', mot: 'Kevin Tia' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/128.JPG', mot: 'Noa Quetard' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/129.JPG', mot: 'Tommy Derangere' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/130.JPG', mot: 'Youri Blein' },
    
        
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/133.JPG', mot: 'Maxime Bôle' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/134.JPG', mot: 'Anna Brun' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/135.JPG', mot: 'Josselin Begue-Martail' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/136.JPG', mot: 'Clémence Raymond' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/137.JPG', mot: 'Léane Senanou' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/138.JPG', mot: 'Simon Husser' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/139.JPG', mot: 'Yassine Margoum' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/140.JPG', mot: 'Lena Catrice' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/141.JPG', mot: 'Thibault Onillon' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/142.JPG', mot: 'Gwendoline Poivlet' },

        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/144.JPG', mot: 'Eliette Tavernier' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/145.JPG', mot: 'Alexandre Ansieau' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/146.JPG', mot: 'Hadrien Herlem' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/147.JPG', mot: 'Candice André' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/148.JPG', mot: 'Marie Doumat' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/149.JPG', mot: 'Nicolas Gallian' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/150.JPG', mot: 'Camille Boulin' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/151.JPG', mot: 'Marion Marechal' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/152.JPG', mot: 'Arthur Pistre' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/153.JPG', mot: 'Julie Soulier' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/154.JPG', mot: 'Mathilde Dabin' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/155.JPG', mot: 'Arthur Sigelin' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/156.JPG', mot: 'Robin Giano' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/157.JPG', mot: 'Jeanne Beyrle' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/158.JPG', mot: 'Alice Poillerat-Poncet' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/159.JPG', mot: 'Nicolas Hochemer' },
    
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/161.JPG', mot: 'Lucie Hartmann' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/162.JPG', mot: 'Gautier Beausir' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/164.JPG', mot: 'Hugo Petiot' },
    
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/166.JPG', mot: 'Pierre Pompignac' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/167.JPG', mot: 'Kiara Avendano-Blanes' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/168.JPG', mot: 'Geoffrey Colombo' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/169.JPG', mot: 'Ulysse Teisson' },
     
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/171.JPG', mot: 'Pierre-Louis Barbier' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/172.JPG', mot: 'Killian Helary' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/173.JPG', mot: 'Louise Cartier' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/174.JPG', mot: 'Margaux Le Coq' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/175.JPG', mot: 'Victor Denaud' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/176.JPG', mot: 'Emma Abu Amara' },
    
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/178.JPG', mot: 'Clara Cristea' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/179.JPG', mot: 'Hermance Muller' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/180.JPG', mot: 'Laurine Mroz' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/181.JPG', mot: 'Noé Mbéa Mbéa Mandeng' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/183.JPG', mot: 'Anna Demeraux' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/184.JPG', mot: 'Louis Goutte' },
        { url: 'https://raw.githubusercontent.com/BASMaDSBAS/jeu/main/185.JPG', mot: 'Boris Torres' },
        
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
