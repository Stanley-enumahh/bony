import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function BonySlider() {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-[#D9D9D9] h-[136px] w-full justify-center items-center">
      <Slider {...settings}>
        <li className="text-6xl bony-slider-text font-mailray mt-10 font-bold text-white">
          $Bony
        </li>
        <li className="text-6xl bony-slider-text font-mailray mt-10 font-bold text-white">
          $Bony
        </li>
        <li className="text-6xl bony-slider-text font-mailray mt-10 font-bold text-white">
          $Bony
        </li>
        <li className="text-6xl bony-slider-text font-mailray mt-10 font-bold text-white">
          $Bony
        </li>
        <li className="text-6xl bony-slider-text font-mailray mt-10 font-bold text-white">
          $Bony
        </li>
        <li className="text-6xl bony-slider-text font-mailray mt-10 font-bold text-white">
          $Bony
        </li>
        <li className="text-6xl bony-slider-text font-mailray mt-10 font-bold text-white">
          $Bony
        </li>
      </Slider>
    </div>
  );
}
