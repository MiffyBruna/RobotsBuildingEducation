import { updateDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { isEmpty } from "lodash";

import { PromptMessage } from "./PromptMessage/PromptMessage";
import { Prompts } from "./Prompts/Prompts";

import { analytics } from "../database/firebaseResources";
import { logEvent } from "firebase/analytics";
import { PromptCombiner9000 } from "./PromptCombiner9000/PromptCombiner9000";
import {
  computeResponseList,
  computeTotalImpactFromPrompt,
} from "./ChatGPT.compute";
import { Intro } from "./PromptCombiner9000/Intro";

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

  displayName = "@DemoRobots",
  moduleName = "demo",
  computePercentage,
  isGeneratedDemo = false,

  userAuthObject,
}) => {
  const [shouldRenderIntro, setShouldRenderIntro] = useState(true);
  const [promptMessage, setPromptMessage] = useState("");
  const [isSpanishActive, setIsSpanishActive] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");
  const [isResponseActive, setIsResponseActive] = useState(false);
  const [chatGptResponseList, setChatGptResponseList] = useState([]);
  const [promptSelection, setPromptSelection] = useState("");

  // patreon, shop,
  useEffect(() => {
    // this is legacy code when all prompts

    setIsResponseActive(false);
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

    // discover/study

    setPromptSelection(promptType);
    setShouldRenderIntro(false);

    setLoadingMessage("...");
  };

  const handleSubmit = async (event, prompt = null, promptType = null) => {
    console.log("prompt...", prompt);
    event.preventDefault();

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
    await delay(250);

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

    setIsResponseActive(true);
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

    setLoadingMessage("");
  };

  return (
    <div
      onSubmit={handleSubmit}
      style={{
        transition: "0.3s all ease-in-out",
        color: "white",
      }}
    >
      <div>
        <PromptMessage
          promptMessage={promptMessage}
          patreonObject={patreonObject}
        />
        <br />

        <Intro
          shouldRenderIntro={shouldRenderIntro}
          isDemo={false}
          moduleName={moduleName}
          patreonObject={patreonObject}
          loadingMessage={loadingMessage}
          isResponseActive={isResponseActive}
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
            isGeneratedDemo={isGeneratedDemo}
          />
        ))}
      </div>

      <br />
      {/* prompts */}
      <Prompts
        //roxana
        loadingMessage={loadingMessage}
        patreonObject={patreonObject}
        handleSubmit={handleSubmit}
        userDocumentReference={userDocumentReference}

        //pow
      />
      <br />
    </div>
  );
};
