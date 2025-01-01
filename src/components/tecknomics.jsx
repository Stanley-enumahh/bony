import bony2 from "../assets/bony11.png";

export default function Tecknomics() {
  return (
    <div
      id="Tokenomics"
      className="w-full h-[450px] md:h-screen relative gap-9 md:gap-12 items-center flex flex-col"
    >
      <img
        src={bony2}
        alt=""
        className="md:h-[426px] h-[200px] md:w-[256px] absolute bottom-0 md:bottom-1 md:left-0 left-[-16px] object-cover"
      />
      <h1 className="text-4xl md:text-6xl text-white font-bold mt-[30px] md:mt-[60px] font-mailray HIB">
        TOKENOMICS
      </h1>
      <div className="flex justify-between h-[53%] md:h-fit w-[90%] md:w-[80%]">
        <div className="flex flex-col gap-8 w-[45%]">
          <span
            className="bg-white flex w-full justify-center h-[143px] items-center font-bold px-12 text-bol navbar-shadow rounded-[24px] md:rounded-md font-jellee text-sm md:text-2xl text-center
          "
          >
            Fairly Distributed
          </span>
          <span
            className="bg-white flex w-full justify-center h-[143px] items-center font-bold px-12 text-bol navbar-shadow rounded-[24px] md:rounded-md  font-jellee text-sm text-center md:text-2xl
          "
          >
            Contract Renounced
          </span>
        </div>
        <span
          className="bg-white w-[50%] flex justify-center items-center h-[238px] md:h-[333px] font-bold px-12 text-bol navbar-shadow rounded-[24px] md:rounded-md text-2xl md:text-4xl font-jellee text-center
          "
        >
          Zero <br />
          Taxes
        </span>
      </div>
    </div>
  );
}
