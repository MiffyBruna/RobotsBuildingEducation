**This is under development and not a priority yet.**

TOC

1. Welcome
2. Projects
3. Software Business
4. How to help

# 1. Welcome To RO.B.E

As is tradition, we're going to start with a draft and move quickly.
You're encouraged to read first and ask questions later. Zoom out and think outside of the box when reading this.
Here are some philosophies I follow:

1. Education is sensitive. If not disruptive, technology is interruptive. Better to wait for the right technology.
2. View software as a digital twin of the real-world.
3. How customers use an app informs its direction.
4. If you change the incentive, you change the behavior.
5. People empowered by machines rather than machines empowered by people.
6. Build to have people focus on more important things like their family, community or goals.
7. Overrepresent ideals unaligned with reality.

There are several products under development here. You are encouraged to build your own version of it or contribute as you see fit.

# 2. Projects

## Project Appletree

This is a product centered around the needs of educators. It is not limited to public school educators but that is the spirit of the product. Right now, it's OpenAI creating courses in the current UI. It allows people to rapidly create content and store data to their profile. Long-term, we need to allow people to customize and add human-touch or curation to their material.

## Project Indocumentadofy

A platform to educate and onboard undocumented immigrants into the rapidly growing Shopify ecosystem and consulting opportunities. From a stock market perspective, Shopify is investing heavily into the creator economy by developing product for organizations like Meta or Pinterest. There's a lot of context to this choice but I feel like it's an awfully reasonable way to introduce people into different and potentially lucrative economies or skills across the globe.

Financial technology and programmable money is here to stay and whether it comes from Shopify or Cash App or Coinbase, it's going to have to figure out a way to interoperate with existing systems and networks. So I think it's a good well-rounded bet to go from coding to business skills. To be frank, you can have an undocumented teenager choose a farm, a factory, a kitchen or a remote office. There are no rules preventing an undocumented person from charging $2000 for a service he or she can get comfortably done in a weekend. Let's pour resources into the remote office.

## Project Impact

Impact is the currency system used in Robots Building Education. Based on the task perform, impact is generated. Given that RO.B.E is a system designed around automation and user experiences, impact effectively represents the work performed by the robots. As it currently stands, 90% of subscriptions is re-invested back into the community while 10% is held in a reserve of Bitcoin.

This idea can be actualized further in various ways with more software engineering and careful education policy. Project Impact is mostly why I work on Robots Building Education and I consider it the heart of all of the work that I do.

## Project TapDM

TapDM is a social network of chats. I think there's a ton of education happening in DMs. I want people to have their 1-on-1 or small-group-chats public for following but personal for people participating.

# 3. Software Business

## Overview

This organization is run by one person so there are some specific software choices being made. Generally speaking, software that does heavy lifting and costs the least time to implement is usually preferred. Here is an overview of software tools used so far in no order:

1. React
2. Typescript
3. Firebase
4. OpenAI
5. Cash App
6. Apple Animoji
7. Canva
8. Tiktok
9. Patreon
10. Cloudflare
11. Discord
12. LinkedIn

There are certainly some decisions I can make to make this business stack more "effecient". Perhaps there's a way to wire up Stripe and Discord in a way where something like Patreon and Cash App UIs are not appropriate, but I usually think a lot about why I'm choosing these things, up to the point of how it even feels to use or see recognizable things. It may not be immediately clear that something like Cash App or Patreon are tax-friendly or LinkedIn is not a generally welcoming place for first generation professionals figuring out how to network or navigate speech in the modern day.

## Products

Software is going through a refactor process in Q2 2023. Coding names are likely to change

### Express + Firebase Functions

This handles endpoints when API calls for live use. Currently using OpenAI's `text-davinci-003` model while developing UI/UX. Eventually this API usage will expand and update when user experiences and business finance is better understood

- https://firebase.google.com/docs/functions
- https://platform.openai.com/docs/api-reference/introduction

### App

The software is going through a refactor and is currently not in the best state of health. A lot of ideas are mostly scribbled together. It will improve after a refactor that will happen in Q2.

App manages the applications UI state and initiates a lot of firebase or network connections. Routing is not implemented correctly but not critical for current product depth.

### uiSchema

The uiSchema is a JSON file that describes what content is available in the app. RO.B.E courses are mostly hard coded while content is created off the app and inserted for customization later. It's the "lab" or what future courses can look like.

### InfiniteKnowledgeEngine9000 (IKE9000)

IKE9000 is where educators or creators go to create courses. Currently it uses the uiSchema pattern in order to create courses modeled the way I'm creating them. Eventually it will increase in its ability to collaborate, edit, upgrade and cutomize content with personal touch.

### ms. roxana + PromptCombiner9000

