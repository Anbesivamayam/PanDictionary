import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";

// datas
const about = [
  {
    name: "Our Mission",
    link: "https://www.vocabulary.com/about/",
    // link: "",
    icon: IoIosArrowForward,
  },
  {
    name: "Blog",
    link: "https://www.blogger.com/about/",
    icon: IoIosArrowForward,
  },
  {
    name: "Contact support",
    link: "https://support.google.com/",
    icon: IoIosArrowForward,
  },
  {
    name: "Privacy Policy",
    link: "https://policies.google.com/privacy?hl=en-US",
    icon: IoIosArrowForward,
  },
  {
    name: "Terms of Use",
    link: "https://www.apple.com/in/legal/internet-services/terms/site.html",
    icon: IoIosArrowForward,
  },
];
const learn = [
  {
    name: "Dictionary API",
    link: "https://www.dictionaryapi.com/",
    icon: IoIosArrowForward,
  },
  {
    name: "Videos",
    link: "https://www.merriam-webster.com/video",
    icon: IoIosArrowForward,
  },
  {
    name: "Word of the Year",
    link: "https://www.merriam-webster.com/words-at-play/word-of-the-year",
    icon: IoIosArrowForward,
  },
  {
    name: "Word of the Day",
    link: "https://www.vocabulary.com/word-of-the-day/",
    icon: IoIosArrowForward,
  },
  {
    name: "Browse Thesaurus",
    link: "https://www.merriam-webster.com/browse/thesaurus/a",
    icon: IoIosArrowForward,
  },
];
const resources = [
  {
    name: "Teaching resources",
    link: "https://edu.google.com/intl/ALL_in/teaching-resources/",
    icon: IoIosArrowForward,
  },
  {
    name: "Help articles/FAQ",
    link: "https://support.google.com/?hl=en-GB",
    icon: IoIosArrowForward,
  },
  {
    name: "Education plus",
    link: "https://edu.google.com/intl/ALL_in/workspace-for-education/editions/education-plus/",
    icon: IoIosArrowForward,
  },
  {
    name: "Accessibility",
    link: "https://edu.google.com/intl/ALL_in/why-google/accessibility/",
    icon: IoIosArrowForward,
  },
 
];
const community = [
  {
    name: "Code of Conduct",
    link: "https://github.com/facebook/react/blob/main/CODE_OF_CONDUCT.md",
    icon: IoIosArrowForward,
  },
  {
    name: "Community Resources",
    link: "https://reactjs.org/community/support.html",
    icon: IoIosArrowForward,
  },
  {
    name: "FAQ",
    link: "https://policies.google.com/faq?hl=en-US",
    icon: IoIosArrowForward,
  },

 
];

const Footer = () => {
  return (
    <div 
      name="footer"
      className="w-full mt-12 bg-[#202020] text-gray-300 py-1 px-2"
    >
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8 text-base md:text-sm">
        <div className="mb-2">
          <h6 className="font-bold uppercase pt-2 ml-2 mb-2">About</h6>
          {about.map((field1) => (
            <ul key={field1.name} className="cursor-pointer ">
              <li className="flex justify-start items-center">
                <span className=" text-white mr-1">
                  <IoIosArrowForward />
                </span>
                <a href={field1.link} target="_blank">
                  {field1.name}
                </a>
              </li>
            </ul>
          ))}
        </div>
        <div className="mb-2">
          <h6 className="font-bold uppercase pt-2 ml-2 mb-2">Learn with us</h6>
          {learn.map((data) => (
            <ul key={data.name} className="cursor-pointer ">
              <li className="flex justify-start items-center">
                <span className=" text-white mr-1">
                  <IoIosArrowForward />
                </span>
                <a href={data.link} target="_blank">
                  {data.name}
                </a>
              </li>
            </ul>
          ))}
        </div>
        <div className="mb-2">
          <h6 className="font-bold uppercase pt-2 ml-2 mb-2">Resources</h6>
          {resources .map((data) => (
            <ul key={data.name} className="cursor-pointer ">
              <li className="flex justify-start items-center">
                <span className=" text-white mr-1">
                  <IoIosArrowForward />
                </span>
                <a href={data.link} target="_blank">
                  {data.name}
                </a>
              </li>
            </ul>
          ))}
        </div>
        <div className="mb-2">
          <h6 className="font-bold uppercase pt-2 ml-2 mb-2">Community</h6>
          {community .map((data) => (
            <ul key={data.name} className="cursor-pointer ">
              <li className="flex justify-start items-center">
                <span className=" text-white mr-1">
                  <IoIosArrowForward />
                </span>
                <a href={data.link} target="_blank">
                  {data.name}
                </a>
              </li>
            </ul>
          ))}
        </div>
        {/* {subscribre} */}
        <div className="col-span-2 pt-8 md:pt-2 px-4">
          <p className="font-bold uppercase ">
            Subscribe to our Library newsletter
          </p>
          <p className="py-4 ">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <form className="flex flex-col sm:flex-row text-navy ">
            <input
              className="w-full p-2 mr-4 rounded-md mb-4 focus:outline-none text-sm"
              type="email"
              placeholder="Enter email.."
            />
            <button className="p-2 mb-4 searchBtn rounded-lg font-light text-sm">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="mx-12 flex flex-col md:flex-row justify-center md:justify-between items-center gap-2">
        <div className="flex flex-col md:flex-row justify-center items-center gap-3 tracking-widest text-sm">
        <p className="py-3 ">2022 &#169; PanDictionary. LLC</p>
        <p className="text-center">All rights reserved</p>
        </div>
        <p className="text-center ">Developed by Arun Prasad</p>
        <div className="flex gap-4 text-2xl py-2">
        
          <a href="https://www.facebook.com/" target="_blank">
            {" "}
            <FaFacebook />{" "}
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            {" "}
            <FaInstagram />{" "}
          </a>
          <a href="https://twitter.com/i/flow/login" target="_blank">
            {" "}
            <FaTwitter />
          </a>
          <a href="https://www.twitch.tv/" target="_blank">
            {" "}
            <FaTwitch />{" "}
          </a>
          <a href="https://github.com/" target="_blank">
            {" "}
            <FaGithub />{" "}
          </a>
        </div>
       
      </div>
   
    </div>
  );
};

export default Footer;
