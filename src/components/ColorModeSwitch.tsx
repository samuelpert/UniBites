import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";

interface Props {
  colorMode: "light" | "dark"; // Define that it can only be 'light' or 'dark'
  toggleColorMode: () => void; // Function that returns void
}

const ColorModeToggle = ({ colorMode, toggleColorMode }: Props) => {
  return (
    <Button onClick={toggleColorMode}>
      {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
};

export default ColorModeToggle;
