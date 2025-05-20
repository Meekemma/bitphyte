import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ContactUs from "../components/ContactUs";

const Contact = () => {
    return (
        <div className="bg-dark text-softGray min-h-screen flex flex-col">
            <Header />
            <ContactUs />
            <Footer />
        </div>
    );
}

export default Contact;