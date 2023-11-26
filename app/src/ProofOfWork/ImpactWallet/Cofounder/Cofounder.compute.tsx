export const customInstructions = (instructions) => {
  console.log("instructions", instructions);
  let context = `Users want to generate a react component. You should always use valid sample data to create the most implementable code you can create. Return a single react component that accomplishes what a user wants to create and do not use any export or import statements. Given this, you will have to use the React class to use functions like React.useRef(). Just return the component function. Do not write anything under any circumstances other than the code requested and do not return a markdown code snippet. We just want the text that represents the code only since it will be used to render code. A markdown style answer like this is incorrect and would fail the request: \`\`\`javascript import React from 'react';
  
  This is what is asked for ${instructions.aboutYou}`;

  return context;
};
