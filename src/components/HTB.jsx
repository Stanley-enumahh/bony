import walletIcon from "../assets/rb_22891 1.png";
import swapIcon from "../assets/Group 19.png";
import walletIcon2 from "../assets/wallet.png";
import bony from "../assets/bony 1 2.png";
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
      className="w-full relative flex justify-center gap-8 items-center h-[800px] flex-col "
    >
      <img
        src={bony}
        alt=""
        className="absolute right-0 top-[350px] h-[450px] w-[280px] object-cover"
      />
      <h1 className="text-7xl font-bold text-white font-mailray HIB">
        HOW TO BUY
      </h1>
      <div className="flex justify-center w-[80%] ">
        <ul className="flex flex-row gap-16">
          {howToBuyArray.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </ul>
      </div>
      <div className="flex w-[55%] rotate-[-1deg] bg-white justify-end items-center mt-6 rounded-xl navbar-shadow">
        <span className="px-10 justify-between items-center py-3 flex flex-row gap-10 w-full">
          <p className="font-bold text-lg font-jellee">{textToCopy}</p>
          <button
            onClick={handleCopy}
            className="bg-[#6f6e6e] hover:bg-opacity-80 shadow-obj text-white px-10 py-3 rounded-md font-bold font-jellee"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </span>
      </div>
      <div className="flex w-[55%] rotate-[-1deg] py-2  justify-end items-center bg-transparent">
        <span className="flex bg-white px-10 py-3 rounded-xl navbar-shadow">
          <a
            href="https://firstledger.net/"
            className="bg-[#6f6e6e] ml-[40px] shadow-obj text-white px-6 py-3 hover:bg-opacity-80 rounded-md font-bold"
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
    <li className="flex htb-shadow justify-center items-center flex-col gap-3 bg-white p-5 rounded-3xl w-[320px] h-[350px]">
      <img
        src={item.Image}
        alt=""
        className={` ${
          item.swap ? "w-150px" : "w-[140px]"
        } h-[130px] object-cover`}
      />
      <h1 className="text-2xl font-bold font-mailray  uppercase">
        {item.title}
      </h1>
      <p className="font-bold text-center text-sm font-jellee">{item.info}</p>
    </li>
  );
}
