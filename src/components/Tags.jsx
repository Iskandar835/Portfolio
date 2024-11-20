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
    color: var(--first-font-color);
    font-family: var(--title-font-family);
    font-size: 15px;
    font-weight: 500;
    text-decoration: none;
    background: var(--secondary-color); 
    border-radius: 5px;
    transition: background 150ms ease-in;
    @media ${devices.onlyComputeur} {
        &:hover {
            background: var(--tertiary-color);
            ${Span} {
                text-decoration: underline;
            }
        }
    }
    @media ${devices.tabsAndMobile} {
        &:active {
            background: var(--tertiary-color);
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