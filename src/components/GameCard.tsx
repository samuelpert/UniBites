import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import Like from "./Like";
import Avatar from "./Avatar";
import React from "react";

interface Props {
  restaurant: {
    id: number;
    name: string;
    slug: string;
    image: string;
    description: string;
  };
}

const GameCard = ({ restaurant }: Props) => {
  return (
    <Stack minH={"50vh"} direction={{ base: "column", md: "row" }} spacing={6}>
      <Box key={restaurant.id}>
        <Flex flex={1}>
          <Image
            alt={"Login Image"}
            objectFit={"cover"}
            src={restaurant.image}
            maxH={"400px"}
          />
        </Flex>
        <Flex
          p={8}
          flex={1}
          align={"center"}
          justify={"center"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: useBreakpointValue({ base: "20%", md: "30%" }),
                  position: "absolute",
                  bottom: 2,
                  left: 0,
                  bg: "yellow.400",
                  zIndex: -1,
                }}
              >
                {restaurant.name}
              </Text>
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
              {restaurant.description}
            </Text>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Button
                rounded={"full"}
                bg={"yellow.400"}
                color={"black"}
                _hover={{
                  bg: "yellow.500",
                }}
              >
                Menu
              </Button>
              <Button
                rounded={"full"}
                bg={"yellow.400"}
                color={"black"}
                _hover={{
                  bg: "yellow.500",
                }}
              >
                Take me there
              </Button>
              <Button
                rounded={"full"}
                bg={"yellow.400"}
                color={"black"}
                _hover={{
                  bg: "yellow.500",
                }}
              >
                Review
              </Button>
              <HStack>
                <Like />
                <Text fontSize={20}>{6 + restaurant.id}+</Text>
              </HStack>
            </Stack>
            <HStack>
              <Avatar />
              <Text>
                Liked by{" "}
                <Text as="span" fontWeight="bold">
                  Sebas
                </Text>{" "}
                and{" "}
                <Text as="span" fontWeight="bold">
                  others
                </Text>{" "}
                2 hours ago.
              </Text>
            </HStack>
          </Stack>
        </Flex>
      </Box>
    </Stack>
  );
};

export default GameCard;
