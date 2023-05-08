import React from "react";
import bannarImg from "../../public/images/more/3.png";

const Banner = () => {
  return (
    <div
      className="overflow-hidden relative h-screen bg-no-repeat bg-cover backdrop-brightness-50 flex items-center justify-center"
      style={{ backgroundImage: `url(${bannarImg})` }}
    >
      <div className="text-white w-4/5 md:w-1/2  absolute md:right-0 text-left pr-3 space-y-5">
        <h1 className="text-2xl font-bold">Would you like a Cup of Delicious Coffee?</h1>
        <p className="text-base font-thin">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
        <button className="bg-[#E3B577] rounded py-3 px-4 text-[#331A15]">Learn More</button>
      </div>
    </div>
  );
};

export default Banner;
