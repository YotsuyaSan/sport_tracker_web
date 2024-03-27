import addExercice from "@/actions/addExercice";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

export default function AddExercice() {
  let { isOpen, onOpen, onClose } = useDisclosure();
  let [value, setValue] = React.useState("");

  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };

  async function onSubmit(event) {
    event.preventDefault()
    console.log(value)
    addExercice(value)
  }
  return (
    <>
      <Button onClick={onOpen}>
        <Text>Ajouter un exercice</Text>
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bgColor={"#E8E2DC"}>
          <ModalHeader>Ajouter un exercice</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={onSubmit}>
            <ModalBody>
              <Input
                value={value}
                onChange={handleInputChange}
                name="name"
                placeholder="Nom de l'exercice"
              />
            </ModalBody>
            <ModalFooter>
              <Button type="submit">Ajouter</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}
