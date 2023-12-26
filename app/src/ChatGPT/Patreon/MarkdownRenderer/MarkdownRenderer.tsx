import React, { useState, useEffect, useRef } from "react";
import { marked } from "marked";
import { isEmpty } from "@firebase/util";

const MarkdownRenderer = ({ file, patreonObject, handleScheduler }) => {
  const [markdown, setMarkdown] = useState("");
  const [hasScrolledEighty, setHasScrolledEighty] = useState(false);
  const divRef = useRef(null); // Ref for the div

  useEffect(() => {
    setMarkdown(file?.default);
    const handleScroll = () => {
      if (!divRef.current || hasScrolledEighty) return;

      const divTop = divRef.current.offsetTop;
      const divHeight = divRef.current.offsetHeight;
      const scrollPosition = window.scrollY + window.innerHeight;

      // Check if 80% of the div is scrolled
      if (scrollPosition >= divTop + divHeight * 0.8) {
        setHasScrolledEighty(true); // Update state to prevent further checks
        handleScheduler("essay");
        // Perform any action when 80% of the div is scrolled
      }
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [file, hasScrolledEighty]);

  if (isEmpty(file)) {
    return <div>{patreonObject?.prompts?.patreon?.response || ""}</div>;
  }

  return (
    <div
      ref={divRef}
      style={{ color: "white", wordBreak: "break-word" }}
      dangerouslySetInnerHTML={{ __html: marked(markdown) }}
    />
  );
};

export default MarkdownRenderer;
