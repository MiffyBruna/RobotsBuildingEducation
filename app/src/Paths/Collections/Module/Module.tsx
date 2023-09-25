import { renderWithTooltip, ui } from "../../../common/uiSchema";
import { ComingSoonModule, StyledModule } from "../../../styles/lazyStyles";
import { Link } from "react-router-dom";

export const Module = ({
  handleModuleSelection,
  path,
  collection,
  module,
}): JSX.Element | null => {
  let currentModule = ui()[path][collection][module];

  if (currentModule?.underConstruction && currentModule?.isModuleDisabled) {
    return (
      <ComingSoonModule
        patreonObject={currentModule}
        key={currentModule.button}
        onClick={() => {
          !currentModule?.isModuleDisabled
            ? handleModuleSelection(currentModule, module)
            : null;
        }}
      >
        {currentModule.sourceType === "video" ? (
          <span>
            {" "}
            &#9658;
            <br /> {currentModule.button}
          </span>
        ) : (
          ""
        )}
        {currentModule.sourceType === "markdown" ? (
          <span>
            📄 <br /> {currentModule.button}
          </span>
        ) : (
          ""
        )}
      </ComingSoonModule>
    );
  }

  return (
    <StyledModule
      patreonObject={currentModule}
      key={currentModule.button}
      onClick={() => {
        !currentModule?.isModuleDisabled
          ? handleModuleSelection(currentModule, module)
          : null;
      }}
    >
      {currentModule.sourceType === "video" ? (
        <span>
          {" "}
          &#9658;
          <br /> {currentModule.button}
        </span>
      ) : (
        ""
      )}
      {currentModule.sourceType === "markdown" ? (
        <span>
          📄 <br /> {currentModule.button}
        </span>
      ) : (
        ""
      )}
    </StyledModule>
  );
};
