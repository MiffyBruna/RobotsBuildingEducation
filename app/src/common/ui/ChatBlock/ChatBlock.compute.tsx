// You get an array of data containing strings and JSX elements. Parses out the strings
export const gatherConversationContext = (children) => {
  let result = [];

  children?.forEach((child) => {
    if (typeof child === "string") result.push(child);
  });

  return result;
};

let promptMap = {
  quiz: "Students are having a challenging open-note quiz with you. Keep your guidance brief but effective in order to inspire creative thinking. I will provide the questions students are working on, but do not mention them in any circumstance, it is only for context: \n\n",
};

export const customInstructions = ({ type, messageContext }) => {
  let instructions = `${promptMap[type]}`;
  let humanReadableContext = messageContext.join("\n\n");

  let prompt = instructions + humanReadableContext;

  return prompt;
};
