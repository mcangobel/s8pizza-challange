import Footer from "./Footer";
import Hero from "./MainPage/Hero";
import IntroMenu from "./MainPage/IntroMenu";
import Menu from "./MainPage/Menu";

export default function MainPage() {
    return (
        <>
            <Hero />
                <main>
                    <IntroMenu />
                    <Menu />
                </main>
            <Footer />
        </>

    )
}