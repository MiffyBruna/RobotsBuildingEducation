const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const OpenAI = require("openai");
const bodyParser = require("body-parser");
// const { Client, GatewayIntentBits } = require('discord.js');

dotenv.config();
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// const client = new Client({ intents: [
//   GatewayIntentBits.Guilds,
//   GatewayIntentBits.GuildMembers, 
//   GatewayIntentBits.GuildMessages, 
//   GatewayIntentBits.DirectMessages,
//   GatewayIntentBits.MessageContent
// ] });

// client.on('ready', () => {
//   console.log(`Logged in as ${client.user.tag}!`);
// });

// client.login(process.env.DISCORD_BOT_KEY);

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());





app.post("/prompt", async (req, res) => {
  try {
    const prompt = req.body.prompt;
    let constructor = {
      model: "gpt-4-0125-preview",
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
      model: "dall-e-3",
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


// app.post('/setTimer', (req, res) => {
  
//   const userId = req.body.userId; // Get Discord User ID from the request
//   // Set a timer for 12 hours and then remind the user

//   client.users.fetch(userId).then((user) => {
//     // user.send('Your 12-hour timer is up! You can answer the next question now.');
//   const channel = client.channels.cache.get('1199792098157797458');
//   channel.send(`<@${userId}> Your timer is up! You can answer the next question now.`);
//   })
//   // }, 12 * 60 * 60 * 1000); // 12 hours in milliseconds

//   res.send('Timer set!'); 
// });

// app.post('/setTimer', (req, res) => {
//   try{
//     client.on("messageCreate", (message) => {
//       if (message.author.bot) return;
//       if (message.content === "hello") message.reply("hello");
//     });
//   }catch(error){
//     res.status(500).send({ error: error.message });
//   }
// })

exports.app = functions.https.onRequest(app);
