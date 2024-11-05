import styled from "styled-components";
import ContactLogo from "../ContactLogo";
import Data from "../../data/database.json";


const ContactSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 200px 0 0 0;
    padding: 0 50px;
`
const ParagraphContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 0 70px 0;
`
const TitleDiv = styled.div`
    margin: 0 0 60px 0;
`
const Title = styled.h1`
    margin: 0;
    font-family: "Poppins", sans-serif;
    font-size: 45px;
`
const SubtitleDiv = styled.div`
    width: 40%;
    margin: 80px 0 0 0;
`
const Subtitle = styled.p`
    font-size: 20px;
`
const ContactContainer = styled.div`
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
            <ParagraphContainer>
                <TitleDiv>
                    <Title>Moi c&apos;est Sacha,<div>developpeur <Span>frontend</Span></div></Title>
                </TitleDiv>
                <SubtitleDiv>
                    <Subtitle>Tu trouveras juste ci-dessous le moyen de me <Span>contacter</Span>, ainsi que certains de mes <Span>projets</Span>. Bon visionnage !</Subtitle>
                </SubtitleDiv>
            </ParagraphContainer>
            <ContactContainer>
                {Data.contact.map((contactItem) => (
                    <ContactLogo key={contactItem.id} className={contactItem.icon} link={contactItem.link} />
                ))}
            </ContactContainer>
        </ContactSection>
    )
};

export default BannerContact;