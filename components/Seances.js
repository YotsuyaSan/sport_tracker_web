import instance from "@/config/axios";
import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/accordion";
import { Box } from "@chakra-ui/layout";
import { useEffect, useState } from "react";
import AddSerie from "./AddSerie";
import { Table, TableContainer, Th, Thead, Tr } from "@chakra-ui/react";
import Series from "./Series";

export default function Seances() {
  const [seances, setSeance] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await instance.get("/api/seance/5");
      setSeance(req.data);
    }
    fetchData();
  }, []);

  return seances.map((seance) => (
    <AccordionItem>
      <AccordionButton>
        {seance.seance_date}
        <AccordionIcon />
      </AccordionButton>
    <AccordionPanel>
      <AddSerie seanceId={seance.id}/>
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>Exercice</Th>
              <Th>Répétitions</Th>
              <Th>Poids</Th>
            </Tr>
          </Thead>
          <Series seanceId={seance.id}/>
        </Table>
      </TableContainer>
    </AccordionPanel>
    </AccordionItem>
  ));
}