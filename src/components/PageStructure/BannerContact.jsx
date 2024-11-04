import styled from "styled-components";
import ContactLogo from "../ContactLogo";


const ContactSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 200px;
`
const TitleDiv = styled.div`
    margin: 0 0 60px 0;
    text-align: center;
`
export const Title = styled.h1`
    margin: 0;
    font-family: "Haniman", sans-serif;
    font-size: 45px;
`
const Subtitle = styled.p`
    font-size: 20px;
`
const ContactDiv = styled.div`
    display: flex;
    gap: 100px;
`
export const Span =styled.span`
    font-weight: bold;
    color: #E9C2EC;
`

function BannerContact () {
    return (
        <ContactSection>
            <TitleDiv>
                <Title>Moi, c&apos;est Sacha, je suis <Span>passionné</Span> de dev et de tech.</Title>
                <Subtitle>Tu trouveras juste ci-dessous le moyen de me <Span>contacter</Span>, ainsi que certains de mes <Span>projets</Span>. Bon visionnage !</Subtitle>
            </TitleDiv>
            <ContactDiv>
                <ContactLogo link={"https://www.linkedin.com/in/sacha-vandermoeten-57124631b/"} className={"fa-brands fa-linkedin-in"}/>
                <ContactLogo link={"#"} className={"fa-brands fa-whatsapp"}/>
                <ContactLogo link={"https://github.com/Iskandar835"} className={"fa-brands fa-github"}/>
            </ContactDiv>
        </ContactSection>
    )
};

export default BannerContact;