Ms. Roxana is the AI brand. She is the robot entity that is creating a lot of education.

### The Impact Wallet

The impact wallet is where users see collective and individual effort or "work" recorded. This robot work system creates a network that produces "impact" which is the point or currency system that defines scholarships created. The Impact wallet contains financial literacy guidance and profile information and will eventually be the the location where decentralized protocols are implemented.

# 4. How to help

Keep it simple and don't overcomplicate the process

- Review the issues list, ask questions as needed
- Open up a pull request, document what, why and how.

## Conclusion

Take some time to think about all of it. There is plenty to work on. Next update will go into greater detail after refactoring software.

---

# Become a Senior Software Engineer

Table of Contents:

1. Browser API: Introduction to the Broadcast Channel API for Software Engineers
2. Software Patterns
3. Observer vs. Pub/Sub
4. React implementation
5. Authentication Implementation With Broadcast Channel

🤖 = ai generated
👋 = real person

---

# 👋 Ask

Can you write documentation for a software engineer introducing the Browser API with a focus on the Broadcast Channel API and why it can be important to implement?

# 🤖 Browser API: Introduction to the Broadcast Channel API for Software Engineers

## Overview

The Browser API is a collection of Application Programming Interfaces (APIs) that provides developers with the tools and functionalities needed to build web applications. One such API is the Broadcast Channel API, which enables real-time communication between different browsing contexts, such as tabs, iframes, and worker contexts, within the same browser. This document introduces the Broadcast Channel API and highlights its importance in web application development.

## What is the Broadcast Channel API?

The Broadcast Channel API allows web applications to send and receive messages between browsing contexts, such as tabs, iframes, and worker contexts, within the same origin (i.e., same protocol, domain, and port). It provides an efficient and straightforward way to establish communication between these contexts without the need for a server.

### Key Features

1. **Simple and easy to use:** The Broadcast Channel API is designed to be easy to understand and implement, making it a great option for developers looking for a quick and efficient way to enable communication between browsing contexts.
2. **Real-time communication**: Messages are sent and received instantly, enabling real-time updates and synchronization between different parts of a web application.
3. **Same-origin policy:** The API adheres to the same-origin policy, meaning that communication is restricted to browsing contexts within the same origin, ensuring security and privacy.
4. **Automatic cleanup:** When a browsing context is closed, its associated broadcast channels are automatically disconnected, reducing memory usage and preventing potential memory leaks.

## Why is the Broadcast Channel API Important?

The Broadcast Channel API offers several benefits for web applications, some of which include:

1. **State synchronization:**It enables web applications to maintain a consistent state across multiple browsing contexts, such as synchronizing user preferences or application settings. 2.**Resource sharing:** By allowing communication between worker contexts and the main thread, the Broadcast Channel API enables more efficient resource sharing and offloading of computationally intensive tasks. 3.**Real-time updates:** The API facilitates real-time updates, such as live notifications, chat systems, or collaborative editing, without the need for a server to handle the communication.
2. **Reduced server load:** By enabling direct communication between browsing contexts, the Broadcast Channel API can help reduce server load and latency, resulting in faster and more responsive web applications.

## How to Implement the Broadcast Channel API

To use the Broadcast Channel API, you need to create a new BroadcastChannel object and specify a channel name. This channel name is used to identify and connect all browsing contexts that wish to communicate.

Here's a simple example to illustrate how the Broadcast Channel API works:

### 1. Create a new BroadcastChannel

```javascript
const channel = new BroadcastChannel("myChannel");
```

### 2. Send a message

```javascript
channel.postMessage("Hello, Broadcast Channel API!");
```

### 3. Listen for messages

```javascript
channel.onmessage = (event) => {
  console.log("Received message:", event.data);
};
```

### 4. Close the channel

```javascript
channel.close();
```

## Conclusion

The Broadcast Channel API is a powerful tool for web developers looking to establish real-time communication between different browsing contexts within the same origin. By offering an easy-to-use interface and adhering to the same-origin policy, the API provides a secure and efficient way to enable state synchronization, resource sharing, and real-time updates in web applications.

# 👋 Ask

Can you explain what software design patterns are used in the Broadcast Channel API?

# 🤖 Software Patterns

The Broadcast Channel API itself is not based on a specific software design pattern. However, it is designed to facilitate communication between different browsing contexts, and its usage can be related to some common design patterns. Below, we discuss two design patterns that can be relevant when working with the Broadcast Channel API:

1 **Observer Pattern:** The Observer Pattern is a behavioral design pattern that defines a one-to-many dependency between objects, so that when one object (the subject) changes its state, all its dependent objects (observers) are notified and updated automatically. In the context of the Broadcast Channel API, you can think of the channel as the subject, and the different browsing contexts as observers. When a message is posted to the channel, all connected contexts receive the message, allowing them to react and update their state accordingly.
Here's an example of how the Observer Pattern can be applied using the Broadcast Channel API:

