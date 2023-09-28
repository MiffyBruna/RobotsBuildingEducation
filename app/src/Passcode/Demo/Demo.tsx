import { useEffect, useState } from "react";
import ChatGPT from "../../ChatGPT/ChatGPT";

export const Demo = ({ patreonObject }) => {
  return (
    <div>
      <h2 style={{ color: "white", marginTop: 12 }}>
        {/* Lesson 1 - Coding &amp; Logic */}
        Demo: {patreonObject.header}
      </h2>
      <ChatGPT patreonObject={patreonObject} isDemo={true} />
    </div>
  );
};
