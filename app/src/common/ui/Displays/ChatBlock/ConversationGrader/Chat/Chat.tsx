import React, { useEffect, useRef } from "react";
import { RoxanaLoadingAnimation } from "../../../../../uiSchema";

export const Chat = ({ conversation, gradeResult }) => {
  const requestStyle = {
    textAlign: "left",
    backgroundColor: "#2C2C2E",
    padding: "10px",
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px",
    borderBottomRightRadius: "20px",
    marginBottom: "10px",
    maxWidth: "70%",
    alignSelf: "flex-start",
    borderBottomLeftRadius: "0px",
  };

  const responseStyle = {
    textAlign: "left",
    backgroundColor: "#007aff",
    color: "white",
    padding: "10px",
    borderRadius: "10px",
    marginBottom: "10px",
    maxWidth: "70%",
    alignSelf: "flex-end",
    borderBottomRightRadius: "0px",
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px",
    borderBottomLeftRadius: "20px",
  };
  const loadingStyle = {
    textAlign: "left",
    backgroundColor: "black",
    color: "white",
    padding: "10px",
    borderRadius: "10px",
    marginBottom: "10px",
    maxWidth: "70%",
    alignSelf: "flex-end",
    borderBottomRightRadius: "0px",
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px",
    borderBottomLeftRadius: "20px",
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "500px",
    padding: "15px",
    backgroundColor: "black",
    overflowY: "scroll",
    height: 300,
  };
  const bottomRef = useRef(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [conversation]);

  if (conversation) {
    return (
      <div style={containerStyle}>
        {conversation?.map((item, index) => (
          <React.Fragment key={index}>
            {item?.request ? (
              <div style={requestStyle}>
                {item.request ? item.request : null}
              </div>
            ) : null}

            <div
              style={item.response.length > 0 ? responseStyle : loadingStyle}
            >
              {item.response.length > 0 ? (
                item.response
              ) : (
                <RoxanaLoadingAnimation />
              )}
            </div>
          </React.Fragment>
        ))}
        <div ref={bottomRef}></div>
      </div>
    );
  } else {
    return null;
  }
};
