import banner from "../assets/$BONY BANNER 1.png";

export default function Footer() {
  return (
    <div className="flex flex-col gap-14 justify-center items-center mt-14">
      <h1 className="text-white text-4xl font-bold uppercase font-mailray">
        Fill Up Your Bags and let’s ride to the moon
      </h1>
      <img src={banner} alt="" />
    </div>
  );
}
