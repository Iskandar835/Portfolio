import styled from "styled-components";
import PropTypes from "prop-types";
import Logo from "./TechnoLogo";
import { devices } from "../helpers/Breakpoints";


const CardLink = styled.a`
    display: flex;
    width: 340px;
    height: 300px;
    text-decoration: none;
    @media ${devices.tabs} {
        width: 100%;
    }
`
const CardContent = styled.div`
    position: relative;
    z-index: 3;
    top: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;
    height: 30%;
    background-color: ##6e6e7300;
    border-radius: 0 0 15px 15px;
    transition: top 175ms ease-out;
    @media ${devices.tabs} {
        top: 215px;
    }
`
const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden; 
    background-color: #FFFFFF;
    border-radius: 15px;
    box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, 0.1);
    transition: transform 175ms ease-out, box-shadow 175ms ease-out;
    &:hover {
        transform: scale(1.01);
        box-shadow: 3px 3px 16px 9px rgba(0, 0, 0, 0.1);
    }
    &:hover {
        ${CardContent} {
            top: 210px;
        }
    }
`
const CardImg = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    object-fit: cover;
`
function CardAlone ({ projet }) {
    return (
        <CardLink href={projet.link} target="_blank">
            <CardContainer>
                <CardImg src={projet.picture} alt={projet.name}/>
                <CardContent>
                    {projet.technos.map((techno, index) => (
                        <Logo key={index} className={techno}/>
                    ))}
                </CardContent>
            </CardContainer>
        </CardLink>    
    )
};

CardAlone.propTypes = {
    projet: PropTypes.shape({
        link: PropTypes.string,
        picture: PropTypes.string,
        name: PropTypes.string,
        technos: PropTypes.arrayOf(PropTypes.string)
    })
};

export default CardAlone;