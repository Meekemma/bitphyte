import Header from "../components/Header/Header";
import Team from "../components/Team";
import AboutUsContainer from "../components/AboutContainer";
import WhoWeAre from "../components/WhoWeAre";
import WhyUs from "../components/WhyUs";
import Footer from "../components/Footer/Footer";

const AboutUs = () => {
  return (
    <div className="bg-dark text-softGray min-h-screen flex flex-col">
      <Header />
      <Team />
      <AboutUsContainer />
      <WhoWeAre />
      <WhyUs />

      <main className="flex-grow bg-gradient-to-br from-gray-900 via-gray-950 to-black py-24 px-6 md:px-16">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto mb-10">
            Bitphyte is redefining how individuals approach crypto investment. Our platform blends powerful tools, a seamless user interface, and enterprise-level security to create a smooth investment experience for everyone—from beginners to experts.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
