
import React, {useEffect} from "react";
import {Screenshot, Wrapper, Left, H1, H2, Accent, ScreenshotWrapper, Stick, ScreenshotPhoto} from "./DescriptionStyle";
import screen from "../../assets/screenshot.png"
import {animate, motion, stagger} from "framer-motion";

function Description() {

    useEffect(() => {
     setTimeout(() => {
         animate(".description-element", {y: ["100vh", "0"], opacity: [0, 1]}, {delay: stagger(0.4)})
         animate("#screenshot-wrapper", {opacity: 1 }, {duration: 0})
         animate("#screenshot-wrapper", {y: ["100vh", "0"] }, {duration: 1})
         animate("#screenshot", {transform: "rotateY(-15deg)", boxShadow: "3px 0 0 #0A0A0AFF, 0 0 1px #0A0A0AFF" }, {duration: 1, delay: 0.5})
     }, 2500)
    })
    return (
        <Wrapper>
            <Left>
                <H1 as={motion.h1} initial={{opacity: 0}} className={"description-element"}>Organizer Dni Otwartych</H1>
                <H2 as={motion.h2} initial={{opacity: 0}} className={"description-element"}>Oprowadzanie nigdy nie było tak <Accent>proste!</Accent></H2>
                <motion.p initial={{opacity: 0}} className={"description-element"}>
                    Oznaczaj w której sali jesteś, rezerwuj następne i nie
                    zapomnij gdzie już byłeś
                </motion.p>
            </Left>
            <ScreenshotWrapper id="screenshot-wrapper" as={motion.div} initial={{opacity: 0}}>
                {/*<Stick />*/}
                <Screenshot id="screenshot">
                    <ScreenshotPhoto  src={screen} alt="screenshot"/>
                </Screenshot>

            </ScreenshotWrapper>
        </Wrapper>
    )
}
export default Description;