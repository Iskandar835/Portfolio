import styled from "styled-components";
import { Titleh2 } from "./Projects";
import { Span, Subtitle } from "./BannerContact";
import AllSkills from "../AllSkills";
import { devices } from "../../helpers/Breakpoints";


const Section = styled.section`
    margin: 200px 50px 0 50px;
    @media ${devices.tabs} {
        margin: 150px 50px 0 50px;
    }
    @media ${devices.mobile} {
        text-align: center;
        margin: 150px 30px 0 30px;
    }
`
const Container = styled.div`
    display: flex;
    align-items:center;
    justify-content: center;
    gap: 90px;
    @media ${devices.tabs} {
        gap: 70px;
    }
    @media ${devices.mobile} {
        flex-direction: column-reverse;
        gap: 0px;
    }
`
const TextContainer = styled.div`
    width: 50%;
    @media ${devices.mobile} {
        width: auto;
    }
`
export const Titleh3 = styled.h3`
    font-family: var(--title-font-family);
    font-size: 25px;
    font-weight: 600;
    @media ${devices.mobile} {
        margin: 0;
        font-size: 22px;
    }
`
export const Titleh4 = styled.h4`
    margin: 0;
    font-family: var(--title-font-family);
    font-size: 35px;
    font-weight: 600;
    @media ${devices.tabs} {
        font-size: 30px;
    }
    @media ${devices.mobile} {
        margin: 30px 0 0 0;
        font-size: 22px;
        font-weight: 500;
    }
`
const SkillsContainer = styled.div`
    display: flex;
    margin-bottom: 80px;
    @media ${devices.mobile} {
        margin-bottom: 65px;
    }
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