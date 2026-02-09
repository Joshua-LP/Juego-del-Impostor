// ========================================
// 🎭 EL IMPOSTOR - LÓGICA DEL JUEGO
// ========================================

// ========================================
// BASE DE DATOS DE PALABRAS POR TEMA
// ========================================

const THEMES = {
    marvel: {
        name: "Marvel",
        emoji: "🦸",
        words: [
            { word: "Spider-Man", emoji: "🕷️" },
            { word: "Iron Man", emoji: "🤖" },
            { word: "Thor", emoji: "⚡" },
            { word: "Hulk", emoji: "💪" },
            { word: "Capitán América", emoji: "🛡️" },
            { word: "Black Widow", emoji: "🕷️" },
            { word: "Thanos", emoji: "🟣" },
            { word: "Loki", emoji: "🦊" },
            { word: "Doctor Strange", emoji: "🔮" },
            { word: "Black Panther", emoji: "🐆" },
            { word: "Scarlet Witch", emoji: "🔴" },
            { word: "Vision", emoji: "💎" },
            { word: "Ant-Man", emoji: "🐜" },
            { word: "Groot", emoji: "🌳" },
            { word: "Rocket Raccoon", emoji: "🦝" },
            { word: "Gamora", emoji: "💚" },
            { word: "Star-Lord", emoji: "⭐" },
            { word: "Deadpool", emoji: "🔴" },
            { word: "Wolverine", emoji: "🐺" },
            { word: "Magneto", emoji: "🧲" },
            { word: "Professor X", emoji: "🧠" },
            { word: "Nick Fury", emoji: "👁️" },
            { word: "Hawkeye", emoji: "🏹" },
            { word: "Falcon", emoji: "🦅" },
            { word: "Winter Soldier", emoji: "❄️" }
        ]
    },
    disney: {
        name: "Disney",
        emoji: "🏰",
        words: [
            { word: "El Rey León", emoji: "🦁" },
            { word: "Frozen", emoji: "❄️" },
            { word: "Toy Story", emoji: "🤠" },
            { word: "Buscando a Nemo", emoji: "🐠" },
            { word: "Aladdin", emoji: "🧞" },
            { word: "La Bella y la Bestia", emoji: "🌹" },
            { word: "Moana", emoji: "🌊" },
            { word: "Coco", emoji: "🎸" },
            { word: "Up", emoji: "🎈" },
            { word: "WALL-E", emoji: "🤖" },
            { word: "Ratatouille", emoji: "🐀" },
            { word: "Los Increíbles", emoji: "💪" },
            { word: "Monsters Inc", emoji: "👹" },
            { word: "Cars", emoji: "🚗" },
            { word: "Enredados", emoji: "👱‍♀️" },
            { word: "Mulán", emoji: "⚔️" },
            { word: "Pocahontas", emoji: "🍂" },
            { word: "Hércules", emoji: "💪" },
            { word: "Lilo y Stitch", emoji: "👽" },
            { word: "El Libro de la Selva", emoji: "🐻" },
            { word: "Peter Pan", emoji: "🧚" },
            { word: "Pinocchio", emoji: "🤥" },
            { word: "Dumbo", emoji: "🐘" },
            { word: "Bambi", emoji: "🦌" },
            { word: "La Sirenita", emoji: "🧜‍♀️" }
        ]
    },
    princesas: {
        name: "Princesas",
        emoji: "👸",
        words: [
            { word: "Cenicienta", emoji: "👠" },
            { word: "Blancanieves", emoji: "🍎" },
            { word: "Aurora", emoji: "🌹" },
            { word: "Ariel", emoji: "🧜‍♀️" },
            { word: "Bella", emoji: "📚" },
            { word: "Jasmín", emoji: "🌙" },
            { word: "Pocahontas", emoji: "🍂" },
            { word: "Mulán", emoji: "⚔️" },
            { word: "Tiana", emoji: "🐸" },
            { word: "Rapunzel", emoji: "💇‍♀️" },
            { word: "Mérida", emoji: "🏹" },
            { word: "Moana", emoji: "🌊" },
            { word: "Elsa", emoji: "❄️" },
            { word: "Anna", emoji: "💕" },
            { word: "Raya", emoji: "🐉" },
            { word: "Mirabel", emoji: "🦋" },
            { word: "Giselle", emoji: "👗" },
            { word: "Vanellope", emoji: "🍬" },
            { word: "Sofia", emoji: "💜" },
            { word: "Elena", emoji: "👑" }
        ]
    },
    magicos: {
        name: "Mágicos",
        emoji: "✨",
        words: [
            { word: "Mago Merlín", emoji: "🧙" },
            { word: "Hada Madrina", emoji: "🧚" },
            { word: "Genio", emoji: "🧞" },
            { word: "Unicornio", emoji: "🦄" },
            { word: "Dragón", emoji: "🐉" },
            { word: "Fénix", emoji: "🔥" },
            { word: "Sirena", emoji: "🧜‍♀️" },
            { word: "Duende", emoji: "🧝" },
            { word: "Hada", emoji: "🧚‍♀️" },
            { word: "Bruja", emoji: "🧙‍♀️" },
            { word: "Vampiro", emoji: "🧛" },
            { word: "Fantasma", emoji: "👻" },
            { word: "Ángel", emoji: "👼" },
            { word: "Demonio", emoji: "😈" },
            { word: "Pegaso", emoji: "🐴" },
            { word: "Centauro", emoji: "🏇" },
            { word: "Minotauro", emoji: "🐂" },
            { word: "Grifo", emoji: "🦅" },
            { word: "Tritón", emoji: "🔱" },
            { word: "Medusa", emoji: "🐍" },
            { word: "Cíclope", emoji: "👁️" },
            { word: "Kraken", emoji: "🦑" },
            { word: "Lobo Feroz", emoji: "🐺" },
            { word: "Ogro", emoji: "👹" },
            { word: "Elfo", emoji: "🧝‍♂️" }
        ]
    },
    peliculas: {
        name: "Películas",
        emoji: "🎬",
        words: [
            { word: "Titanic", emoji: "🚢" },
            { word: "Jurassic Park", emoji: "🦖" },
            { word: "Harry Potter", emoji: "⚡" },
            { word: "Avatar", emoji: "💙" },
            { word: "Star Wars", emoji: "⭐" },
            { word: "Matrix", emoji: "💊" },
            { word: "E.T.", emoji: "👽" },
            { word: "Indiana Jones", emoji: "🤠" },
            { word: "Tiburón", emoji: "🦈" },
            { word: "Terminator", emoji: "🤖" },
            { word: "Volver al Futuro", emoji: "⏰" },
            { word: "Shrek", emoji: "💚" },
            { word: "Madagascar", emoji: "🦁" },
            { word: "Kung Fu Panda", emoji: "🐼" },
            { word: "Mi Villano Favorito", emoji: "🍌" },
            { word: "Intensamente", emoji: "😊" },
            { word: "Zootopia", emoji: "🐰" },
            { word: "Cómo Entrenar a tu Dragón", emoji: "🐉" },
            { word: "Los Minions", emoji: "🟡" },
            { word: "El Grinch", emoji: "💚" },
            { word: "Jumanji", emoji: "🎲" },
            { word: "Home Alone", emoji: "🏠" },
            { word: "Ghostbusters", emoji: "👻" },
            { word: "Men in Black", emoji: "🕴️" },
            { word: "Piratas del Caribe", emoji: "🏴‍☠️" }
        ]
    },
    animales: {
        name: "Animales",
        emoji: "🐾",
        words: [
            { word: "León", emoji: "🦁" },
            { word: "Elefante", emoji: "🐘" },
            { word: "Jirafa", emoji: "🦒" },
            { word: "Tigre", emoji: "🐯" },
            { word: "Oso Panda", emoji: "🐼" },
            { word: "Delfín", emoji: "🐬" },
            { word: "Águila", emoji: "🦅" },
            { word: "Canguro", emoji: "🦘" },
            { word: "Koala", emoji: "🐨" },
            { word: "Pingüino", emoji: "🐧" },
            { word: "Flamenco", emoji: "🦩" },
            { word: "Loro", emoji: "🦜" },
            { word: "Cocodrilo", emoji: "🐊" },
            { word: "Pulpo", emoji: "🐙" },
            { word: "Medusa", emoji: "🪼" },
            { word: "Tiburón", emoji: "🦈" },
            { word: "Ballena", emoji: "🐋" },
            { word: "Tortuga", emoji: "🐢" },
            { word: "Camaleón", emoji: "🦎" },
            { word: "Mariposa", emoji: "🦋" },
            { word: "Abeja", emoji: "🐝" },
            { word: "Hormiga", emoji: "🐜" },
            { word: "Araña", emoji: "🕷️" },
            { word: "Murciélago", emoji: "🦇" },
            { word: "Búho", emoji: "🦉" }
        ]
    },
    comida: {
        name: "Comida",
        emoji: "🍕",
        words: [
            { word: "Pizza", emoji: "🍕" },
            { word: "Hamburguesa", emoji: "🍔" },
            { word: "Tacos", emoji: "🌮" },
            { word: "Sushi", emoji: "🍣" },
            { word: "Helado", emoji: "🍦" },
            { word: "Pastel", emoji: "🎂" },
            { word: "Chocolate", emoji: "🍫" },
            { word: "Donut", emoji: "🍩" },
            { word: "Hot Dog", emoji: "🌭" },
            { word: "Papas Fritas", emoji: "🍟" },
            { word: "Pollo Frito", emoji: "🍗" },
            { word: "Espagueti", emoji: "🍝" },
            { word: "Ensalada", emoji: "🥗" },
            { word: "Sandía", emoji: "🍉" },
            { word: "Manzana", emoji: "🍎" },
            { word: "Plátano", emoji: "🍌" },
            { word: "Uvas", emoji: "🍇" },
            { word: "Naranja", emoji: "🍊" },
            { word: "Galleta", emoji: "🍪" },
            { word: "Palomitas", emoji: "🍿" },
            { word: "Café", emoji: "☕" },
            { word: "Té", emoji: "🍵" },
            { word: "Burrito", emoji: "🌯" },
            { word: "Pretzel", emoji: "🥨" },
            { word: "Cupcake", emoji: "🧁" }
        ]
    },
    deportes: {
        name: "Deportes",
        emoji: "⚽",
        words: [
            { word: "Fútbol", emoji: "⚽" },
            { word: "Básquetbol", emoji: "🏀" },
            { word: "Tenis", emoji: "🎾" },
            { word: "Béisbol", emoji: "⚾" },
            { word: "Golf", emoji: "⛳" },
            { word: "Natación", emoji: "🏊" },
            { word: "Ciclismo", emoji: "🚴" },
            { word: "Boxeo", emoji: "🥊" },
            { word: "Karate", emoji: "🥋" },
            { word: "Surf", emoji: "🏄" },
            { word: "Esquí", emoji: "⛷️" },
            { word: "Patinaje", emoji: "⛸️" },
            { word: "Rugby", emoji: "🏉" },
            { word: "Voleibol", emoji: "🏐" },
            { word: "Hockey", emoji: "🏒" },
            { word: "Ping Pong", emoji: "🏓" },
            { word: "Bádminton", emoji: "🏸" },
            { word: "Escalada", emoji: "🧗" },
            { word: "Paracaidismo", emoji: "🪂" },
            { word: "Arquería", emoji: "🏹" },
            { word: "Esgrima", emoji: "🤺" },
            { word: "Levantamiento de Pesas", emoji: "🏋️" },
            { word: "Gimnasia", emoji: "🤸" },
            { word: "Skateboard", emoji: "🛹" },
            { word: "Snowboard", emoji: "🏂" }
        ]
    },
    profesiones: {
        name: "Profesiones",
        emoji: "👨‍⚕️",
        words: [
            { word: "Doctor", emoji: "👨‍⚕️" },
            { word: "Enfermera", emoji: "👩‍⚕️" },
            { word: "Bombero", emoji: "👨‍🚒" },
            { word: "Policía", emoji: "👮" },
            { word: "Maestro", emoji: "👨‍🏫" },
            { word: "Chef", emoji: "👨‍🍳" },
            { word: "Piloto", emoji: "👨‍✈️" },
            { word: "Astronauta", emoji: "👨‍🚀" },
            { word: "Científico", emoji: "👨‍🔬" },
            { word: "Artista", emoji: "👨‍🎨" },
            { word: "Músico", emoji: "👨‍🎤" },
            { word: "Actor", emoji: "🎭" },
            { word: "Veterinario", emoji: "🐕" },
            { word: "Abogado", emoji: "⚖️" },
            { word: "Arquitecto", emoji: "🏛️" },
            { word: "Ingeniero", emoji: "👷" },
            { word: "Programador", emoji: "💻" },
            { word: "Fotógrafo", emoji: "📷" },
            { word: "Periodista", emoji: "📰" },
            { word: "Mecánico", emoji: "🔧" },
            { word: "Electricista", emoji: "⚡" },
            { word: "Dentista", emoji: "🦷" },
            { word: "Peluquero", emoji: "💇" },
            { word: "Granjero", emoji: "👨‍🌾" },
            { word: "Detective", emoji: "🕵️" }
        ]
    },
    lugares: {
        name: "Lugares",
        emoji: "🌍",
        words: [
            { word: "París", emoji: "🗼" },
            { word: "Nueva York", emoji: "🗽" },
            { word: "Tokio", emoji: "🗾" },
            { word: "Egipto", emoji: "🏛️" },
            { word: "Playa", emoji: "🏖️" },
            { word: "Montaña", emoji: "🏔️" },
            { word: "Desierto", emoji: "🏜️" },
            { word: "Selva", emoji: "🌴" },
            { word: "Castillo", emoji: "🏰" },
            { word: "Hospital", emoji: "🏥" },
            { word: "Escuela", emoji: "🏫" },
            { word: "Aeropuerto", emoji: "✈️" },
            { word: "Estadio", emoji: "🏟️" },
            { word: "Parque", emoji: "🌳" },
            { word: "Museo", emoji: "🏛️" },
            { word: "Biblioteca", emoji: "📚" },
            { word: "Cine", emoji: "🎬" },
            { word: "Restaurante", emoji: "🍽️" },
            { word: "Supermercado", emoji: "🛒" },
            { word: "Gimnasio", emoji: "💪" },
            { word: "Zoológico", emoji: "🦁" },
            { word: "Acuario", emoji: "🐠" },
            { word: "Circo", emoji: "🎪" },
            { word: "Nave Espacial", emoji: "🚀" },
            { word: "Submarino", emoji: "🚤" }
        ]
    },
    farandula: {
        name: "Farándula Peruana",
        emoji: "🇵🇪",
        words: [
            { word: "Magaly Medina", emoji: "📺" },
            { word: "Gisela Valcárcel", emoji: "💃" },
            { word: "Tula Rodríguez", emoji: "🎤" },
            { word: "Janet Barboza", emoji: "👄" },
            { word: "Ethel Pozo", emoji: "📺" },
            { word: "Jazmín Pinedo", emoji: "👱‍♀️" },
            { word: "Rodrigo González", emoji: "🎙️" },
            { word: "Gigi Mitre", emoji: "📺" },
            { word: "Melissa Paredes", emoji: "💋" },
            { word: "Sheyla Rojas", emoji: "👩" },
            { word: "Tilsa Lozano", emoji: "👸" },
            { word: "Milett Figueroa", emoji: "👑" },
            { word: "Yahaira Plasencia", emoji: "🎵" },
            { word: "Jefferson Farfán", emoji: "⚽" },
            { word: "Christian Cueva", emoji: "⚽" },
            { word: "Paolo Guerrero", emoji: "⚽" },
            { word: "Pamela Franco", emoji: "🎤" },
            { word: "Christian Domínguez", emoji: "🎹" },
            { word: "Karla Tarazona", emoji: "🎤" },
            { word: "Brunella Horna", emoji: "👰" },
            { word: "Richard Acuña", emoji: "👔" },
            { word: "Gino Pesaressi", emoji: "🕺" },
            { word: "Nicola Porcella", emoji: "💪" },
            { word: "Mario Hart", emoji: "🏎️" },
            { word: "Leslie Shaw", emoji: "🎵" },
            { word: "Susy Díaz", emoji: "😂" },
            { word: "Monique Pardo", emoji: "🎶" },
            { word: "Laura Bozzo", emoji: "📣" },
            { word: "Andrés Hurtado", emoji: "📺" },
            { word: "Jorge Benavides", emoji: "😄" }
        ]
    },
    acciones: {
        name: "Acciones",
        emoji: "🎬",
        words: [
            { word: "Bailar", emoji: "💃" },
            { word: "Cantar", emoji: "🎤" },
            { word: "Saltar", emoji: "🦘" },
            { word: "Correr", emoji: "🏃" },
            { word: "Nadar", emoji: "🏊" },
            { word: "Volar", emoji: "🦅" },
            { word: "Llorar", emoji: "😢" },
            { word: "Reír", emoji: "😂" },
            { word: "Dormir", emoji: "😴" },
            { word: "Comer", emoji: "🍽️" },
            { word: "Besar", emoji: "💋" },
            { word: "Abrazar", emoji: "🤗" },
            { word: "Gritar", emoji: "📣" },
            { word: "Susurrar", emoji: "🤫" },
            { word: "Aplaudir", emoji: "👏" },
            { word: "Silbar", emoji: "🎵" },
            { word: "Cocinar", emoji: "👨‍🍳" },
            { word: "Limpiar", emoji: "🧹" },
            { word: "Pintar", emoji: "🎨" },
            { word: "Escribir", emoji: "✍️" },
            { word: "Leer", emoji: "📖" },
            { word: "Estudiar", emoji: "📚" },
            { word: "Trabajar", emoji: "💼" },
            { word: "Jugar", emoji: "🎮" },
            { word: "Conducir", emoji: "🚗" },
            { word: "Patinar", emoji: "⛸️" },
            { word: "Escalar", emoji: "🧗" },
            { word: "Pescar", emoji: "🎣" },
            { word: "Fotografiar", emoji: "📷" },
            { word: "Actuar", emoji: "🎭" },
            { word: "Meditar", emoji: "🧘" },
            { word: "Rezar", emoji: "🙏" },
            { word: "Estornudar", emoji: "🤧" },
            { word: "Bostezar", emoji: "🥱" },
            { word: "Pelear", emoji: "👊" }
        ]
    }
};

