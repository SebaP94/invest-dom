import { Flex, Box, Image, Text } from "@chakra-ui/react";
// import  from "next/image";
import { List, ListItem } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";

export const Header = () => (
  <Flex
    position="fixed"
    zIndex="3"
    bg="gray.50"
    justifyContent="space-between"
    alignItems="center"
    px={4}
    w="full"
    height="90px"
    borderBottom="1px"
    borderColor="gray.300"
    maxWidth="1920px"
  >
    <LogoWrapper></LogoWrapper>
    <Nav />
  </Flex>
);

export const LogoWrapper = () => (
  <Flex direction="row" p="4" justify="center" align="center">
    <Image
      src="/images/logos/dupa.svg"
      alt="me"
      height="12"
      objectFit="contain"
      mr="4"
    />
    <Box height="52px" borderRight="1px solid" borderColor="gray.300" mr="4" />
    <Link
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      href="/"
      _hover={{
        textDecoration: "none",
      }}
    >
      <Flex
        direction="row"
        justify="center"
        align="center"
        mr="2"
        fontSize="3xl"
        fontWeight="medium"
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
    </Link>
  </Flex>
);

export const Nav = (props) => (
  <List {...props} display="flex" flexDirection="row">
    <NavItem href="#about">O inwestycji</NavItem>
    <NavItem href="#description">Opis budynków</NavItem>
    <NavItem href="#offer">Oferta</NavItem>
  </List>
);

export const NavItem = (props) => (
  <ListItem p={4}>
    <Link fontSize="lg" {...props}></Link>
  </ListItem>
);