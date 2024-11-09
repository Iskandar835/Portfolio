import Data from "../../data/database.json"
import styled from "styled-components";
import { Titleh4 } from "./MySkills";
import Tags from "../Tags";


const FooterSection = styled.footer`
    background-color: #000000;
    margin: 200px 0 0 0;
    padding: 80px 60px 20px 60px;
    color: #FFFFFF;
`
const BothSection = styled.div`
    display: flex;
    margin-bottom: 120px;
`

const FirstSection = styled.div`
    width: 65%;
`
const SecondSection = styled.div`
    width: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    margin-top: 120px;
    `
    
    const Copyright = styled.p`
    margin: 0;
    text-align: center;
    `
    const ContactIndication = styled.p`
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 5px;
    font-size: 18px;
`

function Footer () {
    const data = Data.contact;

    return (
        <FooterSection>
            <BothSection>
                <FirstSection>
                    <Titleh4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, odio? &apos;refaire rappel de contact dans le footer&apos;</Titleh4>
                </FirstSection>
                <SecondSection>
                    <ContactIndication>
                        Lorem ipsum dolor<Tags href={data[0].link} className={data[0].icon} content={data[0].name}/>sit amet consectetur adipisicing<Tags href={data[1].link} className={data[1].icon} content={data[1].name}/>elit. Ea, repudiande<Tags href={data[2].link} className={data[2].icon} content={data[2].name}/>
                    </ContactIndication> 
                </SecondSection>
            </BothSection>
            <Copyright>ici sa sera le copyright</Copyright>
        </FooterSection>
    )
};

export default Footer;