```javascript
// Create a channel (subject)
const channel = new BroadcastChannel("myChannel");

// Add an observer
channel.onmessage = (event) => {
  console.log("Observer 1:", event.data);
};

// Post a message to the channel, notifying all observers
channel.postMessage("Hello, Broadcast Channel API!");
```

2. **Publish-Subscribe Pattern:** The Publish-Subscribe Pattern (Pub/Sub) is a messaging pattern where senders (publishers) send messages without specifying who the receivers (subscribers) are. Subscribers express interest in specific messages or message types and are notified when matching messages are published. In the context of the Broadcast Channel API, the browsing contexts can act as both publishers and subscribers, as they can send messages to the channel and receive messages from the channel without knowing the specific sender or receiver.
   Here's an example of how the Publish-Subscribe Pattern can be applied using the Broadcast Channel API:

```javascript
// Create a channel
const channel = new BroadcastChannel("myChannel");

// Subscribe to messages
channel.onmessage = (event) => {
  console.log("Subscriber received:", event.data);
};

// Publish a message
channel.postMessage("Hello, Broadcast Channel API!");
```

In summary, while the Broadcast Channel API is not based on a specific software design pattern, its usage can be related to the Observer Pattern and the Publish-Subscribe Pattern, both of which facilitate communication between different components in a loosely coupled manner.

# 👋 Ask

What's the difference between the Observer and the Pub/Sub pattern?

# 🤖 Observer vs. Pub/Sub

The Observer Pattern and the Publish-Subscribe (Pub/Sub) Pattern are both behavioral design patterns that deal with communication between objects in a loosely coupled manner. They both facilitate message-based communication and help in maintaining the separation of concerns in software systems. However, there are some key differences between the two patterns:

**1. Coupling:**

- In the Observer Pattern, observers are directly coupled to the subject, meaning that they maintain a reference to the subject and register themselves to receive updates. This coupling can lead to dependencies between the subject and its observers, making it harder to modify, extend, or reuse the subject without affecting the observers.
- In the Pub/Sub Pattern, publishers and subscribers are completely decoupled from each other, as they communicate through a shared message broker or an event bus. Publishers send messages without knowing who the subscribers are, and subscribers receive messages without knowing who the publishers are. This decoupling makes it easier to modify, extend, or reuse the components independently.

**2. Message broadcasting:**

- In the Observer Pattern, the subject broadcasts updates to all its registered observers, and there is usually no filtering of messages based on the type or content. Each observer is responsible for handling or ignoring the received updates based on their own logic.
- In the Pub/Sub Pattern, messages can be filtered by the message broker or the event bus based on topics, channels, or specific criteria. Subscribers can express interest in specific messages or message types, and they only receive the messages that match their subscriptions, reducing the need for message handling or filtering logic in the subscribers themselves.

**3. Message delivery:**

- In the Observer Pattern, message delivery is typically synchronous, as the subject directly calls the update method on its observers. This means that the subject might be blocked until all observers finish processing the updates, potentially affecting performance.
- In the Pub/Sub Pattern, message delivery can be either synchronous or asynchronous, depending on the implementation of the message broker or event bus. Asynchronous delivery allows publishers to continue their work without waiting for subscribers to process the messages, leading to better performance and responsiveness.

In summary, the main difference between the Observer Pattern and the Pub/Sub Pattern lies in the level of coupling between the communicating components and the way messages are broadcasted and delivered. The Observer Pattern has a tighter coupling with direct references between the subject and observers, whereas the Pub/Sub Pattern promotes complete decoupling through the use of a message broker or event bus.

# 👋 Ask

Can you show me an example of the difference in React?

# 🤖 React implementation

Certainly! In this example, we will demonstrate the differences between the Observer Pattern and the Pub/Sub Pattern using React, a popular JavaScript library for building user interfaces.

For simplicity, we will use the eventemitter3 package as a message broker for the Pub/Sub Pattern. You can install it using npm:

```
npm install eventemitter3
```

## Observer Pattern in React

Consider a simple React application where a parent component updates its state, and the child components are required to be notified of the state changes.

```javascript
import React, { useState, useEffect } from "react";

const Parent = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <button onClick={incrementCounter}>Increment</button>
      <Child counter={counter} />
    </div>
  );
};

const Child = ({ counter }) => {
  useEffect(() => {
    console.log("Counter updated:", counter);
  }, [counter]);

  return <p>Counter: {counter}</p>;
};
```

In this example, the Parent component maintains a counter state and passes it down as a prop to the Child component. The Child component uses the useEffect hook to observe changes in the counter prop and logs the updated value.

