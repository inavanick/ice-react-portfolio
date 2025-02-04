import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import helloWorldImg from "../assets/helloworld.png";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-6 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-24">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5 text-center">
            MY{" "}
            <span
              className="text-nav-color"
              style={{ textShadow: "-1px 1px 1px white" }}
            >
              SKILLS
            </span>
          </p>
          <LineGradient />
          <p className="mt-10 mb-7">
            Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
            fames odio in at.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-5 before:-left-5
              before:w-full before:h-full before:border-2 before:border-silver-color before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                style={{ filter: "brightness(1.4)" }}
                src={helloWorldImg}
              />
            </div>
          ) : (
            <img
              alt="skills"
              className="z-10"
              style={{ filter: "brightness(1.4)" }}
              src={helloWorldImg}
            />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Front End
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-silver-color absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
            error, quae vel delectus distinctio deleniti ipsum, aspernatur
            ratione facere aliquam itaque officiis tempore quidem incidunt hic
            sequi nemo. Inventore, laboriosam?
          </p>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Back End
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-nav-color absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quod
            beatae provident neque laboriosam placeat obcaecati consectetur
            debitis vel itaque nam, repellat perferendis iure praesentium animi,
            fugit velit officiis. Praesentium.
          </p>
        </motion.div>
        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Other IT
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-baby-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat id
            veritatis voluptates quas vitae vero, quae exercitationem fuga
            possimus pariatur commodi nemo natus omnis dolore! Temporibus
            laudantium nam similique et!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
