import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import SubFooter from "../components/SubFooter";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <SubFooter />
      <Footer />
    </>
  );
}
