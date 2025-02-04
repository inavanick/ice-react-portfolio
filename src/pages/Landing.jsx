import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import SocialMediaIcons from "../components/SocialMediaIcons";
import profileImg from "../assets/LinkedInBlankBackgroundPic.png";

const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:min-h-screen py-10"
    >
      {/* IMAGE SECTION */}
      <div className="basis-3/5 z-10 mt-5 md:mt-24 flex justify-center md:order-2">
        {isAboveLarge ? (
          <div
            id="profileDivBackground"
            className="relative z-0 ml-20 before:absolute before:-top-0 before:-left-0 before:rounded-t-[400px]
              before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-silver-color before:z-[-1] p-1 before:bg-sky-950"
          >
            <img
              alt="profile"
              className="hover:filter hover:grayscale-[50%] transition duration-500 z-10 w-full max-w-[350px] md:max-w-[350px]"
              src={profileImg}
            />
          </div>
        ) : (
          <div
            id="profileDivBackground"
            className="relative z-0 before:absolute before:rounded-t-[400px] before:w-full before:h-full before:z-[-1]"
          >
            <img
              alt="profile"
              className="z-10 w-full max-w-[280px] md:max-w-[400px]"
              src={profileImg}
            />
          </div>
        )}
      </div>

      {/* MAIN TEXT */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-5xl font-playfair z-10 text-center md:text-start">
            Issac {""}
            <span
              className="xs:relative xs:text-background-color xs:font-semibold z-20 xs:before:content-brush
                before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1] before:w-[255px] pointer-events-none"
            >
              Navanick
            </span>
          </p>

          <p className="mt-12 mb-7 text-sm text-center md:text-start">
            Adipiscing arcu, in aliquam fringilla cursus. Elit arcu elementum
            viverra malesuada sem ac faucibus dolor. Sagittis scelerisque.
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-4 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-silver text-background-color rounded-sm py-3 px-7 font-semibold
                hover:bg-silver-color hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-silver py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-background-color hover:text-silver-color transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
              Let's talk.
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
