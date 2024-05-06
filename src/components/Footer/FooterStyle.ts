import styled from "styled-components";
import {colors} from "../../theme/colors";

export const Element = styled.li`
    padding: 1em 2em 0.5em 2em;
    background-color: ${colors.palette.primary400};
    border-top-left-radius: 1em;
    border-top-right-radius: 1em;
    font-size: 0.7em;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: ${colors.palette.primary300};
    }
`

export const Navigation = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
    list-style: none;
    margin: 0;
    padding: 0;
    position: fixed;
    bottom: 0;
    width: 100vw;
    z-index: 20;
`