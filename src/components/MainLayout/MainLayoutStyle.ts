import styled from "styled-components";
import {colors} from "../../theme/colors";

export const ScreenshotPhoto = styled.img`
    height: 60vh;
    width: 29.5vh;
    border-radius: 2.6vh;
`

export const Screenshot = styled.div`
    height: 60vh;
    width: 29.5vh;
    border-radius: 2.6vh;
    transform: rotateY(15deg);
    box-shadow: -5px 0 0 black, 0 0 1px #0A0A0AFF;
    border: 1px solid #0A0A0AFF;
    transition: transform 0.2s;
    background-color: ${colors.palette.neutral700};

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
