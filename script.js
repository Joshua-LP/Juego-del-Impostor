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
// DEFINICIÓN DE PODERES ESPECIALES
// ========================================

const PODERES = [
    {
        id: 'policia',
        nombre: '👮 Policía',
        emoji: '👮',
        descripcion: 'Conoce 3 sospechosos',
        tipo: 'investigador'
    },
    {
        id: 'detective',
        nombre: '🕵️ Detective',
        emoji: '🕵️',
        descripcion: 'Conoce 2 jugadores inocentes',
        tipo: 'investigador'
    },
    {
        id: 'medium',
        nombre: '🔮 Médium',
        emoji: '🔮',
        descripcion: 'Conoce si hay impostor entre los primeros 3',
        tipo: 'vidente'
    },
    {
        id: 'guardian',
        nombre: '🛡️ Guardián',
        emoji: '🛡️',
        descripcion: 'Puede proteger a un jugador de la votación',
        tipo: 'protector'
    }
];

// ========================================
// ESTADO DEL JUEGO
// ========================================

let gameState = {
    numPlayers: 4,
    numImpostors: 1,
    selectedThemes: [],
    currentPlayer: 1,
    impostorIndices: [],
    playersWithPowers: [], // {playerIndex, power, info}
    secretWord: null,
    secretEmoji: null,
    secretCategory: null,
    cardFlipped: false,
    timerInterval: null,
    timerSeconds: 180,
    timerRunning: false,
    // Para el hack secreto del cuadrado
    drawPoints: [],
    isDrawing: false
};

// ========================================
// INICIALIZACIÓN
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    initializeInputListeners();
    initializeSecretGesture();
});

// ========================================
// HACK SECRETO: DETECCIÓN DE CUADRADO EN BORDES DE CARTA
// ========================================

function initializeSecretGesture() {
    // Escuchar eventos globales para detectar el dibujo del cuadrado
    document.addEventListener('mousedown', handleDrawStart);
    document.addEventListener('mousemove', handleDrawMove);
    document.addEventListener('mouseup', handleDrawEnd);
    document.addEventListener('touchstart', handleDrawStart, { passive: false });
    document.addEventListener('touchmove', handleDrawMove, { passive: false });
    document.addEventListener('touchend', handleDrawEnd);
}

function handleDrawStart(e) {
    const card = document.getElementById('game-card');
    if (!card) return;
    
    gameState.isDrawing = true;
    gameState.drawPoints = [];
    
    const point = getEventPoint(e);
    gameState.drawPoints.push(point);
}

function handleDrawMove(e) {
    if (!gameState.isDrawing) return;
    
    const point = getEventPoint(e);
    gameState.drawPoints.push(point);
}

function handleDrawEnd(e) {
    if (!gameState.isDrawing) return;
    gameState.isDrawing = false;
    
    // Verificar si el trazo forma un cuadrado en los bordes de la carta
    if (checkSquareOnCardEdges()) {
        executeSecretSwap();
    }
    
    gameState.drawPoints = [];
}

