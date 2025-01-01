import Xrp from "../assets/3d-rendering-cryptocurrency-xrp-coin-with-gray-background 1.png";
import CatImage from "../assets/Group 20.png";

export default function Hero() {
  return (
    <div
      id="AboutUs"
      className="flex justify-center items-center w-full h-fit md:h-[680px] mt-[100px]"
    >
      <div className="flex flex-row  h-full justify-between w-[78%]">
        <div className="flex flex-col gap-12 mt-8 w-[50%] text-white">
          <h1 className="text-8xl font-mailray font-bold leading-[110px]">
            welcome to <br /> <span className="font-mailray">$Bony</span>
          </h1>
          <span className="bg-[#D9D9D9] items-center w-fit px-7 flex flex-row gap-3 py-1 rounded-lg text-black text-xl font-bold navbar-shadow ">
            <img src={Xrp} alt="" className="w-[40px]" />
            <p className="font-mailray">BUILT on XRP</p>
          </span>
          <span className="font-bold font-jellee w-[90%] text-xl flex flex-row gap-3">
            $BONY is a community-driven token built on the XRP, inspired by the
            playful and resilient nature of cats. Our mission is to create a fun
            and engaging ecosystem where holders can enjoy the benefits of fast,
            low-cost transactions while being part of a growing, innovative
            community.
          </span>
        </div>
        <div className="w-[40%]">
          <img src={CatImage} alt="" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}
