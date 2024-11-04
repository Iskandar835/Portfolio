import Header from "../components/PageStructure/Header";
import BannerContact from "../components/PageStructure/BannerContact";
import CardsSection from "../components/PageStructure/CardsSection";
import SkillsSection from "../components/PageStructure/SkillsSection";
import AboutMe from "../components/PageStructure/AboutMe";


function HomePage () {
    return (
        <>
            <Header />
            <main>
                <BannerContact />
                <CardsSection />
                <AboutMe />
                <SkillsSection />
            </main>
        </>
    )
};

export default HomePage;