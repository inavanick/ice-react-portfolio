import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const DotLink = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  const selectedStyles = `relative bg-baby-blue before:absolute before:w-6 before:h-6 before:rounded-full
    before:border-2 before:border-baby-blue before:left-[-50%] before:top-[-50%]`;
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? selectedStyles : "bg-dark-grey"
      } w-3 h-3 rounded-full`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    />
  );
};

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      <DotLink
        page="home"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <DotLink
        page="skills"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <DotLink
        page="projects"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      {/* <DotLink
        page="testimonials"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      /> */}
      <DotLink
        page="contact"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </div>
  );
};

export default DotGroup;
