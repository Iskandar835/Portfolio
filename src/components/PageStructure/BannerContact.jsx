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
    padding: 200px 100px 50px 100px;
    background-color: #6E6E73;
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
    align-items: center;
    gap: 400px;
    margin: 0 0 70px 0;
`
const TextContainer = styled.div`
    width: 60%;
`
const Title = styled.h1`
    margin: 0;
    font-family: "Poppins", sans-serif;
    font-size: 45px;
`
const SecondTitle = styled(Titleh2)`
    margin: 0;
`
export const Subtitle = styled.p`
    font-size: 20px;
`
const BtnContainer = styled.div`

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
                            Passionné par le développement web, je crée des applications modernes 
                            et performantes avec les technologies les plus adaptées. Curieux et 
                            toujours en veille, je maîtrise HTML, CSS, JavaScript, et possède une 
                            solide expérience avec React.js pour des interfaces interactives et 
                            optimisées. Mon approche privilégie dynamisme, optimisation et maintenabilité 
                            du code, et je cherche constamment à affiner mes compétences et enrichir mon 
                            expertise. Tu trouveras juste ci-dessous le moyen de me <Span>contacter</Span>, 
                            ainsi que certains de mes <Span>projets</Span>. Bon visionnage !
                        </Subtitle>
                    <Titleh3>
                        Mes contacts se trouve &quot;derriere&quot; le boutton .....
                    </Titleh3>
                </TextContainer>
                <BtnContainer>
                    <HiderBtn onClick={handleToggle}/>
                </BtnContainer>
            </TextAndBtn>
            <HideSection isVisible={hidden}/>
        </ContactSection>
    )
};

export default BannerContact;