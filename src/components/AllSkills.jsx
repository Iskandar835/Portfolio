import styled from "styled-components";
import SkillLogo from "./SkillLogo";
import Data from "../data/database.json";


const Container = styled.div`
    position: relative;
    width: 280px;
    height: 280px;
    border-radius: 50%; 
`
const ImgComputer = styled.img`
    position: relative;
    z-index: 1;
    top: 20px;
    left: 20px;
    width: 250px;
`

function AllSkills () {
    return (
        <Container>
            {Data.skills.map((item) => (
                <SkillLogo key={item.id} source={item.source} alt={item.alt} />
            ))}
            <ImgComputer src="./src/assets/computeur.png" alt="Dessins d'un ordinateur" />
        </Container>
    )
};

export default AllSkills;