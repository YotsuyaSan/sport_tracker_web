import { AccordionButton, AccordionIcon, AccordionItem } from "@chakra-ui/accordion";
import { Box } from "@chakra-ui/layout";

export default function Days() {
    const dayList = day.map(day => (
        <>
        <AccordionItem>
            <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                    {day.date}
                </Box>
                <AccordionIcon/>
            </AccordionButton>
        </AccordionItem>
        </>
    ))
    return dayList
}