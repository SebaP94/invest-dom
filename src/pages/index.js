import { Text, Flex, Heading } from "@chakra-ui/react";
import Head from "next/head";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const Index = () => (
  <Container>
    <Head>
      <title>Osiedle brzozowe</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <Main></Main>
    <Footer>
      <Flex direction="column">
        <Text pb={1} fontSize="xl">
          InvestDom
        </Text>
        <Text pb={0.5}>Andrzej Paduch </Text>
        <Text pb={0.5}>505 555 555 </Text>
        <Text pb={0.5}>andrzej.paduch@gmail.com </Text>
        <Text as="small">&copy; Copyright 2021, Invest Dom</Text>
      </Flex>
    </Footer>
  </Container>
);

export default Index;
