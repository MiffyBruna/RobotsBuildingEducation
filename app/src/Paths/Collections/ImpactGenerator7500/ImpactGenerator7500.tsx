import { useState } from "react";
import { Button, Dropdown, Form, InputGroup, Modal, ProgressBar } from "react-bootstrap";
import ReactJson from "react-json-view";
import {isEmpty} from 'lodash';
import { RoxanaLoadingAnimation } from "../../../common/uiSchema";
import { ChatGPT } from "../../../ChatGPT/ChatGPT";
import { auth } from "../../../database/firebaseResources";


export const ImpactGenerator7500 = ({
  setIsImpactGenerator7500open, 
  isImpactGenerator7500open,
  currentPath,
  patreonObject,
  userDocumentReference,
  databaseUserDocument,
  setDatabaseUserDocument,
  globalDocumentReference,
  globalImpactCounter,
  setGlobalImpactCounter,
  displayName,
  computePercentage,
  isDemo,
  moduleName,

}) => {
  let [currentRoleModel, setCurrentRoleModel] = useState('');
  let [currentPrompt, setCurrentPrompt] = useState('');
  let [currentTitle, setCurrentTitle]=useState('');
  let [gptResponse, setGptResponse]=useState({})
  let [isResponseGenerating, setIsResponseGenerating] = useState(false);
  let [didGptFailTask, setDidGptFailTask] = useState(false);
  let [demo, setDemo] = useState({
    "Creating Purpose": {
      documentID: ``,
      filler: ``,
      new: false,
      highValue: false,
      underConstruction: true,
      completed: false,
      rare: true,
      needsImprovement: false,
      tooltip: ``,
      sourceType: `markdown`, // may not need
      button: ``, // may not need - `name`
      header: ``,
      fileSource: '', // may not need

      prompts: {
        patreon: {
          completed: false,
          impact: 1000,
          action: `generate`,
          icon: `✍️`, //`✍️`
          request: `ms. roxana, can you please generate an essay that introduces me to  ?`,
          response: '',
          spanish: ``,
          tooltip: ``,
        },
        inspire: {
          completed: false,
          impact: 100,
          action: `inspire`,
          icon: `⚡`,
          request: `ms. roxana, can you please share an inspiring story about expression and its impacts on influence in social media?`,
          response:'',
          spanish: ``,
          tooltip: ``,
        },
        summarize: {
          completed: false,
          impact: 100,
          action: `summarize`,
          icon: `📚`,
          request: `ms. roxana, can you please summarize the basics of expression and its impacts on influence in social media?`,
          response: '',
          spanish: ``,
          tooltip: ``,
        },
        ask: {
          completed: false,
          impact: 100,
          action: `ask`,
          icon: `🔮`,
          request: `ms. roxana, can you please show me three frequently asked beginner questions about expression and its impacts on influence in social media with one sentence answers?`,
          response: '',
          spanish: ``,
          tooltip: ``,
        },
        guide: {
          completed: false,
          impact: 100,
          action: `guide`,
          icon: `🤝`,
          request: `ms. roxana, can you please create a study guide for expression and its impacts on influence in social media?`,
          response: '',
          spanish: ``,
          tooltip: ``,
        },
        demonstrate: {
          completed: false,
          impact: 100,
          action: `demonstrate`,
          icon: `🧿`,
          request: `ms. roxana, can you please show me an example of creating meaning out of life by creating journies with purpose?`,
          response: '',
          spanish: ``,
          tooltip: ``,
        },
        define: {
          completed: false,
          impact: 100,
          action: `define`, // may not need
          icon: `👾`, // may not need
          request: `ms. roxana, can you please define expression and its impacts on influence in social media in exactly one sentence?`,
          response: '',
          spanish: ``,
          tooltip: ``,
        },

        quiz: {
          completed: false,
          impact: 100,
          action: `quiz`,
          icon: `🧪`,
          request: `ms. roxana, can you please write a 3 question quiz for beginners that's challenging about expression and its impacts on influence in social media without any answers?`,
          response: '',
          spanish: ``,
          tooltip: ``,
        },
        shop: {
          completed: false,
          impact: 100,
          action: `shop`,
          icon: `🛍️`,
          request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
          response: '',
          spanish: ``,
          tooltip: ``,
        }
      }
    }
  
  })


  let selectRoleModel = (event) => {


    let isValidContent = event.target.id === "Creator" || event.target.id === "Engineer" || event.target.id === "Entrepeneur" || event.target.id === "Professor" || event.target.id === "Elementary School Teacher";

    if(isValidContent){
      setCurrentRoleModel(event.target.id);
    }


  } 

  let handleSubjectTitleChange = (event) => {
    console.log('event.', event.target.value);
    setCurrentTitle(event.target.value);
  }


  const handleSubjectPromptChange = (event) => {
    console.log('event.', event.target.value);
    setCurrentPrompt(event.target.value);
  
  }

  let sanitizeJSON = (unsanitized) => {	
    return unsanitized.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/\f/g, "\\f").replace(/"/g,"\\\"").replace(/'/g,"\\\'").replace(/\&/g, "\\&"); 
}
  const promptGenerate = prompt => {
    let result = {
        patreon: {
          request: `ms. roxana, can you please generate a short essay on ${currentPrompt} in up to a maximum of 10 sentences?`,
          response: "",
        },
        inspire: {
          request: `ms. roxana, can you please share a brief inspiring story about ${currentPrompt}?`,
          response: "",
        },
        summarize: {
          request: `ms. roxana, can you please quickly summarize the basics of ${currentPrompt} in a 3 sentence paragraph?`,
          response: "",
        },
        ask: {
          request: `ms. roxana, can you please show me three frequently asked beginner questions about ${currentPrompt} with one sentence answers?`,
          response: "",
        },
        guide: {
          request: `ms. roxana, can you please create a 5 point study study guide for ${currentPrompt}?`,
          response: "",
        },
        demonstrate: {
          request: `ms. roxana, what's an example of ${currentPrompt}?`,
          response: "",
        },
        define: {
          request: `ms. roxana, can you please define ${currentPrompt} in exactly one sentence?`,
          response: "",
        },

        quiz: {
          request: `ms. roxana, can you please write a 3 question quiz for beginners that's challenging about ${currentPrompt}?`,
          response: "",
        }
    }

    return JSON.stringify(result);
  }
  const handleCourseGeneration = async () => {
    try{
    setIsResponseGenerating(true);
    setGptResponse({});
    setDidGptFailTask(false);
    // this API has a $5 limit. Please configure your own setup to test in a seperate location.
    const response = await fetch(
      "https://us-central1-learn-robotsbuildingeducation.cloudfunctions.net/app/prompt",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: `I'm going to send a JSON value that describes a set of questions being asked to an energetic ${currentRoleModel.toLocaleLowerCase()} that's an expert at teaching beginners. Can you answer every question found in the key defined as 'request' and fill out the 'response' key with your answer? The only constraint is the value you're defining the key "response" as must be a string and you must return an answer that is a valid JSON represented as a string that can successully parse with JSON.parse(answer).` + promptGenerate(currentPrompt)
        }),
      }
    ).catch((error) => {
      console.log("error", error);
      console.log("err", { error });
    });

    let json = await response.json();
    console.log("JSON", json);
    let data = JSON.parse(JSON.parse(JSON.stringify(json)).bot) 
    console.log("Data?", data);
    // let data ={
    // "patreon": {
    //     "request": "ms. roxana, can you please generate a short essay on expression and its impacts on influence in social media in up to a maximum of 10 sentences?",
    //     "response": "Expression on social media has a great impact on how people interact and influence one another. Through memes and images, people are able to share beliefs and ideas without having to be physically present. With the rise of user-generated content and micro-blogging, these expressions can be amplified in powerful ways that continue to shape our culture. Just like humans, social media platforms inherently have biases that affect the expressions that are seen, which can either enable or inhibit particular dialogues. Following a few simple steps can help ensure that social media users have the capacity to express themselves responsibly and effectively. Always consider the message you're trying to send and your potential audience before publishing anything. Don't be afraid to be excited or passionate, but also be prepared to discuss your opinions and experiences. Try to keep a respectful tone, even when disagreeing and watch out for strong language that could be considered offensive. Always consider the depth of the conversation and not just the scope"
    // },
    // "inspire": {
    //     "request": "ms. roxana, can you please share a brief inspiring story about expression and its impacts on influence in social media?",
    //     "response": "An inspiring story about how expressing yourself on social media can have an impact is the story of John who, after moving to a new city, was able to make friends and connections through expressing himself on social media. Through creating and sharing content, he was able to find like minded individuals with whom he could discuss his passion and connect with online. This in turn enabled him to find a local meetup for his interests, allowing him to make real-world connections and friendships."
    // },
    // "summarize": {
    //     "request": "ms. roxana, can you please quickly summarize the basics of expression and its impacts on influence in social media in a 3 sentence paragraph?",
    //     "response": "Sharing our opinions, thoughts, and beliefs on social media can help us connect with others, form communities, and spread ideas quickly. However, we should always consider the message we are sending, the audience we are addressing, and the potential repercussions before publishing our thoughts. Taking a few moments to thoughtfully express ourselves can help us create meaningful conversations and influence our surroundings in positive ways."
    // },
    // "ask": {
    //     "request": "ms. roxana, can you please show me three frequently asked beginner questions about expression and its impacts on influence in social media with one sentence answers?",
    //     "response": "1. What are the advantages of expressing yourself on social media? Answer: Expressing yourself on social media can help create meaningful connections, start conversations, and spread ideas quickly.  2. How do I ensure that my expression is responsible? Answer: Always consider the message you’re trying to send and your potential audience before publishing anything. 3. Is it okay to disagree on social media? Answer: Yes, but it’s important to keep a respectful tone and watch out for language that could be considered offensive."
    // },
    // "guide": {
    //     "request": "ms. roxana, can you please create a 5 point study study guide for expression and its impacts on influence in social media?",
    //     "response": "1. Understand the potential impact of the expression: Think of the potential consequences of your posts before you hit share.  2. Consider the audience: Who will be impacted by your message and how?  3. Be aware of the platform’s biases: Research the way the platform works to ensure your expression reaches the right audience.  4. Be mindful: Be sure to communicate your opinion in a respectful and thoughtful manner.  5. Explore both perspectives: Variations in opinion can be a great way to understand different points of view. "
    // },
    // "demonstrate": {
    //     "request": "ms. roxana, what's an example of expression and its impacts on influence in social media?",
    //     "response": "An example of expression and its impacts on influence in social media can be seen in how the Black Lives Matter movement quickly spread across various platforms as millions of people shared posts and expressed their solidarity, leading to public protests, donations, and eventually, policy change and increased awareness of systemic racism."
    // },
    // "define": {
    //     "request": "ms. roxana, can you please define expression and its impacts on influence in social media in exactly one sentence?",
    //     "response": "Expression on social media is the act of sharing our thoughts, opinions and beliefs with others which can influence conversations, movements, and ultimately our surroundings."
    // },
    // "quiz": {
    //     "request": "ms. roxana, can you please write a 3 question quiz for beginners that's challenging about expression and its impacts on influence in social media?",
    //     "response": "1. What should you consider before expressing yourself on social media?a) How you feelb) The message you're trying to sendc) The potential audience it will reachd) All of the above  2. What are some consequences of expressing yourself on social media?a) Potential opportunities for learning and connectionb) Increased awareness of systemric racismc) Amplified biasd) All of the above  3. What should be taken into consideration when disagreeing on social media?a) Your personal feelingsb) The potential audience it will reachc) The tone of the conversationd) All of the above"
    // }
    // }

    // console.log("DATA", data);
    // console.log("Data", typeof data);
    // console.log(data);
    // console.log("trim", data.bot.trim());
    //     console.log("trim", typeof data.bot.trim());
    // data.bot = sanitizeJSON(data.bot.trim());

    // console.log("data beore", typeof data.bot)
    //  console.log(data.bot);
    // // var myEscapedJSONString = parsedData.replace(/\\n/g, "\\n")
    // //                                   .replace(/\\'/g, "\\'")
    // //                                   .replace(/\\"/g, '\\"')
    // //                                   .replace(/\\&/g, "\\&")
    // //                                   .replace(/\\r/g, "\\r")
    // //                                   .replace(/\\t/g, "\\t")
    // //                                   .replace(/\\b/g, "\\b")
    // //                                   .replace(/\\f/g, "\\f");

    //                                   // console.log("my escape", myEscapedJSONString);
    // let finalResult = JSON.parse(JSON.stringify(data.bot)).replace(/\\/g, "");




    console.log("print result", typeof data)
    let demoCopy = demo;

    if (Object.keys(demoCopy)[0] !== currentTitle) {
      Object.defineProperty(demoCopy, currentTitle,
          Object.getOwnPropertyDescriptor(demoCopy, Object.keys(demoCopy)[0]));
      delete demoCopy[Object.keys(demoCopy)[0]];
    }
    
    console.log("DEMO", demo);


    // for every key found in the first key set of demo
    Object.keys(demoCopy[Object.keys(demoCopy)[0]].prompts).forEach(prompt => {
      console.log("data", demo[Object.keys(demoCopy)[0]].prompts[prompt].request);
      demo[Object.keys(demoCopy)[0]].prompts[prompt].request = data[prompt]?.request || 'e';
      demo[Object.keys(demoCopy)[0]].prompts[prompt].response = data[prompt]?.response || 'e'; 
    })
    // the keys found ins 
    // Object.keys(Object.keys(demo)[0].prompts).forEach(prompt => {
    //   demo[Object.keys(demo)[0]].request = parsedData[prompt].request
    //   demo[prompt].response = demo[prompt].response
    // })

    console.log("final demo?", demoCopy);
    setDemo(demoCopy);
    setGptResponse(data)
    setIsResponseGenerating(false);
  }catch(error){
    //release try again button
    console.log("error", error);
    console.log("{error}", {error})
    setDidGptFailTask(true);
    setIsResponseGenerating(false);
    setGptResponse({});
  }
  }

  // let data = "\n\n{\"patreon\":{\"request\":\"Ms. Roxana, can you please generate a short essay on Human Computer Interaction, User Centered Design, and UI/UX in up to a maximum of 10 sentences?\", \"response\":\"Human Computer Interaction (HCI) is the study of how people interact with computers and technology. User Centered Design (UCD) is the process of designing products for users by understanding their expectations, needs, and motivations. UI/UX, or User Interface and User Experience, involves creating a pleasant and intuitive user experience by designing interfaces, interactions, and navigation around users’ goals. UCD and UI/UX are key facets of HCI: UCD involves researching user needs and building products around them, while UI/UX focuses on designing visually appealing and functional user interfaces.\"}, \n\n\"inspire\":{\"request\":\"Ms. Roxana, can you please share a brief inspiring story about Human Computer Interaction, User Centered Design and UI/UX?\", \"response\":\"When Amazon first created their online store, they wanted to make sure the user experience was intuitive and comfortable for any user. To do this, they used HCI principles to understand user need and design a user experience that customers felt comfortable navigating. This  approach transformed Amazon into one of the largest and most successful online stores in the world.\"}, \n\n\"summarize\":{\"request\":\"Ms. Roxana, can you please quickly summarize the basics of Human Computer Interaction, User Centered Design and UI/UX in a 3 sentence paragraph?\", \"response\":\"Human Computer Interaction is the process of understanding user needs and designing products to meet them. User Centered Design is a key part of HCI that involves researching user expectations, needs and motivations. UI/UX is the process of designing visually appealing and responsive user interfaces around users’ goals.\"}, \n\n\"ask\":{\"request\":\"Ms. Roxana, can you please show me three frequently asked beginner questions about Human Computer Interaction, User Centered Design and UI/UX with one sentence answers?\", \"response\":\"1. What is Human-Computer Interaction? Answer: Human-Computer Interaction is the process of understanding user needs and designing products to meet them. 2. What is User Centered Design? Answer: User Centered Design is a key part of Human Computer Interaction that involves researching user expectations, needs, and motivations. 3. What is UI/UX? Answer: UI/UX is the process of designing visually appealing and responsive user interfaces around users’ goals.\"}, \n\n\"guide\":{\"request\":\"Ms. Roxana, can you please create a 5 point study study guide for Human Computer Interaction, User Centered Design, and UI/UX?\", \"response\":\"1. Research the user demographic and their expectations, needs, and motivations. 2. Develop a strong understanding of Human Computer Interaction and User Centered Design principles. 3. Investigate and integrate the latest User Interface and User Experience trends. 4. Create visually appealing and intuitive user interfaces. 5. Test the product with users and make small, iterative improvements.\"}, \n\n\"demonstrate\":{\"request\":\"Ms. Roxana, what's an example of Human Computer Interaction, User Centered Design and UI/UX?\", \"response\":\"An example of Human Computer Interaction, User Centered Design, and UI/UX can be seen when using an e-commerce site like Amazon; customers can intuitively search for, compare, and purchase products without needing to consult support staff or manuals. This is an example of how HCI and UCD principles have informed the design of the site to provide a pleasant and easy user experience.\"}, \n\n\"define\":{\"request\":\"Ms. Roxana, can you please define Human Computer Interaction, User Centered Design and UI/UX in exactly one sentence?\", \"response\":\"Human Computer Interaction is the study of how people interact with computers and technology, using User Centered Design to create an intuitive and functional User Interface and User Experience.\"}, \n\n\"quiz\":{\"request\":\"Ms. Roxana, can you please write a 3 question quiz for beginners that's challenging about Human Computer Interaction, User Centered Design and UI/UX?\", \"response\":\"1. What is Human Computer Interaction (HCI)? 2. What is User Centered Design (UCD)? 3. What is the purpose of UI/UX design? \"}}"
  // let resultLOL = JSON.parse(data);

  // console.log("Results LOL", resultLOL);

  return (
      <Modal centered show={isImpactGenerator7500open} fullscreen>
        <Modal.Header
          closeButton
          style={{ backgroundColor: "black", color: "white" }}
        >
          <Modal.Title>InfiniteKnowledgeMachine7500</Modal.Title>
        </Modal.Header>
        <Modal.Body
          onHide={() => setIsImpactGenerator7500open(false)}
          style={{
            padding: 0,
            backgroundColor: "black",
            color: "white",
            display: 'flex',
            alignItems:'center',
            flexDirection:'column',
     
  // margin: 0 auto;
  // padding: 2rem;
  // text-align: center;
        
          }}
        >

          <br></br>
          <div style={{            
            maxWidth: '1280px',
            minWidth: '400px',
                        width: '100%',

            
            }}>
          <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <div style={{ width: 'fit-content'}}>
              <h3>Role Model</h3>
              <h6>choose a beginner friendly tone to fit your lesson</h6>
              <br/>

              <Form>
                {['Professor', 'Entrepeneur', 'Software Engineer', 'Social Media Manager','Elementary School Teacher'].map((type) => (
                  <div key={type} className="mb-4" style={{zoom: '1.5'}}>
                    <Form.Check
                      onClick={selectRoleModel}
                      type={'radio'}
                      label={`${type}`}
                      id={type}
                      name="roleModels"

                    />
                  </div>
                ))}
      </Form>
            </div>

            <div style={{ width: 'fit-content'}}> 
            <br />
            {/* next step */}
            {currentRoleModel ? (
              <div style={{width: '300px'}}>
                <h3>Create Impact</h3>
                    <h6>Define a title</h6>
                              <InputGroup size="lg">
                  {/* <InputGroup.Text id="inputGroup-sizing-lg">Impact</InputGroup.Text> */}
        
                  <Form.Control
                    // aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleSubjectTitleChange}
                  />
        
                </InputGroup><br/>

                      <h6>define a subject you want to generate material for</h6>
                <InputGroup size="lg">
                  {/* <InputGroup.Text id="inputGroup-sizing-lg">Impact</InputGroup.Text> */}
                  
                  <Form.Control
                    // aria-label="Large"
                    as="textarea"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleSubjectPromptChange}
                  />
        
                </InputGroup>
                <br/>
              </div>
            ) : null }

            {currentPrompt?.length > 0 && currentTitle?.length > 0 && !isResponseGenerating? <div><Button onClick={handleCourseGeneration}>{didGptFailTask ? 'try again' : 'generate'}</Button>
            <br/>
            <br/>
            You may need to try a few times. sorry 🐌🐢 
            </div> : null}
            </div>
            



          </div>



          <br/>
          <br/><br/>
          {
            isResponseGenerating ? 
            <div>
              <RoxanaLoadingAnimation /> 
              </div>: null  
          }


          {!isEmpty(gptResponse) && !isResponseGenerating ? (
            <div>
            <h3>{currentTitle}</h3>
            <ChatGPT                    
            
                currentPath={currentPath}
                patreonObject={demo[Object.keys(demo)[0]]}
                userDocumentReference={userDocumentReference}
                databaseUserDocument={databaseUserDocument}
                setDatabaseUserDocument={setDatabaseUserDocument}
                globalDocumentReference={globalDocumentReference}
                globalImpactCounter={globalImpactCounter}
                setGlobalImpactCounter={setGlobalImpactCounter}
                displayName={
                  auth?.currentUser?.displayName || "Demo Robots"
                }
                computePercentage={computePercentage}
                isDemo={isDemo}
                moduleName={moduleName}
                isGeneratedDemo={true}
            />
            <br/>
            

            <h3>Prompt Engine Optomization</h3>
            <ReactJson theme={"threezerotwofour"}
              enableClipboard
              src={gptResponse}
              quotesOnKeys={false}
            />
            </div>
          ):null
          }

            {isResponseGenerating ? (            
            
            <div>
              <br/><br/>
              <h3>Here's what I'm asking 😊</h3>
              <ReactJson theme={"threezerotwofour"}
                enableClipboard
                  src={{ask: `I'm going to send a JSON value that describes a set of questions being asked to an energetic ${currentRoleModel.toLocaleLowerCase()} that's an expert at teaching beginners. Can you answer every question found in the key defined as 'request' and fill out the 'response' key with your answer? The only constraint is the value you're defining the key "response" as must be a string and you must return an answer that is a valid JSON represented as a string that can successully parse with JSON.parse(answer). ${promptGenerate(currentPrompt)}}`}}
                quotesOnKeys={false}
              /><br/>

            </div>): null}  
 </div>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "black", color: "white" }}>
          <Button
            variant="secondary"
            onClick={() => setIsImpactGenerator7500open(false)}
          >
            ok bye!
          </Button>
        </Modal.Footer>
      </Modal>

  );
};
