import { Flex, useColorMode } from "@chakra-ui/react";

export const Container = (props) => {
  const { colorMode } = useColorMode();

  const bgColor = { light: "gray.50", dark: "gray.900" };

  const color = { light: "gray.800", dark: "gray.50" };
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      max-width="1920px"
      bg={"gray.50"}
      color={"gray.800"}
      {...props}
    />
  );
};