// ========================================
// ESTADO DEL JUEGO
// ========================================

let gameState = {
    numPlayers: 4,
    numImpostors: 1,
    selectedThemes: [],
    currentPlayer: 1,
    impostorIndices: [],
    secretWord: null,
    secretEmoji: null,
    secretCategory: null,
    cardFlipped: false,
    timerInterval: null,
    timerSeconds: 180,
    timerRunning: false
};

// ========================================
// INICIALIZACIÓN
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    initializeInputListeners();
});

function createParticles() {
    const container = document.getElementById('particles');
    const numParticles = 30;
    
    for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (10 + Math.random() * 10) + 's';
        particle.style.opacity = Math.random() * 0.5 + 0.1;
        particle.style.width = (3 + Math.random() * 5) + 'px';
        particle.style.height = particle.style.width;
        container.appendChild(particle);
    }
}

function initializeInputListeners() {
    const numPlayersInput = document.getElementById('numPlayers');
    const numImpostorsInput = document.getElementById('numImpostors');
    
    numPlayersInput.addEventListener('change', validateInputs);
    numImpostorsInput.addEventListener('change', validateInputs);
}

// ========================================
// FUNCIONES DE CONFIGURACIÓN
// ========================================

function changeValue(inputId, delta) {
    const input = document.getElementById(inputId);
    let value = parseInt(input.value) + delta;
    
    const min = parseInt(input.min);
    const max = parseInt(input.max);
    
    value = Math.max(min, Math.min(max, value));
    input.value = value;
    
    validateInputs();
    
    // Efecto visual
    input.style.transform = 'scale(1.2)';
    setTimeout(() => {
        input.style.transform = 'scale(1)';
    }, 100);
}

