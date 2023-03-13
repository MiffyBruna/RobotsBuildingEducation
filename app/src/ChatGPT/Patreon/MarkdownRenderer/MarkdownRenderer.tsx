import React, { useState, useEffect } from "react";
import { marked } from "marked";

const MarkdownRenderer = ({ file }) => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    setMarkdown(file.default);
  }, [file]);

  return (
    <div
      style={{ color: "white", wordBreak: "break-word" }}
      dangerouslySetInnerHTML={{ __html: marked(markdown) }}
    />
  );
};

export default MarkdownRenderer;
