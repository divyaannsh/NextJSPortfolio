import React from "react";
import {
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <a
              href="https://www.instagram.com/your-instagram-handle"
              className="flex flex-row items-center my-[15px] cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RxInstagramLogo />
              <span className="text-[15px] ml-[6px]">Instagram</span>
            </a>
            <a
              href="https://github.com/divyaannsh"
              className="flex flex-row items-center my-[15px] cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">GitHub</span>
            </a>
            <a
              href="https://x.com/SpongeeBob17"
              className="flex flex-row items-center my-[15px] cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RxTwitterLogo />
              <span className="text-[15px] ml-[6px]">Twitter</span>
            </a>
            <a
              href="https://www.linkedin.com/in/divyansh-srivastav-a00127221/"
              className="flex flex-row items-center my-[15px] cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]">LinkedIn</span>
            </a>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Divyansh Srivastava</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">+91 9560350477</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">divyanshsrivastav72@gmail.com</span>
            </p>
          </div>
        </div>
        <div className="mb-[20px] text-[15px] text-center">
          Made with ❤️ by Divyansh Srivastava
        </div>
      </div>
    </div>
  );
};

export default Footer;
