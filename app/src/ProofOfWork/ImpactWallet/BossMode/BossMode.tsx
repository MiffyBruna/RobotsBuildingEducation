//@ts-nocheck
import { useEffect, useState } from "react";
import { isEmpty } from "lodash";
import { Button, Modal } from "react-bootstrap";
import styled from "styled-components";
import { MultipleChoiceQuestion } from "./Templates/MultipleChoiceQuestion/MultipleChoiceQuestion";
import { TextInputQuestion } from "./Templates/TextInputQuestion/TextInputQuestion";
import { getDoc, updateDoc } from "firebase/firestore";
import { updateLevel } from "../../../App.compute";
import { OutputQuestion } from "./Templates/OutputQuestion/OutputQuestion";
import { japaneseThemePalette } from "../../../styles/lazyStyles";
import { SelectionQuestion } from "./Templates/SelectionQuestion/SelectionQuestion";

const Container = styled.div`
  /* Add your styles here */
  // border: 1px solid yellow;
`;

const Question = styled.h2`
  /* Style your question */
`;

const AnswerInput = styled.input`
  /* Style your input box */
`;

const SubmitButton = styled(Button)`
  /* Style your button */
`;

const AccountSetup = () => {};

const RewardScreen = ({ isAnswerCorrect }) => {
  if (isAnswerCorrect === "false") {
    return (
      <div style={{ textShadow: "1px 1px 5px black" }}>
        <h1>You failed! 😨</h1>
        <p>Come back in 2 hours to try again!</p>

        <p>
          Check your rank{" "}
          <a
            style={{ color: "white", textDecoration: "underline" }}
            href="https://discord.com/channels/115318178929704963/1199792098157797458"
            target="_blank"
          >
            on Discord
          </a>
        </p>
        {/* You can add more reward details or motivational messages here */}
      </div>
    );
  } else {
    return (
      <div style={{ textShadow: "1px 1px 5px black" }}>
        <h1>Great job! 🌟</h1>
        <p>Come back in 2 hours for your next challenge!</p>

        <p>
          check your rank{" "}
          <a
            style={{ color: "white", textDecoration: "underline" }}
            href="https://discord.com/channels/115318178929704963/1199792098157797458"
            target="_blank"
          >
            on Discord
          </a>
        </p>
        {/* You can add more reward details or motivational messages here */}
      </div>
    );
  }
};

