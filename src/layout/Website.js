import React from "react";
import Header from "../components/Website/Header";
import Footer from "../components/Website/Footer";

const Website = ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
);

export default Website;
