// ========================================
// 🎭 EL IMPOSTOR - LÓGICA DEL JUEGO
// ========================================

// ========================================
// BASE DE DATOS DE PISTAS RELACIONADAS
// ========================================

const PISTAS_RELACIONADAS = {
    // Marvel
    "Spider-Man": ["telarañas", "Nueva York", "Peter", "araña", "trepar"],
    "Iron Man": ["armadura", "Stark", "reactor", "millonario", "tecnología"],
    "Thor": ["martillo", "Asgard", "trueno", "dios", "vikingo"],
    "Hulk": ["verde", "gigante", "fuerza", "Banner", "transformación"],
    "Capitán América": ["escudo", "soldado", "patriota", "Steve", "súper suero"],
    "Black Widow": ["espía", "rusa", "Natasha", "SHIELD", "agente"],
    "Thanos": ["guantelete", "gemas", "titán", "chasquido", "equilibrio"],
    "Loki": ["engaño", "cuernos", "hermano", "travesura", "multiverso"],
    "Doctor Strange": ["magia", "capa", "tiempo", "hechicero", "portal"],
    "Black Panther": ["Wakanda", "vibranium", "rey", "garras", "pantera"],
    "Scarlet Witch": ["caos", "rojo", "poderes", "Wanda", "hexágono"],
    "Vision": ["gema", "androide", "rojo", "atravesar", "mente"],
    "Ant-Man": ["pequeño", "traje", "hormigas", "partículas", "Scott"],
    "Groot": ["árbol", "soy", "raíces", "guardián", "madera"],
    "Deadpool": ["regenerar", "rojo", "espadas", "cuarto muro", "chimichanga"],
    "Wolverine": ["garras", "adamantium", "regenerar", "Logan", "X-Men"],
    // Disney
    "El Rey León": ["sabana", "Simba", "rey", "África", "círculo"],
    "Frozen": ["hielo", "Elsa", "hermanas", "nieve", "canción"],
    "Toy Story": ["juguetes", "Woody", "niño", "Buzz", "vaquero"],
    "Buscando a Nemo": ["pez", "océano", "payaso", "Dori", "coral"],
    "Aladdin": ["lámpara", "deseo", "alfombra", "genio", "palacio"],
    "La Bella y la Bestia": ["rosa", "castillo", "encantado", "biblioteca", "baile"],
    "Moana": ["océano", "isla", "Maui", "navegante", "corazón"],
    "Coco": ["música", "México", "familia", "muertos", "guitarra"],
    "Up": ["globos", "casa", "aventura", "anciano", "perro"],
    "WALL-E": ["robot", "basura", "espacio", "amor", "planta"],
    "Ratatouille": ["cocina", "ratón", "chef", "París", "comida"],
    "Los Increíbles": ["familia", "poderes", "trajes", "villano", "isla"],
    "Monsters Inc": ["puertas", "sustos", "niña", "energía", "monstruos"],
    "Cars": ["autos", "carrera", "rayo", "pista", "ruedas"],
    "La Sirenita": ["mar", "cola", "príncipe", "Ariel", "voz"],
    // Princesas
    "Cenicienta": ["zapatilla", "calabaza", "madrastra", "baile", "príncipe"],
    "Blancanieves": ["manzana", "espejo", "enanitos", "veneno", "bosque"],
    "Aurora": ["sueño", "huso", "hada", "príncipe", "maldición"],
    "Ariel": ["sirena", "voz", "mar", "piernas", "Sebastián"],
    "Bella": ["libros", "rosa", "bestia", "castillo", "pueblo"],
    "Jasmín": ["alfombra", "tigre", "palacio", "Arabia", "genio"],
    "Rapunzel": ["cabello", "torre", "sol", "pintura", "Pascal"],
    "Mérida": ["arco", "oso", "Escocia", "peliroja", "valiente"],
    "Elsa": ["hielo", "reina", "poderes", "aislada", "Let it go"],
    "Anna": ["optimista", "hermana", "amor", "Kristoff", "corazón"],
    // Mágicos
    "Unicornio": ["cuerno", "arcoíris", "mágico", "caballo", "brillante"],
    "Dragón": ["fuego", "alas", "escamas", "volar", "cueva"],
    "Fénix": ["fuego", "renacer", "cenizas", "inmortal", "ave"],
    "Sirena": ["cola", "mar", "cantar", "oceano", "escamas"],
    "Vampiro": ["sangre", "colmillos", "noche", "murciélago", "inmortal"],
    "Fantasma": ["invisible", "flotar", "muerto", "asustar", "cadenas"],
    "Hada": ["alas", "varita", "pequeña", "brillo", "polvo"],
    "Bruja": ["escoba", "caldero", "hechizo", "negro", "gato"],
    // Animales
    "León": ["melena", "rey", "sabana", "rugido", "manada"],
    "Elefante": ["trompa", "colmillos", "grande", "memoria", "gris"],
    "Delfín": ["mar", "inteligente", "salto", "nadar", "eco"],
    "Tigre": ["rayas", "felino", "cazador", "naranja", "selva"],
    "Jirafa": ["cuello", "manchas", "alto", "África", "hojas"],
    "Oso Panda": ["bambú", "China", "blanco y negro", "oso", "adorable"],
    "Pingüino": ["frío", "polo", "blanco y negro", "nadar", "hielo"],
    "Águila": ["volar", "garras", "vista", "montaña", "cazador"],
    "Tiburón": ["dientes", "mar", "aleta", "peligro", "nadar"],
    "Ballena": ["océano", "grande", "mamífero", "canto", "agua"],
    "Tortuga": ["caparazón", "lenta", "mar", "longeva", "nadar"],
    "Mariposa": ["alas", "colores", "flor", "metamorfosis", "volar"],
    "Búho": ["noche", "ojos", "sabio", "girar", "plumas"],
    // Comida
    "Pizza": ["Italia", "queso", "pepperoni", "redonda", "horno"],
    "Hamburguesa": ["carne", "pan", "americana", "rápida", "papas"],
    "Sushi": ["Japón", "arroz", "pescado", "alga", "palillos"],
    "Tacos": ["México", "tortilla", "carne", "salsa", "picante"],
    "Helado": ["frío", "dulce", "cono", "sabores", "verano"],
    "Pastel": ["cumpleaños", "dulce", "velas", "crema", "celebración"],
    "Chocolate": ["cacao", "dulce", "marrón", "postre", "derretir"],
    "Hot Dog": ["salchicha", "pan", "mostaza", "americana", "ketchup"],
    "Espagueti": ["pasta", "Italia", "salsa", "largo", "tenedor"],
    // Lugares
    "París": ["torre", "Francia", "amor", "Eiffel", "baguette"],
    "Nueva York": ["manzana", "estatua", "rascacielos", "taxi", "Central"],
    "Tokio": ["Japón", "anime", "tecnología", "templo", "sushi"],
    "Egipto": ["pirámides", "faraón", "momia", "desierto", "Nilo"],
    "Playa": ["arena", "mar", "sol", "olas", "vacaciones"],
    "Montaña": ["nieve", "altura", "escalar", "pico", "frío"],
    "Castillo": ["rey", "torre", "medieval", "dragón", "princesa"],
    // Profesiones
    "Doctor": ["hospital", "salud", "bata", "estetoscopio", "paciente"],
    "Bombero": ["fuego", "camión", "rescate", "manguera", "emergencia"],
    "Policía": ["ley", "placa", "patrulla", "orden", "detective"],
    "Chef": ["cocina", "restaurante", "gorro", "receta", "sartén"],
    "Piloto": ["avión", "cielo", "volar", "uniforme", "aeropuerto"],
    "Astronauta": ["espacio", "cohete", "luna", "traje", "NASA"],
    "Maestro": ["escuela", "enseñar", "pizarra", "estudiantes", "lección"],
    // Acciones
    "Bailar": ["música", "movimiento", "ritmo", "fiesta", "pasos"],
    "Cantar": ["voz", "micrófono", "melodía", "escenario", "nota"],
    "Nadar": ["agua", "piscina", "brazadas", "flotador", "mojado"],
    "Volar": ["cielo", "alas", "avión", "nubes", "alto"],
    "Correr": ["velocidad", "pies", "maratón", "zapatos", "sudor"],
    "Saltar": ["altura", "cuerda", "trampolín", "piernas", "impulso"],
    "Dormir": ["cama", "sueños", "almohada", "noche", "descanso"],
    "Comer": ["comida", "boca", "hambre", "masticar", "mesa"],
    "Llorar": ["lágrimas", "tristeza", "ojos", "pañuelo", "emoción"],
    "Reír": ["felicidad", "sonrisa", "humor", "carcajada", "alegría"],
    // Películas
    "Titanic": ["barco", "iceberg", "Rose", "Jack", "hundirse"],
    "Jurassic Park": ["dinosaurios", "isla", "fósil", "T-Rex", "científico"],
    "Harry Potter": ["magia", "varita", "Hogwarts", "cicatriz", "quidditch"],
    "Avatar": ["azul", "pandora", "naturaleza", "Jake", "alien"],
    "Star Wars": ["espada", "fuerza", "galaxia", "Vader", "Jedi"],
    "Matrix": ["píldora", "neo", "simulación", "código", "elegido"],
    "E.T.": ["alien", "bicicleta", "teléfono", "dedo", "casa"],
    "Shrek": ["ogro", "pantano", "verde", "burro", "princesa"],
    // Princesas Disney expandidas
    "Blancanieves": ["manzana", "espejo", "enanitos", "veneno", "bosque"],
    "Cenicienta": ["zapatilla", "calabaza", "madrastra", "baile", "medianoche"],
    "Aurora": ["sueño", "huso", "hada", "príncipe", "maldición"],
    "Ariel": ["sirena", "voz", "mar", "piernas", "Sebastián"],
    "Bella": ["libros", "rosa", "bestia", "castillo", "pueblo"],
    "Jasmín": ["alfombra", "tigre", "palacio", "Arabia", "Aladdin"],
    "Pocahontas": ["naturaleza", "colores", "John Smith", "río", "viento"],
    "Mulán": ["china", "guerrera", "dragón", "espada", "honor"],
    "Tiana": ["rana", "restaurante", "Nueva Orleans", "trabajo", "beso"],
    "Rapunzel": ["cabello", "torre", "sol", "pintura", "Pascal"],
    "Mérida": ["arco", "oso", "Escocia", "peliroja", "valiente"],
    "Moana": ["océano", "isla", "Maui", "navegante", "corazón"],
    "Elsa": ["hielo", "reina", "poderes", "aislada", "Let it go"],
    "Anna": ["optimista", "hermana", "amor", "Kristoff", "corazón"],
    "Raya": ["dragón", "gema", "Kumandra", "guerrera", "confianza"],
    "Mirabel": ["familia", "magia", "Encanto", "Colombia", "mariposas"],
    // Villanos Disney
    "Maléfica": ["dragón", "hada", "maldición", "sueño", "cuernos"],
    "Úrsula": ["pulpo", "mar", "voz", "contrato", "tentáculos"],
    "Cruella de Vil": ["dálmatas", "pieles", "moda", "blanco y negro", "perros"],
    "Scar": ["león", "cicatriz", "hienas", "rey", "traición"],
    "Jafar": ["serpiente", "sultán", "genio", "bastón", "Arabia"],
    "Hades": ["fuego", "inframundo", "azul", "muerte", "trato"],
    "Capitán Garfio": ["pirata", "cocodrilo", "reloj", "Neverland", "gancho"],
    "Reina Malvada": ["espejo", "manzana", "veneno", "vanidad", "cazador"],
    "Gastón": ["músculos", "caza", "espejo", "huevos", "arrogante"],
    // Famosos
    "Taylor Swift": ["cantante", "eras", "serpiente", "guitarra", "rubia"],
    "BTS": ["kpop", "army", "corea", "baile", "grupo"],
    "Shakira": ["caderas", "colombiana", "loba", "rubia", "mundial"],
    "Bad Bunny": ["reggaeton", "conejo", "Puerto Rico", "lentes", "trap"],
    "Lionel Messi": ["Argentina", "gol", "Barcelona", "copa", "pulga"],
    "Cristiano Ronaldo": ["Portugal", "Siiii", "goles", "abdominales", "salto"],
    "Beyoncé": ["Queen B", "diva", "Single Ladies", "Formation", "limonada"],
    "Michael Jackson": ["thriller", "moonwalk", "guante", "rey del pop", "sombrero"],
    // Videojuegos
    "Mario": ["bigote", "fontanero", "hongo", "saltar", "princesa"],
    "Sonic": ["veloz", "azul", "anillos", "erizo", "correr"],
    "Pikachu": ["amarillo", "electricidad", "pokemon", "Ash", "mejillas"],
    "Link": ["espada", "Zelda", "Hyrule", "verde", "elfo"],
    "Minecraft Steve": ["bloques", "picar", "crafting", "cuadrado", "zombies"],
    "Fortnite": ["baile", "construcción", "battle royale", "bus", "tormenta"],
    "Among Us": ["impostor", "tareas", "espacial", "emergencia", "votar"],
    // Anime
    "Goku": ["sayajin", "kame", "pelo", "pelear", "transformación"],
    "Naruto": ["ninja", "zorro", "hokage", "ramen", "aldea"],
    "Luffy": ["pirata", "goma", "sombrero", "one piece", "tripulación"],
    "Sailor Moon": ["luna", "transformación", "amor", "justicia", "cetro"],
    "Totoro": ["bosque", "paraguas", "gato", "grande", "espíritu"],
    "Death Note": ["cuaderno", "manzana", "shinigami", "justicia", "nombres"],
    // Música/Canciones
    "Let It Go": ["Frozen", "Elsa", "libre", "hielo", "puerta"],
    "Despacito": ["Puerto Rico", "Luis Fonsi", "lento", "verano", "playa"],
    "Thriller": ["zombies", "noche", "baile", "Michael", "terror"],
    "Gangnam Style": ["caballo", "baile", "coreano", "PSY", "viral"],
};

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
        name: "Princesas Disney",
        emoji: "👸",
        words: [
            // Princesas oficiales de Disney
            { word: "Blancanieves", emoji: "🍎" },
            { word: "Cenicienta", emoji: "👠" },
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
            // Reinas y princesas de Frozen
            { word: "Elsa", emoji: "❄️" },
            { word: "Anna", emoji: "💕" },
            // Otras princesas Disney
            { word: "Raya", emoji: "🐉" },
            { word: "Mirabel", emoji: "🦋" },
            { word: "Giselle", emoji: "👗" },
            { word: "Vanellope", emoji: "🍬" },
            { word: "Sofia", emoji: "💜" },
            { word: "Elena de Avalor", emoji: "👑" },
            { word: "Megara", emoji: "💜" },
            { word: "Esmeralda", emoji: "💃" },
            { word: "Nala", emoji: "🦁" },
            { word: "Kida", emoji: "🔷" },
            { word: "Giselle", emoji: "👗" },
            { word: "Eilonwy", emoji: "✨" },
            { word: "Marian", emoji: "🦊" },
            { word: "Princesa Atta", emoji: "🐜" },
            { word: "Princesa Dot", emoji: "🐜" },
            { word: "Faline", emoji: "🦌" },
            { word: "Wendy Darling", emoji: "🧚" },
            { word: "Alicia", emoji: "🃏" },
            { word: "Tiger Lily", emoji: "🪶" },
            { word: "Minnie Mouse", emoji: "🎀" },
            { word: "Daisy Duck", emoji: "🌼" }
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
    },
    villanos: {
        name: "Villanos Disney",
        emoji: "😈",
        words: [
            { word: "Maléfica", emoji: "🐉" },
            { word: "Úrsula", emoji: "🐙" },
            { word: "Cruella de Vil", emoji: "🐕" },
            { word: "Scar", emoji: "🦁" },
            { word: "Jafar", emoji: "🐍" },
            { word: "Hades", emoji: "🔥" },
            { word: "Capitán Garfio", emoji: "🪝" },
            { word: "Reina Malvada", emoji: "🍎" },
            { word: "Gastón", emoji: "💪" },
            { word: "Lady Tremaine", emoji: "👠" },
            { word: "Dr. Facilier", emoji: "🎩" },
            { word: "Madre Gothel", emoji: "🗡️" },
            { word: "Shan Yu", emoji: "⚔️" },
            { word: "Ratigan", emoji: "🐀" },
            { word: "Frollo", emoji: "⛪" },
            { word: "Edgar", emoji: "🐱" },
            { word: "Príncipe Juan", emoji: "👑" },
            { word: "Reina de Corazones", emoji: "♥️" },
            { word: "Yzma", emoji: "💜" },
            { word: "Tamatoa", emoji: "🦀" },
            { word: "Te Kā", emoji: "🌋" },
            { word: "Hans", emoji: "❄️" },
            { word: "Lotso", emoji: "🧸" },
            { word: "Síndrome", emoji: "🦸" }
        ]
    },
    famosos: {
        name: "Famosos Mundiales",
        emoji: "🌟",
        words: [
            { word: "Taylor Swift", emoji: "🎤" },
            { word: "BTS", emoji: "💜" },
            { word: "Shakira", emoji: "💃" },
            { word: "Bad Bunny", emoji: "🐰" },
            { word: "Lionel Messi", emoji: "⚽" },
            { word: "Cristiano Ronaldo", emoji: "⚽" },
            { word: "Beyoncé", emoji: "👑" },
            { word: "Michael Jackson", emoji: "🎤" },
            { word: "Lady Gaga", emoji: "🎭" },
            { word: "Drake", emoji: "🎵" },
            { word: "Rihanna", emoji: "💎" },
            { word: "Justin Bieber", emoji: "🎤" },
            { word: "Selena Gomez", emoji: "💄" },
            { word: "Dua Lipa", emoji: "🎶" },
            { word: "Ed Sheeran", emoji: "🎸" },
            { word: "Ariana Grande", emoji: "🎀" },
            { word: "Bruno Mars", emoji: "🎹" },
            { word: "The Weeknd", emoji: "🌃" },
            { word: "Neymar", emoji: "⚽" },
            { word: "LeBron James", emoji: "🏀" },
            { word: "Kim Kardashian", emoji: "📱" },
            { word: "Elon Musk", emoji: "🚀" },
            { word: "MrBeast", emoji: "💰" },
            { word: "PewDiePie", emoji: "🎮" }
        ]
    },
    videojuegos: {
        name: "Videojuegos",
        emoji: "🎮",
        words: [
            { word: "Mario", emoji: "🍄" },
            { word: "Sonic", emoji: "🦔" },
            { word: "Pikachu", emoji: "⚡" },
            { word: "Link", emoji: "🗡️" },
            { word: "Zelda", emoji: "👸" },
            { word: "Minecraft Steve", emoji: "⛏️" },
            { word: "Fortnite", emoji: "🎯" },
            { word: "Among Us", emoji: "🚀" },
            { word: "Pac-Man", emoji: "🟡" },
            { word: "Kratos", emoji: "⚔️" },
            { word: "Master Chief", emoji: "🪖" },
            { word: "Lara Croft", emoji: "🏺" },
            { word: "Crash Bandicoot", emoji: "🧡" },
            { word: "Spyro", emoji: "🐉" },
            { word: "Roblox", emoji: "🎮" },
            { word: "Fall Guys", emoji: "🫘" },
            { word: "GTA", emoji: "🚗" },
            { word: "FIFA", emoji: "⚽" },
            { word: "Call of Duty", emoji: "🔫" },
            { word: "The Sims", emoji: "💎" },
            { word: "Animal Crossing", emoji: "🏝️" },
            { word: "Kirby", emoji: "🩷" },
            { word: "Yoshi", emoji: "🦕" },
            { word: "Donkey Kong", emoji: "🦍" }
        ]
    },
    musica: {
        name: "Música y Canciones",
        emoji: "🎵",
        words: [
            { word: "Let It Go", emoji: "❄️" },
            { word: "Despacito", emoji: "🎶" },
            { word: "Thriller", emoji: "🧟" },
            { word: "Shape of You", emoji: "💃" },
            { word: "Uptown Funk", emoji: "🕺" },
            { word: "Rolling in the Deep", emoji: "🎤" },
            { word: "Bohemian Rhapsody", emoji: "👑" },
            { word: "Bad Guy", emoji: "😈" },
            { word: "Gangnam Style", emoji: "🐴" },
            { word: "Hips Don't Lie", emoji: "💃" },
            { word: "Waka Waka", emoji: "⚽" },
            { word: "Shake It Off", emoji: "💃" },
            { word: "Hello", emoji: "👋" },
            { word: "Roar", emoji: "🦁" },
            { word: "Firework", emoji: "🎆" },
            { word: "Dynamite", emoji: "💣" },
            { word: "Happy", emoji: "😊" },
            { word: "Havana", emoji: "🌴" },
            { word: "Señorita", emoji: "💕" },
            { word: "Blinding Lights", emoji: "✨" }
        ]
    },
    anime: {
        name: "Anime y Manga",
        emoji: "🎌",
        words: [
            { word: "Goku", emoji: "🐉" },
            { word: "Naruto", emoji: "🍥" },
            { word: "Luffy", emoji: "🏴‍☠️" },
            { word: "Pikachu", emoji: "⚡" },
            { word: "Sailor Moon", emoji: "🌙" },
            { word: "Totoro", emoji: "🌳" },
            { word: "Spirited Away", emoji: "🛁" },
            { word: "Attack on Titan", emoji: "⚔️" },
            { word: "Death Note", emoji: "📓" },
            { word: "One Punch Man", emoji: "👊" },
            { word: "Demon Slayer", emoji: "🗡️" },
            { word: "My Hero Academia", emoji: "💪" },
            { word: "Jujutsu Kaisen", emoji: "👁️" },
            { word: "Dragon Ball", emoji: "🟠" },
            { word: "Pokémon", emoji: "🎮" },
            { word: "Doraemon", emoji: "🐱" },
            { word: "Sasuke", emoji: "⚡" },
            { word: "Eren Yeager", emoji: "⚔️" },
            { word: "Vegeta", emoji: "👑" },
            { word: "Itachi", emoji: "🌀" }
        ]
    },
    objetos: {
        name: "Objetos Cotidianos",
        emoji: "📦",
        words: [
            { word: "Teléfono", emoji: "📱" },
            { word: "Computadora", emoji: "💻" },
            { word: "Televisión", emoji: "📺" },
            { word: "Refrigerador", emoji: "🧊" },
            { word: "Cama", emoji: "🛏️" },
            { word: "Silla", emoji: "🪑" },
            { word: "Mesa", emoji: "🪵" },
            { word: "Lámpara", emoji: "💡" },
            { word: "Espejo", emoji: "🪞" },
            { word: "Reloj", emoji: "⏰" },
            { word: "Libro", emoji: "📚" },
            { word: "Lápiz", emoji: "✏️" },
            { word: "Tijeras", emoji: "✂️" },
            { word: "Llave", emoji: "🔑" },
            { word: "Paraguas", emoji: "☂️" },
            { word: "Gafas", emoji: "👓" },
            { word: "Zapatos", emoji: "👟" },
            { word: "Mochila", emoji: "🎒" },
            { word: "Cámara", emoji: "📷" },
            { word: "Guitarra", emoji: "🎸" }
        ]
    },
    dc: {
        name: "DC Comics",
        emoji: "🦸‍♂️",
        words: [
            { word: "Batman", emoji: "🦇" },
            { word: "Superman", emoji: "🔵" },
            { word: "Wonder Woman", emoji: "⚔️" },
            { word: "The Flash", emoji: "⚡" },
            { word: "Green Lantern", emoji: "💚" },
            { word: "Aquaman", emoji: "🔱" },
            { word: "Cyborg", emoji: "🤖" },
            { word: "Joker", emoji: "🃏" },
            { word: "Harley Quinn", emoji: "🎭" },
            { word: "Lex Luthor", emoji: "👨‍💼" },
            { word: "Catwoman", emoji: "🐱" },
            { word: "Robin", emoji: "🐦" },
            { word: "Nightwing", emoji: "🌙" },
            { word: "Batgirl", emoji: "🦇" },
            { word: "Green Arrow", emoji: "🏹" },
            { word: "Supergirl", emoji: "💙" },
            { word: "Shazam", emoji: "⚡" },
            { word: "Zatanna", emoji: "🎩" },
            { word: "Constantine", emoji: "🚬" },
            { word: "Deathstroke", emoji: "⚔️" },
            { word: "Poison Ivy", emoji: "🌿" },
            { word: "Two-Face", emoji: "🎭" },
            { word: "Penguin", emoji: "🐧" },
            { word: "Riddler", emoji: "❓" },
            { word: "Doomsday", emoji: "💀" }
        ]
    },
    presidentes_vacados: {
        name: "Presidentes Vacados del Perú",
        emoji: "🇵🇪",
        words: [
            { word: "Alberto Fujimori", emoji: "👔" },
            { word: "Pedro Pablo Kuczynski", emoji: "📊" },
            { word: "Martín Vizcarra", emoji: "🏗️" },
            { word: "Manuel Merino", emoji: "⚖️" },
            { word: "Pedro Castillo", emoji: "👨‍🏫" },
            { word: "Dina Boluarte", emoji: "👩‍💼" },
            { word: "Alejandro Toledo", emoji: "📈" },
            { word: "Ollanta Humala", emoji: "⚔️" },
            { word: "Alan García", emoji: "🎤" },
            { word: "Valentín Paniagua", emoji: "📜" },
            { word: "Francisco Sagasti", emoji: "🎓" },
            { word: "Mercedes Aráoz", emoji: "💼" },
            { word: "Segundo Gobierno de Alan", emoji: "🔄" },
            { word: "Gobierno de Transición", emoji: "⏳" },
            { word: "Crisis Política Peruana", emoji: "⚡" },
            { word: "Vacancia Presidencial", emoji: "📋" },
            { word: "Incapacidad Moral", emoji: "⚖️" },
            { word: "Congreso de la República", emoji: "🏛️" },
            { word: "Moción de Censura", emoji: "📝" },
            { word: "Estado de Emergencia", emoji: "🚨" }
        ]
    },
    palabras_sexo: {
        name: "Palabras Durante el Sexo",
        emoji: "🔥",
        words: [
            { word: "Sí baby", emoji: "😍" },
            { word: "Más rápido", emoji: "💨" },
            { word: "Más despacio", emoji: "🐌" },
            { word: "Ay que rico", emoji: "😋" },
            { word: "No pares", emoji: "🔄" },
            { word: "Así me gusta", emoji: "👌" },
            { word: "Ven acá", emoji: "👋" },
            { word: "Dame más", emoji: "🙏" },
            { word: "Qué delicioso", emoji: "🤤" },
            { word: "Me encantas", emoji: "💕" },
            { word: "Eres increíble", emoji: "⭐" },
            { word: "Me vuelves loco", emoji: "🤪" },
            { word: "Estoy llegando", emoji: "🎯" },
            { word: "Ya casi", emoji: "⏰" },
            { word: "Espérame", emoji: "✋" },
            { word: "Juntos", emoji: "🤝" },
            { word: "Te amo", emoji: "❤️" },
            { word: "Uff qué bueno", emoji: "🏆" },
            { word: "Otra vez", emoji: "🔁" },
            { word: "Me fascinas", emoji: "✨" },
            { word: "Qué sabroso", emoji: "😘" },
            { word: "Más fuerte", emoji: "💪" },
            { word: "Suavecito", emoji: "🪶" },
            { word: "Ay dios mío", emoji: "😇" },
            { word: "Increíble", emoji: "🤯" }
        ]
    },
    palabras_comida: {
        name: "Palabras Cuando Comes",
        emoji: "🍽️",
        words: [
            { word: "Está delicioso", emoji: "😋" },
            { word: "Qué rico", emoji: "👌" },
            { word: "Mmm sabroso", emoji: "🤤" },
            { word: "Está exquisito", emoji: "👨‍🍳" },
            { word: "Me encanta", emoji: "❤️" },
            { word: "Está perfecto", emoji: "💯" },
            { word: "Qué sabor", emoji: "👅" },
            { word: "Está buenazo", emoji: "🔥" },
            { word: "Más por favor", emoji: "🙏" },
            { word: "Está picante", emoji: "🌶️" },
            { word: "Está salado", emoji: "🧂" },
            { word: "Está dulce", emoji: "🍯" },
            { word: "Está amargo", emoji: "😖" },
            { word: "Está frío", emoji: "🧊" },
            { word: "Está caliente", emoji: "🔥" },
            { word: "Me quemé", emoji: "🥵" },
            { word: "Agua por favor", emoji: "💧" },
            { word: "Está crujiente", emoji: "🥖" },
            { word: "Está suave", emoji: "☁️" },
            { word: "Está duro", emoji: "🪨" },
            { word: "Ya no puedo más", emoji: "🤰" },
            { word: "Un poquito más", emoji: "🤏" },
            { word: "La receta secreta", emoji: "🤫" },
            { word: "Como la abuela", emoji: "👵" },
            { word: "Está fresco", emoji: "🌿" }
        ]
    },
    novelas: {
        name: "Novelas Famosas",
        emoji: "📺",
        words: [
            { word: "Pasión de Gavilanes", emoji: "🔥" },
            { word: "Betty la Fea", emoji: "👓" },
            { word: "Café con Aroma de Mujer", emoji: "☕" },
            { word: "La Reina del Flow", emoji: "🎤" },
            { word: "El Patrón del Mal", emoji: "💰" },
            { word: "Sin Senos Sí Hay Paraíso", emoji: "💎" },
            { word: "La Casa de las Flores", emoji: "🌺" },
            { word: "Élite", emoji: "🎓" },
            { word: "Money Heist", emoji: "💰" },
            { word: "Narcos", emoji: "🚁" },
            { word: "Rosario Tijeras", emoji: "🌹" },
            { word: "El Señor de los Cielos", emoji: "✈️" },
            { word: "La Doña", emoji: "👑" },
            { word: "Imperio de Mentiras", emoji: "🎭" },
            { word: "Corazón Salvaje", emoji: "🦁" },
            { word: "María la del Barrio", emoji: "🏘️" },
            { word: "Marimar", emoji: "🌊" },
            { word: "Teresa", emoji: "💍" },
            { word: "Rebelde", emoji: "🎸" },
            { word: "Avenida Brasil", emoji: "🇧🇷" },
            { word: "El Clon", emoji: "👥" },
            { word: "Destilando Amor", emoji: "🌵" },
            { word: "Rubí", emoji: "💎" },
            { word: "Sortilegio", emoji: "🔮" },
            { word: "Al Diablo con los Guapos", emoji: "😈" }
        ]
    },
    pokemon: {
        name: "Pokémon",
        emoji: "⚡",
        words: [
            { word: "Pikachu", emoji: "⚡" },
            { word: "Charizard", emoji: "🔥" },
            { word: "Blastoise", emoji: "💧" },
            { word: "Venusaur", emoji: "🌱" },
            { word: "Mewtwo", emoji: "🧠" },
            { word: "Mew", emoji: "🌸" },
            { word: "Lucario", emoji: "🥊" },
            { word: "Garchomp", emoji: "🦈" },
            { word: "Rayquaza", emoji: "🐉" },
            { word: "Arceus", emoji: "🌟" },
            { word: "Dialga", emoji: "⏰" },
            { word: "Palkia", emoji: "🌌" },
            { word: "Giratina", emoji: "👻" },
            { word: "Kyogre", emoji: "🌊" },
            { word: "Groudon", emoji: "🌋" },
            { word: "Ho-Oh", emoji: "🦅" },
            { word: "Lugia", emoji: "🦢" },
            { word: "Celebi", emoji: "🧚" },
            { word: "Jirachi", emoji: "⭐" },
            { word: "Deoxys", emoji: "👽" },
            { word: "Darkrai", emoji: "🌙" },
            { word: "Shaymin", emoji: "🌺" },
            { word: "Victini", emoji: "🏆" },
            { word: "Reshiram", emoji: "🤍" },
            { word: "Zekrom", emoji: "⚫" },
            { word: "Kyurem", emoji: "❄️" },
            { word: "Xerneas", emoji: "🦌" },
            { word: "Yveltal", emoji: "🦅" },
            { word: "Zygarde", emoji: "🐍" },
            { word: "Necrozma", emoji: "💠" }
        ]
    },
    cartoon_network: {
        name: "Cartoon Network",
        emoji: "📺",
        words: [
            { word: "Finn", emoji: "🎒" },
            { word: "Jake", emoji: "🐶" },
            { word: "Mordecai", emoji: "🐦" },
            { word: "Rigby", emoji: "🦝" },
            { word: "Gumball", emoji: "🐱" },
            { word: "Darwin", emoji: "🐟" },
            { word: "Ben 10", emoji: "⌚" },
            { word: "Bellota", emoji: "💚" },
            { word: "Bombón", emoji: "💗" },
            { word: "Burbuja", emoji: "💙" },
            { word: "Dexter", emoji: "🔬" },
            { word: "Dee Dee", emoji: "👧" },
            { word: "Johnny Bravo", emoji: "😎" },
            { word: "Coraje", emoji: "🐕" },
            { word: "Ed", emoji: "🤪" },
            { word: "Edd", emoji: "🎩" },
            { word: "Eddy", emoji: "😏" },
            { word: "Steven Universe", emoji: "💎" },
            { word: "Garnet", emoji: "👓" },
            { word: "Amethyst", emoji: "💜" },
            { word: "Pearl", emoji: "🌟" },
            { word: "Samurai Jack", emoji: "⚔️" },
            { word: "Marceline", emoji: "🎸" },
            { word: "Princesa Dulce", emoji: "🍬" },
            { word: "BMO", emoji: "🎮" },
            { word: "Mojo Jojo", emoji: "🐵" },
            { word: "Him", emoji: "😈" },
            { word: "Robin", emoji: "🦸" },
            { word: "Starfire", emoji: "⭐" },
            { word: "Raven", emoji: "🌑" },
            { word: "Beast Boy", emoji: "💚" },
            { word: "Cyborg", emoji: "🤖" },
            { word: "Cartoon Network", emoji: "📺" },
            { word: "Regular Show", emoji: "🎪" },
            { word: "Adventure Time", emoji: "🗡️" }
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
    invertedMode: false, // Modo invertido: todos son "impostores" excepto uno que sabe la palabra
    selectedThemes: [],
    currentPlayer: 1,
    impostorIndices: [],
    originalImpostorIndices: [], // Para rastrear impostores originales
    playersWithPowers: [], // {playerIndex, power, info}
    playersWhoSawCard: [], // Jugadores que ya vieron su carta
    secretWord: null,
    secretEmoji: null,
    secretCategory: null,
    secretHint: null, // Pista relacionada para el impostor
    decoyWords: [], // Palabras señuelo para el modo invertido
    cardFlipped: false,
    timerInterval: null,
    timerSeconds: 180,
    timerRunning: false,
    // Para el hack secreto del cuadrado
    drawPoints: [],
    isDrawing: false,
    // Para el hack secreto de toques
    tapCount: 0,
    lastTapTime: 0,
    // Control de hacks
    hackUsed: false, // Si ya se usó un hack en esta ronda
    convertedImpostors: [], // Impostores que se convirtieron en jugadores normales con rol
    // Sistema de turnos
    turnPlayer: 1,
    turnTimerInterval: null,
    turnTimeLeft: 15,
    turnTimerRunning: false,
    skippedTurns: [] // Jugadores que fueron omitidos
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
    // Solo funciona si el jugador actual es impostor y no ha usado el hack antes
    if (!gameState.impostorIndices.includes(gameState.currentPlayer)) return;
    if (gameState.hackUsed) return; // Solo se puede usar una vez por ronda
    
    // Obtener jugadores que AÚN NO han visto su carta (excepto el actual)
    const availablePlayers = [];
    for (let i = gameState.currentPlayer + 1; i <= gameState.numPlayers; i++) {
        if (!gameState.playersWhoSawCard.includes(i) && !gameState.impostorIndices.includes(i)) {
            availablePlayers.push(i);
        }
    }
    
    // Si no hay jugadores disponibles, no se puede hacer el swap
    if (availablePlayers.length === 0) return;
    
    // Remover al jugador actual de la lista de impostores
    const currentIndex = gameState.impostorIndices.indexOf(gameState.currentPlayer);
    gameState.impostorIndices.splice(currentIndex, 1);
    
    // Agregar a la lista de convertidos (recibirá un poder especial)
    gameState.convertedImpostors.push(gameState.currentPlayer);
    
    // Seleccionar nuevo impostor aleatoriamente entre los disponibles
    const randomArray = new Uint32Array(1);
    crypto.getRandomValues(randomArray);
    const randomIndex = randomArray[0] % availablePlayers.length;
    const newImpostor = availablePlayers[randomIndex];
    
    // Agregar al nuevo impostor
    gameState.impostorIndices.push(newImpostor);
    
    // Marcar hack como usado
    gameState.hackUsed = true;
    
    // Asignar un poder especial al ex-impostor (ahora jugador normal)
    assignPowerToConvertedImpostor(gameState.currentPlayer);
    
    // Recalcular poderes que dependen de posición de impostores
    recalculateSensitivePowers();
    
    // Actualizar UI para mostrar como jugador normal con poder
    updateGameUI();
    
    // Feedback visual (vibración si está disponible)
    if (navigator.vibrate) {
        navigator.vibrate([100, 50, 100]);
    }
}

function assignPowerToConvertedImpostor(playerIndex) {
    // Asignar un poder aleatorio al impostor convertido
    // Esto reduce la probabilidad de que otros jugadores reciban poderes
    const availablePowers = PODERES.filter(p => p.id !== 'medium'); // El medium puede dar info conflictiva
    const randomArray = new Uint32Array(1);
    crypto.getRandomValues(randomArray);
    const power = availablePowers[randomArray[0] % availablePowers.length];
    
    // Generar información del poder
    const powerInfo = generatePowerInfo(playerIndex, power);
    
    // Remover poder previo si tenía
    gameState.playersWithPowers = gameState.playersWithPowers.filter(p => p.playerIndex !== playerIndex);
    
    // Agregar nuevo poder
    gameState.playersWithPowers.push({
        playerIndex: playerIndex,
        power: power,
        info: powerInfo,
        isConverted: true
    });
}

function recalculateSensitivePowers() {
    // Recalcular información de poderes sensibles a posición del impostor
    gameState.playersWithPowers.forEach(playerPower => {
        if (playerPower.power.id === 'medium' || playerPower.power.id === 'detective') {
            playerPower.info = generatePowerInfo(playerPower.playerIndex, playerPower.power);
        }
    });
}

function createParticles() {
    const container = document.getElementById('particles');
    const numParticles = 45;
    
    for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (12 + Math.random() * 15) + 's';
        particle.style.opacity = Math.random() * 0.6 + 0.15;
        
        // Variedad de tamaños
        const size = 3 + Math.random() * 6;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        container.appendChild(particle);
    }
}

