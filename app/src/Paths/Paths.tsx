import { Link } from "react-router-dom";
import { uiPaths } from "../common/uiSchema";
import {
  StyledNavigationContainer,
  StyledPath,
  StyledLink,
} from "../styles/lazyStyles";

/**
 *
 * @props
 *   @param handlePathSelection some event to determine which collections to render.
 * @returns a JSX.Element
 */
export const Paths = ({
  handlePathSelection,
  pathSelectionAnimationData,
}): JSX.Element => {
  // no exceptions to active prop currently.
  // active prop will handle some styling to display restricted or blocked access

  const top = ["Engineer", "Creator", "Entrepeneur"];

  let displayTop = top.map((path) => (
    <StyledLink
      active
      to="/"
      pathSelectionAnimationData={pathSelectionAnimationData}
      path={path}
      id={path}
      onClick={handlePathSelection}
    >
      {path !== "Entrepeneur" ? path : "Dealer"}
    </StyledLink>
  ));

  return (
    <>
      <StyledNavigationContainer>{displayTop}</StyledNavigationContainer>
    </>
  );
};
