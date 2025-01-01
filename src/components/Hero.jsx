import Xrp from "../assets/3d-rendering-cryptocurrency-xrp-coin-with-gray-background 1.png";
import CatImage from "../assets/Group 20.png";

export default function Hero() {
  return (
    <div
      id="AboutUs"
      className="flex justify-center overflow-hidden md:items-center w-full h-[390px] md:h-[680px] mt-[17px] md:mt-[100px]"
    >
      <div className="flex flex-row  h-full justify-between w-[90%] md:w-[78%]">
        <div className="flex flex-col relative  gap-24 md:gap-12 mt-4 md:mt-8 w-full md:w-[50%] text-white justify-between  items-center">
          <h1 className="md:text-8xl text-5xl font-mailray font-bold leading-[50px] md:leading-[110px] md:text-start text-center">
            welcome to <br />{" "}
            <span className="font-mailray text-6xl md:text-9xl">$Bony</span>
          </h1>
          <span className="bg-[#D9D9D9] md:flex hidden items-center w-fit px-3 md:px-7 flex-row gap-2 md:gap-3 py-1 rounded-3xl md:rounded-lg text-black text-xl font-bold navbar-shadow ">
            <img src={Xrp} alt="" className="w-[45px] md:w-[40px]" />
            <p className="font-mailray text-lg">BUILT on XRP</p>
          </span>
          <span className="font-bold font-jellee w-[80%] md:w-[90%] text-xs md:text-xl flex text-center flex-row gap-3 md:mb-0 mb-7 z-20">
            $BONY is a community-driven token built on the XRP, inspired by the
            playful and resilient nature of cats. Our mission is to create a fun
            and engaging ecosystem where holders can enjoy the benefits of fast,
            low-cost transactions while being part of a growing, innovative
            community.
          </span>
          <div className="w-full absolute bottom-0 items-end md:items-start  md:static justify-center z-10 md:w-[43%] h-full md:h-fit md:mt-0 flex">
            <img
              src={CatImage}
              alt=""
              className="w-[50%] md:w-full h-[90%] object-cover"
            />
          </div>
        </div>
        <div className="w-full md:flex hidden bottom-0 items-end md:items-start static justify-center z-10 md:w-[43%] h-[46%] md:h-fit md:mt-0">
          <img
            src={CatImage}
            alt=""
            className="w-[50%] md:w-full h-[90%] object-cover"
          />
        </div>
      </div>
    </div>
  );
}
