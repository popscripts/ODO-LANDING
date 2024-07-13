
import React, {useEffect} from "react";
import {H1, Accent} from "../commonStyles";
import {animate, motion, stagger} from "framer-motion";
import {Button, Wrapper} from "./DownloadStyle";

function Download() {

    useEffect(() => {
        animate(".instruction-element", {y: ["30vh", "0"], opacity: [0, 1]}, {delay: stagger(0.2)})
    })

    const exit = {y: "-10vh", opacity: 0};
    return (
        <>
            <H1 as={motion.h1} initial={{opacity: 0}} exit={exit} className={"instruction-element"}>Pobieranie</H1>
            <Wrapper>
                <motion.p initial={{opacity: 0}} exit={exit} className={"instruction-element"}>
                    Podczas rejestracji podaj klucz otrzymany od administratora dni otwartych w twojej szkole.
                </motion.p>
                <motion.p initial={{opacity: 0}} exit={exit} className={"instruction-element"}>
                    Po zarejestrowaniu uzupełnij dane, takie jak imię i nazwisko, a następnie, by wykorzystać główną funkcjonalność aplikacji, naciśnij przycisk
                    rozpocznij oprowadzanie i gotowe!
                </motion.p>
                <motion.p initial={{opacity: 0}} exit={exit} className={"instruction-element"}>
                    W celu przetestowania aplikacji możesz podać
                    klucz <Accent>123456</Accent>, który da Ci dostęp do tymczasowych dni otwartych (zalecamy użycie
                    danych fikcyjnych).
                </motion.p>
            </Wrapper>
            <Button className={"instruction-element"}
                    href={"./odo.apk"} download={"odo"}>Pobierz .apk
            </Button>
        </>
    )
}

export default Download;