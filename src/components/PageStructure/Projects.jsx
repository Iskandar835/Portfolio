import styled from "styled-components";
import CardAlone from "../Card";
import Data from "../../data/database.json";
import { Span } from "./BannerContact";
import { devices } from "../../helpers/Breakpoints";


const ProjectSection = styled.section`
    display: flex;
    flex-direction: column;
    margin: 200px 50px 0 50px;
    @media ${devices.tabs} {
        margin: 150px 130px 0 130px;
    }
    @media ${devices.mobile} {
        margin: 100px 30px 0 30px;
    }
`
export const Titleh2 = styled.h2`
    margin: 0 0 80px 0;
    font-family: var(--title-font-family);
    font-size: 60px;
    text-wrap: nowrap;
    text-align: center;
    @media ${devices.tabs} {
        font-size: 50px;
        text-align: center;
    }
    @media ${devices.mobile} {
        margin: 0 0 50px 0;
        font-size: 33px;
        text-wrap: wrap;
    }
`
const ProjectDescprition = styled.div`
    display: flex;
    padding: 0 180px;
    margin-bottom: 80px;
    text-align: center;
    @media ${devices.tabs} {
        padding: 0 80px;
    }
    @media ${devices.mobile} {
        padding: 0 35px;
    }
`
const Text = styled.p`
    margin: 0;
    font-size: 20px;
    @media ${devices.mobile} {
        font-size: 18px;
    }
`
const AllCards = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    @media ${devices.tabs} {
        align-items: center;
        flex-direction: column;
        gap: 70px;
    }
    @media ${devices.mobile} {
        align-items: center;
        flex-direction: column;
        gap: 45px;
    }
`

function Projects () {
    return (
        <ProjectSection>
            <Titleh2>Mes <Span>projets</Span></Titleh2>
            <ProjectDescprition>
                <Text>
                    Le premier projet, SHAPERZ, est un site qui vous permet de concevoir votre 
                    planche sur mesure. Le deuxième, Oh My Food, est un site gourmand qui éveillera 
                    votre appétit ! Enfin, le troisième, Kasa, est un site qui vous donnera des 
                    envies d&apos;évasion et de vacances.
                </Text>
            </ProjectDescprition>
            <AllCards>
                {Data.projects.map((item) => (
                    <CardAlone key={item.id} project={item}/>
                ))}
            </AllCards>
        </ProjectSection>
    )
};

export default Projects;