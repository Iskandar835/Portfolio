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
    width: 40%;
`
const SkillsContainer = styled.div`
    width: 60%;
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
                    <Subtitle>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, nobis ipsa. Cum, obcaecati quam rem maiores optio quo modi similique.
                    </Subtitle>
                </TextContainer>
                <SkillsContainer>
                    <AllSkills/>
                </SkillsContainer>
            </Container>
        </Section>
    )
};

export default MySkills;