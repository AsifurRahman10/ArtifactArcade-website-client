import React from "react";
import { Navbar } from "../Component/Navbar";
import { Footer } from "../Component/Footer";

export const MainLayout = () => {
  return (
    <div className="bg-[#FFFFFF]">
      <header>
        <Navbar></Navbar>
      </header>
      <main className="min-h-[590px]"></main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};
