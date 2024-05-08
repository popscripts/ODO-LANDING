import React, {useEffect} from "react";
import {H1, H2, Accent} from "../commonStyles";
import {animate, motion, stagger} from "framer-motion";
import {Logo, Section} from "./ContactStyle";
import logo from "../../assets/LI-In-Bug.png"

function Contact() {

    useEffect(() => {
        animate(".contact-element", {y: ["30vh", "0"], opacity: [0, 1]}, {delay: stagger(0.2)})
    })

    const exit = {y: "-10vh", opacity: 0};
    return (
        <>
            <H1 as={motion.h1} initial={{opacity: 0}} exit={exit} className={"contact-element"}>Kontakt</H1>
            <H2 as={motion.h2} initial={{opacity: 0}} exit={exit} className={"contact-element"}>Napisz do <Accent>nas!</Accent></H2>
            <Section as={motion.section} initial={{opacity: 0}} exit={exit} className={"contact-element"}>
                <p><a href={"mailto:kontakt@organizer-dni-otwartych.pl"}>e-mail: <Accent>kontakt@organizer-dni-otwartych.pl</Accent></a></p>
                <p>Twórcy:</p>
                <p><a href={"https://www.linkedin.com/in/katarzyna-pstrokońska"}><Logo src={logo}/> Katarzyna Pstrokońska</a></p>
                <p><a href={"https://www.linkedin.com/in/bartosz-poszelezny"}><Logo src={logo}/> Bartosz Poszelężny</a></p>
            </Section>
        </>
    )
}
export default Contact;