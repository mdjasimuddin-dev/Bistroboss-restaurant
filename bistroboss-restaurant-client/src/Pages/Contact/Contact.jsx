import { Title } from "react-head";
import Cover from "../../Components/Cover";
import contactImg from "./../../assets/Contact/Contact-Banner.png";
import SectionTitle from "../../Components/SectionTitle";
import InfoCard from "./Components/InfoCard";
import phoneIcon from "./../../assets/Contact/telephone.svg";
import addressIcon from "./../../assets/Contact/icon2.svg";
import timeIcon from "./../../assets/Contact/icon3.svg";
import ContactForm from "./Components/ContactForm";

const Contact = () => {
  return (
    <div>
      <Title>Bistro Boss | Contact </Title>

      <Cover
        bgImage={contactImg}
        title="Contact Us"
        description="Would you like to try a dish?"
      />

      {/* our location  */}
      <SectionTitle
        subTitle="---Visit Us---"
        sectionTitle="Our Location"
      ></SectionTitle>

      {/* Info Card  */}
      <div className="grid grid-cols-1 lg:grid-cols-3 m-5 gap-10">
        <InfoCard
          icon={phoneIcon}
          InfoTitle="Contact"
          InfoDescrip="01784293797"
          InfoDescrip2="mdjasimuddin.dev@gmail.com"
         
        ></InfoCard>

        <InfoCard
          icon={addressIcon}
          InfoTitle="address"
          InfoDescrip="House #26, Road-03, Block-C"
          InfoDescrip2="Banasree, Dhaka, Bangladesh"
        ></InfoCard>

        <InfoCard
          icon={timeIcon}
          InfoTitle="Working Day"
          InfoDescrip="Mon - Fri: 08:00 - 22:00"
          InfoDescrip2="Sat - Sun: 10:00 - 23:00"
        ></InfoCard>
      </div>

      {/* contact form  */}
      <ContactForm />
    </div>
  );
};

export default Contact;
