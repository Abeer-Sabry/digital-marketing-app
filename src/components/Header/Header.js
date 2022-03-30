import React from "react";
// --- COMPONENTS --- //
import Contacts from "./Contacts/Contacts";
import Navbar from "./Navbar/Navbar";
import Cover from "./Cover/Cover";
import ResNav from "./ResponsiveNavbar/ResNav";

const Header = () => {
  return (
    <>
      <Contacts />
      <Navbar />
      <ResNav />
      <Cover />
    </>
  );
};

export default Header;