function getEventPoint(e) {
    if (e.touches && e.touches.length > 0) {
        return { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
    return { x: e.clientX, y: e.clientY };
}

function checkSquareOnCardEdges() {
    const card = document.getElementById('game-card');
    if (!card || gameState.drawPoints.length < 20) return false;
    
    const rect = card.getBoundingClientRect();
    const margin = 30; // Margen de tolerancia para detectar los bordes
    
    // Definir las zonas de los 4 bordes de la carta
    const topEdge = { minY: rect.top - margin, maxY: rect.top + margin };
    const bottomEdge = { minY: rect.bottom - margin, maxY: rect.bottom + margin };
    const leftEdge = { minX: rect.left - margin, maxX: rect.left + margin };
    const rightEdge = { minX: rect.right - margin, maxX: rect.right + margin };
    
    // Verificar que el trazo pasó por los 4 bordes
    let touchedTop = false;
    let touchedBottom = false;
    let touchedLeft = false;
    let touchedRight = false;
    
    for (const point of gameState.drawPoints) {
        // Verificar si el punto está cerca de la carta horizontalmente
        const isNearCardX = point.x >= rect.left - margin && point.x <= rect.right + margin;
        // Verificar si el punto está cerca de la carta verticalmente
        const isNearCardY = point.y >= rect.top - margin && point.y <= rect.bottom + margin;
        
        // Verificar borde superior
        if (isNearCardX && point.y >= topEdge.minY && point.y <= topEdge.maxY) {
            touchedTop = true;
        }
        // Verificar borde inferior
        if (isNearCardX && point.y >= bottomEdge.minY && point.y <= bottomEdge.maxY) {
            touchedBottom = true;
        }
        // Verificar borde izquierdo
        if (isNearCardY && point.x >= leftEdge.minX && point.x <= leftEdge.maxX) {
            touchedLeft = true;
        }
        // Verificar borde derecho
        if (isNearCardY && point.x >= rightEdge.minX && point.x <= rightEdge.maxX) {
            touchedRight = true;
        }
    }
    
    // El cuadrado se forma si el trazo tocó los 4 bordes
    return touchedTop && touchedBottom && touchedLeft && touchedRight;
}

function executeSecretSwap() {
    // Solo funciona si el jugador actual es impostor
    if (!gameState.impostorIndices.includes(gameState.currentPlayer)) return;
    
    // Remover al jugador actual de la lista de impostores
    const currentIndex = gameState.impostorIndices.indexOf(gameState.currentPlayer);
    gameState.impostorIndices.splice(currentIndex, 1);
    
    // Determinar quién será el nuevo impostor
    let newImpostor;
    
    // Si es el último jugador, el primero se vuelve impostor
    if (gameState.currentPlayer === gameState.numPlayers) {
        newImpostor = 1;
    } else {
        // El siguiente jugador se vuelve impostor
        newImpostor = gameState.currentPlayer + 1;
    }
    
    // Agregar al nuevo impostor
    gameState.impostorIndices.push(newImpostor);
    
    // Actualizar UI para mostrar como jugador normal
    updateGameUI();
    
    // Feedback visual (vibración si está disponible)
    if (navigator.vibrate) {
        navigator.vibrate([100, 50, 100]);
    }
}

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

    numPlayersInput.addEventListener('change', () => {
        validateInputs();
        updateRolesInfo();
    });
    numImpostorsInput.addEventListener('change', validateInputs);

    // Actualizar roles al cargar la página
    updateRolesInfo();
}

function updateRolesInfo() {
    const numPlayers = parseInt(document.getElementById('numPlayers').value);
    const rolesList = document.getElementById('roles-list');

    // Calcular cuántos poderes habrá
    let numPowers = 0;
    if (numPlayers >= 10) {
        numPowers = 3;
    } else if (numPlayers >= 7) {
        numPowers = 2;
    } else if (numPlayers >= 4) {
        numPowers = 1;
    }

    // Limpiar lista
    rolesList.innerHTML = '';

    // Agregar descripción general
    const summary = document.createElement('div');
    summary.className = 'role-summary';

    if (numPlayers < 4) {
        summary.innerHTML = `
            <p class="role-summary-text">
                ⚠️ <strong>Necesitas al menos 4 jugadores</strong> para que aparezcan roles especiales.
            </p>
        `;
    } else {
        summary.innerHTML = `
            <p class="role-summary-text">
                🎮 Con <strong>${numPlayers} jugadores</strong>, habrá <strong>${numPowers} rol${numPowers > 1 ? 'es' : ''} especial${numPowers > 1 ? 'es' : ''}</strong>.
            </p>
        `;
    }
    rolesList.appendChild(summary);

    // Mostrar los posibles roles
    if (numPlayers >= 4) {
        const rolesTitle = document.createElement('h4');
        rolesTitle.className = 'roles-subtitle';
        rolesTitle.textContent = 'Posibles Roles Especiales:';
        rolesList.appendChild(rolesTitle);

        PODERES.forEach(poder => {
            const roleCard = document.createElement('div');
            roleCard.className = 'role-card';
            roleCard.innerHTML = `
                <div class="role-icon">${poder.emoji}</div>
                <div class="role-details">
                    <h5 class="role-name">${poder.nombre}</h5>
                    <p class="role-description">${poder.descripcion}</p>
                </div>
            `;
            rolesList.appendChild(roleCard);
        });

        // Nota adicional
        const note = document.createElement('div');
        note.className = 'role-note';
        note.innerHTML = `
            <p>
                ℹ️ <strong>Nota:</strong> Los roles se asignan aleatoriamente a jugadores inocentes (no impostores).
            </p>
        `;
        rolesList.appendChild(note);
    }
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

    // Actualizar información de roles si se cambió el número de jugadores
    if (inputId === 'numPlayers') {
        updateRolesInfo();
    }

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
    gameState.drawPoints = [];
    gameState.isDrawing = false;

    // Seleccionar palabra secreta aleatoria
    selectSecretWord();

    // Seleccionar impostores aleatoriamente
    selectImpostors();

    // Asignar poderes especiales
    assignPowers();

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
    // TODOS los jugadores tienen la misma probabilidad
    const playerIndices = [];
    for (let i = 1; i <= gameState.numPlayers; i++) {
        playerIndices.push(i);
    }

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

function assignPowers() {
    gameState.playersWithPowers = [];

    // Calcular cuántos jugadores tendrán poderes basado en el total
    let numPowersToAssign = 0;
    if (gameState.numPlayers >= 10) {
        numPowersToAssign = 3;
    } else if (gameState.numPlayers >= 7) {
        numPowersToAssign = 2;
    } else if (gameState.numPlayers >= 4) {
        numPowersToAssign = 1;
    }

    if (numPowersToAssign === 0) return;

    // Crear lista de jugadores elegibles (no impostores, no primero, no último)
    const eligiblePlayers = [];
    for (let i = 2; i < gameState.numPlayers; i++) {
        if (!gameState.impostorIndices.includes(i)) {
            eligiblePlayers.push(i);
        }
    }

    // Si no hay suficientes jugadores elegibles, reducir el número de poderes
    numPowersToAssign = Math.min(numPowersToAssign, eligiblePlayers.length);

    // Mezclar jugadores elegibles
    const shuffled = [...eligiblePlayers];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const randomArray = new Uint32Array(1);
        crypto.getRandomValues(randomArray);
        const j = randomArray[0] % (i + 1);
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    // Asignar poderes aleatorios a los jugadores seleccionados
    for (let i = 0; i < numPowersToAssign; i++) {
        const playerIndex = shuffled[i];
        const power = PODERES[Math.floor(Math.random() * PODERES.length)];

        // Generar información específica del poder
        let powerInfo = generatePowerInfo(playerIndex, power);

        gameState.playersWithPowers.push({
            playerIndex: playerIndex,
            power: power,
            info: powerInfo
        });
    }
}

function generatePowerInfo(playerIndex, power) {
    let info = '';

    if (power.id === 'policia') {
        // Genera 3 sospechosos (puede incluir al impostor o no)
        const suspects = [];
        const allPlayers = Array.from({ length: gameState.numPlayers }, (_, i) => i + 1)
            .filter(p => p !== playerIndex);

        // Mezclar y tomar 3
        const shuffled = [...allPlayers];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const randomArray = new Uint32Array(1);
            crypto.getRandomValues(randomArray);
            const j = randomArray[0] % (i + 1);
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }

        const selectedSuspects = shuffled.slice(0, 3);
        info = `Sospechosos: Jugadores ${selectedSuspects.join(', ')}`;

    } else if (power.id === 'detective') {
        // Conoce 2 jugadores que NO son impostores
        const innocents = [];
        for (let i = 1; i <= gameState.numPlayers; i++) {
            if (i !== playerIndex && !gameState.impostorIndices.includes(i)) {
                innocents.push(i);
            }
        }

        // Mezclar y tomar 2
        const shuffled = [...innocents];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const randomArray = new Uint32Array(1);
            crypto.getRandomValues(randomArray);
            const j = randomArray[0] % (i + 1);
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }

        const selectedInnocents = shuffled.slice(0, 2);
        info = `Inocentes confirmados: Jugadores ${selectedInnocents.join(', ')}`;

    } else if (power.id === 'medium') {
        // Sabe si hay impostor entre los primeros 3 jugadores
        const first3 = [1, 2, 3].filter(p => p <= gameState.numPlayers);
        const hasImpostor = first3.some(p => gameState.impostorIndices.includes(p));
        info = hasImpostor ?
            'Hay un impostor entre los primeros 3 jugadores' :
            'NO hay impostor entre los primeros 3 jugadores';

    } else if (power.id === 'guardian') {
        info = 'Puedes proteger a un jugador durante la votación';
    }

    return info;
}