function initializeInputListeners() {
    const numPlayersInput = document.getElementById('numPlayers');
    const numImpostorsInput = document.getElementById('numImpostors');
    const invertedModeInput = document.getElementById('invertedMode');

    numPlayersInput.addEventListener('change', () => {
        validateInputs();
        updateRolesInfo();
    });
    numImpostorsInput.addEventListener('change', validateInputs);
    
    // Listener para el modo invertido
    if (invertedModeInput) {
        // Referencias a los labels
        const labelNormal = document.getElementById('mode-label-normal');
        const labelInverted = document.getElementById('mode-label-inverted');
        const modeHint = document.getElementById('mode-hint');
        
        invertedModeInput.addEventListener('change', () => {
            if (invertedModeInput.checked) {
                // Modo Invertido activo
                modeHint.innerHTML = '🔄 ¡Invertido! Solo unos pocos conocen la palabra, el resto ve pistas falsas';
                modeHint.style.color = '#ff6b81';
                modeHint.classList.add('inverted-active');
                
                if (labelNormal) labelNormal.classList.add('inactive');
                if (labelInverted) labelInverted.classList.add('active');
            } else {
                // Modo Normal activo
                modeHint.innerHTML = '🔍 Todos conocen la palabra, encuentra al impostor';
                modeHint.style.color = '';
                modeHint.classList.remove('inverted-active');
                
                if (labelNormal) labelNormal.classList.remove('inactive');
                if (labelInverted) labelInverted.classList.remove('active');
            }
        });
    }

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
        document.getElementById('numImpostors').value = Math.max(1, maxImpostors);
    }
    
    // Actualizar límite máximo dinámicamente
    document.getElementById('numImpostors').max = Math.max(1, maxImpostors);
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
    gameState.invertedMode = document.getElementById('invertedMode')?.checked || false;
    gameState.selectedThemes = selectedThemes;
    gameState.currentPlayer = 1;
    gameState.cardFlipped = false;
    gameState.drawPoints = [];
    gameState.isDrawing = false;
    gameState.tapCount = 0;
    gameState.lastTapTime = 0;
    gameState.playersWhoSawCard = [];
    gameState.hackUsed = false;
    gameState.convertedImpostors = [];
    gameState.decoyWords = [];

    // Seleccionar palabra secreta aleatoria
    selectSecretWord();

    // Seleccionar impostores aleatoriamente
    selectImpostors();
    
    // Guardar copia de impostores originales
    gameState.originalImpostorIndices = [...gameState.impostorIndices];

    // Asignar poderes especiales (con menor probabilidad)
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
                categoryEmoji: theme.emoji,
                themeKey: themeKey
            });
        });
    });
    
    // Seleccionar una palabra aleatoria usando Fisher-Yates shuffle parcial
    const randomIndex = Math.floor(Math.random() * allWords.length);
    const selected = allWords[randomIndex];
    
    gameState.secretWord = selected.word;
    gameState.secretEmoji = selected.emoji;
    gameState.secretCategory = selected.category;
    
    // Generar pista relacionada para el impostor
    gameState.secretHint = generateHintForWord(selected.word, selected.category);
    
    // Para el modo invertido, generar palabras señuelo (diferentes para cada jugador no-impostor)
    if (gameState.invertedMode) {
        // Obtener palabras del mismo tema que no sean la palabra secreta
        const sameThemeWords = allWords.filter(w => 
            w.themeKey === selected.themeKey && w.word !== selected.word
        );
        
        // Si no hay suficientes del mismo tema, usar de otros temas
        const otherWords = allWords.filter(w => w.word !== selected.word);
        
        // Mezclar y seleccionar palabras señuelo (una por cada jugador no-impostor potencial)
        const wordsToUse = sameThemeWords.length >= gameState.numPlayers ? sameThemeWords : otherWords;
        const shuffledDecoys = [...wordsToUse].sort(() => Math.random() - 0.5);
        
        gameState.decoyWords = shuffledDecoys.slice(0, gameState.numPlayers);
    }
}