const questions = [
  {
    type: "multipleChoice",
    text: "Which HTML element is used for specifying a JavaScript file?",
    options: ["<js>", "<javascript>", "<script>", "<link>"],
    correctAnswer: "<script>",
  },
  {
    type: "output",
    text: "What will be logged: console.log(typeof {});",
    correctAnswer: "object",
  },
  {
    type: "selectOrder",
    text: "Arrange the code blocks to create a for loop that prints numbers from 1 to 3.",
    blocks: [
      { id: "b7", content: "}" },
      { id: "b2", content: "let i = 1;" },
      { id: "b5", content: ") {" },
      { id: "b4", content: "i++" },
      { id: "b3", content: "i <= 3;" },
      { id: "b1", content: "for (" },
      { id: "b6", content: "console.log(i);" },
    ],
    correctOrder: ["b1", "b2", "b3", "b4", "b5", "b6", "b7"],
  },
  {
    type: "text",
    text: "Explain the use of the 'alt' attribute in images.",
  },
  {
    type: "output",
    text: "What is the output of: console.log('5' + null);",
    correctAnswer: "5null",
  },
  {
    type: "multipleChoice",
    text: "In JavaScript, which method is used to round a number to its nearest integer?",
    options: ["Math.round()", "Math.floor()", "Math.ceil()", "Math.rnd()"],
    correctAnswer: "Math.round()",
  },
  {
    type: "selectOrder",
    text: "Organize these statements to correctly declare a JavaScript object for a car.",
    blocks: [
      { id: "b2", content: "make: 'Toyota'," },
      { id: "b5", content: "};" },
      { id: "b4", content: "year: 2021" },
      { id: "b1", content: "let car = {" },
      { id: "b3", content: "model: 'Corolla'," },
    ],
    correctOrder: ["b1", "b2", "b3", "b4", "b5"],
  },
  {
    type: "text",
    text: "What is the purpose of CSS in web development?",
  },
  {
    type: "output",
    text: "What will be the output: console.log(2 + '2' - '2');",
    correctAnswer: "20",
  },
  {
    type: "multipleChoice",
    text: "Which of these is a JavaScript framework?",
    options: ["Django", "Flask", "React", "Laravel"],
    correctAnswer: "React",
  },
  {
    type: "selectOrder",
    text: "Arrange these CSS properties to center text horizontally and vertically in a div.",
    blocks: [
      { id: "b2", content: "display: flex;" },
      { id: "b1", content: "div {" },
      { id: "b4", content: "align-items: center;" },
      { id: "b3", content: "justify-content: center;" },
      { id: "b5", content: "}" },
    ],
    correctOrder: ["b1", "b2", "b3", "b4", "b5"],
  },
  {
    type: "output",
    text: "What is the output of: console.log(!!'false');",
    correctAnswer: "true",
  },
  {
    type: "multipleChoice",
    text: "What is the purpose of the 'alt' attribute in HTML images?",
    options: [
      "To provide an alternative text",
      "To change the image source",
      "For styling images",
      "To make images load faster",
    ],
    correctAnswer: "To provide an alternative text",
  },
  {
    type: "text",
    text: "Describe how the 'this' keyword works in JavaScript.",
  },
  {
    type: "selectOrder",
    text: "Arrange the HTML tags in the order they should appear in a basic webpage.",
    blocks: [
      { id: "b5", content: "</head>" },
      { id: "b3", content: "<head>" },
      { id: "b7", content: "</body>" },
      { id: "b6", content: "<body>" },
      { id: "b4", content: "<title>Page Title</title>" },
      { id: "b8", content: "</html>" },
      { id: "b2", content: "<html>" },
      { id: "b1", content: "<!DOCTYPE html>" },
    ],
    correctOrder: ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8"],
  },
  {
    type: "output",
    text: "What will be logged: console.log(typeof (() => {}));",
    correctAnswer: "function",
  },
  {
    type: "multipleChoice",
    text: "Which of these is not a valid JavaScript data type?",
    options: ["Undefined", "Boolean", "Float", "Object"],
    correctAnswer: "Float",
  },
  {
    type: "text",
    text: "Explain the difference between 'let' and 'const' in JavaScript.",
  },
  {
    type: "selectOrder",
    text: "Arrange the JavaScript statements to create a simple fetch request.",
    blocks: [
      { id: "b3", content: ".then((data) => console.log(data))" },
      { id: "b1", content: "fetch('https://api.example.com/data')" },
      { id: "b2", content: ".then((response) => response.json())" },
      {
        id: "b4",
        content: ".catch((error) => console.error('Error:', error));",
      },
    ],
    correctOrder: ["b1", "b2", "b3", "b4"],
  },
  {
    type: "output",
    text: "What is the output of: console.log(3 + 4 + '5');",
    correctAnswer: "75",
  },
  {
    type: "multipleChoice",
    text: "What does JSON stand for?",
    options: [
      "JavaScript Object Notation",
      "Java Standard Output Network",
      "JavaScript Oriented Notation",
      "Java Source Open Network",
    ],
    correctAnswer: "JavaScript Object Notation",
  },
  {
    type: "text",
    text: "What is the purpose of a CDN (Content Delivery Network) in web development?",
  },
  {
    type: "selectOrder",
    text: "Order these JavaScript statements to add an event listener to a button.",
    blocks: [
      { id: "b2", content: "button.addEventListener('click', function() {" },
      {
        id: "b1",
        content: "const button = document.getElementById('myButton');",
      },
      { id: "b4", content: "});" },
      { id: "b3", content: "alert('Button clicked!');" },
    ],
    correctOrder: ["b1", "b2", "b3", "b4"],
  },
  {
    type: "output",
    text: "What is the output of: console.log(0.1 + 0.2 === 0.3);",
    correctAnswer: "false",
  },
  {
    type: "multipleChoice",
    text: "Which of these is a valid way to declare a JavaScript array?",
    options: [
      "let arr = (1,2,3);",
      "let arr = [1,2,3];",
      "let arr = 1,2,3;",
      "let arr = new Array(1,2,3);",
    ],
    correctAnswer: "let arr = [1,2,3];",
  },
  {
    type: "text",
    text: "Explain the box model in CSS.",
  },
  {
    type: "selectOrder",
    text: "Arrange the lines to create a simple SQL query to select all records from a table named 'users'.",
    blocks: [
      { id: "b2", content: "FROM users;" },
      { id: "b1", content: "SELECT *" },
    ],
    correctOrder: ["b1", "b2"],
  },
  {
    type: "output",
    text: "What will be logged: console.log('5' * 5);",
    correctAnswer: "25",
  },
  {
    type: "multipleChoice",
    text: "What is the main purpose of the 'div' tag in HTML?",
    options: [
      "To create links",
      "For scripting",
      "To create a division or a section",
      "To embed media",
    ],
    correctAnswer: "To create a division or a section",
  },
  {
    type: "text",
    text: "Describe the concept of 'inheritance' in object-oriented programming.",
  },
  {
    type: "selectOrder",
    text: "Order these statements to correctly define and call a function in Python.",
    blocks: [
      { id: "b2", content: "print('Hello, world!')" },
      { id: "b3", content: "greet()" },
      { id: "b1", content: "def greet():" },
    ],
    correctOrder: ["b1", "b2", "b3"],
  },
  {
    type: "output",
    text: "What is the output of: console.log(NaN === NaN);",
    correctAnswer: "false",
  },
  {
    type: "multipleChoice",
    text: "Which HTTP method is typically used to request data from a specified resource?",
    options: ["GET", "POST", "PUT", "DELETE"],
    correctAnswer: "GET",
  },
  {
    type: "text",
    text: "What is the purpose of the 'doctype' declaration in HTML?",
  },
  {
    type: "selectOrder",
    text: "Arrange these CSS properties to style a paragraph with red text and a blue background.",
    blocks: [
      { id: "b1", content: "p {" },
      { id: "b4", content: "}" },
      { id: "b3", content: "background-color: blue;" },
      { id: "b2", content: "color: red;" },
    ],
    correctOrder: ["b1", "b2", "b3", "b4"],
  },
  {
    type: "output",
    text: "What is the output of: console.log('A' + 'B' + 'C');",
    correctAnswer: "ABC",
  },
  {
    type: "multipleChoice",
    text: "What does CSS stand for?",
    options: [
      "Creative Style Sheets",
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Colorful Style Sheets",
    ],
    correctAnswer: "Cascading Style Sheets",
  },
  {
    type: "text",
    text: "Explain the concept of 'responsive web design'.",
  },
  {
    type: "multipleChoice",
    text: "What does CSS stand for?",
    options: [
      "Computing Style Sheet",
      "Creative Style System",
      "Cascading Style Sheets",
      "Computer Styled Sections",
    ],
    correctAnswer: "Cascading Style Sheets",
  },
  {
    type: "output",
    text: "What is the output of: console.log('Hello'.substring(0, 2));",
    correctAnswer: "He",
  },
  {
    type: "selectOrder",
    text: "Arrange the HTML tags to create a basic structure.",
    blocks: [
      { id: "b4", content: "</body>" },
      { id: "b1", content: "<html>" },
      { id: "b3", content: "<body>" },
      { id: "b2", content: "</html>" },
    ],
    correctOrder: ["b1", "b3", "b4", "b2"],
  },
  {
    type: "text",
    text: "Explain the purpose of a web server.",
  },
  {
    type: "multipleChoice",
    text: "Which of these is a JavaScript framework?",
    options: ["Laravel", "Django", "React", "Flask"],
    correctAnswer: "React",
  },
  {
    type: "selectOrder",
    text: "Organize the CSS properties to style a paragraph with red text.",
    blocks: [
      { id: "b3", content: "color: red;" },
      { id: "b1", content: "p {" },
      { id: "b2", content: "}" },
    ],
    correctOrder: ["b1", "b3", "b2"],
  },
  {
    type: "output",
    text: "What will be logged: console.log(typeof 23);",
    correctAnswer: "number",
  },
  {
    type: "text",
    text: "Describe the concept of inheritance in object-oriented programming.",
  },
  {
    type: "multipleChoice",
    text: "What is the main use of the <div> tag in HTML?",
    options: [
      "Linking CSS",
      "Creating a new section",
      "Adding a header",
      "Embedding a script",
    ],
    correctAnswer: "Creating a new section",
  },
  {
    type: "selectOrder",
    text: "Arrange the JavaScript statements to create and call a function.",
    blocks: [
      { id: "b2", content: "function greet() { console.log('Hello'); }" },
      { id: "b1", content: "greet();" },
    ],
    correctOrder: ["b2", "b1"],
  },
  {
    type: "output",
    text: "What is the output of: console.log(3 + 4 * 5);",
    correctAnswer: "23",
  },
  {
    type: "text",
    text: "Explain the difference between 'GET' and 'POST' HTTP methods.",
  },
  {
    type: "multipleChoice",
    text: "Which HTML tag is used to create a clickable link?",
    options: ["<link>", "<a>", "<href>", "<click>"],
    correctAnswer: "<a>",
  },
  {
    type: "selectOrder",
    text: "Order these SQL commands to insert a new record.",
    blocks: [
      { id: "b2", content: "VALUES ('John', 'Doe');" },
      { id: "b1", content: "INSERT INTO users (firstname, lastname)" },
    ],
    correctOrder: ["b1", "b2"],
  },
  {
    type: "output",
    text: "What will be logged: console.log('5' + 5);",
    correctAnswer: "55",
  },
  {
    type: "multipleChoice",
    text: "Which method is used to deeply clone an object in JavaScript?",
    options: [
      "Object.clone()",
      "JSON.parse(JSON.stringify(object))",
      "Object.assign()",
      "Array.slice()",
    ],
    correctAnswer: "JSON.parse(JSON.stringify(object))",
  },
  {
    type: "output",
    text: "What is the output of: console.log(typeof (() => {}));",
    correctAnswer: "function",
  },
  {
    type: "selectOrder",
    text: "Arrange these steps to create a Promise and handle its resolution in JavaScript.",
    blocks: [
      { id: "b1", content: "new Promise((resolve, reject) => {" },
      { id: "b3", content: "}).then((value) => console.log(value));" },
      { id: "b2", content: "resolve('Success');" },
      { id: "b4", content: "});" },
    ],
    correctOrder: ["b1", "b2", "b4", "b3"],
  },
  {
    type: "text",
    text: "Explain the concept of event delegation in JavaScript.",
  },
  {
    type: "multipleChoice",
    text: "What does the 'flex' property do in a CSS Flexbox layout?",
    options: [
      "Defines the direction of flex items",
      "Specifies the flex grow factor",
      "Aligns the flex container's children",
      "Combines the flex-grow, flex-shrink, and flex-basis properties",
    ],
    correctAnswer:
      "Combines the flex-grow, flex-shrink, and flex-basis properties",
  },
  {
    type: "output",
    text: "What is the output of: console.log([1, 2, 3].map(n => n * n).join(','));",
    correctAnswer: "1,4,9",
  },
  {
    type: "selectOrder",
    text: "Arrange the CSS properties to style a button with a gradient background.",
    blocks: [
      { id: "b1", content: "button {" },
      {
        id: "b4",
        content: "background: linear-gradient(to right, red, yellow);",
      },
      { id: "b2", content: "border: none;" },
      { id: "b3", content: "color: white;" },
      { id: "b5", content: "}" },
    ],
    correctOrder: ["b1", "b4", "b2", "b3", "b5"],
  },
  {
    type: "text",
    text: "Describe how the CSS 'box-sizing' property affects element sizing.",
  },
  {
    type: "multipleChoice",
    text: "In React, what is the purpose of the 'key' prop in a list of components?",
    options: [
      "To improve performance",
      "To uniquely identify each element",
      "For styling purposes",
      "To enable global access to the component",
    ],
    correctAnswer: "To uniquely identify each element",
  },
  {
    type: "output",
    text: "What is the output of: console.log('B' + 'a' + + 'a' + 'a');",
    correctAnswer: "BaNaNa",
  },
  {
    type: "selectOrder",
    text: "Organize the steps to send a POST request using the Fetch API.",
    blocks: [
      { id: "b1", content: "fetch('https://api.example.com/posts', {" },
      { id: "b4", content: "method: 'POST'," },
      { id: "b2", content: "headers: { 'Content-Type': 'application/json' }," },
      {
        id: "b3",
        content:
          "body: JSON.stringify({title: 'Post Title', body: 'Post body'})",
      },
      { id: "b5", content: "});" },
    ],
    correctOrder: ["b1", "b4", "b2", "b3", "b5"],
  },
  {
    type: "text",
    text: "Explain how a CSS preprocessor like SASS or LESS can be beneficial.",
  },
  {
    type: "multipleChoice",
    text: "Which of these is not a valid hook in React?",
    options: ["useState", "useEffect", "useBeforeMount", "useContext"],
    correctAnswer: "useBeforeMount",
  },
  {
    type: "output",
    text: "What is the output of: console.log([...new Set([1,2,2,3,4,4,4])]);",
    correctAnswer: "1,2,3,4",
  },
  {
    type: "selectOrder",
    text: "Organize these HTML elements to create a form with a text input and a submit button.",
    blocks: [
      { id: "b1", content: "<form>" },
      { id: "b4", content: "<input type='text' name='username'>" },
      { id: "b2", content: "<input type='submit' value='Submit'>" },
      { id: "b3", content: "</form>" },
    ],
    correctOrder: ["b1", "b4", "b2", "b3"],
  },
  {
    type: "text",
    text: "Explain the concept of 'shadow DOM' in web components.",
  },
  {
    type: "multipleChoice",
    text: "Which of these is used to define a variable that cannot be reassigned in JavaScript?",
    options: ["let", "var", "const", "static"],
    correctAnswer: "const",
  },
  {
    type: "output",
    text: "What is the output of: console.log(typeof NaN);",
    correctAnswer: "number",
  },
  {
    type: "selectOrder",
    text: "Arrange these CSS properties to create a flex container with wrapped items.",
    blocks: [
      { id: "b3", content: "flex-wrap: wrap;" },
      { id: "b2", content: "display: flex;" },
      { id: "b1", content: "div {" },
      { id: "b4", content: "}" },
    ],
    correctOrder: ["b1", "b2", "b3", "b4"],
  },
  {
    type: "multipleChoice",
    text: "In Node.js, which module is used to work with file systems?",
    options: ["fs", "os", "path", "http"],
    correctAnswer: "fs",
  },
  {
    type: "text",
    text: "Describe how 'memoization' works in programming.",
  },
  {
    type: "output",
    text: "What is the output of: console.log('10' == 10 && '10' === 10);",
    correctAnswer: "false",
  },
  {
    type: "selectOrder",
    text: "Order the SQL clauses to create a query that selects all customers older than 21.",
    blocks: [
      { id: "b2", content: "SELECT * FROM customers" },
      { id: "b1", content: "WHERE age > 21;" },
    ],
    correctOrder: ["b2", "b1"],
  },
  {
    type: "multipleChoice",
    text: "What is the main function of the 'key' prop in a React list?",
    options: [
      "To track items' identities",
      "To enhance styling",
      "To improve performance",
      "To provide a unique index",
    ],
    correctAnswer: "To track items' identities",
  },
  {
    type: "multipleChoice",
    text: "Which JavaScript method is used to access the first element of an array without modifying the array?",
    options: ["shift()", "unshift()", "pop()", "slice()"],
    correctAnswer: "slice()",
  },
  {
    type: "output",
    text: "What is the output of: console.log(!!null);",
    correctAnswer: "false",
  },
  {
    type: "selectOrder",
    text: "Arrange the JavaScript expressions to define a class with a constructor and a method.",
    blocks: [
      { id: "b2", content: "constructor(name) {" },
      { id: "b4", content: "this.name = name;" },
      { id: "b1", content: "class Person {" },
      { id: "b5", content: "greet() { console.log(`Hello, ${this.name}`); }" },
      { id: "b3", content: "}" },
    ],
    correctOrder: ["b1", "b2", "b4", "b3", "b5"],
  },
  {
    type: "text",
    text: "Explain the difference between 'localStorage' and 'sessionStorage' in web development.",
  },
  {
    type: "multipleChoice",
    text: "What does the CSS 'overflow' property do?",
    options: [
      "Changes the color of overflowed content",
      "Specifies what to do with content that overflows an element's box",
      "Controls the scroll of an element",
      "None of the above",
    ],
    correctAnswer:
      "Specifies what to do with content that overflows an element's box",
  },
  {
    type: "output",
    text: "What is the output of: console.log(typeof (42n));",
    correctAnswer: "bigint",
  },
  {
    type: "selectOrder",
    text: "Organize these steps to send a GET request using Axios.",
    blocks: [
      { id: "b2", content: ".then(response => console.log(response.data))" },
      { id: "b1", content: "axios.get('https://api.example.com/data')" },
      { id: "b3", content: ".catch(error => console.error(error));" },
    ],
    correctOrder: ["b1", "b2", "b3"],
  },
  {
    type: "text",
    text: "Describe the use of the 'map' method in JavaScript.",
  },
  {
    type: "multipleChoice",
    text: "In Git, what is the purpose of the 'clone' command?",
    options: [
      "To create a new branch",
      "To copy a repository from GitHub to a local machine",
      "To merge changes",
      "To stage files for commit",
    ],
    correctAnswer: "To copy a repository from GitHub to a local machine",
  },
  {
    type: "output",
    text: "What is the output of: console.log('7' - 3 + 2);",
    correctAnswer: "6",
  },
  {
    type: "selectOrder",
    text: "Order these HTML tags to structure a basic document.",
    blocks: [
      { id: "b3", content: "<body>" },
      { id: "b1", content: "<!DOCTYPE html>" },
      { id: "b2", content: "<html>" },
      { id: "b4", content: "<head>" },
      { id: "b5", content: "<title>My Page</title>" },
      { id: "b6", content: "</head>" },
      { id: "b7", content: "</body>" },
      { id: "b8", content: "</html>" },
    ],
    correctOrder: ["b1", "b2", "b4", "b5", "b6", "b3", "b7", "b8"],
  },
  {
    type: "text",
    text: "Explain what a RESTful API is.",
  },
  {
    type: "multipleChoice",
    text: "What is a 'pure function' in programming?",
    options: [
      "A function that always returns a new object",
      "A function without side effects or dependencies on external state",
      "A function that performs an HTTP request",
      "A function that can only be called once",
    ],
    correctAnswer:
      "A function without side effects or dependencies on external state",
  },
  {
    type: "output",
    text: "What is the output of: console.log([...new Set('hello')].join(''));",
    correctAnswer: "helo",
  },
  {
    type: "selectOrder",
    text: "Arrange these steps to perform a basic left join in SQL.",
    blocks: [
      { id: "b2", content: "ON table1.id = table2.id;" },
      { id: "b1", content: "SELECT table1.name, table2.salary FROM table1" },
      { id: "b3", content: "LEFT JOIN table2" },
    ],
    correctOrder: ["b1", "b3", "b2"],
  },
  {
    type: "text",
    text: "Explain the concept and benefits of using 'memoization' in JavaScript.",
  },
  {
    type: "multipleChoice",
    text: "In Node.js, which core module is used for creating a web server?",
    options: ["HTTP", "Express", "WebServer", "NodeServer"],
    correctAnswer: "HTTP",
  },
  {
    type: "output",
    text: "What is the output of: console.log(0 || '' || 2 || true);",
    correctAnswer: "2",
  },
  {
    type: "selectOrder",
    text: "Arrange these JavaScript expressions to define and use an async function.",
    blocks: [
      { id: "b3", content: "await asyncFunction();" },
      { id: "b1", content: "async function asyncFunction() {" },
      { id: "b2", content: "return 'done';" },
      { id: "b4", content: "}" },
    ],
    correctOrder: ["b1", "b2", "b4", "b3"],
  },
  {
    type: "text",
    text: "Discuss the implications of using 'var' vs. 'let' in JavaScript for variable declaration.",
  },
  {
    type: "multipleChoice",
    text: "Which is a primary feature of the Redux library in application development?",
    options: [
      "Two-way data binding",
      "Centralized state management",
      "Dependency injection",
      "Component-based architecture",
    ],
    correctAnswer: "Centralized state management",
  },
  {
    type: "output",
    text: "What will be logged: console.log(`10$${2 + 3}`);",
    correctAnswer: "10$5",
  },
  {
    type: "selectOrder",
    text: "Arrange these CSS properties to create a flex container aligning items in a column, centered horizontally.",
    blocks: [
      { id: "b1", content: ".container {" },
      { id: "b3", content: "justify-content: center;" },
      { id: "b2", content: "flex-direction: column;" },
      { id: "b4", content: "display: flex;" },
      { id: "b5", content: "}" },
    ],
    correctOrder: ["b1", "b4", "b2", "b3", "b5"],
  },
  {
    type: "multipleChoice",
    text: "In React, what is the Context API used for?",
    options: [
      "Managing state",
      "Routing",
      "Data Fetching",
      "Global state management",
    ],
    correctAnswer: "Global state management",
  },
  {
    type: "selectOrder",
    text: "Arrange these Express.js middleware functions in order to log requests and send a response.",
    blocks: [
      { id: "b1", content: "app.use((req, res, next) => {" },
      { id: "b3", content: "console.log(`${req.method} ${req.url}`);" },
      { id: "b4", content: "next();" },
      { id: "b2", content: "res.send('Hello World');" },
    ],
    correctOrder: ["b1", "b3", "b4", "b2"],
  },
  {
    type: "output",
    text: "What is the output of: console.log('abc'.padStart(6, '123'));",
    correctAnswer: "123abc",
  },
  {
    type: "text",
    text: "Explain the difference between debouncing and throttling in JavaScript.",
  },
  {
    type: "multipleChoice",
    text: "Which design pattern in JavaScript is used to immediately invoke a function as it’s defined?",
    options: [
      "Observer",
      "Module",
      "Prototype",
      "IIFE (Immediately Invoked Function Expression)",
    ],
    correctAnswer: "IIFE (Immediately Invoked Function Expression)",
  },
  {
    type: "selectOrder",
    text: "Organize these commands to create a Docker container from an image.",
    blocks: [
      { id: "b2", content: "docker pull my_image" },
      { id: "b1", content: "docker build -t my_image ." },
      { id: "b3", content: "docker run my_image" },
    ],
    correctOrder: ["b1", "b2", "b3"],
  },
  {
    type: "output",
    text: "What is the output of: console.log(1 < 2 < 3);",
    correctAnswer: "true",
  },
  {
    type: "text",
    text: "Describe how a virtual DOM is used in a framework like React.",
  },
  {
    type: "multipleChoice",
    text: "What is memoization in the context of programming?",
    options: [
      "Storing function return values",
      "Remembering syntax",
      "A technique to speed up programs",
      "Storing user data",
    ],
    correctAnswer: "Storing function return values",
  },
  {
    type: "selectOrder",
    text: "Arrange these steps to create and use a JavaScript generator function.",
    blocks: [
      { id: "b3", content: "function* generateSequence() {" },
      { id: "b2", content: "yield 1;" },
      { id: "b1", content: "let generator = generateSequence();" },
      { id: "b4", content: "console.log(generator.next().value);" },
    ],
    correctOrder: ["b3", "b2", "b1", "b4"],
  },
  {
    type: "multipleChoice",
    text: "In a distributed system, what does the term 'consensus' refer to?",
    options: [
      "Data consistency across multiple nodes",
      "Agreement on system architecture",
      "Uniformity of programming languages used",
      "Centralized data storage solution",
    ],
    correctAnswer: "Data consistency across multiple nodes",
  },
  {
    type: "output",
    text: "What is the output of: console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));",
    correctAnswer: "3628800", // 10 factorial
  },
  {
    type: "selectOrder",
    text: "Arrange these concepts in the order they occur in the TLS handshake process.",
    blocks: [
      { id: "b2", content: "Certificate exchange and validation" },
      { id: "b1", content: "Client and server hello" },
      { id: "b4", content: "Symmetric encryption established" },
      { id: "b3", content: "Key exchange and cipher selection" },
    ],
    correctOrder: ["b1", "b3", "b2", "b4"],
  },
  {
    type: "text",
    text: "Describe the concept of 'Quorum' in distributed databases.",
  },
  {
    type: "multipleChoice",
    text: "What is the main purpose of a 'Bloom Filter' in data structures?",
    options: [
      "Data sorting",
      "Error detection in transmitted data",
      "Space-efficient probabilistic data structure",
      "Data encryption",
    ],
    correctAnswer: "Space-efficient probabilistic data structure",
  },
  {
    type: "output",
    text: "What is the output of: console.log(typeof (() => {}).constructor === Function.prototype.constructor);",
    correctAnswer: "true",
  },
  {
    type: "selectOrder",
    text: "Order these steps for implementing the Raft consensus algorithm.",
    blocks: [
      { id: "b3", content: "Leader election" },
      { id: "b1", content: "Log replication" },
      { id: "b2", content: "Safety and log matching" },
    ],
    correctOrder: ["b3", "b1", "b2"],
  },
  {
    type: "text",
    text: "Explain the 'CAP theorem' in distributed systems.",
  },
  {
    type: "multipleChoice",
    text: "In machine learning, what is 'overfitting'?",
    options: [
      "When a model performs poorly on new data",
      "When a model is too simple to capture variability",
      "When a model captures random noise instead of underlying patterns",
      "Insufficient iterative training",
    ],
    correctAnswer:
      "When a model captures random noise instead of underlying patterns",
  },
  {
    type: "output",
    text: "What will be logged: console.log(Object.is(NaN, NaN));",
    correctAnswer: "true",
  },
  {
    type: "selectOrder",
    text: "Arrange these programming paradigms in the order they historically emerged.",
    blocks: [
      { id: "b1", content: "Procedural Programming" },
      { id: "b3", content: "Object-Oriented Programming" },
      { id: "b2", content: "Functional Programming" },
    ],
    correctOrder: ["b2", "b1", "b3"],
  },
  {
    type: "multipleChoice",
    text: "In quantum computing, what is a 'qubit'?",
    options: [
      "A unit of quantum information",
      "A quantum version of a binary digit",
      "A specialized quantum transistor",
      "An error-correction code in quantum algorithms",
    ],
    correctAnswer: "A quantum version of a binary digit",
  },
  {
    type: "output",
    text: "What is the output of: console.log(!!(function*(){})().next);",
    correctAnswer: "true",
  },
  {
    type: "selectOrder",
    text: "Arrange these steps in the process of implementing a Red-Black Tree insertion.",
    blocks: [
      { id: "b1", content: "Insert the new node as a red node" },
      { id: "b4", content: "Perform rotations and recolor nodes" },
      { id: "b2", content: "Fix the tree to restore red-black properties" },
      { id: "b3", content: "Adjust the root to be black" },
    ],
    correctOrder: ["b1", "b2", "b4", "b3"],
  },
  {
    type: "text",
    text: "Explain the concept of 'currying' in functional programming.",
  },
  {
    type: "multipleChoice",
    text: "What does 'NP-hard' mean in computational complexity theory?",
    options: [
      "Non-deterministic Polynomial-time hard",
      "Not Polynomial-time hard",
      "New Polynomial-time hard",
      "Nominally Polynomial-time hard",
    ],
    correctAnswer: "Non-deterministic Polynomial-time hard",
  },
  {
    type: "output",
    text: "What will be logged: console.log((async () => 'async')());",
    correctAnswer: "[object Promise]",
  },
  {
    type: "selectOrder",
    text: "Arrange these concepts in the typical lifecycle of a secure web request.",
    blocks: [
      { id: "b2", content: "SSL/TLS handshake" },
      { id: "b1", content: "DNS resolution" },
      { id: "b3", content: "HTTP request and response" },
      { id: "b4", content: "Public key encryption and decryption" },
    ],
    correctOrder: ["b1", "b2", "b4", "b3"],
  },
  {
    type: "text",
    text: "Describe 'Event Sourcing' in system design.",
  },
  {
    type: "multipleChoice",
    text: "In graph theory, what does 'Dijkstra’s Algorithm' compute?",
    options: [
      "Shortest path between all pairs of nodes",
      "Maximum flow in a network",
      "Shortest path between two nodes",
      "Connectivity and cycle detection",
    ],
    correctAnswer: "Shortest path between two nodes",
  },
  {
    type: "output",
    text: "What is the output of: console.log((0.1 + 0.2 === 0.3) ? 'Equal' : 'Not equal');",
    correctAnswer: "Not equal",
  },
  {
    type: "selectOrder",
    text: "Organize the steps for implementing a cryptographic hash function.",
    blocks: [
      { id: "b1", content: "Take an input (or 'message')" },
      { id: "b2", content: "Hash the input into a fixed size string" },
      {
        id: "b3",
        content: "Use the hash for password storage or data integrity",
      },
    ],
    correctOrder: ["b1", "b2", "b3"],
  },
  {
    type: "multipleChoice",
    text: "What is a blockchain primarily used for?",
    options: [
      "Creating digital art",
      "Storing data securely",
      "Improving internet speed",
      "Hosting websites",
    ],
    correctAnswer: "Storing data securely",
  },
  {
    type: "multipleChoice",
    text: "What is Bitcoin?",
    options: [
      "A programming language",
      "A digital currency",
      "A blockchain platform",
      "An online marketplace",
    ],
    correctAnswer: "A digital currency",
  },
  // Intermediate Questions
  {
    type: "output",
    text: "What will be the result of a simple smart contract execution on Ethereum?",
    correctAnswer: "Depends on the contract's code and transaction input",
  },
  {
    type: "text",
    text: "Explain the concept of 'gas' in Ethereum.",
  },
  // Advanced Questions
  {
    type: "multipleChoice",
    text: "What is a '51% attack' in blockchain?",
    options: [
      "An attack on user wallets",
      "A vulnerability in blockchain algorithms",
      "Control of over 50% of a blockchain's mining power",
      "A theoretical concept where 51% of transactions are fraudulent",
    ],
    correctAnswer: "Control of over 50% of a blockchain's mining power",
  },
  {
    type: "selectOrder",
    text: "Arrange these steps in the process of minting a new cryptocurrency.",
    blocks: [
      { id: "b1", content: "Define the currency's properties" },
      { id: "b3", content: "Deploy the smart contract" },
      { id: "b2", content: "Write the smart contract code" },
      { id: "b4", content: "Verify transactions on the network" },
    ],
    correctOrder: ["b1", "b2", "b3", "b4"],
  },
  // Ultimate Difficulty Questions
  {
    type: "multipleChoice",
    text: "In LLMs, what does the 'transformer' architecture primarily focus on?",
    options: [
      "Sequential data processing",
      "Parallel data processing",
      "Data encryption",
      "Data storage optimization",
    ],
    correctAnswer: "Parallel data processing",
  },
  {
    type: "text",
    text: "Discuss the potential implications of quantum computing on blockchain cryptography.",
  },
  {
    type: "selectOrder",
    text: "Arrange these concepts in order of their development in blockchain technology.",
    blocks: [
      { id: "b1", content: "Proof of Work" },
      { id: "b3", content: "Smart Contracts" },
      { id: "b2", content: "Decentralized Finance (DeFi)" },
      { id: "b4", content: "Non-Fungible Tokens (NFTs)" },
    ],
    correctOrder: ["b1", "b3", "b2", "b4"],
  },
  {
    type: "multipleChoice",
    text: "What does 'Layer 2' refer to in blockchain technology?",
    options: [
      "A new type of cryptocurrency",
      "The second version of a blockchain",
      "A secondary framework built on top of an existing blockchain",
      "The second level of blockchain security",
    ],
    correctAnswer:
      "A secondary framework built on top of an existing blockchain",
  },
  {
    type: "multipleChoice",
    text: "What is the primary focus of human-computer interaction?",
    options: [
      "Developing new computer hardware",
      "Improving the interaction between humans and computers",
      "Studying computer algorithms",
      "Creating video games",
    ],
    correctAnswer: "Improving the interaction between humans and computers",
  },
  {
    type: "multipleChoice",
    text: "What is a startup?",
    options: [
      "A new government project",
      "A large corporation",
      "A newly emerged business venture",
      "An old company with a new direction",
    ],
    correctAnswer: "A newly emerged business venture",
  },
  // Intermediate Questions
  {
    type: "text",
    text: "Describe the concept of 'usability' in HCI.",
  },
  {
    type: "text",
    text: "Explain the importance of 'minimum viable product' (MVP) in startups.",
  },
  // Advanced Questions
  {
    type: "multipleChoice",
    text: "What is 'user experience design' in the context of HCI?",
    options: [
      "Designing computer hardware",
      "Creating algorithms for user interfaces",
      "The process of enhancing user satisfaction by improving usability",
      "Developing backend systems for user interfaces",
    ],
    correctAnswer:
      "The process of enhancing user satisfaction by improving usability",
  },
  {
    type: "text",
    text: "Discuss the role of 'pivot' in startup entrepreneurship.",
  },
  // Ultimate Difficulty Questions
  {
    type: "multipleChoice",
    text: "In HCI research, what does 'cognitive load' refer to?",
    options: [
      "The amount of mental effort being used in the working memory",
      "The physical effort of using a computer",
      "The storage capacity of a computer",
      "The speed of a computer processor",
    ],
    correctAnswer:
      "The amount of mental effort being used in the working memory",
  },
  {
    type: "selectOrder",
    text: "Arrange these steps in the typical process of user-centered design.",
    blocks: [
      { id: "b1", content: "Understand the context of use" },
      { id: "b2", content: "Specify user requirements" },
      { id: "b4", content: "Create design solutions" },
      { id: "b3", content: "Evaluate against requirements" },
    ],
    correctOrder: ["b1", "b2", "b4", "b3"],
  },
  {
    type: "text",
    text: "Explain the concept of 'lean startup' methodology.",
  },
  {
    type: "multipleChoice",
    text: "What does 'bootstrapping' mean in the context of startup companies?",
    options: [
      "Hiring a large number of employees rapidly",
      "Outsourcing major business functions",
      "Starting a company with external funding",
      "Building a company without much external capital investment",
    ],
    correctAnswer:
      "Building a company without much external capital investment",
  },
  {
    type: "multipleChoice",
    text: "According to Paul Graham, what is more important for a startup's success?",
    options: [
      "Initial funding",
      "Business location",
      "The idea",
      "The founders",
    ],
    correctAnswer: "The founders",
  },
  {
    type: "multipleChoice",
    text: "What is Y Combinator primarily known for?",
    options: [
      "A venture capital firm",
      "An entrepreneurship school",
      "A startup accelerator",
      "A tech consultancy",
    ],
    correctAnswer: "A startup accelerator",
  },
  // Intermediate Questions
  {
    type: "text",
    text: "Summarize Paul Graham's view on the importance of 'making something people want' in startups.",
  },
  {
    type: "text",
    text: "Explain the term 'ramen profitable' as used in the startup world.",
  },
  // Advanced Questions
  {
    type: "multipleChoice",
    text: "According to Graham, which quality is crucial for startup founders?",
    options: [
      "Being competitive",
      "Being wealthy",
      "Being relentless",
      "Having a technical background",
    ],
    correctAnswer: "Being relentless",
  },
  {
    type: "text",
    text: "Discuss the concept of 'Do things that don't scale' in early-stage startups.",
  },
  // Ultimate Difficulty Questions
  {
    type: "text",
    text: "Explain how Y Combinator's approach to funding early-stage startups differs from traditional venture capital.",
  },
  {
    type: "selectOrder",
    text: "Arrange these steps based on Y Combinator's typical startup advice for early growth.",
    blocks: [
      { id: "b1", content: "Focus on building a great product/service" },
      { id: "b2", content: "Talk to users and iterate based on feedback" },
      { id: "b3", content: "Achieve product-market fit" },
      { id: "b4", content: "Scale the business" },
    ],
    correctOrder: ["b1", "b2", "b3", "b4"],
  },
  {
    type: "multipleChoice",
    text: "What does Paul Graham refer to as 'startups' defining quality?",
    options: ["Innovation", "Profit", "Growth", "Resilience"],
    correctAnswer: "Growth",
  },
  {
    type: "multipleChoice",
    text: "Charlie Munger is best known for his partnership with which famous investor?",
    options: ["Warren Buffett", "Bill Gates", "George Soros", "Ray Dalio"],
    correctAnswer: "Warren Buffett",
  },
  {
    type: "multipleChoice",
    text: "Munger emphasizes the importance of what in decision-making?",
    options: ["Intuition", "Patience", "Mental Models", "Risk-taking"],
    correctAnswer: "Mental Models",
  },
  // Intermediate Questions
  {
    type: "text",
    text: "Explain Munger's concept of 'Lollapalooza effect' in decision-making.",
  },
  {
    type: "text",
    text: "Describe Munger's 'Circle of Competence' theory and its importance in investing.",
  },
  // Advanced Questions
  {
    type: "multipleChoice",
    text: "According to Munger, which of the following is crucial for investment success?",
    options: [
      "Market Timing",
      "Diversification",
      "Understanding the Business",
      "Following Trends",
    ],
    correctAnswer: "Understanding the Business",
  },
  {
    type: "text",
    text: "Discuss how Charlie Munger views the role of 'bias' in human judgment and decision-making.",
  },
  // Ultimate Difficulty Questions
  {
    type: "text",
    text: "Explain how Munger's 'second-order thinking' applies to business and investment strategies.",
  },
  {
    type: "selectOrder",
    text: "Arrange these Charlie Munger principles in the order he believes one should approach problem-solving.",
    blocks: [
      { id: "b1", content: "Identify and acknowledge your biases" },
      { id: "b2", content: "Invert the problem" },
      { id: "b3", content: "Use a multidisciplinary approach" },
      { id: "b4", content: "Think long term" },
    ],
    correctOrder: ["b1", "b3", "b2", "b4"],
  },
  {
    type: "multipleChoice",
    text: "Munger advocates for a principle called 'Margin of Safety.' What does this principle entail in investing?",
    options: [
      "Investing with a safety net to guard against market volatility",
      "Only investing in government bonds",
      "Buying stocks at a significant discount to their intrinsic value",
      "Diversifying investments across multiple sectors",
    ],
    correctAnswer:
      "Buying stocks at a significant discount to their intrinsic value",
  },

  // ... Additional questions follow the same pattern
];

