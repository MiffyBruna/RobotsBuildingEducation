// export const schemaUpdater = (ui) => {};

import { OverlayTrigger, Spinner, Tooltip } from "react-bootstrap";
import { LittleVillage } from "./ui/26thStreet/LittleVillage";
import { Creator } from "./ui/Creator/Creator";
import { Engineer } from "./ui/Engineer/Engineer";
import { Entrepeneur } from "./ui/Entrepeneur/Entrepeneur";
import roxanaGif from "./media/images/roxanaGif.gif";
import { BossMode } from "./ui/BossMode/BossMode";

//source of truth for views

// ui[path][collection][module]{...}
// ui['coding']['projects & experience']['indocumentadofy']{...}

interface IPrompt {
  // has the user selected? when database is passed into ui()
  completed: boolean;

  //value set
  impact: number;

  //additional context
  tooltip: string | JSX.Element;

  //prompt display text
  action: string;

  // prompt display icon
  icon: string;

  // data sent to chat GPT
  request: string;

  // data returned by chat GPT
  response: string | JSX.Element;

  // spanish translation/stoggle/
  spanish?: string | boolean;

  //fine tuned with human ideas.
  humanTouch?: boolean;

  //enhanced with machine learning.
  robotTouch?: boolean;

  //fine-tuned with currently patreon hosted content
  premiumContent?: boolean;

  //fine-tuned with advertising content
  sponsoredContent?: boolean;

  // may display custom content like an image, python code, javascript code, etc
  dynamicContent?: boolean;

  advertisementLink?: string;
  backgroundStyles?: Record<string, any>;
  advertisingImageSrc: string;
}

interface IModule {
  documentID: string;
  // internal preference
  filler: string;

  hasCode?: boolean;
  // markdown or video for patreon content
  sourceType: string;

  // button to enter module
  button: string;

  // title header
  header: string;

  // video or .markdown fies
  fileSource: any;

  // developer release flag
  new: boolean;

  // developer flag again
  needsImprovement: boolean;

  // great value find
  highValue: boolean;

  //rare value in general
  rare?: boolean;

  // is there something the developers are disabling?
  underConstruction: boolean;

  // has the user completed the module? When database is passed into ui(...)
  completed: boolean;

  // tool tip to add more UI on tags
  tooltip: string;
  prompts: {
    //3 point low-stakes challenger quiz
    quiz: IPrompt;

    //Frequently Asked Questions
    ask: IPrompt;

    //inspiration material
    inspire: IPrompt;

    //one sentence definition
    define: IPrompt;

    // summarize concept
    summarize: IPrompt;

    // code example or some other demo type
    demonstrate: IPrompt;

    // 10 bullet point study guide
    guide: IPrompt;

    // patreon first content (videos+canva)
    patreon: IPrompt;

    // advertising agreements with patrons
    shop: IPrompt;
    intro?: IPrompt;

    //in the future: translate. Dropdown/search + translate Module
  };

  [index: string]: any;
}

interface ICollection {
  [index: string]: Record<string, IModule>;
}
interface IPath {
  Engineer: ICollection;
  Creator: ICollection;
  Entrepeneur: ICollection;
  "RO.₿.E": ICollection;
  "Boss Mode": ICollection | Record<string, any>;
  // "Raise Ur Hand": ICollection | Record<string, any>;
}

// be pro customization. Redundancy is fine if it allows for more customization.
// start uniform. Adjust ChatGPT settings in sandbox and adjust UX here.
export const ui = (globalUserModulesFromDB = {}): IPath => {
  // can branch this further to reduce JSON size computed when invoked.

  return {
    Engineer: Engineer,
    Creator: Creator,
    Entrepeneur: Entrepeneur,
    "RO.₿.E": LittleVillage(globalUserModulesFromDB), // get database sets
    "Boss Mode": BossMode,
    // "Raise Ur Hand": {},
  };
};
export let uiPaths = [
  "Engineer",
  "Creator",
  "Entrepeneur",
  "RO.₿.E",
  "Boss Mode",
  // "Raise Ur Hand",
];

// this manages the view when selected `engineer, creator, business or 26th street`
export let controlPathVisibilityMap = (visibilityMap, selectedPath) => {
  let result = visibilityMap;
  uiPaths.forEach((path) => {
    result[path] = false;
  });
  result[selectedPath] = true;
  return result;
};

export let renderWithTooltip = (
  element: any,
  tooltip: any,
  renderingDirection: any,
  style = null
) => {
  return (
    <OverlayTrigger
      trigger="click"
      placement={renderingDirection}
      overlay={<Tooltip style={style}>{tooltip}</Tooltip>}
    >
      {element}
    </OverlayTrigger>
  );
};

/**
 * @returns the total amount of proof of work points available in the platform.
 */
export let getGlobalImpact = () => {
  let pathKeys = Object.keys(ui());

  let sum = 0;
  let moduleCount = 0;

  pathKeys.forEach((path) => {
    let collectionKeys = Object.keys(ui()[path]);

    collectionKeys.forEach((collection) => {
      let moduleKeys = Object.keys(ui()[path][collection]);

      moduleKeys.forEach((module) => {
        moduleCount = moduleCount + 1;

        let mod = ui()[path][collection][module];
        let prompts = Object.keys(mod.prompts);

        prompts.forEach((prompt) => {
          sum = sum + mod.prompts[prompt].impact;
        });
      });
    });
  });

  return sum;
};

// this is a function that handles devilish things
// configure it with arguments if you need to get each lesson and do something with it :)
export const randomLessonGeneratorMachine444 = (globalUserModulesFromDB) => {
  let schema = ui(globalUserModulesFromDB);

  let setOfPaths = [];

  Object.entries(schema).forEach((path) => {
    setOfPaths.push(path[1]);
  });

  let setOfCollections = [];

  setOfPaths.forEach((path) => {
    Object.entries(path).forEach((collection) => {
      setOfCollections.push(collection[1]);
    });
  });

  let setOfModules = [];

  setOfCollections.forEach((collection) => {
    Object.entries(collection).forEach((module) => {
      // module 1 = title, may need this
      setOfModules.push(module[1]);
    });
  });

  let randomResult =
    setOfModules[Math.floor(Math.random() * setOfModules.length)];

  return randomResult;
};

export let RoxanaLoadingAnimation = () => {
  return (
    <div>
      <Spinner animation="grow" variant="info" size="sm">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <img width="150px" src={roxanaGif} />
      <Spinner animation="grow" variant="primary" size="sm">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};
