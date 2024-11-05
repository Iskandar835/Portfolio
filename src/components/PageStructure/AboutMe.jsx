import styled from "styled-components";
import { Span, Subtitle } from "./BannerContact";
import { Titleh2 } from "./Projects";


const SectionAbout = styled.section`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 800px;
    margin: 200px 0 0 0;
    padding: 0 230px;
    background: url("./src/assets/doodle-items.avif");
    background-color: #6E6E73;
    border-radius: 100% 0% 100% 0% / 41% 57% 43% 59%;
`
const Overlay = styled.div`
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.6); /* Voile semi-transparent */
    backdrop-filter: blur(2px);
    border-radius: 100% 0% 100% 0% / 41% 57% 43% 59%;
`
const TextContainer = styled.div`
    position: relative;
    z-index: 2;
`
const Text = styled(Subtitle)`
    text-align: center;
`

function AboutMe () {
    return (
        <SectionAbout>
            <Overlay />
            <TextContainer>
                <Titleh2>
                    A propos de <Span>moi</Span>
                </Titleh2>
                <Text>
                    Lorem tur doloremque ex veniam maiores voluptate, beatae eos voluptatem 
                    facere commodi vero iste dolorum, eius, debitis accusamus magni! Quis labore 
                    rerum est ut. Dolores quasi voluptates sint dolorum exercitationem quis dicta, 
                    placeat ullam illo dignissimos animi consequuntur. Adipisci non earum aut 
                    tenetur explicabo! Optio architecto quae odio fugit aliquid eligendi quasi 
                    eveniet laborum praesentium aspernatur, dolorum incidunt, excepturi porro ut 
                    iste rerum vitae consequatur.
                </Text>
            </TextContainer>
        </SectionAbout>
    )
};

export default AboutMe;