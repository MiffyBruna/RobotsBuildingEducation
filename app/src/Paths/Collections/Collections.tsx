import { ui } from "../../common/uiSchema";
import {
  StyledCollectionContainer,
  japaneseThemePalette,
} from "../../styles/lazyStyles";
import { Module } from "./Module/Module";

export const Collections = ({
  handleModuleSelection,
  currentPath,
}): JSX.Element | null => {
  const pathData = ui();

  // Check if the currentPath exists in the data
  if (!currentPath || !pathData || !pathData[currentPath]) return null;

  const collections = Object.keys(pathData[currentPath]);

  const displayCollections = collections.map((collection) => {
    const modules = Object.keys(pathData[currentPath][collection]);

    if (modules && modules.length > 0) {
      const isSpecialCollection =
        collection === "Coding Crash Course Version 3";
      const boxShadowStyle = {
        boxShadow: `10px 10px 0px 0px ${japaneseThemePalette.TokyoTwilight}`,
      };

      return (
        <div>
          <br />
          {/* <h3>
            {isSpecialCollection ? (
              <img
                alt={collection}
                title={collection}
                style={boxShadowStyle}
                src="https://res.cloudinary.com/dtkeyccga/image/upload/v1691640371/ROBE_assets/Collection_Banners_zlhvjw_pcb0io.gif"
              />
            ) : (
              collection
            )}
          </h3> */}
          <StyledCollectionContainer>
            {modules.map((module) => (
              <Module
                path={currentPath}
                collection={collection}
                module={module}
                handleModuleSelection={handleModuleSelection}
              />
            ))}
          </StyledCollectionContainer>
        </div>
      );
    }

    return null;
  });

  return (
    <div style={{ transition: "0.23s all ease-in-out" }}>
      {displayCollections}
    </div>
  );
};
