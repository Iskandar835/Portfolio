import styled from "styled-components";
import { Titleh2 } from "./Projects";
import { Span, Subtitle } from "./BannerContact";
import SkillsLogo from "../SkillsLogo";

const Section = styled.section`
    margin: 200px 80px 0 80px;
    padding: 0 150px;
`
// const TechnoSkills = styled.div`
//     display: flex;
//     justify-content: space-between;
//     margin-top: 50px;
//     padding: 0 250px;
// `

function SkillsSection () {
    return (
        <Section>
            <Titleh2>My <Span>Skills</Span></Titleh2>
            <Subtitle>
                mettre tout les logo des techno maitriser, relier chaque logo par une border,
                fait rotate l&apos;enssemble.
            </Subtitle>
            <SkillsLogo/>
        </Section>
    )
};

export default SkillsSection;