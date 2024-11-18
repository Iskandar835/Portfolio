import styled from "styled-components";
import { Titleh4 } from "./MySkills";
import Tags from "../Tags";
import Data from "../../data/database.json";
import Copyright from "../Copyright";
import { devices } from "../../helpers/Breakpoints";


const FooterSection = styled.footer`
    margin: 200px 0 0 0;
    padding: 80px 60px 20px 60px;
    color: #FFFFFF;
    background-color: #000000;
    border-radius: 170px 170px 0 0;
    text-align: center;
    @media ${devices.tabs} {
        margin: 150px 0 0 0;
    }
    @media ${devices.mobile} {
        margin: 150px 0 0 0;
        padding: 50px 30px 20px 30px;
        border-radius: 80px 80px 0 0;
    }
`
const BothSection = styled.div`
    display: flex;
    margin-bottom: 120px;
    @media ${devices.tabs} {
        flex-direction: column;
        margin-bottom: 90px;
    }
    @media ${devices.mobile} {
        flex-direction: column;
        margin-bottom: 90px;
    }
`
const FirstSection = styled.div`
`
const SecondSection = styled.div`
    margin-top: 120px;
    @media ${devices.tabs} {
        margin-top: 50px;
    }
    @media ${devices.mobile} {
        margin-top: 50px;
    }
`
const ContactIndication = styled.p`
    display: flex;
    justify-content: center;
    align-items: baseline;
    flex-wrap: wrap;
    gap: 5px;
    font-size: 18px;
    @media ${devices.mobile} {
        font-size: 15px;
    }
`

function Footer () {
    const data = Data.contact;

    return (
        <FooterSection>
            <BothSection>
                <FirstSection>
                    <Titleh4>Vous souhaitez me contacter pour une éventuelle collaboration ?</Titleh4>
                </FirstSection>
                <SecondSection>
                    <ContactIndication>
                        Je partage du contenu qui m&apos;inspire sur <Tags href={data[0].link} className={data[0].icon} content={data[0].name}/> 
                        et je suis également actif sur <Tags href={data[1].link} className={data[1].icon} content={data[1].name}/>
                        et<Tags href={data[2].link} className={data[2].icon} content={data[2].name}/>pour partager d&apos;autres projets passionnants.
                    </ContactIndication> 
                </SecondSection>
            </BothSection>
            <Copyright />
        </FooterSection>
    )
};

export default Footer;