import Logo from "../assets/Rectangle 2.png";
import EagleLogo from "../assets/dex-screener-seeklogo 1.png";
import { RiTwitterXLine } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";
import { Link } from "react-scroll";
import { FaXmark } from "react-icons/fa6";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleIsIpen() {
    setIsOpen((s) => !s);
  }
  const handleSetActive = (to) => {};
  return (
    <div className="flex justify-center items-center w-full top-0">
      <div className=" flex flex-row px-6 md:px-10 w-[90%] mt-6 py-4 justify-between items-center bg-white h-fit rounded-lg navbar-shadow">
        <img
          src={Logo}
          alt=""
          className="md:w-[60px] w-[30px] h-[30px] md:h-[60px] object-cover"
        />
        <h1 className="font-mailray mr-6 bony-logo-text text-white text-2xl font-bold md:hidden flex">
          $Bony
        </h1>
        <nav className="flex items-center ">
          <ul className=" md:flex hidden font-jellee flex-row font-extrabold gap-6 text-xl">
            <Link
              className="cursor-pointer hover:text-gray-700 transition-all duration-200"
              activeClass="active"
              to="AboutUs"
              spy={true}
              smooth={true}
              offset={-100}
              duration={700}
              onSetActive={handleSetActive}
            >
              About Us
            </Link>

            <Link
              className="cursor-pointer hover:text-gray-700 transition-all duration-200"
              activeClass="active"
              to="HowtoBuy"
              spy={true}
              smooth={true}
              offset={-100}
              duration={700}
              onSetActive={handleSetActive}
            >
              How to buy
            </Link>

            <Link
              className="cursor-pointer hover:text-gray-700 transition-all duration-200"
              activeClass="active"
              to="Tokenomics"
              spy={true}
              smooth={true}
              offset={-100}
              duration={700}
              onSetActive={handleSetActive}
            >
              Tokenomics
            </Link>
            <Link
              className="cursor-pointer hover:text-gray-700 transition-all duration-200"
              activeClass="active"
              to="HowtoBuy"
              spy={true}
              smooth={true}
              offset={-100}
              duration={700}
              onSetActive={handleSetActive}
            >
              FAQs
            </Link>
          </ul>

          {isOpen ? (
            <FaXmark
              onClick={toggleIsIpen}
              className={`${
                isOpen ? "mb-8" : ""
              }  md:hidden right-10 flex absolute text-xl text-white z-50 `}
            />
          ) : (
            <RxHamburgerMenu
              onClick={toggleIsIpen}
              className={`${
                isOpen ? "mb-8" : ""
              }  md:hidden right-10 flex absolute text-xl text-black z-50 `}
            />
          )}
        </nav>

        <ul className="md:flex hidden flex-row gap-6">
          <li className="flex w-[60px] h-[60px] justify-center items-center bg-[#6F6E6E] rounded-xl rotate-[8deg] shadow-obj border border-black">
            <a
              href="https://x.com/bonyonxrp"
              className="items-center justify-center"
            >
              <RiTwitterXLine size={45} className="text-white" />
            </a>
          </li>
          <li className="flex w-[60px] h-[60px] justify-center items-center bg-[#6F6E6E] rounded-xl rotate-[-12deg] shadow-obj border border-black">
            <a
              href="https://t.me/+9RUz_a88QblkM2Ex"
              className="items-center justify-center"
            >
              <FaTelegramPlane size={45} className="text-white" />
            </a>
          </li>
          <li className="flex w-[60px] h-[60px] justify-center items-center bg-[#6F6E6E] rounded-xl rotate-12 shadow-obj border border-black">
            <a className="items-center justify-center" href="#">
              <img src={EagleLogo} alt="" className="rotate-[-16deg]" />
            </a>
          </li>
        </ul>

        {/* mobile nav start*/}
        <nav
          className={` bg-[#1E1E1E] absolute z-30 transition-all duration-200 top-0 left-0 justify-center h-[300px] flex flex-col w-full gap-6 md:hidden ${
            isOpen ? "top-0 pt-8" : "top-[-300%]"
          }`}
        >
          <ul className="flex md:bg-transparent text-white justify-center text-center flex-col md:flex-row font-bold gap-3 md:gap-6 text-sm md:text-xl">
            <Link
              className="cursor-pointer"
              activeClass="active"
              to="AboutUs"
              spy={true}
              smooth={true}
              offset={-100}
              duration={700}
              onSetActive={handleSetActive}
              onClick={toggleIsIpen}
            >
              About Us
            </Link>

            <Link
              className="cursor-pointer"
              activeClass="active"
              to="HowtoBuy"
              spy={true}
              smooth={true}
              offset={-100}
              duration={700}
              onSetActive={handleSetActive}
              onClick={toggleIsIpen}
            >
              How to buy
            </Link>

            <Link
              className="cursor-pointer"
              activeClass="active"
              to="Tokenomics"
              spy={true}
              smooth={true}
              offset={-100}
              duration={700}
              onSetActive={handleSetActive}
              onClick={toggleIsIpen}
            >
              Tokenomics
            </Link>
            <Link
              className="cursor-pointer"
              activeClass="active"
              to="HowtoBuy"
              spy={true}
              smooth={true}
              offset={-100}
              duration={700}
              onSetActive={handleSetActive}
              onClick={toggleIsIpen}
            >
              FAQs
            </Link>
          </ul>

          {/* mobile nav end*/}

          <ul className="md:justify-start justify-center flex flex-row gap-6">
            <li
              onClick={toggleIsIpen}
              className="flex w-[60px] h-[60px] justify-center items-center bg-[#6F6E6E] rounded-xl  shadow-obj border border-black"
            >
              <a
                href="https://x.com/bonyonxrp"
                className="items-center justify-center"
              >
                <RiTwitterXLine size={45} className="text-white" />
              </a>
            </li>
            <li
              onClick={toggleIsIpen}
              className="flex w-[60px] h-[60px] justify-center items-center bg-[#6F6E6E] rounded-xl  shadow-obj border border-black"
            >
              <a
                href="https://t.me/+9RUz_a88QblkM2Ex"
                className="items-center justify-center"
              >
                <FaTelegramPlane size={45} className="text-white" />
              </a>
            </li>
            <li
              onClick={toggleIsIpen}
              className="flex w-[60px] h-[60px] justify-center items-center bg-[#6F6E6E] rounded-xl  shadow-obj border border-black"
            >
              <a className="items-center justify-center" href="#">
                <img src={EagleLogo} alt="" className="rotate-[-16deg]" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
