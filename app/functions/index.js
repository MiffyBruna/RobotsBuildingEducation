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

app.post("/create-image", async (req, res) => {
  try {
    // Extract the image prompt from the request body
    const imagePrompt = req.body.imagePrompt;

    // Set up the request data for DALL-E
    const imageRequest = {
      model: "dall-e-2",
      prompt: imagePrompt,
      n: 1, // Number of images to generate
      size: "512x512" // Image resolution
    };

    // Request DALL-E to create the image
    const imageResponse = await openai.images.generate(imageRequest);

    // Send the generated image or image URL in the response
    res.status(200).send({
      imageUrl: imageResponse.data // Assuming the response contains the URL of the generated image
    });
  } catch (error) {
    // Handle errors
    res.status(500).send({ error: error.message });
  }
});


exports.app = functions.https.onRequest(app);
