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
    @media ${devices.mobile} {
        width: 80%;
        height: 210px;
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
    background-color: #6e6e7300;
    border-radius: 0 0 15px 15px;
    transition: top 175ms ease-out;
    @media ${devices.tabs} {
        top: 215px;
    }
    @media ${devices.mobile} {
        top: 150px;
    }
`
const CardContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: var(--first-bg-color);
    border-radius: 15px;
    box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, 0.1);
    overflow: hidden; 
    transition: transform 175ms ease-out, box-shadow 175ms ease-out;
    @media ${devices.onlyComputeur} {
        &:hover {
            transform: scale(1.01);
            box-shadow: 3px 3px 16px 9px rgba(0, 0, 0, 0.1);
        }
        &:hover {
            ${CardContent} {
                top: 210px;
            }
        }
    }
`
const CardImg = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    object-fit: cover;
    @media ${devices.mobile} {
        object-fit: contain;
    }
`

function CardAlone ({ project }) {
    return (
        <CardLink href={project.link} target="_blank">
            <CardContainer>
                <CardImg src={`${import.meta.env.BASE_URL}${project.picture}`} alt={project.name}/>
                <CardContent>
                    {project.technos.map((techno, index) => (
                        <Logo key={index} className={techno}/>
                    ))}
                </CardContent>
            </CardContainer>
        </CardLink>    
    )
};

CardAlone.propTypes = {
    project: PropTypes.shape({
        link: PropTypes.string,
        picture: PropTypes.string,
        name: PropTypes.string,
        technos: PropTypes.arrayOf(PropTypes.string)
    })
};

export default CardAlone;