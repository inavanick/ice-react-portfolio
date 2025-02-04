import React, { useRef, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import menuIcon from "../assets/menu-icon.svg";
import closeIcon from "../assets/close-icon.svg";
import uteIcon from "../assets/uteseal.svg";

export default function Navbar({ isTopOfPage, selectedPage, setSelectedPage }) {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const navbarBackground = isTopOfPage ? "" : "bg-nav-color";

  const mobileMenuRef = useRef();
  const openMobileMenu = () => {
    mobileMenuRef.current.showModal();
    mobileMenuRef.current.style.opacity = 1;
    mobileMenuRef.current.style.right = 0;
  };
  const closeMobileMenu = () => {
    mobileMenuRef.current.style.right = "-300px";
    mobileMenuRef.current.style.opacity = 0;
    setTimeout(() => {
      mobileMenuRef.current.close();
    }, 200);
  };
  const closeMobileMenuForBackdropClicks = (e) => {
    const rect = mobileMenuRef.current.getBoundingClientRect();
    const clickedOutside =
      e.clientX < rect.left ||
      e.clientX > rect.right ||
      e.clientY < rect.top ||
      e.clientY > rect.bottom;
    if (clickedOutside) closeMobileMenu();
  };

  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 right-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <AnchorLink
          className=""
          href="#home"
          onClick={() => setSelectedPage("home")}
        >
          <div
            id="portfolio-logo"
            className="flex flex-row items-center hover:opacity-70 transition duration-500"
          >
            <img alt="Ute Tribe Icon" src={uteIcon} className="w-11 mr-2" />
            <h4 className="font-playfair text-3xl font-bold">IN</h4>
          </div>
        </AnchorLink>

        {/* DESKTOP NAV */}
        {isDesktop ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            <NavbarLinks
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              isDesktop={isDesktop}
              closeMobileMenu={closeMobileMenu}
            />
          </div>
        ) : (
          <button
            className="rounded-full bg-nav-color p-2"
            onClick={openMobileMenu}
          >
            <img alt="menu-icon" src={menuIcon} />
          </button>
        )}

        {/* MOBILE MENU POPUP */}
        {!isDesktop && (
          <dialog
            ref={mobileMenuRef}
            className="bg-nav-popup-color w-[300px] min-h-screen left-auto right-[-300px] m-0 opacity-0 duration-200 backdrop:bg-[rgb(0,0,0,0.6)]"
            onClick={closeMobileMenuForBackdropClicks}
          >
            {/* CLOSE ICON */}
            <div className="flex justify-end p-5">
              <button onClick={closeMobileMenu} className="mr-3">
                <img alt="close-icon" src={closeIcon} />
              </button>
            </div>

            {/* MENU ITEMS */}
            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-background-color">
              <NavbarLinks
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                isDesktop={isDesktop}
                closeMobileMenu={closeMobileMenu}
              />
            </div>
          </dialog>
        )}
      </div>
    </nav>
  );
}

const Link = ({
  page,
  selectedPage,
  setSelectedPage,
  isDesktop,
  closeMobileMenu,
}) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-baby-blue" : ""
      } hover:text-baby-blue transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => {
        setSelectedPage(lowerCasePage);
        if (!isDesktop) closeMobileMenu();
      }}
    >
      {page}
    </AnchorLink>
  );
};

const NavbarLinks = ({
  page,
  selectedPage,
  setSelectedPage,
  isDesktop,
  closeMobileMenu,
}) => {
  return (
    <>
      <Link
        page="Home"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isDesktop={isDesktop}
        closeMobileMenu={closeMobileMenu}
      />
      <Link
        page="Skills"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isDesktop={isDesktop}
        closeMobileMenu={closeMobileMenu}
      />
      <Link
        page="Projects"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isDesktop={isDesktop}
        closeMobileMenu={closeMobileMenu}
      />
      {/* <Link
        page="Testimonials"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isDesktop={isDesktop}
        closeMobileMenu={closeMobileMenu}
      /> */}
      <Link
        page="Contact"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isDesktop={isDesktop}
        closeMobileMenu={closeMobileMenu}
      />
    </>
  );
};
