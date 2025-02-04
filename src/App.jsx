import React, { useEffect, useState } from "react";
import LineGradient from "./components/LineGradient";
import useMediaQuery from "./hooks/useMediaQuery";
import Contact from "./pages/Contact";
import DotGroup from "./pages/DotGroup";
import Footer from "./pages/Footer";
import Landing from "./pages/Landing";
import MySkills from "./pages/MySkills";
import Navbar from "./pages/Navbar";
import Projects from "./pages/Projects";

export default function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="bg-deep-blu max-w-[1100px] m-auto">
        <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <div className="w-5/6 mx-auto md:h-full">
          {isDesktop && (
            <DotGroup
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          )}
          <Landing setSelectedPage={setSelectedPage} />
        </div>
        <LineGradient />
        <div className="w-5/6 mx-auto md:h-full">
          <MySkills />
        </div>
        <LineGradient />
        <div className="w-5/6 mx-auto">
          <Projects />
        </div>
        {/* <div className="w-5/6 mx-auto md:h-full">
          <Testimonials />
        </div> */}
        <LineGradient />
        <div className="w-5/6 mx-auto md:h-full">
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
}
