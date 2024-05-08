import styled from "styled-components";
import {colors} from "../theme/colors";

export const H1 = styled.h1`
    font-variant-caps: all-small-caps;
    font-weight: normal;
    font-size: 1.4em;
    margin:0;
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