function validateInputs() {
    const numPlayers = parseInt(document.getElementById('numPlayers').value);
    const numImpostors = parseInt(document.getElementById('numImpostors').value);
    
    // Los impostores no pueden ser más de la mitad de los jugadores
    const maxImpostors = Math.floor(numPlayers / 2);
    
    if (numImpostors > maxImpostors) {
        document.getElementById('numImpostors').value = maxImpostors;
    }
    
    // Actualizar límite máximo dinámicamente
    document.getElementById('numImpostors').max = maxImpostors;
}

function getSelectedThemes() {
    const checkboxes = document.querySelectorAll('.theme-checkbox input:checked');
    return Array.from(checkboxes).map(cb => cb.value);
}

// ========================================
// INICIAR JUEGO
// ========================================

function startGame() {
    const selectedThemes = getSelectedThemes();
    
    if (selectedThemes.length === 0) {
        alert('¡Selecciona al menos un tema!');
        return;
    }
    
    gameState.numPlayers = parseInt(document.getElementById('numPlayers').value);
    gameState.numImpostors = parseInt(document.getElementById('numImpostors').value);
    gameState.selectedThemes = selectedThemes;
    gameState.currentPlayer = 1;
    gameState.cardFlipped = false;
    
    // Seleccionar palabra secreta aleatoria
    selectSecretWord();
    
    // Seleccionar impostores aleatoriamente
    selectImpostors();
    
    // Mostrar pantalla de juego
    showScreen('screen-game');
    updateGameUI();
    resetCard();
}

