// @ts-nocheck

import MarkdownRenderer from "./MarkdownRenderer/MarkdownRenderer";

let Patreon = ({
  patreonObject,
  isGeneratedDemo = false,
  isAutoPlay = false,
}) => {
  if (isGeneratedDemo) {
    return <div>{patreonObject?.prompts?.patreon?.response || ""}</div>;
  }
  let determineFileView = (patreonObject) => {
    if (patreonObject.sourceType === "video") {
      return (
        <video
          poster="https://res.cloudinary.com/eduprojectsil/image/upload/v1674212147/Screen_Shot_2023-01-20_at_2.55.21_AM_ipay84.png"
          style={{
            width: "100%",
            borderRadius: "30px",
            boxShadow:
              "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
          }}
          controls
          autoPlay={isAutoPlay}
        >
          <source src={patreonObject.fileSource} type="video/mp4" />
          <source src={patreonObject.fileSource} type="video/mov" />
        </video>
      );
    }

    if (patreonObject.sourceType === "gif") {
      return (
        <img
          // style={{
          //   width: "100%",
          //   borderRadius: "30px",
          //   boxShadow:
          //     "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
          // }}
          src={patreonObject.fileSource}
        />
      );
    }

    return (
      <div
        style={{
          textAlign: "left",
          // width: "1000",
        }}
      >
        <MarkdownRenderer
          file={patreonObject?.fileSource}
          patreonObject={patreonObject}
        />
      </div>
    );
  };

  return (
    <div key={patreonObject.button}>{determineFileView(patreonObject)}</div>
  );
};

export default Patreon;
