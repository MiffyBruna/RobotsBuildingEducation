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

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.post("/prompt", async (req, res) => {
  try {
    const prompt = req.body.prompt;
    let constructor = {
      model: "gpt-4-1106-preview",
      messages: [{ role: "user", content: prompt }],
    }

    if(req?.body?.isJsonMode){
      constructor.response_format = { type: "json_object" };
      constructor.messages = [
        {
          role: "system",
          content: "You are a helpful assistant designed to output JSON.",
        },
        { role: "user", content: prompt }
      ]
    }

    const completion = await openai.chat.completions.create(constructor);

    res.status(200).send({
      bot: completion.choices[0].message,
    });
  } catch (error) {

    res.status(500).send({ error });
  }
});

exports.app = functions.https.onRequest(app);
