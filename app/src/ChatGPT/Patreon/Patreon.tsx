import MarkdownRenderer from "./MarkdownRenderer/MarkdownRenderer";

// Style object for the video element
const videoStyle = {
  width: "100%",
  borderRadius: "30px",
  boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
};

// Style object for the Markdown content
const markdownStyle = {
  textAlign: "left",
};

// Function to display video content
const renderVideo = (patreonObject, isAutoPlay) => (
  <>
    <video
      poster="https://res.cloudinary.com/dtkeyccga/image/upload/v1696725598/Untitled_design_3_r5rq6o.png"
      style={videoStyle}
      controls
      autoPlay={isAutoPlay}
    >
      <source src={patreonObject.fileSource} type="video/mp4" />
      <source src={patreonObject.fileSource} type="video/mov" />
    </video>
    {patreonObject?.prompts?.patreon?.additionalContent && (
      <MarkdownRenderer
        file={patreonObject?.prompts?.patreon?.additionalContent}
        patreonObject={patreonObject}
      />
    )}
  </>
);

// Function to display GIF content
const renderGif = (patreonObject) => <img src={patreonObject.fileSource} />;

// Function to display Markdown content
const renderMarkdown = (patreonObject) => (
  <div style={markdownStyle}>
    <MarkdownRenderer
      file={patreonObject?.fileSource}
      patreonObject={patreonObject}
    />
  </div>
);

// Main Patreon component
const Patreon = ({ patreonObject, isAutoPlay = false }) => {
  // Function to determine which type of content to display
  const determineFileView = () => {
    if (patreonObject.sourceType === "video") {
      return renderVideo(patreonObject, isAutoPlay);
    }
    if (patreonObject.sourceType === "gif") {
      return renderGif(patreonObject);
    }
    return renderMarkdown(patreonObject);
  };

  return <div key={patreonObject.button}>{determineFileView()}</div>;
};

export default Patreon;
