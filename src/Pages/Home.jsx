import Header from "../components/PageStructure/Header";
import BannerContact from "../components/PageStructure/BannerContact";
import Projects from "../components/PageStructure/Projects";
import SkillsSection from "../components/PageStructure/SkillsSection";
import AboutMe from "../components/PageStructure/AboutMe";


function HomePage () {
    return (
        <>
            <Header />
            <main>
                <BannerContact />
                <Projects />
                <AboutMe />
                <SkillsSection />
            </main>
        </>
    )
};

export default HomePage;