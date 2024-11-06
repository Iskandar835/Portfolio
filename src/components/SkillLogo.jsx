import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";
import { LogoContainer } from "./TechnoLogo";


const RotateAnimation = keyframes`
    0%{
      transform: rotate(0deg)
                 translate(-165px)
                 rotate(0deg);
    
    }
    100%{
      transform: rotate(360deg)
                 translate(-165px)
                 rotate(-360deg);
    }
`
const Logo = styled(LogoContainer)`
    border-radius: 10px;
    width: 55px;
    height: 55px;
    background-color: #000000;
    border: 4px solid #E9C2EC;
    position: absolute;
    top: 0; 
    bottom: 0;      
    left: 0;
    right: 0;
    overflow: hidden;
    margin: auto;
    animation: ${RotateAnimation} 6s linear infinite;
        &:nth-child(2) { 
            animation-delay: -1.5s; 
        }
        &:nth-child(3) { 
            animation-delay: -3s;
        }
        &:nth-child(4) { 
            animation-delay: -4.5s;
        }
`
const ImgLogo = styled.img`
    width: 35px;
`

function SkillLogo ({ source, alt }) {
    return (
        <>
            <Logo>
                <ImgLogo src={source} alt={alt} />
            </Logo>
        </>
    )
};

SkillLogo.propTypes = {
    source: PropTypes.string,
    alt: PropTypes.string
};

export default SkillLogo;