import Xrp from "../assets/3d-rendering-cryptocurrency-xrp-coin-with-gray-background 1.png";
import CatImage from "../assets/Group 20.png";
import catImgMobile from "../assets/Group54.png";
import Xrp2 from "../assets/xrp2.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 600, once: true }), [];
  });
  return (
    <div
      id="AboutUs"
      className="flex justify-center overflow-hidden md:items-center w-full h-[394px] md:h-[680px] mt-[17px] md:mt-[50px]"
    >
      <div className="flex flex-row h-full  justify-center w-[90%] md:w-[78%]">
        <div className="flex flex-col md:items-start items-center relative gap-24 md:gap-12 mt-4 md:mt-[60px] w-full md:w-[50%] text-white">
          <h1 className="md:text-8xl HIB text-6xl font-mailray font-bold leading-[70px] md:leading-[110px] md:text-start text-center">
            welcome to <br />{" "}
            <span className="font-mailray text-8xl md:text-[130px]">$Bony</span>
          </h1>
          <span className="bg-[#D9D9D9] w-[70%] md:flex hidden justify-center items-center px-3 md:px-7 flex-row gap-2 md:gap-3 py-3 rounded-3xl md:rounded-lg text-black text-xl font-bold navbar-shadow ">
            <img src={Xrp} alt="" className="w-[50px]" />
            <p className="font-mailray text-lg md:text-2xl">BUILT on XRP</p>
          </span>
          <span className="font-bold font-jellee md:text-start w-[80%] md:w-[90%] text-xs md:text-lg flex text-center flex-row gap-3 md:mb-0 mb-4 z-20">
            $BONY is a community-driven token built on the XRP, inspired by the
            playful and resilient nature of cats. Our mission is to create a fun
            and engaging ecosystem where holders can enjoy the benefits of fast,
            low-cost transactions while being part of a growing, innovative
            community.
          </span>

          <div className="w-full md:hidden flex absolute bottom-0 items-end    justify-center z-10 h-full">
            <img
              src={catImgMobile}
              alt=""
              className="w-[60%] flex h-[75%] object-contain"
            />
          </div>
        </div>
        <div className="w-full md:flex hidden bottom-0  items-start static justify-center z-10 md:w-[43%] h-fit md:mt-0">
          <img
            src={CatImage}
            alt=""
            className="w-[50%] md:w-full h-[90%] object-cover"
          />
        </div>
        <span className="bg-[#D9D9D9] top-[295px] w-fit right-9 absolute md:hidden flex justify-center items-center px-[4px] flex-row gap-1  py-1 h-fit rounded-3xl text-black text-xl navbar-shadow ">
          <img src={Xrp2} alt="" className="w-[20px] h-fit" />
          <p className="font-mailray text-xs md:text-2xl">BUILT on XRP</p>
        </span>
      </div>
    </div>
  );
}
