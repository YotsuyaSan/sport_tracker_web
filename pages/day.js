import Seances from "@/components/Seances";
import { Accordion } from "@chakra-ui/accordion";

export default function Day() {
  return (
    <>
      <Accordion defaultIndex={[0]} allowMultiple>
        <Seances/>
      </Accordion>
    </>
  );
}