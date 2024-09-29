"use client";
import { Box, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/unibiteslogo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { useColorMode } from "@chakra-ui/react";
import Profile from "./Profile";

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack marginX={4} marginY={-4} spacing={4} alignItems="center">
      <Image src={logo} boxSize="120px" width="auto" />
      <SearchInput />
      <ColorModeSwitch
        colorMode={colorMode}
        toggleColorMode={toggleColorMode}
      />
      <Text fontSize={15} whiteSpace="nowrap">
        Welcome back,{" "}
        <Box as="span" fontWeight="bold">
          Samuel!
        </Box>
      </Text>
      <Profile />
    </HStack>
  );
};

export default NavBar;
