import styled, { keyframes } from "styled-components";
import {
  StyledNavigationContainer,
  StyledLink,
  FadeInComponent,
} from "../styles/lazyStyles";

// Helper function to create display elements
const delayedAnimation = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
} 
`;
const StyledPathItem = styled.div`
  animation: ${delayedAnimation} 0.3s ease-out;
  animation-delay: ${(props) => props.index * 0.15}s; /* Delay based on index */
  opacity: 0; /* Start with opacity 0 to make the animation visible */
  animation-fill-mode: forwards; /* Keep the element visible after the animation */
`;
const createDisplayTop = (topPaths, handlePathSelection, animationData) => {
  return topPaths.map((path, index) => {
    const displayText = path !== "Entrepeneur" ? path : "Dealer";

    return (
      <StyledPathItem index={index} key={path}>
        <StyledLink
          active
          to="/"
          pathSelectionAnimationData={animationData}
          path={path}
          id={path}
          onClick={handlePathSelection}
          key={path}
        >
          {displayText}
        </StyledLink>
      </StyledPathItem>
    );
  });
};

/**
 * Paths Component
 *
 * @param handlePathSelection Function to handle path selection
 * @param pathSelectionAnimationData Data for path selection animation
 * @returns JSX.Element
 */
export const Paths = ({
  handlePathSelection,
  pathSelectionAnimationData,
}): JSX.Element => {
  // Define the top paths
  const topPaths = ["Engineer", "Creator", "Entrepeneur"];

  // Generate the display elements for the top paths
  const displayTop = createDisplayTop(
    topPaths,
    handlePathSelection,
    pathSelectionAnimationData
  );

  return <StyledNavigationContainer>{displayTop}</StyledNavigationContainer>;
};
