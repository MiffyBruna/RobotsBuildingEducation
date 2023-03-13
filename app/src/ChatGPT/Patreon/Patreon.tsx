// @ts-nocheck

import MarkdownRenderer from "./MarkdownRenderer/MarkdownRenderer";

let Patreon = ({ patreonObject }) => {
  let determineFileView = (patreonObject) => {
    if (patreonObject.sourceType === "video") {
      return (
        <video
          style={{
            width: "100%",
            borderRadius: "30px",
            boxShadow:
              "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
          }}
          controls
        >
          <source src={patreonObject.fileSource} type="video/mp4" />
          <source src={patreonObject.fileSource} type="video/mov" />
        </video>
      );
    }

    return (
      <div style={{ textAlign: "left" }}>
        <MarkdownRenderer file={patreonObject.fileSource} />
      </div>
    );
  };

  return (
    <div key={patreonObject.button}>{determineFileView(patreonObject)}</div>
  );
};

export default Patreon;
