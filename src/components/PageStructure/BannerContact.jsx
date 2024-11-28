import styled from "styled-components";
import { devices } from "../../helpers/Breakpoints";
import { useState } from "react";
import { Titleh2 } from "./Projects";
import { Titleh3 } from "./MySkills";
import HiderBtn from "../HiderBtn";
import HideSection from "../HideSection";


export const Span =styled.span`
    font-weight: bold;
    color: var(--secondary-color);
    text-shadow: 5px 5px var(--first-font-color);
    @media ${devices.mobile} {
        text-shadow: 4px 3px var(--first-font-color);
    }
`
const ContactSection = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 200px 200px 50px 200px;
    background-color: var(--primary-color);
    background: url("assets/doodle-items.avif");
    @media ${devices.tabs} {
        padding: 150px 80px 50px 80px;
        text-align: center;
    }
    @media ${devices.mobile} {
        padding: 100px 30px 50px 30px;
        text-align: center;
    }
`
const Overlay = styled.div`
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.6)!important; 
    --webkit-backdrop-filter: blur(2px)!important;
    backdrop-filter: blur(2px)!important;
`
const TextAndBtn = styled.div`
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 70px 0;
    @media ${devices.tabs} {
        flex-direction: column;
    }
    @media ${devices.mobile} {
        flex-direction: column;
        margin: 0 0 50px 0;
    }
`
const TextContainer = styled.div`
    width: 60%;
    @media ${devices.tabsAndMobile} {
        width: auto;
    }                      
`
const Title = styled.h1`
    margin: 0;
    font-family: var(--title-font-family);
    font-size: 45px;
    text-wrap: nowrap;
    @media ${devices.tabs} {
        font-size: 35px;
    }
    @media ${devices.mobile} {
        font-size: 25px;
        text-wrap: wrap;
    }
`
const SecondTitle = styled(Titleh2)`
    margin: 0;
    text-align: left;
    @media ${devices.tabsAndMobile} {
        text-align: center;      
    }
`
export const Subtitle = styled.p`
    font-size: 20px;
    @media ${devices.tabs} {
        margin: 40px 0;
    }
    @media ${devices.mobile} {
        margin: 30px 0 40px 0;
        font-size: 18px;
    }
`
const BtnContainer = styled.div`
    margin: 80px 0 0 0;
    @media ${devices.tabs} {
        margin: 35px 0 0 0;
    }
    @media ${devices.mobile} {
        margin: 0;
    }
`

function BannerContact () {
    const [hidden, setHidden] = useState(true);
    const handleToggle = () => {
        setHidden((prev) => !prev)
    };

    return (
        <ContactSection>
            <Overlay/>
            <TextAndBtn>
                <TextContainer>
                    <Title>Sacha Vandermoeten</Title>
                    <SecondTitle>Developpeur <Span>Frontend</Span></SecondTitle>
                    <Subtitle> 
                        Je suis passionné par la conception d&apos;interfaces modernes, esthétiques et faciles à utiliser. 
                        J’aime concevoir des expériences utilisateur agréables en m&apos;appuyant sur des technologies actuelles, 
                        en m’assurant que chaque projet est bien structuré, optimisé et intuitif.
                    </Subtitle>
                    <Titleh3>
                       Vous souhaitez me contacter ?
                    </Titleh3>
                </TextContainer>
                <BtnContainer>
                    <HiderBtn onClick={handleToggle} content={"Cliquez Ici !"}/>
                </BtnContainer>
            </TextAndBtn>
            <HideSection isVisible={hidden}/>
        </ContactSection>
    )
};

export default BannerContact;