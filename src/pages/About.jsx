import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import AboutUsContainer from "../components/AboutContainer";
import Team from "../components/Team";
import WhoWeAre from "../components/WhoWeAre";
import WhyUs from "../components/WhyUs";

const AboutUs = () => {
    return (
        <div className="bg-dark text-softGray min-h-screen flex flex-col">
            <Header />
            <Team />
            <AboutUsContainer />
            <WhoWeAre />
            <WhyUs />
            <main className="flex-grow container mx-auto px-8 py-20">
                <h1 className="text-3xl font-extrabold text-indigo mb-4 font-heading">About Us</h1>
                <p className="text-gray-300 text-sm max-w-xl mb-8 leading-relaxed">
                    Welcome to Bitphyte, your trusted platform for crypto investment. We are dedicated to providing a secure and user-friendly experience for all our users.
                </p>
            </main>
            <Footer />
        </div>
    );
}
export default AboutUs;