import {Element, Navigation} from "./FooterStyle";
import {useEffect} from "react";
import {animate, motion, stagger} from "framer-motion";

function Footer() {

    useEffect(() => {
     setTimeout(() => animate(".element", {y: ["5em", "0em"]}, {delay: stagger(0.2), ease: "easeOut"}), 2300)
    });
    return (
        <footer>
           <Navigation>
               <motion.a initial={{y: "5em"}} className="element" href="/"><Element>Start</Element></motion.a>
               <motion.a initial={{y: "5em"}} className="element" href="mailto:kontakt@organizer-dni-otwartych.pl"><Element>Kontakt</Element></motion.a>
               <motion.a initial={{y: "5em"}} className="element" href="https://github.com/popscripts"><Element>GitHub</Element></motion.a>
               <motion.a initial={{y: "5em"}} className="element" href="https://expo.dev//accounts/popscripts/projects/odo/builds/a3c9cc07-36b7-4c9f-a630-5cc74bf39f7b"><Element>Pobierz</Element></motion.a>

           </Navigation>
        </footer>
    )
}

export default Footer