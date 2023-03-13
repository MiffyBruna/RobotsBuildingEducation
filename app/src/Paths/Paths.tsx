import { uiPaths } from "../common/uiSchema";
import { StyledNavigationContainer, StyledPath } from "../styles/lazyStyles";

/**
 *
 * @props
 *   @param handlePathSelection some event to determine which collections to render.
 * @returns a JSX.Element
 */
export const Paths = ({ handlePathSelection }): JSX.Element => {
  // no exceptions to active prop currently.
  // active prop will handle some styling to display restricted or blocked access

  let display = uiPaths.map((path) => (
    <StyledPath path={path} id={path} active onClick={handlePathSelection}>
      {path}
    </StyledPath>
  ));

  return <StyledNavigationContainer>{display}</StyledNavigationContainer>;
};
