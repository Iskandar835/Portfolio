import styled from "styled-components";
import { devices } from "../helpers/Breakpoints";

const Container = styled.div`
    display: flex;
    justify-content: center;
`
const Text = styled.p`
    display: flex;
    align-items: center;
    gap: 5px;
    margin: 0;
    font-size: 13px;
    @media ${devices.mobile} {
        font-size: 11px;
    }
`

function Copyright () {
    return (
        <Container>
             <Text><i className="fa-regular fa-copyright"></i>Non je rigole, tu peux copier si tu veux.</Text>
        </Container>
    )
};

export default Copyright;