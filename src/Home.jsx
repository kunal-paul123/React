import React, { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import { useGlobalContext } from "./context";

function Home() {
  const { updateHomePage } = useGlobalContext();

  useEffect(() => updateHomePage(), []);

  return <HeroSection />;
}

export default Home;
