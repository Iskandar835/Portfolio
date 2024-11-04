import styled from "styled-components";
import { Title } from "./BannerContact";
import Logo from "../LogoTechno";


const Section = styled.section`
    margin-top: 200px;
    text-align: center;
`
const TechnoSkills = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    padding: 0 250px;
`
const Paragraph = styled.p`

`
function SkillsSection () {
    return (
        <Section>
            <Title>My Skills</Title>
            <TechnoSkills>
                <Logo className={"fa-brands fa-css3"}/>
                <Logo className={"fa-brands fa-js"}/>
                <Logo className={"fa-brands fa-react"} />
            </TechnoSkills>
            <Paragraph>A l&apos;aise avec les tehnologie qui domine le developpemnt front-end, comme css et javascript, j&apos;aime 
                faire diverse projet moderne et créatifs. Je me specialise dans le language javaScript afin de devenir un expert.</Paragraph>

        </Section>
    )
};

export default SkillsSection;