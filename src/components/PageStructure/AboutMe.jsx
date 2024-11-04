import styled from "styled-components"
import { Span } from "./BannerContact"

const SectionAbout = styled.section`
    display: flex;
    justify-content: space-between;
    margin-top: 200px;
    padding: 0 100px;
`
const Subtitle = styled.h2`
    margin-top: 0;
    font-size: 45px;
    font-family: "hanuman", sans-serif;
`
const TextContainer = styled.div`

`
const ImgContainer = styled.div``
const Img = styled.img`
    width: 700px;
    border-radius: 15px;
`

function AboutMe () {
    return (
        <SectionAbout>
            <TextContainer>
                <Subtitle>
                    A propos de <Span>moi</Span>
                </Subtitle>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint illum placeat distinctio odit exercitationem cupiditate quasi praesentium culpa neque cumque qui repellendus, non ipsum libero minus ipsam necessitatibus omnis adipisci eos. Ad amet voluptas quibusdam voluptatibus pariatur doloremque ex veniam maiores voluptate, beatae eos voluptatem facere commodi vero iste dolorum, eius, debitis accusamus magni! Quis labore rerum est ut. Dolores quasi voluptates sint dolorum exercitationem quis dicta, placeat ullam illo dignissimos animi consequuntur. Adipisci non earum aut tenetur explicabo! Optio architecto quae odio fugit aliquid eligendi quasi eveniet laborum praesentium aspernatur, dolorum incidunt, excepturi porro ut iste rerum vitae consequatur.
                </p>
            </TextContainer>
            <ImgContainer>
                <Img src="./src/assets/clavier.webp" alt="Photo d'un clavier" />
            </ImgContainer>
        </SectionAbout>
    )
}

export default AboutMe