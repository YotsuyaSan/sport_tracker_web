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
      
    </AccordionPanel>
    </AccordionItem>
  ));
}