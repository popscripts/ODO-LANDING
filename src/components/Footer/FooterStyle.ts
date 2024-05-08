import styled from "styled-components";
import {colors} from "../../theme/colors";

export const Element = styled.li`
    background-color: ${colors.palette.primary400};
    border-top-left-radius: 1em;
    border-top-right-radius: 1em;
    cursor: pointer;
    transition: background-color 0.2s;
    box-shadow: 0 0 10px ${colors.palette.neutral800};
    font-size: 1rem;
    padding: 0.7rem 2rem 0.5rem 2rem;
    display: block;

    &:hover {
        background-color: ${colors.palette.primary300};
    }

    @media (max-width: 600px) {
        font-size: 0.8rem;
        padding: 0.7rem 1rem 0.5rem 1rem;
    }
`

export const Navigation = styled.menu`
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

    @media (max-width: 600px) {
        justify-content: space-around;
        padding: 0 0.5em;
        box-sizing: border-box;
        gap: 0;
    }
`