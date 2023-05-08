import React from "react";
import logoImg from "../../public/images/more/logo1.png";
import recImg from "../../public/images/more/Rectangle 18.png";
import recImg2 from "../../public/images/more/Rectangle 17.png";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";

const Footer = () => {
  return (
    <div className="flex flex-col" style={{ backgroundImage: `url('${recImg}')` }}>
      <div className="flex flex-col md:flex-row p-16 items-center">
        <div className="w-full md:w-3/5 space-y-6 p-2">
          <img className="w-28 h-28" src={logoImg} alt="logo img" />
          <h1 className="text-[#331A15] font-bold text-2xl">
            Espresso Emporium
          </h1>
          <p className="font-thin">
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your best companion.
          </p>
          <div className="flex gap-3">
            <FaFacebook size={"2rem"} color="#331A15" />
            <FaTwitter size={"2rem"} color="#331A15" />
            <FaInstagram size={"2rem"} color="#331A15" />
            <FaLinkedin size={"2rem"} color="#331A15" />
          </div>
          <div className="space-y-5">
            <h1 className="text-2xl font-bold text-[#331A15]">Get in Touch</h1>
            <p className="flex gap-3 font-thin items-center">
              <FaPhoneAlt size={"1.2rem"} /> +88 01XXX XXX XXX
            </p>
            <p className="flex gap-3 font-thin items-center">
              <FaEnvelope size={"1.2rem"} /> coffee@mail.com
            </p>
            <p className="flex gap-3 font-thin items-center">
              <MdLocationPin size={"1.5rem"} /> 72, Wall Street, King Road,
              Dhaka
            </p>
          </div>
        </div>
        <div className="w-full md:w-2/5 space-y-5 p-2">
          <h1 className="text-2xl font-bold ">Connect with Us</h1>
          <div className="form-control space-y-5">
            <input
              className="border rounded px-4 py-2 border-[#331A15] placeholder:text-[#331A15]"
              type="text"
              name="name"
              id="name"
              placeholder="Name"
            />
            <input
              className="border rounded px-4 py-2 border-[#331A15] placeholder:text-[#331A15]"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />
            <textarea
              className="border rounded px-4 py-2 border-[#331A15] placeholder:text-[#331A15]"
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
            <button className="w-36 p-3 hover:bg-[#331A15] border border-[#331A15] text-[#331A15] hover:text-white hover:ease-in duration-300 rounded-full">
              Send Message
            </button>
          </div>
        </div>
      </div>
      <div className="" style={{backgroundImage: `url('${recImg2}')`}}>
        <p className="text-white text-center py-3">Copyright Espresso Emporium ! All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
