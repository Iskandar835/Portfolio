import PropTypes from "prop-types";
import styled from "styled-components";
import { IconLogo } from "./TechnoLogo";
import { devices } from "../helpers/Breakpoints";


const Span = styled.span`
    text-decoration: none;
`
const Btn = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 7px;
    padding: 8px;
    height: 12px;
    color: #000000;
    font-family: "Poppins", sans-serif;
    font-size: 15px;
    font-weight: 500;
    background: #E9C2EC; 
    border-radius: 5px;
    text-decoration: none;
    transition: background 150ms ease-in;
    @media (min-width: 320px) and (max-width: 1024px) {
        &:active {
        background: #CF91D8;
            ${Span} {
                text-decoration: underline;
            }
        }
    }
    @media (min-width: 1025px) {
        &:hover {
        background: #CF91D8;
            ${Span} {
                text-decoration: underline;
            }
        }
    }
    @media ${devices.mobile} {
        height: 10px;
        font-size: 12px;
    }
`    
const BtnIcon = styled(IconLogo)`
        font-size: 15px;
`

function Tags ({ href, className, content }) {
    return (
        <>
            <Btn href={href} target="_blank"><BtnIcon className={className}/><Span>{content}</Span></Btn>
        </>
    )
};

Tags.propTypes = {
    href: PropTypes.string,
    className: PropTypes.string,
    content: PropTypes.string
};

export default Tags;