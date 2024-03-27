import addSeance from "@/actions/addSeance";
import { Box, Button, Flex, Spacer, Stack, Text } from "@chakra-ui/react";
import { Component } from "react";
import AddExercice from "./AddExercice";
import Link from "next/link";

class Navbar extends Component {
    handleAddSeance = () => {
        addSeance(5).then(
            window.location.reload(false)
        )
    }
  render() {
    return(
        <>
      <Box pos="fixed" minW="100%" bgColor="#E8E2DC" py={2}>
        <Flex alignItems="center" mx={5}>
          <Box>
            <Text fontSize="x-large" fontWeight="semibold">
              Sport tracker
            </Text>
          </Box>
          <Spacer />
            <Stack
                        direction={{ base: "column", md: "row" }}
                        display={{ base: "none", md: "flex" }}
                        align="center"
                        justify="space-between"
                        width="auto"
                        spacing={5}
                        mr={5}>
            <AddExercice/>
            <Button onClick={this.handleAddSeance}>
              <Text>Ajouter une séance</Text>
            </Button>
            </Stack>
        </Flex>
      </Box>
    </>
        )
  }
}

export default Navbar