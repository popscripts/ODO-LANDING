import styled from "styled-components";

export const BlobSvg = styled.svg`
    width: 80vw;
    right: -10vw;
    top: -10vw;
    position: absolute;
    rotate: 180deg;
    z-index: -1;
    opacity: 0.6;

    @media (max-width: 820px) {
        width: 120vw;
    }
`