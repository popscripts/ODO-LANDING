import {Element, Navigation} from "./FooterStyle";
import {useEffect} from "react";
import {animate, motion, stagger} from "framer-motion";

type Props = {
    screen: string
    setScreen: Function
    loaded: boolean
}

function Footer({setScreen, loaded, screen}: Props) {

    useEffect(() => {
     !loaded && setTimeout(() => animate(".element", {y: ["5em", "0em"]}, {delay: stagger(0.2), ease: "easeOut"}), 3000)
    });

    return (
        <footer>
           <Navigation>
               <Element as={motion.li} initial={{y: "5em"}} className="element" onClick={()=>setScreen("start")}>Start</Element>
               <Element as={motion.li} initial={{y: "5em"}} className="element" onClick={()=>setScreen("contact")}>Kontakt</Element>
               <Element as={motion.li} initial={{y: "5em"}} className="element" onClick={()=>setScreen("instruction")}>Instrukcja</Element>
               <Element as={motion.li} initial={{y: "5em"}} className="element" onClick={()=>setScreen("download")}>Pobierz</Element>

           </Navigation>
        </footer>
    )
}

export default Footer