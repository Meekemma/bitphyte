import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ContactUs from "../components/ContactUs";

const Contact = () => {
    return (
        <div className="bg-dark text-softGray min-h-screen flex flex-col">
            <Header />
            <ContactUs />
            <main className="flex-grow container mx-auto px-8 py-20">
                <h1 className="text-3xl font-extrabold text-indigo mb-4 font-heading">Contact Us</h1>
                <p className="text-gray-300 text-sm max-w-xl mb-8 leading-relaxed">
                    If you have any questions or need assistance, feel free to reach out to us.
                </p>
            </main>
            <Footer />
        </div>
    );
}

export default Contact;