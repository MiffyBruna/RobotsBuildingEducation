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
export const Paths = ({ handlePathSelection }): JSX.Element => {
  // no exceptions to active prop currently.
  // active prop will handle some styling to display restricted or blocked access

  const top = ["Engineer", "Creator", "Entrepeneur"];
  const bot = [
    "RO.₿.E",
    // "Raise Ur Hand",
    "Boss Mode",
  ];

  let displayTop = top.map((path) => (
    <StyledLink
      active
      to="/"
      path={path}
      id={path}
      onClick={handlePathSelection}
    >
      {path !== "Entrepeneur" ? path : "Dealer"}
    </StyledLink>
  ));

  let displayBot = bot.map((path) => (
    <StyledLink
      active
      to="/"
      path={path}
      id={path}
      onClick={handlePathSelection}
      isBot
    >
      {path !== "Entrepeneur" ? path : "Dealer"}
    </StyledLink>
  ));

  return (
    <>
      <StyledNavigationContainer>{displayTop}</StyledNavigationContainer>
      <StyledNavigationContainer>{displayBot}</StyledNavigationContainer>
    </>
  );
};
