import banner from "../assets/$BONY BANNER 1.png";

export default function Footer() {
  return (
    <div className="flex flex-col gap-12 justify-center items-center mt-14">
      <h1 className="text-white text-4xl font-bold uppercase font-mailray">
        Fill Up Your Bags and let’s ride to the moon
      </h1>
      <img src={banner} alt="" />
      <span className="h-[100px] mb-6  bg-transparent font-jellee flex justify-center items-center text-white text-xl">
        All Rights Reserved - 2024 Puff Boxx LLC
      </span>
    </div>
  );
}
