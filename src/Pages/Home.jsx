import Header from "../components/PageStructure/Header";
import BannerContact from "../components/PageStructure/BannerContact";
import Projects from "../components/PageStructure/Projects";
import MySkills from "../components/PageStructure/MySkills";
import Footer from "../components/PageStructure/Footer";


function HomePage () {
    return (
        <>
            <Header />
            <main>
                <BannerContact />
                <Projects />
                <MySkills />
            </main>
            <Footer />
        </>
    )
};

export default HomePage;