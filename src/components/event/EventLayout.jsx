import React from "react";
import { Header } from "../common/Header";
import { Footer } from "../common/Footer";

export const EventLayout = ({ children }) => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <section>
        <Header />
        <main>{children}</main>
      </section>
      <Footer />
    </div>
  );
};
