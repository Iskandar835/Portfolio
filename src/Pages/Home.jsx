import Header from "../components/PageStructure/Header";
import BannerContact from "../components/PageStructure/BannerContact";
import CardsSection from "../components/PageStructure/CardsSection";
import SkillsSection from "../components/PageStructure/SkillsSection";


function HomePage () {
    return (
        <>
            <Header />
            <main>
                <BannerContact />
                <CardsSection />
                <SkillsSection />
            </main>
        </>
    )
};

export default HomePage;