import isEmpty from "lodash/isEmpty";

// Define styles
const headerStyle = {
  color: "white",
  marginTop: 6,
};

export const LectureHeader = ({ uiStateReference }) => {
  // Check for the existence of the header in patreonObject
  const headerExists = !isEmpty(uiStateReference.patreonObject.header);

  // Early return if header doesn't exist
  if (!headerExists) return null;

  // Render the header if it exists
  return (
    <>
      <br />
      <h2 style={headerStyle}>
        {uiStateReference.patreonObject?.header || ""}
      </h2>
      <br />
    </>
  );
};
