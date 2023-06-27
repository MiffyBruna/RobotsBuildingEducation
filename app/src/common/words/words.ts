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
      "16": "Introduction To RO.B.E",
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
};