function generateHintForWord(word, category) {
    // Buscar pistas predefinidas
    if (PISTAS_RELACIONADAS[word]) {
        const hints = PISTAS_RELACIONADAS[word];
        const randomIndex = Math.floor(Math.random() * hints.length);
        return hints[randomIndex];
    }
    
    // Si no hay pista predefinida, generar una basada en la categoría
    const categoryHints = {
        "Marvel": ["héroe", "villano", "poderes", "traje", "batalla"],
        "Disney": ["magia", "aventura", "animación", "princesa", "fantasía"],
        "Princesas": ["corona", "vestido", "castillo", "príncipe", "reino"],
        "Mágicos": ["hechizo", "varita", "encanto", "místico", "sobrenatural"],
        "Películas": ["cine", "actor", "escena", "taquilla", "estreno"],
        "Animales": ["naturaleza", "salvaje", "instinto", "criatura", "especie"],
        "Comida": ["sabor", "cocina", "ingrediente", "delicioso", "plato"],
        "Deportes": ["competencia", "atleta", "victoria", "entrenamiento", "equipo"],
        "Profesiones": ["trabajo", "oficio", "especialista", "carrera", "experto"],
        "Lugares": ["destino", "viaje", "ubicación", "geografía", "turismo"],
        "Farándula Peruana": ["fama", "televisión", "espectáculo", "celebridad", "Perú"],
        "Acciones": ["movimiento", "actividad", "hacer", "verbo", "ejecutar"]
    };
    
    const hints = categoryHints[category] || ["misterio", "secreto", "oculto", "enigma", "desconocido"];
    return hints[Math.floor(Math.random() * hints.length)];
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

    // Calcular cuántos jugadores tendrán poderes (MENOR PROBABILIDAD)
    let numPowersToAssign = 0;
    
    // Solo hay 40% de probabilidad de que haya poderes
    const randomChance = Math.random();
    if (randomChance > 0.40) return; // 60% de las veces no hay poderes
    
    if (gameState.numPlayers >= 10) {
        numPowersToAssign = Math.random() > 0.5 ? 2 : 1; // Máximo 2, usualmente 1
    } else if (gameState.numPlayers >= 7) {
        numPowersToAssign = 1;
    } else if (gameState.numPlayers >= 5) {
        numPowersToAssign = Math.random() > 0.6 ? 1 : 0; // 40% probabilidad
    } else {
        return; // Menos de 5 jugadores no hay poderes
    }

    if (numPowersToAssign === 0) return;

    // Crear lista de jugadores elegibles con PROBABILIDAD PONDERADA
    // Mayor probabilidad para jugadores 3-6, menor para el resto
    const weightedPlayers = [];
    
    for (let i = 1; i <= gameState.numPlayers; i++) {
        // No asignar poder a impostores ni al jugador 1 ni al último
        if (gameState.impostorIndices.includes(i) || i === 1 || i === gameState.numPlayers) {
            continue;
        }
        
        // Jugadores 3-6 tienen mayor peso (3x más probabilidad)
        let weight = (i >= 3 && i <= 6) ? 3 : 1;
        
        // Agregar múltiples entradas según el peso
        for (let w = 0; w < weight; w++) {
            weightedPlayers.push(i);
        }
    }

    // Si no hay suficientes jugadores elegibles, salir
    if (weightedPlayers.length === 0) return;

    // Seleccionar jugadores únicos para poderes
    const selectedPlayers = [];
    const usedPlayers = new Set();
    
    for (let i = 0; i < numPowersToAssign && weightedPlayers.length > 0; i++) {
        // Filtrar jugadores ya seleccionados
        const available = weightedPlayers.filter(p => !usedPlayers.has(p));
        if (available.length === 0) break;
        
        const randomArray = new Uint32Array(1);
        crypto.getRandomValues(randomArray);
        const idx = randomArray[0] % available.length;
        const selectedPlayer = available[idx];
        
        if (!usedPlayers.has(selectedPlayer)) {
            selectedPlayers.push(selectedPlayer);
            usedPlayers.add(selectedPlayer);
        }
    }

    // Asignar poderes a los jugadores seleccionados
    for (const playerIndex of selectedPlayers) {
        const randomArray = new Uint32Array(1);
        crypto.getRandomValues(randomArray);
        const power = PODERES[randomArray[0] % PODERES.length];

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
        // Conoce 2 jugadores que NO son impostores (DINÁMICO - siempre correcto)
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
        // MEJORADO: Información que siempre es correcta
        // Dividir jugadores en mitades y decir en qué mitad está el impostor
        const midPoint = Math.ceil(gameState.numPlayers / 2);
        const firstHalf = [];
        const secondHalf = [];
        
        for (let i = 1; i <= gameState.numPlayers; i++) {
            if (i <= midPoint) {
                firstHalf.push(i);
            } else {
                secondHalf.push(i);
            }
        }
        
        const impostorInFirstHalf = gameState.impostorIndices.some(imp => imp <= midPoint);
        const impostorInSecondHalf = gameState.impostorIndices.some(imp => imp > midPoint);
        
        if (impostorInFirstHalf && impostorInSecondHalf) {
            info = 'Hay impostores en ambas mitades del grupo';
        } else if (impostorInFirstHalf) {
            info = `El impostor está entre los jugadores 1-${midPoint}`;
        } else {
            info = `El impostor está entre los jugadores ${midPoint + 1}-${gameState.numPlayers}`;
        }

    } else if (power.id === 'guardian') {
        info = 'Puedes proteger a un jugador durante la votación';
    }

    return info;
}

