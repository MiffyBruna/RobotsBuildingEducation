import React, { useState, useEffect } from "react";

export const processChildren = (children) => {
  // Flatten the children and split text nodes into words, preserving JSX elements
  let elements = [];
  React.Children.forEach(children, (child) => {
    if (typeof child === "string") {
      elements.push(
        ...child.split(" ").map((word) => ({ type: "word", value: word }))
      );
    } else {
      elements.push({ type: "jsx", value: child });
    }
  });
  return elements;
};

export const Typewriter = ({ speed, children }) => {
  const [displayedContent, setDisplayedContent] = useState([]);
  const [index, setIndex] = useState(0);

  const childrenArray = processChildren(children);

  useEffect(() => {
    if (index < childrenArray.length) {
      const timer = setTimeout(() => {
        setDisplayedContent(childrenArray.slice(0, index + 1));
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [index, childrenArray, speed]);

  return (
    <div>
      {displayedContent.map((element, idx) =>
        element.type === "jsx" ? (
          React.cloneElement(element.value, { key: idx })
        ) : (
          <span key={idx}>{element.value} </span>
        )
      )}
    </div>
  );
};
