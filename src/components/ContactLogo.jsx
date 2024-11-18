import styled from "styled-components";
import PropTypes from "prop-types";
import { devices } from "../helpers/Breakpoints";


const DivIcon = styled.div`
    display: flex;
    width: 60px;
    height: 60px;
    border: 2px solid #E9C2EC;
    border-radius: 50px;
    background-color: #FFFFFF;
    box-shadow: 8px 8px 5px rgba(0, 0, 0, 0.1);
    transition: transform 150ms ease-in, box-shadow 150ms ease-in;
    @media (min-width: 1025px) {
        &:hover {
            transform: scale(0.97);
            box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.1);
        }
    }
    @media (min-width: 320px) and (max-width: 1024px) {
        &:active {
            transform: scale(0.97);
            box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.1);
        }
    }
    @media ${devices.mobile} {
        width: 45px;
        height: 45px;
        box-shadow: 6px 6px 5px rgba(0, 0, 0, 0.1);
    }
`
const LinkLogo = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: #000000;
    text-decoration: none;
`
const IconLogo = styled.i`
    font-size: 28px;
    transition: all 100ms ease-in;
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