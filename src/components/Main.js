import { Heading, Box, Text, Image, Link, Flex } from "@chakra-ui/react";
import { Grid, Icon } from "@chakra-ui/react";
import { BsFillHouseDoorFill, BsHammer } from "react-icons/bs";
import { BiLike } from "react-icons/bi";
import { FaCity, FaCheck, FaTimes } from "react-icons/fa";

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

const yPadding = [8, 16, 24];

export const Main = (props) => (
  <Box
    as="main"
    direction="column"
    spacing="1.5rem"
    width="100%"
    position="relative"
    mt={{ base: 28, md: 24 }}
  >
    <Box
      height={{ base: "calc(100vh - 7rem)", md: "calc(100vh - 6rem)" }}
      position="relative"
      overflow="hidden"
      pt={16}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box
        position={{ base: "relative" }}
        pr="4"
        pl={{ base: 12, lg: 12, xl: 16 }}
        zIndex="1"
      >
        <Heading fontSize={{ base: "2xl", sm: "4xl", lg: "4xl" }}>
          To może być twój dom
        </Heading>
        <Text mt="1" fontSize={{ base: "md", sm: "2xl", lg: "2xl" }}>
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
        src="/images/front-opt.png"
        width={{ base: "unset", lg: "100vw" }}
        height={{ base: "60vh", lg: "calc(100vh - 6rem)" }}
        top={{ base: "unset", lg: 0 }}
        width="full"
        margin="center"
        objectFit="cover"
      />
    </Box>
    <Box
      id="about"
      py={{ xs: 24, xl: "unset" }}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid
        py={12}
        px={6}
        display="grid"
        gridTemplateColumns={{
          base: "1fr",
          sm: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gridGap={[4, 2, 1]}
        bg="gray.100"
      >
        <OfferItem>
          <Icon
            as={BsFillHouseDoorFill}
            w={{ base: 8, lg: 16 }}
            h={{ base: 8, lg: 16 }}
            color="blue.500"
            m={2}
          ></Icon>
          10 domów zlokalizowanych w malowniczej części Pisarzowic przy ul.
          Brzozowej.
        </OfferItem>

        <OfferItem>
          <Icon
            as={BsHammer}
            w={{ base: 8, lg: 16 }}
            h={{ base: 8, lg: 16 }}
            color="blue.500"
            m={2}
          ></Icon>
          Pewny i solidny wykonawca.
        </OfferItem>
        <OfferItem>
          <Icon
            as={BiLike}
            w={{ base: 8, lg: 16 }}
            h={{ base: 8, lg: 16 }}
            color="blue.500"
            m={2}
          ></Icon>
          Spokojna, zielona i dobrze skomunikowana okolica.
        </OfferItem>

        <OfferItem>
          <Icon
            as={FaCity}
            w={{ base: 8, lg: 16 }}
            h={{ base: 8, lg: 16 }}
            color="blue.500"
            m={2}
          ></Icon>
          Bliska odległość do Bielska-Białej (ok 12min. samochodem).
        </OfferItem>
      </Grid>
    </Box>
    <Flex
      id="description"
      direction={{ base: "column" }}
      bg="gray.50"
      pt={yPadding}
      px={[8, 16, 24]}
    >
      <EstateItem>
        <EstateImage src="/images/z_gory.jpg" />
        <EstateText>
          <Text mb={4} fontWeight="medium" fontSize="large">
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
          <Text mb={4} fontWeight="medium" fontSize="large">
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
          <Text width="full" mb={4} fontWeight="medium" fontSize="large">
            Kameralnie połozone w spokojnej okolicy z dala od miejskiego.
          </Text>
        </EstateText>
      </EstateItem>
    </Flex>
    <Flex
      id="offer"
      direction="column"
      bg="gray.50"
      py={yPadding}
      px={[8, 16, 24]}
    >
      <CurrentStateOfBuildings></CurrentStateOfBuildings>
    </Flex>
  </Box>
);
const EstateText = (props) => (
  <Flex
    direction="column"
    justify="center"
    p={4}
    maxWidth="2xl"
    {...props}
  ></Flex>
);
const EstateItem = (props) => (
  <Flex
    mb={yPadding}
    direction={{ base: "column", lg: "row" }}
    {...props}
  ></Flex>
);
const EstateImage = (props) => (
  <Image
    alt="me"
    objectFit="contain"
    mr={{ base: "unset", lg: 6 }}
    width={{ base: "36rem", lg: "24rem", xl: "36rem" }}
    {...props}
  />
);

const CurrentStateOfBuildings = () => {
  const data = [
    { number: 1, price: "495 000", areaOfField: "700m2", available: true },
    { number: 2, price: "495 000", areaOfField: "700m2", available: true },
    { number: 3, price: "495 000", areaOfField: "700m2", available: true },
    { number: 4, price: "495 000", areaOfField: "700m2", available: true },
    { number: 5, price: "495 000", areaOfField: "700m2", available: true },
    { number: 6, price: "495 000", areaOfField: "700m2", available: true },
    { number: 7, price: "495 000", areaOfField: "700m2", available: true },
    { number: 8, price: "495 000", areaOfField: "700m2", available: true },
    { number: 9, price: "495 000", areaOfField: "700m2", available: true },
    { number: 10, price: "495 000", areaOfField: "700m2", available: true },
  ];
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <HeadingCell
            display={{ base: "table-cell", sm: "none" }}
          ></HeadingCell>
          <HeadingCell display={{ base: "none", sm: "table-cell" }}>
            Numer budynku
          </HeadingCell>
          <HeadingCell isNumeric>Cena</HeadingCell>
          <HeadingCell
            display={{ base: "table-cell", sm: "none" }}
          ></HeadingCell>
          <HeadingCell
            display={{ base: "none", sm: "table-cell" }}
            textAlign="right"
          >
            Powierzchcia działki
          </HeadingCell>
          <HeadingCell textAlign="right">Status</HeadingCell>
        </Tr>
      </Thead>
      <Tbody>
        {data.map(({ number, price, areaOfField, available }) => (
          <Tr key={number}>
            <Cell p={2}>{number}</Cell>
            <Cell isNumeric>{price} zł</Cell>
            <Cell isNumeric>{areaOfField}</Cell>
            <Cell textAlign="right" color={available ? "green.500" : "red.500"}>
              <Icon
                as={available ? FaCheck : FaTimes}
                w={{ base: 6, lg: 8 }}
                h={{ base: 6, lg: 8 }}
                m={2}
              ></Icon>
            </Cell>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

const Cell = (props) => <Td p={{ base: 2, sm: 4 }} {...props}></Td>;

const HeadingCell = (props) => <Th p={{ base: 2, sm: 4 }} {...props}></Th>;

const OfferItem = (props) => (
  <Box
    {...props}
    fontSize={{ base: "md", lg: "xl" }}
    fontWeight="medium"
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    textAlign="center"
  ></Box>
);
