import { useEffect, useState } from "react";

const FollowUsSection = () => {
  const [cups, setCups] = useState([]);

  useEffect(() => {
    fetch("cups.json")
      .then((res) => res.json())
      .then((data) => setCups(data));
  }, []);
  return (
    <div className="w-full grid grid-cols-1 justify-center items-center text-center md:p-20 ">
      <p className="font-light">Follow Us Now</p>
      <h3 className="text-2xl text-[#331A15] font-bold mt-0 mb-5">Follow on Instragram</h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 items-center justify-center">
        {cups.map((cup, index) => {
          return <img key={index} src={cup.cup} alt="" />;
        })}
      </div>
    </div>
  );
};

export default FollowUsSection;