function selectSecretWord() {
    // Obtener todas las palabras de los temas seleccionados
    let allWords = [];
    
    gameState.selectedThemes.forEach(themeKey => {
        const theme = THEMES[themeKey];
        theme.words.forEach(wordObj => {
            allWords.push({
                word: wordObj.word,
                emoji: wordObj.emoji,
                category: theme.name,
                categoryEmoji: theme.emoji
            });
        });
    });
    
    // Seleccionar una palabra aleatoria usando Fisher-Yates shuffle parcial
    const randomIndex = Math.floor(Math.random() * allWords.length);
    const selected = allWords[randomIndex];
    
    gameState.secretWord = selected.word;
    gameState.secretEmoji = selected.emoji;
    gameState.secretCategory = selected.category;
}

function selectImpostors() {
    // Crear un array de índices de jugadores (1 a n)
    const playerIndices = Array.from({ length: gameState.numPlayers }, (_, i) => i + 1);
    
    // Algoritmo Fisher-Yates para selección aleatoria
    const shuffled = [...playerIndices];
    for (let i = shuffled.length - 1; i > 0; i--) {
        // Usar crypto.getRandomValues para mejor aleatoriedad
        const randomArray = new Uint32Array(1);
        crypto.getRandomValues(randomArray);
        const j = randomArray[0] % (i + 1);
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    // Los primeros n elementos son los impostores
    gameState.impostorIndices = shuffled.slice(0, gameState.numImpostors);
}

// ========================================
// INTERFAZ DEL JUEGO
// ========================================

function updateGameUI() {
    const isImpostor = gameState.impostorIndices.includes(gameState.currentPlayer);
    const cardBack = document.getElementById('card-back');
    
    // Actualizar encabezado
    document.getElementById('current-player').textContent = `Jugador ${gameState.currentPlayer}`;
    
    // Actualizar contenido de la carta
    if (isImpostor) {
        cardBack.classList.remove('normal');
        cardBack.classList.add('impostor');
        document.getElementById('card-emoji').textContent = '🎭';
        document.getElementById('card-word').textContent = '¡IMPOSTOR!';
        document.getElementById('card-category').textContent = 'No conoces la palabra';
    } else {
        cardBack.classList.remove('impostor');
        cardBack.classList.add('normal');
        document.getElementById('card-emoji').textContent = gameState.secretEmoji;
        document.getElementById('card-word').textContent = gameState.secretWord;
        document.getElementById('card-category').textContent = gameState.secretCategory;
    }
    
    // Actualizar barra de progreso
    const progress = (gameState.currentPlayer / gameState.numPlayers) * 100;
    document.getElementById('progress-bar').style.width = progress + '%';
    document.getElementById('progress-text').textContent = 
        `Jugador ${gameState.currentPlayer} de ${gameState.numPlayers}`;
    
    // Ocultar botones
    document.getElementById('btn-next').style.display = 'none';
    document.getElementById('btn-play').style.display = 'none';
}

function flipCard() {
    const card = document.getElementById('game-card');
    
    if (!gameState.cardFlipped) {
        card.classList.add('flipped');
        gameState.cardFlipped = true;
        
        // Mostrar botón apropiado después de voltear
        setTimeout(() => {
            if (gameState.currentPlayer < gameState.numPlayers) {
                document.getElementById('btn-next').style.display = 'inline-block';
            } else {
                document.getElementById('btn-play').style.display = 'inline-block';
            }
        }, 800);
    } else {
        // Si ya está volteada, resetear
        resetCard();
    }
}

function resetCard() {
    const card = document.getElementById('game-card');
    card.classList.remove('flipped');
    gameState.cardFlipped = false;
    document.getElementById('btn-next').style.display = 'none';
    document.getElementById('btn-play').style.display = 'none';
}

function nextPlayer() {
    gameState.currentPlayer++;
    gameState.cardFlipped = false;
    resetCard();
    
    // Pequeña animación de transición
    const container = document.querySelector('.card-container');
    container.style.opacity = '0';
    container.style.transform = 'translateX(-50px)';
    
    setTimeout(() => {
        updateGameUI();
        container.style.opacity = '1';
        container.style.transform = 'translateX(0)';
    }, 300);
}

function startDiscussion() {
    showScreen('screen-discussion');
    resetTimer();
}

// ========================================
// TEMPORIZADOR
// ========================================

function toggleTimer() {
    if (gameState.timerRunning) {
        pauseTimer();
    } else {
        startTimer();
    }
}

function startTimer() {
    gameState.timerRunning = true;
    
    gameState.timerInterval = setInterval(() => {
        gameState.timerSeconds--;
        
        if (gameState.timerSeconds <= 0) {
            pauseTimer();
            gameState.timerSeconds = 0;
            // Efecto de vibración cuando termina
            document.querySelector('.timer-circle').classList.add('shake');
            setTimeout(() => {
                document.querySelector('.timer-circle').classList.remove('shake');
            }, 500);
        }
        
        updateTimerDisplay();
    }, 1000);
}

function pauseTimer() {
    gameState.timerRunning = false;
    clearInterval(gameState.timerInterval);
}

function resetTimer() {
    pauseTimer();
    gameState.timerSeconds = 180; // 3 minutos
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const minutes = Math.floor(gameState.timerSeconds / 60);
    const seconds = gameState.timerSeconds % 60;
    document.getElementById('timer').textContent = 
        `${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    // Cambiar color cuando queda poco tiempo
    const timerCircle = document.querySelector('.timer-circle');
    if (gameState.timerSeconds <= 30) {
        timerCircle.style.borderColor = '#ff4757';
        timerCircle.style.boxShadow = '0 0 40px rgba(255, 71, 87, 0.5)';
    } else if (gameState.timerSeconds <= 60) {
        timerCircle.style.borderColor = '#ffa502';
        timerCircle.style.boxShadow = '0 0 40px rgba(255, 165, 2, 0.5)';
    } else {
        timerCircle.style.borderColor = '#6c5ce7';
        timerCircle.style.boxShadow = '0 0 40px rgba(108, 92, 231, 0.3)';
    }
}

// ========================================
// RESULTADOS
// ========================================

function revealImpostors() {
    pauseTimer();
    showScreen('screen-results');
    
    // Mostrar impostores
    const impostorsList = document.getElementById('impostors-list');
    impostorsList.innerHTML = '';
    
    gameState.impostorIndices.forEach((playerNum, index) => {
        setTimeout(() => {
            const badge = document.createElement('div');
            badge.className = 'impostor-badge';
            badge.textContent = `🎭 Jugador ${playerNum}`;
            impostorsList.appendChild(badge);
        }, index * 300);
    });
    
    // Mostrar palabra secreta
    document.getElementById('secret-word').textContent = 
        `${gameState.secretEmoji} ${gameState.secretWord}`;
    
    // Crear confeti
    createConfetti();
}

function createConfetti() {
    const colors = ['#00d26a', '#ff4757', '#6c5ce7', '#0984e3', '#ffa502', '#ff6b81'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = '-10px';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.width = (5 + Math.random() * 10) + 'px';
            confetti.style.height = confetti.style.width;
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 3000);
        }, i * 50);
    }
}

// ========================================
// NAVEGACIÓN
// ========================================

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

function playAgain() {
    // Mantener misma configuración pero nueva ronda
    gameState.currentPlayer = 1;
    gameState.cardFlipped = false;
    
    selectSecretWord();
    selectImpostors();
    
    showScreen('screen-game');
    updateGameUI();
    resetCard();
}

function goHome() {
    pauseTimer();
    showScreen('screen-home');
}

// ========================================
// UTILIDADES ADICIONALES
// ========================================

// Prevenir zoom en dispositivos móviles al hacer doble tap
document.addEventListener('touchend', (e) => {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
        e.preventDefault();
    }
    lastTouchEnd = now;
}, { passive: false });

let lastTouchEnd = 0;

// Efecto de sonido simulado (vibración en móviles si está disponible)
function playHaptic() {
    if (navigator.vibrate) {
        navigator.vibrate(50);
    }
}

// Agregar efectos de sonido a los botones
document.addEventListener('click', (e) => {
    if (e.target.matches('button') || e.target.matches('.card')) {
        playHaptic();
    }
});
