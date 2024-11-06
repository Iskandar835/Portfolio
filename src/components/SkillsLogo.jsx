import styled from "styled-components";
import { LogoContainer } from "./TechnoLogo";

const Container = styled(LogoContainer)`
    border-radius: 10px;
    width: 55px;
    height: 55px;
    background-color: #000000;
    border: 4px solid #E9C2EC;
`
const ImgLogo = styled.img`
    width: 35px;
`
const Div = styled.div`
    display: flex;
`

function SkillsLogo () {
    return (
        <Div>
            <Container>
                <ImgLogo src="./src/assets/logo-javascript.jpg" />
            </Container>
            <Container>
                <ImgLogo src="./src/assets/logo-css.png" />
            </Container>
            <Container>
                <ImgLogo src="./src/assets/logo-react.png" />
            </Container>
            <Container>
                <ImgLogo src="./src/assets/logo-html.png" />
            </Container>
        </Div>

    )
};

export default SkillsLogo;