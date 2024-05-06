import {animate, motion} from "framer-motion";
import React, {useEffect} from "react";
import {Svg, Wrapper} from "./AnimatedLogoStyle";

function AnimatedLogo() {

    const sequence = [
        ["#circle2", {pathLength: [0, 0.5]}, {duration: 0.2}],
        ["#circle1", {opacity: [0, 1]}, {duration: 0.01, at: "-0.05"}],
        ["#circle1", {pathLength: [0, 1]}, {duration: 0.4}],
        ["#circle2", {pathLength: [0.5, 1]}, {duration: 0.2}],
        ["#circle3", {pathLength: [0,1]}, {duration: 0.4}],
        ["#path", {pathLength: [0,1]}, {duration: 0.4}],
        ["#circle3", {stroke: ["#f6f6f6","#2BD479"]}, {duration: 0.4, at:"-0.4"}],
    ]

    useEffect(() => {
        // @ts-ignore
        animate(sequence, {animationTimingFunction: "linear"}).then(() => {
            animate("#logo-wrapper", {left: "-10vw", top: "40vh", scale: 1.3, opacity: 0.05, width: "auto"}, {duration: 1.5, ease: "easeInOut"})
        });
    }, );
    return (
        <Wrapper id={"logo-wrapper"}>
        <Svg
            viewBox="0 0 182.28809 106.77642"
            version="1.1"
            id="svg1"
            xmlns="http://www.w3.org/2000/svg">
            <g
                id="layer1"
                transform="translate(-10.696256,-79.060987)">
                <motion.path
                    id="circle3"
                    fill="none"
                    stroke="#f6f6f6"
                    strokeWidth="12.6259"
                    style={{strokeLinecap: "round", rotate: "180deg"}}
                    d="m 186.67139,151.13341 c 0,15.61976 -12.66232,28.28207 -28.28208,28.28207 -15.61975,0 -28.28207,-12.66232 -28.28207,-28.28207 0,-15.61976 12.66231,-28.28208 28.28207,-28.28208 15.61976,0 28.28208,12.66232 28.28208,28.28208 z"
                />
                <motion.path
                    id="circle1"
                    fill="none"
                    stroke="#f6f6f6"
                    initial={{opacity: 0}}
                    strokeWidth="12.6259"
                    style={{strokeLinecap: "round"}}
                    d="m 73.573359,151.24237 c 2e-6,15.61976 -12.662315,28.28208 -28.282076,28.28208 -15.619761,0 -28.282078,-12.66232 -28.282076,-28.28208 -2e-6,-15.61976 12.662315,-28.28208 28.282076,-28.28208 15.619761,0 28.282078,12.66232 28.282076,28.28208"
                />
                <motion.path
                    id="circle2"
                    fill="none"
                    stroke="#f6f6f6"
                    strokeWidth="12.6259"
                    style={{strokeLinecap: "round", rotate: "180deg", scaleY: -1}}
                    d="m 73.543081,151.13341 c -2e-6,-15.61976 12.662317,-28.28208 28.282079,-28.28208 15.61976,0 28.28207,12.66232 28.28207,28.28208 0,15.61975 -12.66232,28.28207 -28.28207,28.28207 -15.619758,0 -28.282076,-12.66231 -28.282079,-28.28207"
                />

                <motion.path
                    fill="none"
                    stroke="#f6f6f6"
                    strokeWidth="12.6259"
                    style={{strokeLinecap: "round"}}
                    d="M 130.23142,149.58526 V 85.373934"
                    id="path"/>

            </g>
        </Svg>
        </Wrapper>
    )
}

export default AnimatedLogo