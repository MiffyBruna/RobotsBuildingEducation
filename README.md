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
