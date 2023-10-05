import isEmpty from "lodash/isEmpty";

export const LectureHeader = ({ uiStateReference }) => {
  let result = !isEmpty(uiStateReference.patreonObject.header) ? (
    <>
      <br />
      <h2 style={{ color: "white", marginTop: 12 }}>
        {uiStateReference.patreonObject?.header || ""}
      </h2>
      <br />
    </>
  ) : null;

  return result;
};
