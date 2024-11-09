import PropTypes from "prop-types";
import styled from "styled-components";
import { IconLogo } from "./TechnoLogo";


const Btn = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    height: 13px;
    text-decoration: none;
    color: #000000;
    border-radius: 5px;
    background: #E9C2EC; 
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    gap: 7px;
    font-size: 15px;
    transition: background 200ms ease-in, color 200ms ease-in, transform 100ms ease-in;
    &:hover {
        background: #CF91D8;
        transform: scale(1.02);
    }
`    
const BtnIcon = styled(IconLogo)`
        font-size: 15px;
`

function Tags ({ href, className, content }) {
    return (
        <>
            <Btn href={href} target="_blank"><BtnIcon className={className}/>{content}</Btn>
        </>
    )
};

Tags.propTypes = {
    href: PropTypes.string,
    className: PropTypes.string,
    content: PropTypes.string
};

export default Tags;