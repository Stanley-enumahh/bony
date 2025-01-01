import walletIcon from "../assets/rb_228911.png";
import swapIcon from "../assets/Group19.png";
import walletIcon2 from "../assets/wallet.png";
import bony from "../assets/bony12.png";
import { useState } from "react";

const howToBuyArray = [
  {
    Image: walletIcon2,
    title: "CREATE A WALLET",
    info: "Download and set up a compatible XRP wallet, such as Exodus or Xaman.",
  },
  {
    Image: walletIcon,
    title: "get some xrp",
    info: "Purchase XRP from any cryptocurrency Exchange and transfer it to your trading wallet",
  },
  {
    Image: swapIcon,
    title: "SWAP XRP TO BONY",
    info: "Select Bony as desired token and enter the amount you’d like to buy. ",
    swap: true,
  },
];

export default function HowToBuy() {
  const [textToCopy, setTextToCopy] = useState(
    "CA: 0x37E14058582594FEB08824b81c7E5810576b5306"
  );
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 5000);
    });
  }

  return (
    <div
      id="HowtoBuy"
      className="w-full relative mt-7 mb-6 flex justify-center gap-8 items-center h-fit md:h-[800px] flex-col"
    >
      <img
        src={bony}
        alt=""
        className="absolute right-0 top-[580px] md:top-[350px] md:h-[450px] w-[180px] h-[250px] md:w-[280px] object-cover"
      />
      <h1 className="text-4xl md:text-7xl font-bold text-white font-mailray HIB">
        HOW TO BUY
      </h1>
      <div className="flex justify-center w-[80%] ">
        <ul className="flex flex-col md:flex-row md:gap-16 gap-7">
          {howToBuyArray.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </ul>
      </div>
      <div className="flex w-[95%] md:w-[55%] rotate-[-1deg] bg-white justify-end items-center mt-6 rounded-[60px] md:rounded-xl navbar-shadow">
        <span className="md:px-10 px-4 justify-center items-center py-5 md:py-3 flex flex-row md:flex-row gap-2 md:gap-10 w-full">
          <p className="font-bold text-center text-nowrap text-[11px] md:text-lg font-jellee">
            {textToCopy}
          </p>
          <button
            onClick={handleCopy}
            className="bg-[#6f6e6e] border border-black hover:bg-opacity-80 shadow-obj text-white px-5 md:px-10 py-2 md:py-3 rounded-[26px] md:rounded-md text-[10px] font-bold font-jellee"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </span>
      </div>
      <div className="flex w-[55%] rotate-[-1deg] py-2  justify-end items-center bg-transparent">
        <span className="flex bg-white px-12 md:px-10 py-3 justify-center rounded-[36px]  md:rounded-xl navbar-shadow">
          <a
            href="https://firstledger.net/"
            className="bg-[#6f6e6e] md:ml-[40px] shadow-obj text-white px-6 py-2 md:py-3 hover:bg-opacity-80 border border-black md:rounded-md rounded-[26px] font-bold"
          >
            Buy now
          </a>
        </span>
      </div>
    </div>
  );
}

function Item({ item }) {
  return (
    <li className="flex htb-shadow justify-center items-center flex-col gap-3 bg-white p-5 rounded-3xl md:w-[320px] w-[250px] h-[240px] md:h-[350px]">
      <img
        src={item.Image}
        alt=""
        className={` ${
          item.swap ? "w-[110px] md:w-[160px]" : "w-[100px] md:w-[140px]"
        } h-[130px] object-cover`}
      />
      <h1 className="text-lg md:text-2xl font-bold font-mailray  uppercase">
        {item.title}
      </h1>
      <p className="font-bold text-center text-sm font-jellee">{item.info}</p>
    </li>
  );
}
