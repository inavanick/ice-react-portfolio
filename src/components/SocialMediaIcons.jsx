import linkedInIcon from "../assets/linkedin.png";
import twitterIcon from "../assets/twitter.png";
import facebookIcon from "../assets/facebook.png";
import githubIcon from "../assets/github-mark-white.svg";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-7 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/issac-navanick"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src={linkedInIcon} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://x.com/IssacNavanick"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="twitter-link" src={twitterIcon} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-link" src={facebookIcon} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500 w-[30px] h-[30px]"
        href="https://www.github.com/inavanick"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="github-link" src={githubIcon} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
