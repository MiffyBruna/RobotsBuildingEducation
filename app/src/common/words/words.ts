//you want to keep word interfaces pretty flat and predictacle.
//this makes it pretty simple to start toggling your content for bilingual speakers using GPT.
//we use numbers to index each key in a key-value pair because we don't know what the key is going to describe.
//additional descriptions can be handled by comments. that's right, comments as code.

export let words = {
  English: {
    modals: {
      titles: {
        "1": "Learn More",
        "2": "Apply",
        "3": "Emotional Intelligence",
        "4": "How You Feel",
        "5": "Proof of Work",
        "6": "Conversation Grader",
        "7": "The Quiz"
      },
      headers: {
        "1": "RO.B.E",
        "2": "Testimonials",
        "3": "Content",
        "4": "Engineer",
        "5": "Creator",
        "6": "Dealer",
        "8": "Proof of Work",
        "8.1": "Emotional Intelligence",
        "9": "Frequently Asked Questions",
        "10": "What kind of computer do I need?",
        "11": "Is programming hard? Do I have to be good at math?",
        "12": "What programming language should I pick?",
        "13": "Is bootcamp worth it?",
        "14": "What is coding and what can I do with it?",
        "15": "Hey what about cybersecurity, data analytics or these certificates?",
        "16": "Did I go to school?",


        //proof of work wallet
        "20": "The Proof of Work System",
        "21": "Scholarships Created: ",
        "22": "The Reserve",
        "22.1": "invested ",

        //emotional intelligence
        "23": "How do you feel today?",
        "24": "The journey",
        "25": "High energy",
        "26": "Low energy",

        // TODO: get the header titles from ui(). need to remove the "Coding" image

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
      "5.1": "Exit",
      "5.2": "Save",

      //email/money address
      "6": "Copy Email Address",
      "7": "Copy Bitcoin Address",
      "8": "Copy Lightning Address",

      //intro
      "9": "Learn more",

      //paths
      "11": "Engineer",
      "12": "Creator",
      "13": "Dealer",


      //modules (tbd)

      // engineer - version 3 crash course
      "16": "Learning Mindset & Perspective",
      "17": "Lesson 1 Coding Fundamentals",
      "18": "Lesson 2 Frontend Programming",
      "19": "Lesson 3 Backend Engineering",
      "20": "Lesson 4 Building An App",
      "21": "Lesson 5 Computer Science",

      // creator - communication science
      "31": "Philosophy @ RO.B.E",
      "32": "Interactions & Design",
      "36": "The Psychology Of Self-esteem",

      // dealer - Understanding Business
      "37": "Creating Competitive Entry Level Resumes",
      "38": "Focus Investing",
      "39": "Wealth Management",

      //prompts
      "40": "generate",
      "43": "discover",
      "44": "guide",
      "45": "shop",


      // emotional intelligence
      "46": "Motivated",
      "48": "Excited", 
      "49": "Stressed", 
      "50": "Anxious", 

      "51": "Peaceful",
      "52": "Content", 
      "53": "Sad", 
      "54": "Tired", 
      "55": "generate insight",

      // conversation grader
      "56": "Grade",
      "57": "Add to conversation",
      "58":"Ask Ms. Roxana for assistance on your quiz! Grade your conversation and see how you can improve =)",

      //switches
      "59": "Zen Garden",
      "60": "Holy Ghost"




    },

  },
  Español: {
    modals: {
      titles: {
        "1": "Aprender Más",
        "2": "Aplicar",
        "3": "Inteligencia Emocional",
        "4": "Cómo Te Sientes",
        "5": "Prueba de Trabajo",
        "6": "Evaluador de Conversación",
        "7": "El Cuestionario"
      },
      headers: {
        "1": "RO.B.E",
        "2": "Testimonios",
        "3": "Contenido",
        "4": "Ingeniero",
        "5": "Creador",
        "6": "Comerciante",
        "8": "Prueba de Trabajo",
        "8.1": "Inteligencia Emocional",
        "9": "Preguntas Frecuentes",
        "10": "¿Qué tipo de computadora necesito?",
        "11": "¿Es difícil programar? ¿Debo ser bueno en matemáticas?",
        "12": "¿Qué lenguaje de programación debo elegir?",
        "13": "¿Vale la pena el bootcamp?",
        "14": "¿Qué es la programación y qué puedo hacer con ella?",
        "15": "¿Y qué hay de ciberseguridad, análisis de datos o estos certificados?",
        "16": "¿Fui a la escuela?",
        "20": "El Sistema de Prueba de Trabajo",
        "21": "Becas Creadas: ",
        "22": "La Reserva",
        "22.1": "invertido ",
        "23": "¿Cómo te sientes hoy?",
        "24": "El viaje",
        "25": "Alta energía",
        "26": "Baja energía",
      },
    },
    buttons: {
      "1": "Suscribirse",
      "2": "Red",
      "3": "Contacto",
      "4": "OpenAI",
      "5": "Volver a la aplicación",
      "5.1": "Salir",
      "5.2": "Guardar",
      "6": "Copiar Dirección de Correo",
      "7": "Copiar Dirección de Bitcoin",
      "8": "Copiar Dirección de Lightning",
      "9": "Aprender más",
      "11": "Ingeniero",
      "12": "Creador",
      "13": "Comerciante",
      "16": "Mentalidad y Perspectiva para Aprender",
      "17": "Lección 1 Fundamentos de Programación",
      "18": "Lección 2 Programación Frontend",
      "19": "Lección 3 Ingeniería Backend",
      "20": "Lección 4 Construyendo una Aplicación",
      "21": "Lección 5 Ciencias de la Computación",
      "31": "Filosofía en RO.B.E",
      "32": "Interacciones y Diseño",
      "36": "La Psicología de la Autoestima",
      "37": "Creando Resumes Competitivos de Nivel de Entrada",
      "38": "Inversión de Enfoque",
      "39": "Gestión de Patrimonio",
      "40": "generar",
      "43": "descubrir",
      "44": "guiar",
      "45": "comprar",
      "46": "Motivado",
      "48": "Emocionado",
      "49": "Estresado",
      "50": "Ansioso",
      "51": "Tranquilo",
      "52": "Contento",
      "53": "Triste",
      "54": "Cansado",
      "55": "generar perspectiva",
      "56": "Calificar",
      "57": "Añadir a la conversación",
      "58": "Pide asistencia a Ms. Roxana para tu cuestionario! Califica tu conversación y descubre cómo puedes mejorar =)",

      "59": "Jardín zen",
      "60": "Espíritu Santo",
    },
  },
};
