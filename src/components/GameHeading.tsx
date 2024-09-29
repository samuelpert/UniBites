import { Heading } from "@chakra-ui/react";
import React from "react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} 
  ${gameQuery.genre?.name || ""} Games`;

  return (
    <Heading
      as="h1"
      marginY={5}
      fontSize="5xl"
      bgGradient="linear(to-r, #A07338, #F1E799, #A07338)"
      bgClip="text"
    >
      Suggestions
    </Heading>
  );
};

export default GameHeading;
