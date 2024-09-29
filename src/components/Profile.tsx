import {
  Avatar,
  Button,
  Center,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  useDisclosure,
  Text,
} from "@chakra-ui/react";

import profilepic from "../assets/profilepic.png";

const Profile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Menu isOpen={isOpen}>
        <MenuButton
          as={Button}
          rounded={"full"}
          variant={"link"}
          cursor={"pointer"}
          minW={0}
          onClick={isOpen ? onClose : onOpen}
        >
          <Avatar size={"sm"} src={profilepic} />
        </MenuButton>
        <MenuList alignItems={"center"}>
          <br />
          <Center>
            <Avatar size={"2xl"} src={profilepic} />
          </Center>
          <br />
          <Center>
            <Text fontSize={25}>Samuel</Text>
          </Center>
          <br />
          <MenuDivider />
          <MenuItem>Your Friends</MenuItem>
          <MenuItem>Account Settings</MenuItem>
          <MenuItem>Logout</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default Profile;
