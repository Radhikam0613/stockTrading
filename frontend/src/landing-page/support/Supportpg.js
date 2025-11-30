import React from "react";

import Hero from "./Hero";
import CreateTicket from "./Createticket";

import Navbar from "../Navbar";
import Footer from "../Footer";
import Featured from "./Featured";

function PricingPage() {
  return (
    <>
      <Hero />
      <Featured/>
      <CreateTicket />
    </>
  );
}

export default PricingPage;