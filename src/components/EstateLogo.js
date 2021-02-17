import { Flex, Box, Image, Text } from "@chakra-ui/react";

export const EstateLogo = (props) => (
  <Flex direction="row" {...props}>
    <Flex
      direction="row"
      justify="center"
      align="center"
      mr="2"
      fontSize="3xl"
      fontWeight="medium"
      {...props}
    >
      <Text color="gray.700" mr="1">
        Osiedle
      </Text>
      <Text color="green.500">Brzozowe</Text>
    </Flex>

    <Image
      src="/images/logos/birch.svg"
      alt="me"
      height="14"
      objectFit="contain"
      mr="4"
    />
  </Flex>
);
