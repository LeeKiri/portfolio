import ContactForm from "../components/ContactForm";
import IconSection from "../components/IconSection";
import InfoSection from "../components/Info";

const Home = () => {
  return (
    <>
      <div className="container">
        <InfoSection />
        <IconSection />
        <ContactForm />
      </div>
    </>
  );
};

export default Home;
