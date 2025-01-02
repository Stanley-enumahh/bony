import banner from "../assets/$BONYBANNER.jpg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Footer() {
  useEffect(() => {
    AOS.init({ duration: 600, once: true }), [];
  });
  return (
    <div className="flex flex-col gap-6 md:gap-10 justify-center items-center mt-7 md:mt-14">
      <h1
        data-aos="fade-left"
        data-aos-duration="300"
        className="text-white text-sm md:text-4xl font-bold uppercase font-mailray"
      >
        Fill Up Your Bags and let’s ride to the moon
      </h1>
      <img src={banner} alt="" className="object-cover" />
      <span className="h-[30px] md:h-[50px] bg-transparent font-jellee flex justify-center items-center text-neutral-300 text-xs md:text-sm">
        All Rights Reserved - 2024 Puff Boxx LLC
      </span>
    </div>
  );
}
