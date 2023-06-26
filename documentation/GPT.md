

We use Express.js combined with Google Cloud Functions with their Firebase product to communicate and serve data given by OpenAI's network.
The code is fairly simple to use and gives us access to a managed service by Google, which is pretty nice for entrepeneurs.

As is the norm in software engineering, other engineers or educators may have opinion about which service or software to use, and there's usually
fair judgement being exercised when that practice happens. Google makes my life easier with Firebase and I'm a fan of the services they offer. I'm 
somewhat in the minority for having preferences like Google Cloud & Cloudflare.

This a snippet of the code, meant to capture the important parts.


## Backend
```js
const GoogleCloudFunctions = require("firebase-functions");
const Express = require("express");
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({ apiKey: OPENAI_API_KEY });
const OpenAI = new OpenAIApi(configuration);
const App = Express();

App.use(Express.json());

// The industry calls events with large language models "prompts" and "completions" - we call prompts "tasks" on RO.B.E
App.post("/task", async (request, response) => {
  try {
    const task = request.body.task;
    
    const completion = await OpenAI.createChatCompletion({
      model: "gpt-3.5-turbo-16k",
      messages: [
        { role: "user", content: task }
      ],
    });
    
    response.status(200).send({
      bot: completion.data.choices[0].message,
    });
  } catch (error) {
    response.status(500).send({ error });
  }
});

exports.app = GoogleCloudFunctions.https.onRequest(app);

```




# Frontend
We could then run an event on a frontend react component

```js
  let runAiTask = async (event) => {

    const aiResponse = await fetch(
      //fetch data from this url
      "https://us-central1-my_app_name.cloudfunctions.net/app/task",
      
      //specify the data or interfaction you want
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ task: "Can you tell me what the meaning of life is?" })
        })
      }
    ).catch((error) => {
      console.log("err", { error });
    });

    let result = await aiResponse.json().bot.trim();
    
    setTaskResult(result);
}

```
