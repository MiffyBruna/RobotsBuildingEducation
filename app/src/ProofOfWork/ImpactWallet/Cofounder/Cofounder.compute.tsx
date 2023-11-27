import { creatorImageKnowledge, creatorKnowledge } from "./Cofounder.data";

export const customInstructions = (instructions, process) => {
  let context = ``;
  if (process === "cofounder") {
    context = `Users want to generate a react component. You should always use valid sample data to create the most implementable code you can create. Return a single react component that accomplishes what a user wants to create and do not use any export or import statements. Given this, you will have to use the React class to use functions like React.useRef(). Just return the component function. Do not write anything under any circumstances other than the code requested and do not return a markdown code snippet. The component should strictly be in the function functionName(){} format or else this will fail. We just want the text that represents the code only since it will be used to render code. A markdown style answer like this is incorrect and would fail the request: \`\`\`javascript import React from 'react';
  
  This is what is asked for ${instructions.creationDescription}`;
  }

  if (process === "codeBreakdown") {
    context = `You're going to process a react component. The result should be an array of objects returned with the following interface:

    "result": {
        information: string
        breakdown: [{
            code: string,
            description: string,
            explanation: string
        }]
    }

    The information key explains what the code does.

    Where code attribute is the block of code that's being described and explained, description is a quick description of what the code accomplishes, and explanation is a beginner friendly explanation. Do not use shortcuts or comments to explain things in passing - be thorough and detailed in your approach. For example something like const "handleClick = async (event) => { ... };" is not acceptable - you should be capturing the blocks of code in the JSON value with string template literals if needed. It is extremely important that you do not gloss over code snippets and capture the block entirely or this process will fail.

    please remember that it's mostly beginners. So be friendly and use some emojis to express more emotion and friendliness.

    This is the code. Again, please capture all of it in its entirety and do not skip any code blocks:
    ${instructions}
    
    `;
  }

  if (process === "creator-image") {
    context = `Create an image to hook viewers on social media based on this topic: ${instructions.creationDescription}.
    
    This is the knowledge framework by MrBeast that you're working with. Apply it reasonably to your approach
    ${creatorImageKnowledge}
    `;
  }

  if (process === "creator-script") {
    context = `You're creating a social media script. Create an script to hook viewers based on this topic: ${instructions.creationDescription}.
    
    This is the knowledge framework by MrBeast that you're working with. Apply it reasonably to your approach
    ${creatorKnowledge}

    Lastly and most importantly, the response should always be structured using this JSON format:
    "result": {
        script: [{
           header: string,
           script_lines: string[]
           instructions: string[] 
        }]
    }

    where script is an array of objects that contain the content of your result. The header is the section you're elaborating on, the script_lines is an array of strings representing the words the creator should say, and instructions is an array of strings explaining the steps or words the creator should be using.
    `;
  }
  return context;
};
