import styled from "styled-components";
import {colors} from "../../theme/colors";

export const Button = styled.a`
    padding: 1em;
    font-size: 1rem;
    background-color: ${colors.palette.secondary300};
    border: none;
    outline: none;
    border-radius: 1em;
    transition: background-color 0.2s;
    
    &:hover {
        background-color: ${colors.palette.secondary200};
    }
`

export const Wrapper = styled.div`
    margin-bottom: 2rem;
    & p {
        font-size: 1rem;
    }
    
    & p:last-child {
        font-size: 0.9rem;
        color: #f6f6f6aa;
    }
`