let getRandomColor = () => {
  const keys = Object.keys(japaneseThemePalette);
  const randomIndex = Math.floor(Math.random() * keys.length);
  const randomKey = keys[randomIndex];
  const color = japaneseThemePalette[randomKey];

  // Handle empty or undefined color values
  if (!color || color === "") {
    return getRandomColor(); // Recursively call the function until a valid color is found
  }

  return color;
};

export const BossMode = ({
  isBossModeOpen,
  setIsBossModeOpen,
  userStateReference,
  globalStateReference,
  zap,
}) => {
  //   console.log("user state reference", userStateReference);

  const [screenColor, setScreenColor] = useState(getRandomColor());
  const [level, setLevel] = useState(0);
  const [hasDiscordTag, setHasDiscordTag] = useState(false);
  const [discordTag, setDiscordTag] = useState("");
  //   let uid = userStateReference?.databaseUserDocument?.userAuthObject?.uid;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [gameActive, setGameActive] = useState(false);
  const [lastCorrectAnswerTime, setLastCorrectAnswerTime] = useState(
    localStorage.getItem("lastCorrectAnswerTime")
  );

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSubmission = (
    answer,
    answerSet = null,
    isTextSubmission = false
  ) => {
    if (answerSet) {
      if (answer) {
        localStorage.setItem("isAnswerCorrect", "true");
        // Proceed to next question or end game

        updateLevel(
          level,
          discordTag,
          userStateReference,
          globalStateReference
        );
        setScreenColor(getRandomColor());
        //   const discordUserId = "114142818460631046";
        let whurl = import.meta.env.VITE_DISCORD_WEBHOOK_URL;

        let msgAppend =
          level + 1 >= globalStateReference?.globalLevelCounter
            ? userStateReference?.databaseUserDocument?.discordTag +
              " takes the lead! 🏴‍☠️"
            : "";
        const msg = {
          content: `<@&1194428959862030387> ${userStateReference?.databaseUserDocument?.discordTag} finished level ${level}. ${msgAppend}`,
          username: "rox",
        };
        try {
          fetch(whurl + "?wait=true", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(msg),
          });
        } catch (e) {
          console.log("error", error);
          console.log("{error}", { error });
        }
      } else {
        localStorage.setItem("isAnswerCorrect", "false");
      }
    } else if (isTextSubmission) {
      localStorage.setItem("isAnswerCorrect", "true");
      // Proceed to next question or end game

      updateLevel(level, discordTag, userStateReference, globalStateReference);
      setScreenColor(getRandomColor());
      //   const discordUserId = "114142818460631046";
      let whurl = import.meta.env.VITE_DISCORD_WEBHOOK_URL;

      let msgAppend =
        level + 1 >= globalStateReference?.globalLevelCounter
          ? userStateReference?.databaseUserDocument?.discordTag +
            " takes the lead! 🏴‍☠️"
          : "";
      const msg = {
        content: `<@&1194428959862030387> ${userStateReference?.databaseUserDocument?.discordTag} finished level ${level}. ${msgAppend}`,
        username: "rox",
      };
      try {
        fetch(whurl + "?wait=true", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(msg),
        });
      } catch (e) {
        console.log("error", error);
        console.log("{error}", { error });
      }
    } else if (answer === currentQuestion.correctAnswer) {
      // Proceed to next question or end game
      localStorage.setItem("isAnswerCorrect", "true");

      updateLevel(level, discordTag, userStateReference, globalStateReference);
      setScreenColor(getRandomColor());
      //   const discordUserId = "114142818460631046";
      let whurl = import.meta.env.VITE_DISCORD_WEBHOOK_URL;

      let msgAppend =
        level + 1 >= globalStateReference?.globalLevelCounter
          ? userStateReference?.databaseUserDocument?.discordTag +
            " takes the lead! 🏴‍☠️"
          : "";
      const msg = {
        content: `<@&1194428959862030387> ${userStateReference?.databaseUserDocument?.discordTag} finished level ${level}. ${msgAppend}`,
        username: "rox",
      };
      try {
        fetch(whurl + "?wait=true", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(msg),
        });
      } catch (e) {
        console.log("error", error);
        console.log("{error}", { error });
      }
    } else {
      localStorage.setItem("isAnswerCorrect", "false");
    }

    setGameActive(true);
    const now = new Date();
    localStorage.setItem("lastCorrectAnswerTime", now);
    setLastCorrectAnswerTime(now);
    setGameActive(true);
  };

  const handleDiscordTagInput = (event) => {
    setDiscordTag(event.target.value);
  };

  const submitDiscordTagInput = async (event) => {
    await updateDoc(userStateReference.userDocumentReference, {
      discordTag: discordTag,
    });

    userStateReference.setDatabaseUserDocument((prevDoc) => ({
      ...prevDoc,
      discordTag: discordTag,
    }));
  };

  useEffect(() => {
    const now = new Date();
    if (lastCorrectAnswerTime) {
      const hoursDiff = (now - new Date(lastCorrectAnswerTime)) / 36e5;
      if (hoursDiff < 2) {
        // Changed from 12 to 2 hours
        setGameActive(true);
      }
    }
  }, [lastCorrectAnswerTime]);

  useEffect(() => {
    if (userStateReference?.databaseUserDocument?.discordTag) {
      setHasDiscordTag(true);
      setDiscordTag(userStateReference?.databaseUserDocument?.discordTag);
      setLevel(userStateReference?.databaseUserDocument?.level || 0);
      setCurrentQuestionIndex(
        userStateReference?.databaseUserDocument?.level || 0
      );
    }
  }, [userStateReference]);
  //   useEffect(() => {
  //     localStorage.removeItem("lastCorrectAnswerTime");
  //   }, []);

  return (
    <>
      <Modal
        centered
        show={isBossModeOpen}
        style={{ backgroundColor: "black" }}
        fullscreen
      >
        <Modal.Header style={{ backgroundColor: "black", color: "white" }}>
          <Modal.Title>rox the ai boss</Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            backgroundColor: screenColor,
            color: "white",
          }}
        >
          <div style={{ textShadow: "1px 1px 5px black" }}>
            <h2>The leader</h2>
            <h4>
              {globalStateReference?.globalLeaderName} - Level:{" "}
              {globalStateReference?.globalLevelCounter}
            </h4>
            <div>
              Your level: {userStateReference?.databaseUserDocument?.level || 0}
            </div>

            {hasDiscordTag ? null : (
              <div>
                <p>Add your Discord Tag</p>

                <input
                  type="text"
                  value={discordTag}
                  onChange={handleDiscordTagInput}
                />
                <br />
                <br />
                <button onClick={submitDiscordTagInput}>Submit</button>
              </div>
            )}
          </div>
          <br />
          {!gameActive && hasDiscordTag ? (
            <Container>
              {currentQuestion.type === "output" && (
                <OutputQuestion
                  question={currentQuestion.text}
                  onAnswerSubmit={handleAnswerSubmission}
                />
              )}
              {currentQuestion.type === "text" && (
                <TextInputQuestion
                  currentQuestion={currentQuestion}
                  question={currentQuestion.text}
                  onAnswerSubmit={handleAnswerSubmission}
                />
              )}
              {currentQuestion.type === "multipleChoice" && (
                <MultipleChoiceQuestion
                  question={currentQuestion.text}
                  options={currentQuestion.options}
                  onAnswerSubmit={handleAnswerSubmission}
                />
              )}

              {currentQuestion.type === "selectOrder" && (
                <SelectionQuestion
                  question={currentQuestion}
                  onAnswerSubmit={handleAnswerSubmission}
                />
              )}
            </Container>
          ) : !hasDiscordTag ? null : (
            <RewardScreen
              isAnswerCorrect={localStorage.getItem("isAnswerCorrect")}
            />
          )}
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "black" }}>
          <Button variant="dark" onClick={() => setIsBossModeOpen(false)}>
            Back to app
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
