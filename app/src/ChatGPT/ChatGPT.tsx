import React, { useState, useEffect, useRef } from "react";
import { updateDoc } from "firebase/firestore";
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
import { Intro } from "./PromptCombiner9000/Content/Intro";
import {
  FadeInComponent,
  PanLeftComponent,
  PanRightComponent,
} from "../styles/lazyStyles";

const logAnalyticsEvent = (item_list_id, item_id, item_name) => {
  logEvent(analytics, "select_item", {
    item_list_id,
    item_list_name: item_list_id,
    items: [
      {
        item_id,
        item_name,
      },
    ],
  });
};

const ChatGPT = ({
  currentPath,
  patreonObject,
  userDocumentReference,
  databaseUserDocument,
  setDatabaseUserDocument,
  globalDocumentReference,
  globalImpactCounter,
  setGlobalImpactCounter,
  isDemo = false,
  moduleName,
  handleScheduler,
  handleZap,
  userStateReference,
  globalStateReference,
  zap,
}: Record<string, any>) => {
  const [shouldRenderIntro, setShouldRenderIntro] = useState(true);
  const [promptMessage, setPromptMessage] = useState("");
  const [loadingMessage, setLoadingMessage] = useState("");
  const [isResponseActive, setIsResponseActive] = useState(false);
  const [chatGptResponseList, setChatGptResponseList] = useState([]);
  const [promptSelection, setPromptSelection] = useState("");
  const [parentVisibility, setParentVisibility] = useState(true);

  useEffect(() => {
    setIsResponseActive(false);
    setPromptMessage("");
    setChatGptResponseList([]);
  }, [patreonObject]);

  const topRef = useRef(null);

  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [loadingMessage]);

  const handlePromptSelection = (promptType) => {
    const itemListId = `RO.B.E_prompt|${promptType}|${moduleName}|${currentPath}`;
    logAnalyticsEvent(itemListId, itemListId, itemListId);
    setPromptSelection(promptType);
    setShouldRenderIntro(false);
    setLoadingMessage("...");
  };

  const handleSubmit = async (event, prompt = null, promptType = null) => {
    event.preventDefault();
    let result = computeResult(promptType, patreonObject);

    setParentVisibility(true);

    setPromptMessage(prompt?.request);
    handlePromptSelection(promptType);
    await new Promise((resolve) => setTimeout(resolve, 750));

    setIsResponseActive(true);
    setChatGptResponseList(result?.response);

    await updateImpact(
      result.impact,
      databaseUserDocument,
      userDocumentReference,
      globalImpactCounter,
      globalDocumentReference
    );

    logEvent(analytics, "spend_virtual_currency", {
      value: result.impact,
      virtual_currency_name: "Impact",
      item_name: `${currentPath}|${moduleName}|${promptType}`,
    });

    setLoadingMessage("");
  };

  const computeResult = (promptType, patreonObject) => {
    return {
      response: computeResponseList(patreonObject, promptType),
      impact: computeTotalImpactFromPrompt(patreonObject, promptType),
    };
  };

  const updateImpact = async (
    impact,
    databaseUserDocument,
    userDocumentReference,
    globalImpactCounter,
    globalDocumentReference
  ) => {
    if (
      (!isEmpty(databaseUserDocument) || !isEmpty(userDocumentReference)) &&
      !isDemo
    ) {
      await updateDoc(userDocumentReference, {
        impact: databaseUserDocument?.impact + impact,
      });
      await updateDoc(globalDocumentReference, {
        total: globalImpactCounter + impact,
      });
      setDatabaseUserDocument((prevDoc) => ({
        ...prevDoc,
        impact: prevDoc?.impact + impact,
      }));
      setGlobalImpactCounter((prevCounter) => prevCounter + impact);
    } else {
    }
  };

  return (
    <div
      onSubmit={handleSubmit}
      style={{ transition: "0.3s all ease-in-out", color: "white" }}
      key={loadingMessage}
    >
      <div ref={topRef}></div>
      <FadeInComponent>
        <PromptMessage
          promptMessage={promptMessage}
          patreonObject={patreonObject}
          chatGptResponseList={chatGptResponseList}
          loadingMessage={loadingMessage}
        />
      </FadeInComponent>
      <br />
      <PanLeftComponent>
        <Intro
          shouldRenderIntro={shouldRenderIntro}
          moduleName={moduleName}
          patreonObject={patreonObject}
          loadingMessage={loadingMessage}
          isResponseActive={isResponseActive}
          promptSelection={promptSelection}
        />
      </PanLeftComponent>

      {chatGptResponseList?.map((response, index) => (
        <PromptCombiner9000
          key={index}
          loadingMessage={loadingMessage}
          chatGptResponse={response}
          patreonObject={patreonObject}
          parentVisibility={parentVisibility}
          setParentVisibility={setParentVisibility}
          handleScheduler={handleScheduler}
          userStateReference={userStateReference}
          globalStateReference={globalStateReference}
          handleZap={handleZap}
          zap={zap}
          index={index}
        />
      ))}

      <Prompts
        loadingMessage={loadingMessage}
        patreonObject={patreonObject}
        handleSubmit={handleSubmit}
        handleZap={handleZap}
        zap={zap}
      />
    </div>
  );
};

export default ChatGPT;
