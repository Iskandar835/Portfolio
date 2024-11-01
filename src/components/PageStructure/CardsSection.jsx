import styled from "styled-components";
import CardAlone from "../Card";
import Data from "../../data/database.json";


const AllCards = styled.section`
    display: flex;
    justify-content: center;
    margin: 200px 80px 0 80px;
    gap: 100px;
`

function CardsSection () {
    return (
        <AllCards>
            {Data.projets.map((projets) => (
                <CardAlone key={projets.id} projet={projets}/>
            ))}
        </AllCards>

    )
};

export default CardsSection;