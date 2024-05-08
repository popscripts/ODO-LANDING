
import React, {useEffect} from "react";
import {H1, H2, Accent} from "../commonStyles";
import {animate, motion, stagger} from "framer-motion";

function Description() {

    useEffect(() => {
         animate(".description-element", {y: ["30vh", "0"], opacity: [0, 1]}, {delay: stagger(0.2)})
    })

    const exit = {y: "-10vh", opacity: 0};
    return (
        <>
            <H1 as={motion.h1} initial={{opacity: 0}} exit={exit} className={"description-element"}>Organizer Dni Otwartych</H1>
            <H2 as={motion.h2} initial={{opacity: 0}} exit={exit} className={"description-element"}>Oprowadzanie nigdy nie było tak <Accent>proste!</Accent></H2>
            <motion.p initial={{opacity: 0}} exit={exit} className={"description-element"}>
                Oznaczaj w której sali jesteś, rezerwuj następne i nie
                zapomnij gdzie już byłeś
            </motion.p>
        </>
    )
}
export default Description;