//you want to keep word interfaces pretty flat and predictacle.
//this makes it pretty simple to start toggling your content for bilingual speakers using GPT.
//we use numbers to index each key in a key-value pair because we don't know what the key is going to describe.
//additional descriptions can be handled by comments. that's right, comments as code.

export let words = {
  english: {
    modals: {
      titles: {
        //learn more & FAQs modal
        "1": "Learn More",
        "2": "Apply",
        "3": "AI Task Engineering",
        "4": "Impact Wallet",
      },
      headers: {
        //learn more & FAQs
        "1": "RO.B.E",
        "2": "Testimonials",
        "3": "Content",
        "4": "Engineer",
        "5": "Creator",
        "6": "Dealer",
        "7": "Boss Mode",
        "8": "RO.B.E.",
        "9": "Frequently Asked Questions",
        "10": "What kind of computer do I need?",
        "11": "Is programming hard? Do I have to be good at math?",
        "12": "What programming language should I pick?",
        "13": "Is bootcamp worth it?",
        "14": "What is coding and what can I do with it?",
        "15": "Hey what about cybersecurity, data analytics or these certificates?",
        "16": "Did I go to school?",

        //apply to scholarship
        "17": "Scholarships 1.0",

        //roxana prompts
        "19": "What is this?",

        //impact wallet
        "20": "Impact",
        "21": "Scholarships Created: ",
      },
    },

    buttons: {
      //network
      "1": "Subscribe",
      "2": "Network",
      "3": "Contact",
      "4": "OpenAI",

      //modal exit
      "5": "Back to app",

      //email/money address
      "6": "Copy Email Address",
      "7": "Copy Bitcoin Address",
      "8": "Copy Lightning Address",

      //intro
      "9": "Learn More & FAQs",
      "10": "Apply To Scholarship",

      //paths
      "11": "Engineer",
      "12": "Creator",
      "13": "Dealer",
      "14": "RO.₿.E",
      "15": "Boss Mode",

      //modules (tbd)

      // engineer - version 3 crash course
      "16": "Learning Mindset & Perspective",
      "17": "Lesson 1 Coding Fundamentals",
      "18": "Lesson 2 Frontend Programming",
      "19": "Lesson 3 Backend Engineering",
      "20": "Lesson 4 Building An App",

      // engineer - get experience
      "21": "Robots Building Education",
      "22": "Indocumentadofy",

      // engineer - computer science
      "23": "Programming Language",
      "24": "Recursion",
      "25": "Linked Lists",
      "26": "Link Traversal",
      "27": "Link Swapping",
      "28": "Algorithms",

      // creator - communication science
      "29": "Creating Purpose",
      "30": "The Drug War",
      "31": "Philosophy @ RO.B.E",
      "32": "User Experiences",
      "33": "Content Review (20M+ views)",
      "34": "SEO: Search Engine Optimization",
      "35": "Influence & Expression",
      "36": "Abraham Lincoln",

      // dealer - Understanding Business
      "37": "Creating Competitive Entry Level Resumes",
      "38": "Focus Investing",
      "39": "Wealth Management",
      "40": "Financial Technology Investing",
      "41": "Social Media Investing",
      "42": "Education Technology Investing",

      //prompts
      "43": "► discover",
      "44": "📚 study",
      "45": "🛍️ shop",

      //ai task engineering
      "46": "💗 roxana",

      //impact wallet
      "47": "🤖",
      "48": "🏦",
    },

    content: {
      // tbd
      headers: {}
      text: {}
    }
  },

    spanish: {
    modals: {
      titles: {
        "1": "Aprende Más",
        "2": "Aplicar",
        "3": "Ingeniería de Tareas de IA",
        "4": "Cartera de Impacto",
      },
      headers: {
        "1": "RO.B.E",
        "2": "Testimonios",
        "3": "Contenido",
        "4": "Ingeniero",
        "5": "Creador",
        "6": "Concesionario",
        "7": "Modo Jefe",
        "8": "RO.B.E",
        "9": "Preguntas Frecuentes",
        "10": "¿Qué tipo de computadora necesito?",
        "11": "¿Es difícil programar? ¿Tengo que ser bueno en matemáticas?",
        "12": "¿Qué lenguaje de programación debería elegir?",
        "13": "¿Vale la pena el bootcamp?",
        "14": "¿Qué es la programación y qué puedo hacer con ella?",
        "15": "Oye, ¿qué pasa con la ciberseguridad, el análisis de datos o estos certificados?",
        "16": "¿Fui a la escuela?",

        "17": "Becas 1.0",

        "19": "¿Qué es esto?",

        "20": "Impacto",
        "21": "Becas Creadas: ",
      },
    },

    buttons: {
      "1": "Suscribirse",
      "2": "Red",
      "3": "Contacto",
      "4": "OpenAI",

      "5": "Volver a la aplicación",

      "6": "Copiar dirección de correo electrónico",
      "7": "Copiar dirección de Bitcoin",
      "8": "Copiar dirección de Lightning",

      "9": "Aprende Más & Preguntas Frecuentes",
      "10": "Aplicar a la Beca",

      "11": "Ingeniero",
      "12": "Creador",
      "13": "Concesionario",
      "14": "RO.₿.E",
      "15": "Modo Jefe",

      "16": "Introducción a RO.B.E",
      "17": "Lección 1 Fundamentos de Programación",
      "18": "Lección 2 Programación Frontend",
      "19": "Lección 3 Ingeniería Backend",
      "20": "Lección 4 Construcción de una Aplicación",

      "21": "Robots Construyendo Educación",
      "22": "Indocumentadofy",

      "23": "Lenguaje de Programación",
      "24": "Recursión",
      "25": "Listas Enlazadas",
      "26": "Recorrido de Enlaces",
      "27": "Intercambio de Enlaces",
      "28": "Algoritmos",

      "29": "Creando Propósito",
      "30": "La Guerra de las Drogas",
      "31": "Filosofía @ RO.B.E",
      "32": "Experiencias de Usuario",
      "33": "Revisión de Contenido (20M+ vistas)",
      "34": "SEO: Optimización de Motores de Búsqueda",
      "35": "Influencia & Expresión",
      "36": "Abraham Lincoln",

      "37": "Creando CVs Competitivos para Niveles Iniciales",
      "38": "Inversión Focalizada",
      "39": "Gestión de Riqueza",
      "40": "Inversión en Tecnología Financiera",
      "41": "Inversión en Medios Sociales",
      "42": "Inversión en Tecnología Educativa",

      "43": "► descubrir",
      "44": "📚 estudiar",
      "45": "🛍️ comprar",

      "46": "💗 roxana",

      "47": "🤖",
      "48": "🏦",
    },

    content: {
      headers: {}
      text: {}
    }
  },
};
