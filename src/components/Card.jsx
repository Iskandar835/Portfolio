import styled from "styled-components";
import PropTypes from "prop-types";
import Logo from "./LogoTechno";


const CardLink = styled.a`
    display: flex;
    width: 250px;
    height: 300px;
    text-decoration: none;
`
const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 250px;
    height: 300px;
    overflow: hidden; 
    background-color: #FFFFFF;
    border-radius: 15px;
    box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, 0.1);
    transition: transform 200ms ease-in, box-shadow 200ms ease-in;
    &:hover {
        transform: scale(1.01);
        box-shadow: 3px 3px 16px 9px rgba(0, 0, 0, 0.1);
    }
    &:hover > .card-img {
        border-radius: 15px 15px 0 0;
    }
    &:hover > .card-content {
        margin-bottom: 0;
    }
`
const CardImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 15px;
    object-fit: cover;
`
const CardContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;
    height: 30%;
    margin-bottom: -90px;
    background-color: #FFFFFF;
    border-radius: 0 0 15px 15px;
    transition: margin-bottom 200ms ease-in;
`
function CardAlone ({ href, source, alt, className }) {
    return (
        <CardLink href={href} target="_blank">
            <CardContainer>
                <CardImg src={source} alt={alt} className="card-img" />
                <CardContent className="card-content">
                    <Logo className={className}/>
                </CardContent>
            </CardContainer>
        </CardLink>    
    )
};

CardAlone.propTypes = {
    href: PropTypes.string,
    source: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string
};

export default CardAlone;