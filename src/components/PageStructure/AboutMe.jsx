import styled from "styled-components"
import { Span } from "./BannerContact"

const SectionAbout = styled.section`
position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 800px;
    margin-top: 200px;
    padding: 0 100px;
    background: url("./src/assets/doodle-items.avif");
    background-color: #6E6E73;
`
const Overlay = styled.div`
    position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5); /* Voile semi-transparent */
            z-index: 1;
`
const Subtitle = styled.h2`
    font-size: 45px;
    font-family: "hanuman", sans-serif;
`
const TextContainer = styled.div`
position: relative;
z-index: 2;
    display: flex;
    justify-content: space-between;
`
const ParagraphContainer = styled.div`
    width: 60%;
`

function AboutMe () {
    return (
        <SectionAbout>
            <Overlay/>
            <TextContainer>
                <Subtitle>
                    A propos de <Span>moi</Span>
                </Subtitle>
                <ParagraphContainer>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint illum placeat distinctio odit exercitationem cupiditate quasi praesentium culpa neque cumque qui repellendus, non ipsum libero minus ipsam necessitatibus omnis adipisci eos. Ad amet voluptas quibusdam voluptatibus pariatur doloremque ex veniam maiores voluptate, beatae eos voluptatem facere commodi vero iste dolorum, eius, debitis accusamus magni! Quis labore rerum est ut. Dolores quasi voluptates sint dolorum exercitationem quis dicta, placeat ullam illo dignissimos animi consequuntur. Adipisci non earum aut tenetur explicabo! Optio architecto quae odio fugit aliquid eligendi quasi eveniet laborum praesentium aspernatur, dolorum incidunt, excepturi porro ut iste rerum vitae consequatur.
                    </p>

                </ParagraphContainer>
            </TextContainer>
        </SectionAbout>
    )
}

export default AboutMe