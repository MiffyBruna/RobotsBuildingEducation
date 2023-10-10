import { StyledNavigationContainer, StyledLink } from "../styles/lazyStyles";

// Helper function to create display elements
const createDisplayTop = (topPaths, handlePathSelection, animationData) => {
  return topPaths.map((path) => {
    const displayText = path !== "Entrepeneur" ? path : "Dealer";

    return (
      <StyledLink
        active
        to="/"
        pathSelectionAnimationData={animationData}
        path={path}
        id={path}
        onClick={handlePathSelection}
      >
        {displayText}
      </StyledLink>
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
