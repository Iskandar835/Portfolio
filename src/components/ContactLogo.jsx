import styled from "styled-components";
import PropTypes from "prop-types";


const DivIcon = styled.div`
    display: flex;
    width: 60px;
    height: 60px;
    border: 2px solid #E9C2EC;
    border-radius: 50px;
    background-color: #FFFFFF;
    box-shadow: 8px 8px 5px rgba(0, 0, 0, 0.1);
    transition: transform 150ms ease-in, box-shadow 150ms ease-in;
    &:hover {
        transform: scale(0.97);
        box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.1);
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