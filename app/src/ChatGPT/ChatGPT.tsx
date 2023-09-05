import { updateDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { isEmpty } from "lodash";

import { PromptMessage } from "./PromptMessage/PromptMessage";
import { Prompts } from "./Prompts/Prompts";
import { Roxana } from "./Roxana/Roxana";
import { analytics } from "../database/firebaseResources";
import { logEvent } from "firebase/analytics";
import { PromptCombiner9000 } from "./Roxana/PromptCombiner9000/PromptCombiner9000";
import {
  computeResponseList,
  computeTotalImpactFromPrompt,
} from "./ChatGPT.compute";
import { Intro } from "./Roxana/PromptCombiner9000/Intro";
import { BossModeGPT } from "./BossModeGPT/BossModeGPT";

export const ChatGPT = ({
  globalScholarshipCounter,
  currentPath = "demo",
  patreonObject,
  userDocumentReference,
  databaseUserDocument,
  setDatabaseUserDocument,
  globalDocumentReference,
  globalImpactCounter,
  setGlobalImpactCounter,
  isDemo = false,
  usersModulesFromDB,

  displayName = "@DemoRobots",
  moduleName = "demo",
  computePercentage,
  isGeneratedDemo = false,
  usersModulesCollectionReference,

  userAuthObject,
}) => {
  const [isRaidActive, setIsRaidActive] = useState(false);
  const [bossModeGptHelperResponse, setBossModeGptHelperResponse] =
    useState("");
  const [bossModeGptHelperRequest, setBossModeGptHelperRequest] = useState("");
  const [shouldRenderIntro, setShouldRenderIntro] = useState(true);
  const [promptMessage, setPromptMessage] = useState("");
  const [isSpanishActive, setIsSpanishActive] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");
  const [chatGptResponse, setChatGptResponse] = useState("");
  const [chatGptResponseList, setChatGptResponseList] = useState([]);
  const [promptSelection, setPromptSelection] = useState("");
  const [loadingStates, setLoadingStates] = useState({
    summarize: false,
    guide: false,
    anything: false,
    define: false,
    demonstrate: false,
    ask: false,
    quiz: false,
    inspire: false,
    patreon: false,
    shop: false,
    practice: false,
    journey: false,
  });

  /**
   *
   * lets test patreonObject first
   * [
   *  { key: '', prompt: Element, response: Element, slot: '' } || patreonObject?
   * ]
   */
  const [conversation, setConversation] = useState([]);

  // patreon, shop,
  useEffect(() => {
    // this is legacy code when all prompts
    setLoadingStates({
      summarize: false,
      guide: false,
      anything: false,
      define: false,
      ask: false,
      quiz: false,
      demonstrate: false,
      patreon: false,
      inspire: false,
      shop: false,
      practice: false,
      journey: false,
    });
    setChatGptResponse("");
    setPromptMessage("");
    setChatGptResponseList([]);
  }, [patreonObject]);

  const handlePromptSelection = (promptType) => {
    logEvent(analytics, "select_item", {
      item_list_id: "RO.B.E_prompt",
      item_list_name: "RO.B.E_prompt",
      items: [
        {
          item_id: promptType,
          item_name: promptType,
        },
      ],
    });
    logEvent(analytics, "select_item", {
      item_list_id: `RO.B.E_prompt|${promptType}`,
      item_list_name: `RO.B.E_prompt|${promptType}`,
      items: [
        {
          item_id: `RO.B.E_prompt|${promptType}`,
          item_name: `RO.B.E_prompt|${promptType}`,
        },
      ],
    });

    logEvent(analytics, "select_item", {
      item_list_id: `RO.B.E_prompt|${promptType}|${moduleName}|${currentPath}`,
      item_list_name: `RO.B.E_prompt|${promptType}|${moduleName}|${currentPath}`,
      items: [
        {
          item_id: `RO.B.E_prompt|${promptType}|${moduleName}|${currentPath}`,
          item_name: `RO.B.E_prompt|${promptType}|${moduleName}|${currentPath}`,
        },
      ],
    });

    let loader = Object.keys(loadingStates);
    let result = loadingStates;

    // discover/study
    let discover = ["inspire", "demonstrate", "patreon"]; // hits patreon
    let study = ["define", "summarize", "ask", "guide", "quiz"]; // hits guide
    let shop = ["shop"];
    setPromptSelection(promptType);
    setShouldRenderIntro(false);

    // if(promptType === 'patreon'){
    //   setLoadingStates({
    //     summarize: false,
    //     guide: false,
    //     anything: false,
    //     define: false,
    //     ask: false,
    //     quiz: false,
    //     demonstrate: true,
    //     patreon: true,
    //     inspire: true,
    //     shop: false,
    //   });

    // }else if(promptType === 'guide'){
    //   setLoadingStates({
    //     summarize: true,
    //     guide: true,
    //     anything: false,
    //     define: true,
    //     ask: false,
    //     quiz: true,
    //     demonstrate: false,
    //     patreon: false,
    //     inspire: false,
    //     shop: false,
    //   });
    // }else if(promptType==='shop'){
    //   setLoadingStates({
    //     summarize: false,
    //     guide: false,
    //     anything: false,
    //     define: false,
    //     ask: false,
    //     quiz: false,
    //     demonstrate: false,
    //     patreon: false,
    //     inspire: false,
    //     shop: true,
    //   });
    // }

    // loader.forEach((prompt) => {
    //   result[prompt] = false;
    // });
    // result[promptType] = true;
    // setLoadingStates(result);
    setLoadingMessage("...");
    // setLoadingMessage(`prompt ${promptType} activated`);
  };

  let handleBossMode = (promptType) => {
    // only one prompt for now, can just set it to true
    setIsRaidActive(true);
    handlePromptSelection(promptType);
  };

  let handleBossModeGptRequest = async (event) => {
    // this API has a $5 limit. Please configure your own setup to test in a seperate location.
    const response = await fetch(
      "https://us-central1-learn-robotsbuildingeducation.cloudfunctions.net/app/prompt",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: bossModeGptHelperRequest,
        }),
      }
    ).catch((error) => {});

    let data = await response.json();
    let parsedData = data.bot.trim();

    setBossModeGptHelperResponse(parsedData);

    if (
      (!isEmpty(databaseUserDocument) || !isEmpty(userDocumentReference)) &&
      !isDemo
    ) {
      //doesnt return obj, so update firebase and react seperately
      await updateDoc(userDocumentReference, {
        impact: databaseUserDocument?.impact + 250,
      });

      // update global work
      await updateDoc(globalDocumentReference, {
        total: globalImpactCounter + 250,
      });

      //copy it to react
      let docCopy = databaseUserDocument;
      docCopy.impact = databaseUserDocument?.impact + 250;
      setDatabaseUserDocument(docCopy);

      let globalCopy = globalImpactCounter;
      globalCopy = globalImpactCounter + 250;
      setGlobalImpactCounter(globalCopy);
    } else {
      //copy it to react

      let docCopy = databaseUserDocument;
      docCopy.impact = databaseUserDocument?.impact + 250;
      setDatabaseUserDocument(docCopy);

      let globalCopy = globalImpactCounter;
      globalCopy = globalImpactCounter + 250;
      setGlobalImpactCounter(globalCopy);
    }

    logEvent(analytics, "spend_virtual_currency", {
      value: 250,
      virtual_currency_name: "Impact",
      item_name: `${currentPath}|${moduleName}|${"Boss Mode Task"}`,
    });
  };

  const handleSubmit = async (
    event,
    prompt = null,
    promptType = null,
    isBossMode = false
  ) => {
    event.preventDefault();

    if (isBossMode) {
      // do boss mode thing
      handleBossMode(promptType);
      const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
      await delay(1500);
    } else {
      // change discover/study
      setPromptMessage(prompt?.request);

      if (promptType === "languageToggle") {
        setIsSpanishActive(!isSpanishActive);
      } else {
        handlePromptSelection(promptType);
      }

      // this API has a $5 limit. Please configure your own setup to test in a seperate location.
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

      // x
      const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
      await delay(1500);

      // x

      // change to a function that gets multiple responsesor components discover/study
      // setChatGptResponseList([]);

      let result = prompt;
      if (promptType === "patreon") {
        result = {
          response: computeResponseList(patreonObject, promptType), //compute
          impact: computeTotalImpactFromPrompt(patreonObject, promptType), // compute
        };
      } else if (promptType === "guide") {
        result = {
          response: computeResponseList(patreonObject, promptType), //compute
          impact: computeTotalImpactFromPrompt(patreonObject, promptType), // compute
        };
      } else if (promptType === "shop") {
        result = {
          response: computeResponseList(patreonObject, promptType), //compute
          impact: computeTotalImpactFromPrompt(patreonObject, promptType), // compute
        };
      } else if (promptType === "practice") {
        result = {
          response: computeResponseList(patreonObject, promptType), //compute
          impact: computeTotalImpactFromPrompt(patreonObject, promptType), // compute
        };
      }

      setChatGptResponse(prompt?.response);
      setChatGptResponseList(result?.response);

      // setChatGptResponse(parsedData);

      // update proof of work

      if (
        (!isEmpty(databaseUserDocument) || !isEmpty(userDocumentReference)) &&
        !isDemo
      ) {
        //doesnt return obj, so update firebase and react seperately
        await updateDoc(userDocumentReference, {
          impact: databaseUserDocument?.impact + result.impact,
        });

        // update global work
        await updateDoc(globalDocumentReference, {
          total: globalImpactCounter + result.impact,
        });

        //copy it to react
        let docCopy = databaseUserDocument;
        docCopy.impact = databaseUserDocument?.impact + result.impact;
        setDatabaseUserDocument(docCopy);

        let globalCopy = globalImpactCounter;
        globalCopy = globalImpactCounter + result.impact;
        setGlobalImpactCounter(globalCopy);
      } else {
        //copy it to react

        let docCopy = databaseUserDocument;
        docCopy.impact = databaseUserDocument?.impact + result.impact;
        setDatabaseUserDocument(docCopy);

        let globalCopy = globalImpactCounter;
        globalCopy = globalImpactCounter + result.impact;
        setGlobalImpactCounter(globalCopy);
      }

      logEvent(analytics, "spend_virtual_currency", {
        value: result.impact,
        virtual_currency_name: "Impact",
        item_name: `${currentPath}|${moduleName}|${promptType}`,
      });

      // setLoadingMessage("");
    }

    setLoadingMessage("");
  };

  return (
    <div
      onSubmit={handleSubmit}
      style={{
        // width: "fit-content",

        transition: "0.3s all ease-in-out",
        color: "white",
      }}
    >
      {currentPath !== "Boss Mode" ? (
        <div>
          <PromptMessage
            promptMessage={promptMessage}
            patreonObject={patreonObject}
          />
          <br />
          {/* 
      <Roxana
        loadingMessage={loadingMessage}
        loadingStates={loadingStates} 
        chatGptResponse={chatGptResponse}
        patreonObject={patreonObject}
        isDemo={isDemo}
        moduleName={moduleName}
      /> */}
          <Intro
            shouldRenderIntro={shouldRenderIntro}
            isDemo={false}
            moduleName={moduleName}
            patreonObject={patreonObject}
            loadingMessage={loadingMessage}
            chatGptResponse={chatGptResponse}
            promptSelection={promptSelection}
          />
          {chatGptResponseList?.map((response) => (
            <PromptCombiner9000
              loadingMessage={loadingMessage}
              // loadingStates={loadingStates}
              chatGptResponse={response}
              patreonObject={patreonObject}
              isDemo={false}
              moduleName={moduleName}
              promptSelection={promptSelection}
              isGeneratedDemo={isGeneratedDemo}
            />
          ))}
        </div>
      ) : moduleName === "Boss Mode" ? (
        <>
          <h4>
            {moduleName === "Boss Mode"
              ? `Level ${
                  databaseUserDocument?.level ? databaseUserDocument.level : 0
                }`
              : ""}
          </h4>

          <BossModeGPT
            promptSelection={promptSelection}
            patreonObject={patreonObject}
            loadingMessage={loadingMessage}
            isRaidActive={isRaidActive}
            bossModeGptHelperResponse={bossModeGptHelperResponse}
            handleBossModeGptRequest={handleBossModeGptRequest}
            setBossModeGptHelperRequest={setBossModeGptHelperRequest}
            userDocumentReference={userDocumentReference}
            displayName={displayName}
            databaseUserDocument={databaseUserDocument}
            isDemo={isDemo}
            setDatabaseUserDocument={setDatabaseUserDocument}
            setGlobalImpactCounter={setGlobalImpactCounter}
            globalImpactCounter={globalImpactCounter}
            globalDocumentReference={globalDocumentReference}
          />
        </>
      ) : null}

      <br />
      {/* prompts */}
      <Prompts
        //roxana
        loadingMessage={loadingMessage}
        patreonObject={patreonObject}
        handleSubmit={handleSubmit}
        userDocumentReference={userDocumentReference}
        displayName={displayName}
        databaseUserDocument={databaseUserDocument}
        computePercentage={computePercentage}
        globalImpactCounter={globalImpactCounter}
        usersModulesCollectionReference={usersModulesCollectionReference}
        usersModulesFromDB={usersModulesFromDB}
        userAuthObject={userAuthObject}
        currentPath={currentPath}
        isRaidActive={isRaidActive}
        globalScholarshipCounter={globalScholarshipCounter}
        isDemo={isDemo}

        //pow
      />
      <br />
    </div>
  );
};
