import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export const Parent = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
