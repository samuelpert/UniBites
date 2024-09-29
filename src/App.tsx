import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useFetchGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useFetchGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import SimpleThreeColumns from "./components/Categories";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  value: string;
  searchText: string;
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "main main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "220px 1fr",
      }}
    >
      <GridItem area="nav" paddingX={4} paddingY={10}>
        <NavBar />
      </GridItem>
      <GridItem area="main" paddingX={4}>
        <SimpleThreeColumns />
        <GameHeading gameQuery={gameQuery} />
        <Flex>
          <Box marginRight={4}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
          </Box>
          <SortSelector
            order={gameQuery.value}
            onOrderingValue={(value) => setGameQuery({ ...gameQuery, value })}
          />
        </Flex>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default App;
