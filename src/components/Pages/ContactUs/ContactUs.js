import React from "react";
import FooterThree from "../../common/Footer/FooterThree";
import Menu from "../../common/Menu/Menu";
import ContactInfo from "./ContactInfo";
import ContactUsBanner from "./ContactUsBanner";

const ContactUs = () => {
  return (
    <>
      <Menu />
      <ContactUsBanner />
      <ContactInfo />
      <FooterThree />
    </>
  );
};

export default ContactUs;
