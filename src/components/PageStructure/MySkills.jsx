import styled from "styled-components";
import { Titleh2 } from "./Projects";
import { Span, Subtitle } from "./BannerContact";
import AllSkills from "../AllSkills";


const Section = styled.section`
    margin: 200px 50px 0 50px;
`
const Container = styled.div`
    display: flex;
    align-items:center;
    justify-content: center;
    gap: 90px;
`
const TextContainer = styled.div`
    width: 50%;
`
export const Titleh3 = styled.h3`
    font-family: "Poppins", sans-serif;
    font-size: 25px;
    font-weight: 600;
`
export const Titleh4 = styled.h4`
    margin: 0;
    font-family: "Poppins", sans-serif;
    font-size: 35px;
    font-weight: 600;
`
const SkillsContainer = styled.div`
    display: flex;
    margin-bottom: 80px;
`

function MySkills () {
    return (
        <Section>
            <Titleh2>My <Span>Skills</Span></Titleh2>
            <Container>
                <TextContainer>
                    <Titleh3>Environnement Frontend</Titleh3>
                    <Titleh4>Mon savoir-faire est orienté vers les langages qui dominent aujourd&apos;hui le développement web et son écosystème.</Titleh4>
                    <Subtitle>En route pour des projets plus interactifs !</Subtitle>
                </TextContainer>
                <SkillsContainer>
                    <AllSkills/>
                </SkillsContainer>
            </Container>
        </Section>
    )
};

export default MySkills;