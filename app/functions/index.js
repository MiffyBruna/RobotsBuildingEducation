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
    const response = await openai.createCompletion({
      // important for custom promps:
      // user - string - Optional -A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse.
      model: "text-davinci-003",
      prompt: `${prompt}`,
      temperature: 1,
      best_of: 1,
      max_tokens: 2047,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      stop: ['"""'],
    });

    res.status(200).send({
      bot: response.data.choices[0].text,
    });
  } catch (error) {
    console.log("post error", error);
    res.status(500).send({ error });
  }
});

exports.app = functions.https.onRequest(app);
