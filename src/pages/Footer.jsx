import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="bg-nav-color py-2">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair font-semibold text-xl text-silver-color">
            Issac Navanick
          </p>
          <p className="font-playfair text-md text-silver-color">
            ©2024 Navanick. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
