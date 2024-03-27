import Navbar from "@/components/Navbar";
import { ChakraProvider, Container } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Navbar />
      <Container pt={14}>
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  );
}
