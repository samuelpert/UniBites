import { SimpleGrid, Text } from "@chakra-ui/react";
import restaurants from "../data/restaurants";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  return (
    <SimpleGrid
      paddingY={8}
      columns={{ sm: 2, md: 2, lg: 1, xl: 1 }}
      spacing={8}
    >
      {restaurants.map((restaurant) => (
        <GameCardContainer key={restaurant.id}>
          {/* Pass each restaurant to GameCard */}
          <GameCard restaurant={restaurant} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