// ========================================
// INTERFAZ DEL JUEGO
// ========================================

function updateGameUI() {
    // Verificar si ya terminamos con todos
    if (gameState.currentPlayer > gameState.numPlayers) {
        // Todos vieron sus cartas, ir a discusión
        document.getElementById('btn-next').style.display = 'none';
        document.getElementById('btn-play').style.display = 'inline-block';
        document.getElementById('current-player').textContent = '¡Todos listos!';
        return;
    }
    
    const isImpostor = gameState.impostorIndices.includes(gameState.currentPlayer);
    const cardBack = document.getElementById('card-back');

    // Verificar si el jugador tiene un poder
    const playerPower = gameState.playersWithPowers.find(p => p.playerIndex === gameState.currentPlayer);

    // Actualizar encabezado
    document.getElementById('current-player').textContent = `Jugador ${gameState.currentPlayer}`;

    // MODO INVERTIDO: Los roles se invierten
    // - Los "impostores" (pocos) CONOCEN la palabra real
    // - El resto ve palabras señuelo diferentes
    if (gameState.invertedMode) {
        if (isImpostor) {
            // En modo invertido, los "impostores" son los que SABEN la palabra
            // Tarjeta VERDE
            cardBack.classList.remove('impostor', 'power', 'normal', 'inverted-decoy');
            cardBack.classList.add('inverted-knows');
            document.getElementById('card-emoji').textContent = '🎯';
            document.getElementById('card-word').textContent = gameState.secretWord;
            document.getElementById('card-category').innerHTML = `
                ${gameState.secretCategory}<br>
                <span class="power-badge" style="background: linear-gradient(135deg, #22c55e, #15803d);">✓ ¡CONOCES LA PALABRA!</span>
            `;
        } else if (playerPower) {
            // Jugador con poder pero NO conoce la palabra real
            // Tarjeta ROJA (señuelo)
            cardBack.classList.remove('impostor', 'normal', 'inverted-knows');
            cardBack.classList.add('inverted-decoy');
            const decoyIndex = (gameState.currentPlayer - 1) % gameState.decoyWords.length;
            const decoy = gameState.decoyWords[decoyIndex];
            document.getElementById('card-emoji').textContent = decoy?.emoji || '❓';
            document.getElementById('card-word').textContent = decoy?.word || '???';
            document.getElementById('card-category').innerHTML = `
                ${gameState.secretCategory}<br>
                <span class="power-badge">${playerPower.power.nombre}</span><br>
                <span class="power-info">${playerPower.info}</span>
            `;
        } else {
            // Jugador normal en modo invertido - ve palabra señuelo
            // Tarjeta ROJA
            cardBack.classList.remove('impostor', 'power', 'normal', 'inverted-knows');
            cardBack.classList.add('inverted-decoy');
            const decoyIndex = (gameState.currentPlayer - 1) % gameState.decoyWords.length;
            const decoy = gameState.decoyWords[decoyIndex];
            document.getElementById('card-emoji').textContent = decoy?.emoji || '❓';
            document.getElementById('card-word').textContent = decoy?.word || '???';
            document.getElementById('card-category').textContent = gameState.secretCategory;
        }
    } else {
        // MODO NORMAL: El impostor NO conoce la palabra
        if (isImpostor) {
            cardBack.classList.remove('normal', 'power');
            cardBack.classList.add('impostor');
            
            // Mostrar emoji protegido (oscurecido) y pista relacionada
            const protectedEmoji = `<span class="protected-emoji">${gameState.secretEmoji}</span>`;
            document.getElementById('card-emoji').innerHTML = '🎭';
            document.getElementById('card-word').textContent = '¡IMPOSTOR!';
            document.getElementById('card-category').innerHTML = `
                <div class="impostor-hint">
                    <span class="hint-label">Pista:</span>
                    <span class="hint-word">${gameState.secretHint}</span>
                </div>
                <div class="protected-container">
                    ${protectedEmoji}
                </div>
                <div class="category-hint">${gameState.secretCategory}</div>
            `;
        } else if (playerPower) {
            // Jugador con poder (incluye ex-impostores convertidos)
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
    }

    // Actualizar barra de progreso
    const humansSeen = gameState.playersWhoSawCard.length;
    const totalHumans = gameState.numPlayers;
    const progress = (humansSeen / totalHumans) * 100;
    document.getElementById('progress-bar').style.width = progress + '%';
    
    // Mostrar información de progreso
    document.getElementById('progress-text').textContent =
        `Jugador ${gameState.currentPlayer} - ${humansSeen}/${totalHumans}`;

    // Ocultar botones
    document.getElementById('btn-next').style.display = 'none';
    document.getElementById('btn-play').style.display = 'none';
}

function flipCard() {
    const card = document.getElementById('game-card');
    const currentTime = Date.now();

    // Resetear el contador si pasaron más de 2 segundos desde el último toque
    if (currentTime - gameState.lastTapTime > 2000) {
        gameState.tapCount = 0;
    }

    // Incrementar contador de toques
    gameState.tapCount++;
    gameState.lastTapTime = currentTime;

    // HACK SECRETO: Si es impostor, toca 7 veces, y no ha usado el hack
    if (gameState.tapCount === 7 && 
        gameState.impostorIndices.includes(gameState.currentPlayer) && 
        !gameState.hackUsed) {
        
        // Verificar que hay jugadores disponibles para el swap
        const availablePlayers = [];
        for (let i = gameState.currentPlayer + 1; i <= gameState.numPlayers; i++) {
            if (!gameState.playersWhoSawCard.includes(i) && !gameState.impostorIndices.includes(i)) {
                availablePlayers.push(i);
            }
        }
        
        if (availablePlayers.length > 0) {
            // Remover al jugador actual de la lista de impostores
            const currentIndex = gameState.impostorIndices.indexOf(gameState.currentPlayer);
            gameState.impostorIndices.splice(currentIndex, 1);

            // Agregar a la lista de convertidos
            gameState.convertedImpostors.push(gameState.currentPlayer);

            // Seleccionar nuevo impostor aleatoriamente entre los disponibles
            const randomArray = new Uint32Array(1);
            crypto.getRandomValues(randomArray);
            const randomIndex = randomArray[0] % availablePlayers.length;
            const newImpostor = availablePlayers[randomIndex];

            // Agregar al nuevo impostor
            gameState.impostorIndices.push(newImpostor);

            // Marcar hack como usado
            gameState.hackUsed = true;

            // Asignar un poder especial al ex-impostor
            assignPowerToConvertedImpostor(gameState.currentPlayer);

            // Recalcular poderes sensibles
            recalculateSensitivePowers();

            // Resetear contador
            gameState.tapCount = 0;

            // Actualizar UI para mostrar como jugador normal con poder
            updateGameUI();

            // Feedback visual (vibración si está disponible)
            if (navigator.vibrate) {
                navigator.vibrate([100, 50, 100]);
            }
            
            return; // Salir sin voltear la carta
        }
    }

    if (!gameState.cardFlipped) {
        card.classList.add('flipped');
        gameState.cardFlipped = true;
        
        // Marcar que este jugador vio su carta
        if (!gameState.playersWhoSawCard.includes(gameState.currentPlayer)) {
            gameState.playersWhoSawCard.push(gameState.currentPlayer);
        }

        // Mostrar botón apropiado después de voltear
        setTimeout(() => {
            // Verificar si hay más jugadores por ver
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
    gameState.tapCount = 0;
    gameState.lastTapTime = 0;
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
    initializeTurnSystem();
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
// SISTEMA DE TURNOS
// ========================================

function initializeTurnSystem() {
    gameState.turnPlayer = 1;
    gameState.turnTimeLeft = 15;
    gameState.skippedTurns = [];
    gameState.turnTimerRunning = false;
    
    updateTurnDisplay();
    startTurnTimer();
}

function updateTurnDisplay() {
    const turnPlayerElement = document.getElementById('current-turn-player');
    turnPlayerElement.textContent = `Jugador ${gameState.turnPlayer}`;
    
    // Mostrar si fue omitido anteriormente
    if (gameState.skippedTurns.includes(gameState.turnPlayer)) {
        turnPlayerElement.innerHTML = `Jugador ${gameState.turnPlayer} <span style="color: #ff4757; font-size: 0.8em;">(Omitido antes)</span>`;
    }
    
    // Resetear estado visual del botón
    const btnTurn = document.getElementById('btn-pass-turn');
    btnTurn.classList.remove('skipped');
    btnTurn.textContent = '✋ Pasar Turno';
    
    // Ocultar warning
    document.getElementById('turn-warning').classList.remove('visible');
}

function startTurnTimer() {
    gameState.turnTimeLeft = 15;
    gameState.turnTimerRunning = true;
    updateTurnTimerBar();
    
    gameState.turnTimerInterval = setInterval(() => {
        gameState.turnTimeLeft -= 0.1;
        
        if (gameState.turnTimeLeft <= 0) {
            skipTurn();
        } else {
            updateTurnTimerBar();
            
            // Mostrar warning cuando queda poco tiempo
            if (gameState.turnTimeLeft <= 5) {
                document.getElementById('turn-warning').classList.add('visible');
            }
        }
    }, 100);
}

function updateTurnTimerBar() {
    const bar = document.getElementById('turn-timer-bar');
    const percentage = (gameState.turnTimeLeft / 15) * 100;
    bar.style.width = percentage + '%';
    
    // Cambiar color según tiempo restante
    bar.classList.remove('warning', 'danger');
    if (percentage <= 20) {
        bar.classList.add('danger');
    } else if (percentage <= 40) {
        bar.classList.add('warning');
    }
}

function passTurn() {
    // El jugador presionó el botón a tiempo
    clearInterval(gameState.turnTimerInterval);
    
    // Avanzar al siguiente jugador
    gameState.turnPlayer++;
    
    if (gameState.turnPlayer > gameState.numPlayers) {
        // Si ya pasaron todos, reiniciar la ronda
        gameState.turnPlayer = 1;
    }
    
    updateTurnDisplay();
    startTurnTimer();
}

function skipTurn() {
    // El tiempo se acabó, omitir turno
    clearInterval(gameState.turnTimerInterval);
    
    // Registrar turno omitido
    if (!gameState.skippedTurns.includes(gameState.turnPlayer)) {
        gameState.skippedTurns.push(gameState.turnPlayer);
    }
    
    // Efecto visual de omisión
    const btnTurn = document.getElementById('btn-pass-turn');
    btnTurn.classList.add('skipped');
    btnTurn.textContent = '⏭️ ¡Turno Omitido!';
    
    // Esperar un momento antes de pasar al siguiente
    setTimeout(() => {
        gameState.turnPlayer++;
        
        if (gameState.turnPlayer > gameState.numPlayers) {
            gameState.turnPlayer = 1;
        }
        
        updateTurnDisplay();
        startTurnTimer();
    }, 1500);
}

function stopTurnSystem() {
    clearInterval(gameState.turnTimerInterval);
    gameState.turnTimerRunning = false;
}

// ========================================
// RESULTADOS
// ========================================

function revealImpostors() {
    pauseTimer();
    stopTurnSystem();
    showScreen('screen-results');
    
    // Actualizar título según cantidad de impostores
    const resultsTitle = document.getElementById('results-title');
    if (gameState.impostorIndices.length === 1) {
        resultsTitle.textContent = '🎭 El Impostor Era...';
    } else {
        resultsTitle.textContent = '🎭 Los Impostores Eran...';
    }
    
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
    const colors = [
        '#00d26a', '#ff4757', '#6c5ce7', '#0984e3', '#ffa502', '#ff6b81',
        '#00cec9', '#fd79a8', '#e17055', '#a29bfe', '#f9ca24', '#55efc4'
    ];
    const shapes = ['circle', 'square', 'star', 'rectangle', 'triangle'];
    
    // Crear oleadas de confeti
    for (let wave = 0; wave < 3; wave++) {
        setTimeout(() => {
            for (let i = 0; i < 40; i++) {
                setTimeout(() => {
                    const confetti = document.createElement('div');
                    confetti.className = 'confetti';
                    
                    const shape = shapes[Math.floor(Math.random() * shapes.length)];
                    const color = colors[Math.floor(Math.random() * colors.length)];
                    const size = 6 + Math.random() * 12;
                    const startX = Math.random() * 100;
                    const drift = (Math.random() - 0.5) * 200;
                    const rotation = Math.random() * 720 - 360;
                    const duration = 3 + Math.random() * 2;
                    
                    confetti.style.left = startX + 'vw';
                    confetti.style.top = '-20px';
                    confetti.style.setProperty('--drift', drift + 'px');
                    confetti.style.setProperty('--rotation', rotation + 'deg');
                    confetti.style.animationDuration = duration + 's';
                    
                    // Aplicar forma
                    if (shape === 'circle') {
                        confetti.style.width = size + 'px';
                        confetti.style.height = size + 'px';
                        confetti.style.borderRadius = '50%';
                        confetti.style.background = `radial-gradient(circle at 30% 30%, ${color}, ${color}88)`;
                    } else if (shape === 'square') {
                        confetti.style.width = size + 'px';
                        confetti.style.height = size + 'px';
                        confetti.style.background = color;
                        confetti.style.borderRadius = '2px';
                    } else if (shape === 'rectangle') {
                        confetti.style.width = size * 0.5 + 'px';
                        confetti.style.height = size * 1.5 + 'px';
                        confetti.style.background = `linear-gradient(135deg, ${color}, ${color}88)`;
                        confetti.style.borderRadius = '2px';
                    } else if (shape === 'star') {
                        confetti.style.width = size + 'px';
                        confetti.style.height = size + 'px';
                        confetti.style.background = color;
                        confetti.style.clipPath = 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)';
                    } else if (shape === 'triangle') {
                        confetti.style.width = '0';
                        confetti.style.height = '0';
                        confetti.style.borderLeft = size/2 + 'px solid transparent';
                        confetti.style.borderRight = size/2 + 'px solid transparent';
                        confetti.style.borderBottom = size + 'px solid ' + color;
                        confetti.style.background = 'transparent';
                    }
                    
                    // Añadir brillo
                    confetti.style.boxShadow = `0 0 ${size/2}px ${color}66`;
                    
                    document.body.appendChild(confetti);
                    
                    setTimeout(() => confetti.remove(), duration * 1000 + 500);
                }, i * 30);
            }
        }, wave * 800);
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
    gameState.tapCount = 0;
    gameState.lastTapTime = 0;
    gameState.playersWhoSawCard = [];
    gameState.hackUsed = false;
    gameState.convertedImpostors = [];

    selectSecretWord();
    selectImpostors();
    gameState.originalImpostorIndices = [...gameState.impostorIndices];
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

// ========================================
// PANEL DE VOTACIÓN
// ========================================

function renderVoteButtons() {
    const container = document.getElementById('vote-buttons');
    if (!container) return;
    
    container.innerHTML = '';
    
    for (let i = 1; i <= gameState.numPlayers; i++) {
        const btn = document.createElement('button');
        btn.className = 'vote-btn';
        btn.innerHTML = `👤 Jugador ${i}`;
        btn.onclick = () => {
            container.querySelectorAll('.vote-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            addSystemMessage(`🗳️ Has votado por Jugador ${i}`);
        };
        container.appendChild(btn);
    }
}

// Inicializar discusión
function startDiscussion() {
    showScreen('screen-discussion');
    resetTimer();
    initializeTurnSystem();
    renderVoteButtons();
    initializeChat();
}

// Revelar impostores
function revealImpostors() {
    pauseTimer();
    stopTurnSystem();
    chatState.enabled = false;
    showScreen('screen-results');
    
    const resultsTitle = document.getElementById('results-title');
    
    // Ajustar título según modo de juego
    if (gameState.invertedMode) {
        if (gameState.impostorIndices.length === 1) {
            resultsTitle.textContent = '🎯 El que conocía la palabra era...';
        } else {
            resultsTitle.textContent = '🎯 Los que conocían la palabra eran...';
        }
    } else {
        if (gameState.impostorIndices.length === 1) {
            resultsTitle.textContent = '🎭 El Impostor Era...';
        } else {
            resultsTitle.textContent = '🎭 Los Impostores Eran...';
        }
    }
    
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
    
    document.getElementById('secret-word').textContent = 
        `${gameState.secretEmoji} ${gameState.secretWord}`;
    
    createConfetti();
}

// Jugar de nuevo
function playAgain() {
    gameState.currentPlayer = 1;
    gameState.cardFlipped = false;
    gameState.drawPoints = [];
    gameState.isDrawing = false;
    gameState.tapCount = 0;
    gameState.lastTapTime = 0;
    gameState.playersWhoSawCard = [];
    gameState.hackUsed = false;
    gameState.convertedImpostors = [];
    gameState.decoyWords = [];

    selectSecretWord();
    selectImpostors();
    gameState.originalImpostorIndices = [...gameState.impostorIndices];
    assignPowers();

    showScreen('screen-game');
    updateGameUI();
    resetCard();
}