// ========================================
// INTERFAZ DEL JUEGO
// ========================================

function updateGameUI() {
    const isImpostor = gameState.impostorIndices.includes(gameState.currentPlayer);
    const cardBack = document.getElementById('card-back');

    // Verificar si el jugador tiene un poder
    const playerPower = gameState.playersWithPowers.find(p => p.playerIndex === gameState.currentPlayer);

    // Actualizar encabezado
    document.getElementById('current-player').textContent = `Jugador ${gameState.currentPlayer}`;

    // Actualizar contenido de la carta
    if (isImpostor) {
        cardBack.classList.remove('normal', 'power');
        cardBack.classList.add('impostor');
        document.getElementById('card-emoji').textContent = '🎭';
        document.getElementById('card-word').textContent = '¡IMPOSTOR!';
        document.getElementById('card-category').textContent = 'No conoces la palabra';
    } else if (playerPower) {
        // Jugador con poder
        cardBack.classList.remove('impostor', 'normal');
        cardBack.classList.add('power');
        document.getElementById('card-emoji').textContent = playerPower.power.emoji;
        document.getElementById('card-word').textContent = gameState.secretWord;
        document.getElementById('card-category').innerHTML = `
            ${gameState.secretCategory}<br>
            <span class="power-badge">${playerPower.power.nombre}</span><br>
            <span class="power-info">${playerPower.info}</span>
        `;
    } else {
        // Jugador normal
        cardBack.classList.remove('impostor', 'power');
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
    gameState.drawPoints = [];
    gameState.isDrawing = false;
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
    gameState.drawPoints = [];
    gameState.isDrawing = false;

    selectSecretWord();
    selectImpostors();
    assignPowers(); // Asignar nuevos poderes

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
