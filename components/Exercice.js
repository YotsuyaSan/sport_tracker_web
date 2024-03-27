import instance from "@/config/axios";

import { useEffect, useState } from "react";
export default function Exercice() {
  const [exercices, setExercice] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await instance.get("/api/exercice");
      setExercice(req.data);
    }
    fetchData();
  }, []);

  return exercices.map((exercice) => (
    <option value={exercice.id}>{exercice.ex_name}{console.log(exercice)}</option>
  ));
}
