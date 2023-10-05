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
  if (currentPath) {
    let path = ui()[currentPath]; // Engineer: {}

    let collections = Object.keys(path); // []]

    let display = collections.map((collection) => {
      let modules = Object.keys(path[collection]);

      if (modules?.length) {
        return (
          <div>
            <br />
            <h3>
              {collection == "Coding Crash Course Version 3" ? (
                <img
                  alt="Coding Crash Course Version 3"
                  title="Coding Crash Course Version 3"
                  style={{
                    boxShadow: `10px 10px 0px 0px ${japaneseThemePalette.TokyoTwilight}`,
                  }}
                  src="https://res.cloudinary.com/dtkeyccga/image/upload/v1691640371/ROBE_assets/Collection_Banners_zlhvjw_pcb0io.gif"
                />
              ) : (
                collection
              )}
            </h3>

            <br />
            <div></div>
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
    });

    return (
      <>
        <div
          style={{
            transition: "0.23s all ease-in-out",
          }}
        >
          {display}
        </div>
      </>
    );
  }
};
