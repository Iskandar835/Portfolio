import styled from "styled-components";
import PropTypes from "prop-types";
import { devices } from "../helpers/Breakpoints";


const DivIcon = styled.div`
    display: flex;
    width: 60px;
    height: 60px;
    background-color: var(--first-bg-color);
    border: 2px solid var(--secondary-color);
    border-radius: 50px;
    box-shadow: 8px 6px 5px rgba(0, 0, 0, 0.1);
    transition: transform 150ms ease-in, box-shadow 150ms ease-in;
    @media ${devices.onlyComputeur} {
        &:hover {
            transform: scale(0.97);
            box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.1);
        }
    }
    @media ${devices.tabsAndMobile} {
        box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.1);
        &:active {
            transform: scale(0.97);
            box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.1);
        }
    }
    @media ${devices.mobile} {
        width: 45px;
        height: 45px;
    }
`
const LinkLogo = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: var(--first-font-color);
    text-decoration: none;
`
const IconLogo = styled.i`
    font-size: 28px;
    @media ${devices.mobile} {
        font-size: 20px;
    }
`

function ContactLogo ({ link, className }) {
    return (
        <DivIcon>
            <LinkLogo href={link} target="_blank"><IconLogo className={className}/></LinkLogo>
        </DivIcon>
    )
};

ContactLogo.propTypes = {
    link: PropTypes.string,
    className: PropTypes.string
};

export default ContactLogo;