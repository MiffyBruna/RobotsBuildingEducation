const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const OpenAI = require("openai");
const bodyParser = require("body-parser");

dotenv.config();
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// const openai = new OpenAIApi(configuration);

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// frontend
// const response = await fetch(
//   "https://us-central1-learn-robotsbuildingeducation.cloudfunctions.net/app/prompt",
//   {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       prompt: prompt.request,
//     }),
//   }
// ).catch((error) => {

// });

// let data = await response.json();
// let parsedData = data.bot.trim();

app.post("/prompt", async (req, res) => {
  try {
    const prompt = req.body.prompt;
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-16k",
      messages: [{ role: "user", content: prompt }],
    });

    res.status(200).send({
      bot: completion.choices[0].message,
    });
  } catch (error) {

    res.status(500).send({ error });
  }
});

exports.app = functions.https.onRequest(app);
