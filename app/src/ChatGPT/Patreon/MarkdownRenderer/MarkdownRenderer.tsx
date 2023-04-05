import React, { useState, useEffect } from "react";
import { marked } from "marked";
import { isEmpty } from "@firebase/util";

const MarkdownRenderer = ({ file, patreonObject }) => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {

    setMarkdown(file?.default);
  }, [file]);

  if(isEmpty(file)){
    return( 
    <div>
      {patreonObject?.prompts?.patreon?.response || ''}
    </div>
    )
  }
  return (
    <div
      style={{ color: "white", wordBreak: "break-word" }}
      dangerouslySetInnerHTML={{ __html: marked(markdown) }}
    />
  );
};

export default MarkdownRenderer;
