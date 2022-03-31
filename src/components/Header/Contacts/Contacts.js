import React from "react";
// --- STYLED COMPONENTS  --- //
import { Contact, ContactWrapper, Info, MainDiv, Social, Title } from "./StyledContacts";
// --- CONSTANTS --- //
import { CustomContainer } from "../../../constants";
// --- ICONS --- //
import { BsFillTelephoneFill, BsTwitter, BsInstagram } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Contacts = () => {
  return (
    <ContactWrapper>
      <CustomContainer>
        <MainDiv>
          <Title>
            <p>YOUR LOCAL DIGITAL MARKETING AGENCY</p>
          </Title>
          <Info>
            <Contact>
              <BsFillTelephoneFill />
              <p>(800) 123-5678</p>
            </Contact>
            <Contact>
              <IoIosMail />
              <p>info@demmoo.com</p>
            </Contact>
            <div>
              <Social>
                <FaFacebookF />
              </Social>
              <Social>
                <BsTwitter />
              </Social>
              <Social>
                <FaLinkedinIn />
              </Social>
              <Social>
                <BsInstagram />
              </Social>
            </div>
          </Info>
        </MainDiv>
      </CustomContainer>
    </ContactWrapper>
  );
};

export default Contacts;
