import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-background-color`;
  const projectTitle = title.split(" ").join("-").toLowerCase();
  const projectImg = `/${projectTitle}.jpeg`;

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <img src={projectImg} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-28">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span
              className="text-nav-color"
              style={{ textShadow: "-1px 1px 1px white" }}
            >
              PRO
            </span>
            JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
          fames odio in at. At magna ornare dictum lectus. Purus massa morbi
          purus nec eget eleifend ut elit.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center pb-20">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={{
            hidden: { opacity: 0.5, scale: 1 },
            visible: { opacity: 1, scale: 1 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.07 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-nav-color
              max-w-[430px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            Demo Projects
          </div>
          <Project title="Project 1" />
          <Project title="Project 2" />

          {/* ROW 2 */}
          <Project title="Project 3" />
          <Project title="Project 4" />
          <div
            className="flex justify-center text-center items-center p-10 bg-silver-color
              max-w-[430px] max-h-[400px] text-2xl font-playfair font-semibold"
          ></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
