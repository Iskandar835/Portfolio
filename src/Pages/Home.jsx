import Header from "../components/PageStructure/Header";
import BannerContact from "../components/PageStructure/BannerContact";
import CardsSection from "../components/PageStructure/CardsSection";


function HomePage () {
    return (
        <>
            <Header />
            <main>
                <BannerContact />
                <CardsSection/>
            </main>
        </>
    )
};

export default HomePage;