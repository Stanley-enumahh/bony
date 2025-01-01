import banner from "../assets/$BONYBANNER1.png";

export default function Footer() {
  return (
    <div className="flex flex-col gap-6 md:gap-10 justify-center items-center mt-7 md:mt-14">
      <h1 className="text-white text-sm md:text-4xl font-bold uppercase font-mailray">
        Fill Up Your Bags and let’s ride to the moon
      </h1>
      <img src={banner} alt="" className="object-cover" />
      <span className="h-[30px] md:h-[50px] bg-transparent font-jellee flex justify-center items-center text-neutral-300 text-xs md:text-sm">
        All Rights Reserved - 2024 Puff Boxx LLC
      </span>
    </div>
  );
}
