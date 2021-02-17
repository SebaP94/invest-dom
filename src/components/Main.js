import { Heading, Box, Text, Image, Link } from "@chakra-ui/react";

export const Main = (props) => (
  <Box direction="column" spacing="1.5rem" width="100%">
    <Box height="100vh" position="relative">
      <Box position="absolute" top="48" p="4" pl="16" zIndex="1">
        <Heading>Tu może być twój dom</Heading>
        <Text mt="1">
          dowiedz się{" "}
          <Link color="blue.400" fontWeight="medium" href="#about">
            więcej
          </Link>{" "}
          na temat swojego przyszłego domu.
        </Text>
      </Box>
      <Image
        zIndex="0"
        position="absolute"
        src="/images/front.png"
        height="full"
        objectFit="cover"
      />
    </Box>
    <Box id="location" height="100vh">
      <Text size="xxl">Location</Text>
    </Box>
    <Box id="offer" height="100vh">
      <Text size="xxl">OFfer</Text>
    </Box>
    <Box id="about" height="100vh">
      <Text size="xxl">about</Text>
    </Box>
    <Box id="description" height="100vh">
      <Text size="xxl">Description</Text>
    </Box>
  </Box>
);
