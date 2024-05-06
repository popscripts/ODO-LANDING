import styled from "styled-components";
import {colors} from "../../theme/colors";


export const ScreenshotPhoto = styled.img`
    height: 60vh;
    border-radius: 2.6vh;
`

export const Screenshot = styled.div`
    height: 60vh;
    border-radius: 2.6vh;
    transform: rotateY(15deg);
    box-shadow: -5px 0 0 black, 0 0 1px #0A0A0AFF;
    border: 1px solid #0A0A0AFF;
    transition: transform 0.2s;

    &:hover {
        transform: rotateY(0) !important;
        box-shadow: 0 0 0 #0A0A0AFF, 0 0 1px #0A0A0AFF !important;
    }

    &::before {
        content: "";
        width: 70%;
        margin-left: 30%;
        display: block;
        position: absolute;
        bottom: 30px;
        transform: skew(-40deg);
        box-shadow: 0 0 20px 30px rgba(10, 10, 10, 0.35);
        z-index: -1;
    }
`

export const Stick = styled.div`
    height: 40vh;
    width: 2vh;
    position: absolute;
    bottom: -30vh;
    background: linear-gradient(90deg, rgb(10, 10, 10) 70%, rgb(28, 28, 28) 80%, rgb(10, 10, 10) 90%);
`

export const ScreenshotWrapper = styled.div`
    perspective: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
`

export const Wrapper = styled.article`
    display: flex;
    flex-flow: row wrap;
    position: relative;
    z-index: 10;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
    gap: 1.5em;

`

export const Left = styled.section`
    max-width:700px;
    width: 80vw;
`

export const H1 = styled.h1`
    font-variant-caps: all-small-caps;
    font-weight: normal;
    font-size: 1.4em;
`

export const H2 = styled.h2`
font-weight: 600;
    font-size: 2em;
    margin: 0.4em 0;
`

export const Accent = styled.span`
    color: ${colors.palette.primary200};
    font-size: 1em;
`