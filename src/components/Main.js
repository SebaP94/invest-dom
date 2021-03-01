import { Heading, Box, Text, Image, Link, Flex } from "@chakra-ui/react";
import { Grid, Icon } from "@chakra-ui/react";
import { BsFillHouseDoorFill, BsHammer } from "react-icons/bs";
import { BiLike } from "react-icons/bi";
import { FaCity } from "react-icons/fa";

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";

export const Main = (props) => (
  <Box
    direction="column"
    spacing="1.5rem"
    width="100%"
    position="relative"
    top={{ base: 28, md: 24 }}
  >
    <Box
      height={{ base: "100vh", md: "calc(100vh - 6rem)" }}
      py={12}
      position="relative"
    >
      <Box
        position={{ base: "relative" }}
        top={{ base: "unset", lg: 36 }}
        p="4"
        pl={{ base: 12, lg: 16 }}
        zIndex="1"
      >
        <Heading fontSize={{ base: 28, lg: "48px" }}>
          To może być twój dom
        </Heading>
        <Text mt="1">
          dowiedz się
          <Link color="blue.400" fontWeight="medium" href="#about" mx={1}>
            więcej
          </Link>
          na temat swojego przyszłego domu.
        </Text>
      </Box>
      <Image
        zIndex="0"
        position={{ base: "relative", lg: "absolute" }}
        src="/images/front.png"
        width={{ base: "unset", lg: "100vw" }}
        height={{ base: "auto", lg: "calc(100vh - 6rem)" }}
        top={{ base: "unset", lg: 0 }}
        width="full"
        margin="center"
        objectFit={{ base: "cover", lg: "cover" }}
      />
    </Box>
    <Box
      id="about"
      py="4"
      px="12"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      bg="gray.100"
    >
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
    <Flex id="description" direction="column" bg="gray.50" pt={36} px={48}>
      <EstateItem>
        <EstateImage src="/images/z_gory.jpg" />
        <EstateText>
          <Text mb={8} fontWeight="medium" fontSize="large">
            Osiedle składa się z 10 domów jednorodzinnych.
          </Text>
          <Text>
            Kazdy z budynków posiada powierzchnie 108m2 na którą składają się
            dwie kondygnacje. Dodakowo przy kadym z budynków zostanie postawiona
            wiata garazowa.
          </Text>
        </EstateText>
      </EstateItem>

      <EstateItem>
        <EstateImage src="/images/ogrod.jpg" />
        <EstateText>
          <Text mb={8} fontWeight="medium" fontSize="large">
            Nowoczosne architektura, najwyzszej jakości materiały w połączeniu z
            solidnym wykonaniem.
          </Text>
          <Text>
            Budynki tworzą zwartą bryłę w kolorze grafitowym o kącie nachylenia
            połaci 35 stopni. Elewacja pokryta tynkiem w odcieniach jasnych.
          </Text>
        </EstateText>
      </EstateItem>
      <EstateItem width="full">
        <EstateImage src="/images/wieczor.jpg"></EstateImage>
        <EstateText>
          <Text width="full" mb={8} fontWeight="medium" fontSize="large">
            Kameralnie połozone w spokojnej okolicy z dala od miejskiego.
          </Text>
        </EstateText>
      </EstateItem>
    </Flex>
    <Flex
      id="offer"
      direction="column"
      mb={12}
      bg="gray.50"
      pt={24}
      pb={12}
      px={48}
    >
      <CurrentStateOfBuildings></CurrentStateOfBuildings>
    </Flex>
  </Box>
);
const EstateText = (props) => (
  <Flex
    direction="column"
    justify="center"
    px={4}
    maxWidth="2xl"
    {...props}
  ></Flex>
);
const EstateItem = (props) => <Flex mb={48} direction="row" {...props}></Flex>;
const EstateImage = (props) => (
  <Image alt="me" objectFit="contain" mr="12" width="36rem" {...props} />
);

const CurrentStateOfBuildings = () => {
  const data = [
    { number: 1, price: "495 000", areaOfField: "700m2", state: "dosetępny" },
    { number: 2, price: "495 000", areaOfField: "700m2", state: "dosetępny" },
    { number: 3, price: "495 000", areaOfField: "700m2", state: "dosetępny" },
    { number: 4, price: "495 000", areaOfField: "700m2", state: "dosetępny" },
    { number: 5, price: "495 000", areaOfField: "700m2", state: "dosetępny" },
    { number: 6, price: "495 000", areaOfField: "700m2", state: "dosetępny" },
    { number: 7, price: "495 000", areaOfField: "700m2", state: "dosetępny" },
    { number: 8, price: "495 000", areaOfField: "700m2", state: "dosetępny" },
    { number: 9, price: "495 000", areaOfField: "700m2", state: "dosetępny" },
    { number: 10, price: "495 000", areaOfField: "700m2", state: "dosetępny" },
  ];
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Numer budynku</Th>
          <Th isNumeric>Cena</Th>
          <Th isNumeric>Powierzchnia działi</Th>
          <Th textAlign="right">Status</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.map(({ number, price, areaOfField, state }) => (
          <Tr key={number}>
            <Td>{number}</Td>
            <Td isNumeric>{price} zł</Td>
            <Td isNumeric>{areaOfField}</Td>
            <Td
              textAlign="right"
              color={state === "dostepny" ? "red.500" : "green.500"}
            >
              {state}
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

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
