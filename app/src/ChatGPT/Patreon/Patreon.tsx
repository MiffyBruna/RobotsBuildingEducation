import { useEffect, useRef, useState } from "react";
import MarkdownRenderer from "./MarkdownRenderer/MarkdownRenderer";

import { updateImpact } from "../../App.compute";
import { useZap } from "../../App.hooks";

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
const renderVideo = (patreonObject, isAutoPlay, videoRef) => (
  <>
    <video
      poster="https://res.cloudinary.com/dtkeyccga/image/upload/v1696725598/Untitled_design_3_r5rq6o.png"
      style={videoStyle}
      controls
      autoPlay={isAutoPlay}
      ref={videoRef}
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
const renderMarkdown = (patreonObject, handleScheduler) => (
  <div style={markdownStyle}>
    <MarkdownRenderer
      file={patreonObject?.fileSource}
      patreonObject={patreonObject}
      handleScheduler={handleScheduler}
    />
  </div>
);

// Main Patreon component
const Patreon = ({
  patreonObject,
  isAutoPlay = false,
  handleScheduler,
  userStateReference,
  globalStateReference,
  handleZap,
}) => {
  const zapAmount = 1;
  let zap = useZap(zapAmount, "Robots Building Education Video");
  const videoRef = useRef(null);
  let [videoDurationDetection, setVideoDurationDetection] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;
    let depositInterval;

    const handlePlay = () => {
      setIsVideoPlaying(true);
      console.log("Video is playing", patreonObject);
    };

    const handlePauseOrEnd = () => {
      setIsVideoPlaying(false);
      // Clear interval when the video is paused or ended)
      if (depositInterval) {
        console.log("clearing after play?X_X");
        clearInterval(depositInterval);
      }
    };

    const checkVideoProgress = () => {
      if (videoRef.current) {
        const videoElement = videoRef.current;
        const ninetyPercentDuration = videoElement.duration * 0.9;

        if (videoElement.currentTime >= ninetyPercentDuration) {
          console.log("Video has reached 90% completion");
          setVideoDurationDetection(true);
          handleScheduler("video");
        }
      }
    };

    if (videoElement) {
      videoElement.addEventListener("play", handlePlay);
      videoElement.addEventListener("pause", handlePauseOrEnd);
      videoElement.addEventListener("ended", handlePauseOrEnd);

      if (!videoDurationDetection) {
        videoElement.addEventListener("timeupdate", checkVideoProgress);
      }
    }

    if (
      localStorage.getItem("patreonPasscode") ===
        import.meta.env.VITE_BITCOIN_PASSCODE &&
      isVideoPlaying
    ) {
      depositInterval = setInterval(() => {
        zap().then((response) => {
          if (response?.preimage) {
            console.log("running");
            updateImpact(zapAmount, userStateReference, globalStateReference);
            handleZap("video");
          }
        });
      }, 15000);
    }

    // Cleanup
    return () => {
      if (videoElement) {
        videoElement.removeEventListener("play", handlePlay);
        videoElement.removeEventListener("pause", handlePauseOrEnd);
        videoElement.removeEventListener("ended", handlePauseOrEnd);
        videoElement.removeEventListener("timeupdate", checkVideoProgress);
      }
      if (depositInterval) clearInterval(depositInterval);
    };
  }, [videoDurationDetection, isVideoPlaying]);

  // Function to determine which type of content to display
  const determineFileView = () => {
    if (patreonObject.sourceType === "video") {
      return renderVideo(patreonObject, isAutoPlay, videoRef);
    }
    if (patreonObject.sourceType === "gif") {
      return renderGif(patreonObject);
    }
    return renderMarkdown(patreonObject, handleScheduler);
  };

  return <div key={patreonObject.button}>{determineFileView()}</div>;
};

export default Patreon;
