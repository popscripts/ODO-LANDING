import React, {useEffect} from "react";
import {Screenshot, Wrapper, Left, ScreenshotWrapper, ScreenshotPhoto} from "./MainLayoutStyle";
import photo from "../../assets/screenshot.webp"
import {animate, AnimatePresence, motion} from "framer-motion";
import Description from "../Description/Descritpion";
import Contact from "../Contact/Contact";
import Instruction from "../Instruction/Instruction";
import Download from "../Download/Download";
import useIsMobile from "../../hooks/useIsMobile";

type Props = {
    screen: string
    loaded: boolean
}

function MainLayout({screen, loaded}: Props) {
    const mobile = useIsMobile()

    return (
        <Wrapper as={motion.article} layout>
            <Left>
                <AnimatePresence >
                    {loaded &&
                        <>
                            {screen === "start" && <Description />}
                            {screen === "contact" && <Contact />}
                            {screen === "instruction" && <Instruction />}
                            {screen === "download" && <Download />}
                        </>
                    }
                </AnimatePresence>
            </Left>
            {!mobile && <ScreenshotWrapper as={motion.div} initial={{y: "100vh", display: "none"}} animate={{y: 0, display: "block"}} transition={{delay: 2.5, duration: 1}}>
                <Screenshot as={motion.div} initial={{transform: "rotateY(15deg)" }} animate={{transform: "rotateY(-15deg)", boxShadow: "3px 0 0 #0A0A0AFF, 0 0 1px #0A0A0AFF"}} transition={{delay: 3, duration: 1}}>
                    <ScreenshotPhoto src={photo} alt="screenshot"/>
                </Screenshot>
            </ScreenshotWrapper>
            }
        </Wrapper>
    )
}
export default MainLayout;