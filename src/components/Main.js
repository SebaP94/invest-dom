import { Heading, Box, Text, Image, Link, Flex } from "@chakra-ui/react";
import { Grid, Icon } from "@chakra-ui/react";
import { BsFillHouseDoorFill, BsHammer } from "react-icons/bs";
import { BiLike } from "react-icons/bi";
import { FaCity } from "react-icons/fa";

import { EstateLogo } from "../components/EstateLogo";

export const Main = (props) => (
  <Box direction="column" spacing="1.5rem" width="100%">
    <Box height="100vh" position="relative">
      <Box position="absolute" top="48" p="4" pl="16" zIndex="1">
        <Heading>To może być twój dom</Heading>
        <Text mt="1">
          dowiedz się{" "}
          <Link color="blue.400" fontWeight="medium" href="#about">
            więcej
          </Link>
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
    <Box
      id="about"
      height="100vh"
      py="4"
      px="12"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      bg="gray.100"
    >
      <Box mb="12">
        <Flex direction="row">
          <Flex
            direction="row"
            justify="center"
            align="center"
            mr="2"
            mb="4"
            fontSize="6xl"
            fontWeight="medium"
          >
            <Text color="gray.700" mr="1">
              Osiedle
            </Text>
            <Text color="green.500">Brzozowe</Text>
          </Flex>
          <Image src="/images/logos/birch.svg" alt="me" height="48" ml="8" />
        </Flex>
      </Box>
      <Grid
        my="12"
        display="grid"
        gridTemplateColumns="repeat(4, 1fr)"
        gridGap="4"
      >
        <OfferItem>
          <Icon
            as={BsFillHouseDoorFill}
            w={16}
            h={16}
            color="blue.500"
            m={2}
          ></Icon>
          10 domów zlokalizowanych w malowniczej części Pisarzowic przy ul.
          Brzozowej.
        </OfferItem>

        <OfferItem>
          <Icon as={BsHammer} w={16} h={16} color="blue.500" m={2}></Icon>
          Pewny i solidny wykonawca.
        </OfferItem>
        <OfferItem>
          <Icon as={BiLike} w={16} h={16} color="blue.500" m={2}></Icon>
          Spokojna, zielona i dobrze skomunikowana okolica.
        </OfferItem>

        <OfferItem>
          <Icon as={FaCity} w={16} h={16} color="blue.500" m={2}></Icon>
          Bliska odległość do Bielska-Białej (ok 12min. samochodem).
        </OfferItem>
      </Grid>
    </Box>
    <Grid
      id="description"
      height="100vh"
      gridTemplateColumns="1fr 2fr"
      bg="gray.50"
    >
      <Image src="/images/z_gory.jpg" alt="me" objectFit="contain" mr="4" />
    </Grid>
  </Box>
);

const OfferItem = (props) => (
  <Box
    {...props}
    fontSize="2xl"
    fontWeight="medium"
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    textAlign="center"
  ></Box>
);
