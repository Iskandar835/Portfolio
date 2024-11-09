import styled from "styled-components";
import { Titleh2 } from "./Projects";
import { Span, Subtitle } from "./BannerContact";
import AllSkills from "../AllSkills";


const Section = styled.section`
    margin: 200px 80px 0 80px;
    padding: 0 150px;
`
const Container = styled.div`
    display: flex;
    align-items:center;
`
const TextContainer = styled.div`
    width: 50%;
`
const Titleth3 = styled.h3`
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
    width: 50%;
    display: flex;
    justify-content: center;
    margin-bottom: 80px;
`

function MySkills () {
    return (
        <Section>
            <Titleh2>My <Span>Skills</Span></Titleh2>
            <Container>
                <TextContainer>
                    <Titleth3>Lorem ipsum dolor sit amet.</Titleth3>
                    <Titleh4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde aliquid cum vel doloremque nisi officiis!</Titleh4>
                    <Subtitle>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Subtitle>
                </TextContainer>
                <SkillsContainer>
                    <AllSkills/>
                </SkillsContainer>
            </Container>
        </Section>
    )
};

export default MySkills;