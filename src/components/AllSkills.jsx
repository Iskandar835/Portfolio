import styled from "styled-components";
import SkillLogo from "./SkillLogo";
import Data from "../data/database.json";


const Container = styled.div`
    width:330px;
    height:330px;
    border:5px inset #E9C2EC;
    position: relative;
    border-radius:50%; 
`
const Test = styled.p`
    position: relative;
    left: 135px;
    top: 135px;
`

function AllSkills () {
    return (
        <Container>
            {Data.skills.map((item) => (
                <SkillLogo key={item.id} source={item.source} alt={item.alt} />
            ))}
            <Test>coucou</Test>
        </Container>
    )
};

export default AllSkills;