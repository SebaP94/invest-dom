import { Flex, Box, Image, Text } from "@chakra-ui/react";
// import  from "next/image";
import { List, ListItem } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";

export const Header = () => (
  <Flex
    direction={{
      base: "column",
      lg: "row",
    }}
    height={{
      base: 28,
      lg: 24,
    }}
    position={{ base: "fixed", md: "fixed" }}
    zIndex="3"
    bg="gray.50"
    justifyContent="space-between"
    alignItems="center"
    px={{
      base: 2,
      md: 4,
    }}
    w="100vw"
    borderBottom="1px"
    borderColor="gray.300"
    maxWidth="1920px"
  >
    <LogoWrapper></LogoWrapper>
    <Nav />
  </Flex>
);

export const LogoWrapper = () => (
  <Flex
    direction="row"
    p={{
      base: 2,
      md: 4,
    }}
    justify="center"
    align="center"
  >
    <Image
      src="/images/logos/dupa.svg"
      alt="me"
      height={{ base: "8", md: "14" }}
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
        direction={{ base: "column", sm: "row" }}
        justify="center"
        align="center"
        mr="2"
        fontSize={{ base: "lg", md: "3xl" }}
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
        height={{ base: "10", md: "14" }}
        objectFit="contain"
        mr="4"
      />
    </Link>
  </Flex>
);

export const Nav = (props) => (
  <List
    {...props}
    display="flex"
    flexDirection="row"
    w={{
      base: "full",
      md: "unset",
    }}
    justifyContent="space-evenly"
  >
    <NavItem href="#about">O inwestycji</NavItem>
    <NavItem href="#description">Opis budynków</NavItem>
    <NavItem href="#offer">Oferta</NavItem>
  </List>
);

export const NavItem = (props) => (
  <ListItem
    py={{
      base: 2,
      md: 4,
    }}
    px={{
      base: 1,
      md: 4,
    }}
  >
    <Link fontSize={{ base: "md", xs: "xl", sm: "xl" }} {...props}></Link>
  </ListItem>
);
