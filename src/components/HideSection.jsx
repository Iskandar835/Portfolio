import PropTypes from "prop-types";
import styled from "styled-components";
import Data from "../data/database.json";
import ContactLogo from "./ContactLogo";


const ContactContainer = styled.nav`
    display: flex;
    position: relative;
    z-index: 2;
    gap: 80px;
    background-color: #FFFFFF;
    padding: 18px 25px;
    border-radius: 50px;
    box-shadow: 0px 1px 10px 8px #00000038;
    overflow: hidden;
    &::before {
        position: absolute;
        z-index: 4;
        content: "";
        top: 0;
        right: 0;
        bottom: 0;
        left: ${(props) => (props.$isVisible ? '0px' : '405px')};
        backdrop-filter: blur(35px);
        border-radius: 50px;
        transition: left 200ms ease-in-out;
    }
`

function HideSection ({ isVisible }) {
    return (
        <ContactContainer $isVisible={isVisible}>
            {Data.contact.map((contactItem) => (
                <ContactLogo key={contactItem.id} className={contactItem.icon} link={contactItem.link} />
            ))}
        </ContactContainer>
    )
};

HideSection.propTypes = {
    isVisible: PropTypes.bool,
};

export default HideSection;