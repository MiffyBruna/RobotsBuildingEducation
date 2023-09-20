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
        <>
          <video
            poster="https://res.cloudinary.com/dtkeyccga/image/upload/v1691891520/ROBE_assets/videoFill_hokslw.png"
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

          {patreonObject?.prompts?.patreon?.additionalContent ? (
            <MarkdownRenderer
              file={patreonObject?.prompts?.patreon?.additionalContent}
              patreonObject={patreonObject}
            />
          ) : (
            ""
          )}
        </>
      );
    }

    if (patreonObject.sourceType === "gif") {
      return <img src={patreonObject.fileSource} />;
    }

    return (
      <div
        style={{
          textAlign: "left",
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
