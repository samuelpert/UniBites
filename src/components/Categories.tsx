"use client";

import { ReactElement } from "react";
import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  Image,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";
import salad from "../assets/salad_1895747.png";
import asian from "../assets/sushi_737961.png";
import burger from "../assets/burger_737974.png";
import sandwich from "../assets/sandwich_737958.png";
import coffee from "../assets/coffee_737992.png";
import dessert from "../assets/dessert.png";
interface FeatureProps {
  title: any;
  icon: ReactElement;
}

const Feature = ({ title, icon }: FeatureProps) => {
  return (
    <Stack align="center">
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Box p={4} borderRadius="md" bg={useColorModeValue("gray.200", "gray.800")}>
      <SimpleGrid columns={{ base: 3, md: 3 }} spacing={10}>
        <Feature
          icon={<Image src={salad} w={10} h={10} />}
          title={<Button variant="link">Healthy Food</Button>}
        />
        <Feature
          icon={<Image src={asian} w={10} h={10} />}
          title={<Button variant="link">Asian</Button>}
        />
        <Feature
          icon={<Image src={burger} w={10} h={10} />}
          title={<Button variant="link">Burger</Button>}
        />
        <Feature
          icon={<Image src={sandwich} w={10} h={10} />}
          title={<Button variant="link">Sandwich</Button>}
        />
        <Feature
          icon={<Image src={coffee} w={10} h={10} />}
          title={<Button variant="link">Cafe</Button>}
        />
        <Feature
          icon={<Image src={dessert} w={10} h={10} />}
          title={<Button variant="link">Dessert</Button>}
        />
      </SimpleGrid>
    </Box>
  );
}
