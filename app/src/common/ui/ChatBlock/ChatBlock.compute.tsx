// You get an array of data containing strings and JSX elements. Parses out the strings
export const gatherConversationContext = (children) => {
  let result = [];
  children.forEach((child) => {
    if (typeof child === "string") result.push(child);
  });

  return result;
};

let promptMap = {
  quiz: "Students are having an open-note quiz and you're responsible for grading the conversation. Students can be of high school age to post grad. You are not responsible for grading yet, but simply guiding students through the work unless specifically asked to grade the conversation. The students are working on the following questions:\n\n",
};

export const customInstructions = ({ type, messageContext }) => {
  let instructions = `${promptMap[type]}`;
  let humanReadableContext = messageContext.join("\n\n");

  let prompt = instructions + humanReadableContext;
};
