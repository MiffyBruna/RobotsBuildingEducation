import { useState, useEffect } from "react";

const CodeEditor = ({ patreonObject }) => {
  const [originalText, setOriginalText] = useState(
    patreonObject?.prompts?.practice?.input ||
      "I have 3 lines\nthis is my second line\nthis is the last line"
  );
  const originalLines = originalText.split("\n");
  const [userInput, setUserInput] = useState("");
  const [charValidity, setCharValidity] = useState([]);
  const [remainingLines, setRemainingLines] = useState([...originalLines]);
  const [completedPercent, setCompletedPercent] = useState(0);
  const [canSubmit, setCanSubmit] = useState(false);
  const [hasSubmit, setHasSubmit] = useState(false);

  const finalDisplay = patreonObject?.prompts?.practice?.displayCode;

  useEffect(() => {
    if (completedPercent === 100) {
      setCanSubmit(true);
    }
  }, [completedPercent]);

  const handleChange = (e) => {
    const input = e.target.value;
    const lastInputLine = input.split("\n").pop();

    let newCharValidity = [];
    for (let i = 0; i < input.length; i++) {
      newCharValidity.push(remainingLines.join("\n")[i] === input[i]);
    }

    setCharValidity(newCharValidity);

    if (remainingLines.length === 0) {
      setCompletedPercent(100); // Ensure it is capped at 100%
      setCharValidity([]); // Reset charValidity to start anew
      setUserInput(""); // Reset userInput for a new session
    } else if (remainingLines[0] === lastInputLine) {
      setRemainingLines((prevLines) => prevLines.slice(1));
      setCompletedPercent((prevPercent) => {
        const nextPercent = parseFloat(
          (prevPercent + 100 / originalLines.length).toFixed(2)
        );
        return nextPercent > 100 ? 100 : nextPercent;
      });
      setUserInput(""); // Clear the textarea for the next line
      setCharValidity([]); // Clear the charValidity array
    } else {
      setUserInput(input); // Keep the existing input intact if no line is completed
    }
  };

  const handleSubmit = () => {
    setRemainingLines(finalDisplay); // Reset the text to original
    setHasSubmit(true);
    setOriginalText(finalDisplay);
  };

  //   useEffect(() => {
  //     if(hasSubmit){

  //     }
  //   }, [hasSubmit])

  console.log(
    "patreonObject?.prompts?.practice?.reward",
    patreonObject?.prompts?.practice?.reward
  );

  return (
    <div
      style={{
        color: "#696969",
        backgroundColor: "#faf3e0",
        // minWidth: 350,
        // maxWidth: 600,
        width: "100%",
        padding: 20,
        wordBreak: "break-word",
        display: "flex",
        flexDirection: "column",
        borderRadius: 15,
      }}
    >
      <div>{completedPercent}%</div>
      <div style={{ width: "100%", backgroundColor: "#ccc" }}>
        <div
          style={{
            width: `${completedPercent > 100 ? 100 : completedPercent}%`,
            height: "10px",
            backgroundColor: "#a8d5ba", // Japanese green color
            transition: "width 0.4s ease", // Smooth animation
          }}
        ></div>
      </div>
      {patreonObject?.prompts?.practice?.context ? (
        <div style={{ marginTop: 6 }}>
          {patreonObject?.prompts?.practice?.context}
        </div>
      ) : null}

      <br />
      {}
      <textarea
        autoFocus={false}
        value={userInput}
        onChange={handleChange}
        style={{ fontFamily: "monospace", width: "100%" }}
      />
      <br />
      <button
        disabled={!canSubmit}
        style={{
          backgroundColor: canSubmit ? "#a8d5ba" : "#d789d7", // Matcha green or sakura pink
          color: canSubmit ? "#f5fffc" : "#ffeffd", // Very light green or very light pink
        }}
        onClick={handleSubmit}
      >
        Submit
      </button>

      <br />

      {hasSubmit && patreonObject?.prompts?.practice?.reward
        ? patreonObject?.prompts?.practice?.reward
        : null}

      <pre>
        {hasSubmit
          ? originalText.split("").map((char, index) => (
              <span
                key={index}
                style={{ textShadow: "0px 0px 1px black", color: "#1aba41" }}
              >
                {char}
              </span>
            ))
          : remainingLines[0]?.split("").map((char, index) => (
              <span
                key={index}
                style={{
                  backgroundColor:
                    charValidity[index] === undefined
                      ? "#faf3e0"
                      : charValidity[index]
                      ? "#a8d5ba"
                      : "#d789d7",
                  color:
                    charValidity[index] === undefined
                      ? "#696969"
                      : charValidity[index]
                      ? "#f5fffc"
                      : "#ffeffd",
                }}
              >
                {char}
              </span>
            ))}
      </pre>
    </div>
  );
};

export default CodeEditor;
