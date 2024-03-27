import instance from "@/config/axios";
import { Td, Tr } from "@chakra-ui/react";

import { useEffect, useState } from "react";

export default function Series(props) {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await instance.get(`/api/serie/${props.seanceId}`);
      setSeries(req.data);
    }
    fetchData();
  }, []);

  return series.map((serie) => (
    <Tr>
        <Td>{serie.ExerciceId}</Td>
        <Td>{serie.serie_reps}</Td>
        <Td>{serie.serie_poids}</Td>
    </Tr>
  ));
}
