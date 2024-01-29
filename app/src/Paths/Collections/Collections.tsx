import styled, { keyframes } from "styled-components";
import { ui } from "../../common/uiSchema";
import {
  StyledCollectionContainer,
  japaneseThemePalette,
} from "../../styles/lazyStyles";
import { Module } from "./Module/Module";

const delayedAnimation = keyframes`
from {
    transform: translateY(100px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;
const StyledAnimatedModule = styled.div`
  animation: ${delayedAnimation} 0.15s ease-out;
  animation-delay: ${(props) => props.index * 0.06}s; /* Delay based on index */
  opacity: 0; /* Start with opacity 0 to make the animation visible */
  animation-fill-mode: forwards; /* Keep the element visible after the animation */
`;
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
            {modules.map((module, index) => (
              <StyledAnimatedModule index={index} key={module}>
                <Module
                  path={currentPath}
                  collection={collection}
                  module={module}
                  handleModuleSelection={handleModuleSelection}
                />
              </StyledAnimatedModule>
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
