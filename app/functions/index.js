const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { Configuration, OpenAIApi } = require("openai");
const bodyParser = require("body-parser");

dotenv.config();
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.post("/prompt", async (req, res) => {
  try {
    const prompt = req.body.prompt;
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });
    res.status(200).send({
      bot: completion.data.choices[0].message,
    });
  } catch (error) {
    console.log("post error", error);
    res.status(500).send({ error });
  }
});

exports.app = functions.https.onRequest(app);
