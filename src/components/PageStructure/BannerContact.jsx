import styled from "styled-components";
import { useState } from "react";
import { Titleh2 } from "./Projects";
import { Titleh3 } from "./MySkills";
import HiderBtn from "../HiderBtn";
import HideSection from "../HideSection";


export const Span =styled.span`
    font-weight: bold;
    color: #E9C2EC;
`
const ContactSection = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 200px 200px 50px 200px;
    background-color: #F2F2F2;
    background: url("./src/assets/doodle-items.avif");
`
const Overlay = styled.div`
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.6); 
    backdrop-filter: blur(2px);
`
const TextAndBtn = styled.div`
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 70px 0;
`
const TextContainer = styled.div`
    width: 60%;
`
const Title = styled.h1`
    margin: 0;
    font-family: "Poppins", sans-serif;
    font-size: 45px;
    text-wrap: nowrap;
`
const SecondTitle = styled(Titleh2)`
    margin: 0;
`
export const Subtitle = styled.p`
    font-size: 20px;
`
const BtnContainer = styled.div`
    margin: 80px 0 0 0;
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