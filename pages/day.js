import Days from "@/components/Days";
import { Accordion, AccordionItem, AccordionButton, AccordionIcon } from "@chakra-ui/accordion";


export default function Day() {
  return (
    <>
      <Accordion defaultIndex={[0]} allowMultiple>
        <Days/>
      </Accordion>
    </>
  );
}
