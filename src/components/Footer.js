import { Flex } from "@chakra-ui/react";

export const Footer = (props) => (
  <Flex
    as="footer"
    w="full"
    position="relative"
    background="gray.900"
    color="gray.200"
    px={[8, 16, 24]}
    py={[2, 4, 6]}
    {...props}
  />
);
