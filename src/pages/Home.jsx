import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "motion/react";
import Hero from "../components/Hero";
import SelectedWork from "../components/SelectedWork";
import TechStack from "../components/TechStack";
import About from "../components/About";
import Contact from "../components/Contact";

export default function Home() {
  const location = useLocation();

  // Handle deep links like "/#work" coming from another page
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      });
    }
  }, [location]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <Hero />
      <SelectedWork />
      <TechStack />
      <About />
      <Contact />
    </motion.div>
  );
}
