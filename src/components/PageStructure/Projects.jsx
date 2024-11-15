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
        margin: 150px 80px 0 80px;
    }
`
export const Titleh2 = styled.h2`
    font-family: "Poppins", sans-serif;
    font-size: 60px;
    text-wrap: nowrap;
    text-align: center;
    @media ${devices.tabs} {
        margin: 0 0 80px 0;
        text-align: center;
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
`

function Projects () {
    return (
        <ProjectSection>
            <Titleh2>Mes <Span>projets</Span></Titleh2>
            <AllCards>
                {Data.projets.map((projets) => (
                    <CardAlone key={projets.id} projet={projets}/>
                ))}
            </AllCards>
        </ProjectSection>
    )
};

export default Projects;