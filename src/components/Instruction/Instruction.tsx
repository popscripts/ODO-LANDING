
import React, {useEffect} from "react";
import {H1, H2, Accent} from "../commonStyles";
import {animate, motion, stagger} from "framer-motion";

function Instruction() {

    useEffect(() => {
        animate(".instruction-element", {y: ["30vh", "0"], opacity: [0, 1]}, {delay: stagger(0.2)})
    })

    const exit = {y: "-10vh", opacity: 0};
    return (
        <>
            <H1 as={motion.h1} initial={{opacity: 0}} exit={exit} className={"instruction-element"}>Instrukcja</H1>
            <motion.p initial={{opacity: 0}} exit={exit} className={"instruction-element"}>
                <motion.p initial={{opacity: 0}} exit={exit}
                          className={"instruction-element"}>
                    Szczegółowa instrukcja użytkowania systemu użytkownika, administratora i kucharza będzie dostępna już wkrótce
                </motion.p>
            </motion.p>
        </>
    )
}
export default Instruction;