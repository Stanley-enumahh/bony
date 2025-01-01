import bony2 from "../assets/bony 1 1.png";

export default function Tecknomics() {
  return (
    <div
      id="Tokenomics"
      className="w-full h-screen relative gap-12 items-center flex flex-col"
    >
      <img
        src={bony2}
        alt=""
        className="h-[426px] w-[256px] absolute bottom-1 left-0 object-cover"
      />
      <h1 className="text-6xl text-white font-bold mt-[60px] font-mailray HIB">
        TOKENOMICS
      </h1>
      <div className="flex justify-between w-[80%]">
        <div className="flex flex-col gap-8 w-[45%]">
          <span
            className="bg-white flex w-full justify-center h-[143px] items-center font-bold px-12 text-bol navbar-shadow rounded-md font-jellee text-2xl
          "
          >
            Fairly Distributed
          </span>
          <span
            className="bg-white flex w-full justify-center h-[143px] items-center font-bold px-12 text-bol navbar-shadow rounded-md font-jellee text-2xl
          "
          >
            Contract Renounced
          </span>
        </div>
        <span
          className="bg-white w-[50%] flex justify-center items-center h-[333px] font-bold px-12 text-bol navbar-shadow rounded-md text-4xl font-jellee text-center
          "
        >
          Zero <br />
          Taxes
        </span>
      </div>
    </div>
  );
}
