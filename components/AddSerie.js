import getExercices from "@/actions/getExercices";
import {
  Button,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberInput,
  NumberInputField,
  Select,
  useDisclosure,
} from "@chakra-ui/react";
import Exercice from "./Exercice";
import addSerie from "@/actions/addSerie";
import React from "react";

export default function AddSerie(props) {
  let { isOpen, onOpen, onClose } = useDisclosure();

  async function onSubmit(event) {
    event.preventDefault()
    console.log(event.target.ex.value)
    addSerie(event.target.reps.value, event.target.poids.value, props.seanceId, event.target.ex.value)
  }

  return (
    <>
      <Button onClick={onOpen}>Ajouter une série</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bgColor="#e8e2dc">
          <ModalHeader>Ajouter une série</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={onSubmit}>
            <ModalBody>
              <FormLabel>Exercice</FormLabel>
              <Select name="ex"><Exercice/></Select>
              <FormLabel>Répétitions</FormLabel>
              <NumberInput name="reps">
              <NumberInputField/>
              </NumberInput>
              <FormLabel>Poids</FormLabel>
              <NumberInput name="poids">
              <NumberInputField/>
              </NumberInput>
            </ModalBody>
            <ModalFooter>
                <Button type='submit'>Ajouter</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}