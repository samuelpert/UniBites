"use client";

import { Avatar, Box, Flex } from "@chakra-ui/react";

export default function AvatarWithRipple() {
  const size = "40px";
  const color = "teal";

  return (
    <Flex justifyContent="left" alignItems="left" overflow="hidden">
      <Box
        as="div"
        position="relative"
        w={size}
        h={size}
        _before={{
          content: "''",
          position: "relative",
          display: "block",
          width: "300%",
          height: "300%",
          boxSizing: "border-box",
          marginLeft: "-100%",
          marginTop: "-100%",
          borderRadius: "50%",
        }}
      >
        <Avatar
          src="https://i.pravatar.cc/300"
          size="full"
          position="absolute"
          top={0}
        />
      </Box>
    </Flex>
  );
}