## Pub/Sub Pattern in React

Now let's implement the same example using the Pub/Sub Pattern with the eventemitter3 package:

```javascript
import React, { useState, useEffect } from "react";
import EventEmitter from "eventemitter3";

const eventEmitter = new EventEmitter();

const Parent = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
    eventEmitter.emit("COUNTER_UPDATED", counter + 1);
  };

  return (
    <div>
      <button onClick={incrementCounter}>Increment</button>
      <Child />
    </div>
  );
};

const Child = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const handleCounterUpdated = (newCounter) => {
      setCounter(newCounter);
      console.log("Counter updated:", newCounter);
    };

    eventEmitter.on("COUNTER_UPDATED", handleCounterUpdated);

    return () => {
      eventEmitter.off("COUNTER_UPDATED", handleCounterUpdated);
    };
  }, []);

  return <p>Counter: {counter}</p>;
};
```

In this example, we use the eventEmitter as the message broker for our Pub/Sub Pattern. The Parent component emits an event when the counter is updated, and the Child component subscribes to the COUNTER_UPDATED event using the useEffect hook. When the event is received, the Child component updates its local state and logs the updated counter value.

The main difference between these two examples is the way the components communicate. In the Observer Pattern example, the communication happens through prop drilling, with the Child component observing the changes in the counter prop. In the Pub/Sub Pattern example, the components are completely decoupled, and they communicate through the eventEmitter message broker, without the need for prop drilling.

# 👋 Ask

I have an application where I store a timestamp called `expires_at` in localStorage. I want to create a React hook that uses the Broadcast Channel API in order to detect when the session expires so that I can log out the user from all tabs and windows by clearing localStorage and redirecting them back to v3/auth/signin. Can you show me an example of that in React?

# 🤖 Authentication Implementation With Broadcast Channel

Sure! In this example, we'll create a custom React hook called useSessionExpiration that uses the Broadcast Channel API to detect session expiration across all tabs and windows. When the session expires, the hook will clear the localStorage and redirect the user to the /v3/auth/signin page.

First, you'll need to install the react-router-dom package to handle the redirection:

```
npm install react-router-dom
```

Now, let's create the custom hook and the example components:

```javascript
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const useSessionExpiration = (expiresAt) => {
  const history = useHistory();

  useEffect(() => {
    const handleSessionExpiration = () => {
      localStorage.clear();
      history.push("/v3/auth/signin");
    };

    const checkExpiration = () => {
      const currentTime = new Date().getTime();
      if (currentTime >= expiresAt) {
        handleSessionExpiration();
      }
    };

    const channel = new BroadcastChannel("sessionExpirationChannel");
    channel.onmessage = (event) => {
      if (event.data === "SESSION_EXPIRED") {
        handleSessionExpiration();
      }
    };

    const intervalId = setInterval(checkExpiration, 1000);

    return () => {
      channel.close();
      clearInterval(intervalId);
    };
  }, [expiresAt, history]);
};

const App = () => {
  const expiresAt = localStorage.getItem("expires_at");
  useSessionExpiration(Number(expiresAt));

  return (
    <div>
      <h1>Dashboard</h1>
      {/* Your application components go here */}
    </div>
  );
};
```

In this example, the useSessionExpiration hook takes the expires_at value from the localStorage and sets up an interval to check for session expiration every second. If the current time is equal to or greater than the expires_at timestamp, the hook sends a SESSION_EXPIRED message through the sessionExpirationChannel and calls the handleSessionExpiration function to clear the localStorage and redirect the user to the /v3/auth/signin page.

The hook also listens for the SESSION_EXPIRED message on the sessionExpirationChannel. When it receives this message, it calls the handleSessionExpiration function, ensuring that all tabs and windows with the application open will log out the user and redirect them to the /v3/auth/signin page when the session expires.

Finally, the App component retrieves the expires_at value from the localStorage and passes it to the useSessionExpiration hook, which takes care of the session expiration handling.

Keep in mind that using localStorage to store sensitive information such as authentication tokens or session data can expose your application to security risks, such as Cross-Site Scripting (XSS) attacks. Consider using secure alternatives like httpOnly cookies for storing sensitive session data.

<!--
**RobotsBuildingEducation/RobotsBuildingEducation** is a ✨ _special_ ✨ repository because its `README.md` (this file) appears on your GitHub profile.

Here are some ideas to get you started:

- 🔭 I’m currently working on ...
- 🌱 I’m currently learning ...
- 👯 I’m looking to collaborate on ...
- 🤔 I’m looking for help with ...
- 💬 Ask me about ...
- 📫 How to reach me: ...
- 😄 Pronouns: ...
- ⚡ Fun fact: ...
-->
