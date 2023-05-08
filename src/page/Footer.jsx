import React from "react";
import logoImg from "../../public/images/more/logo1.png";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row p-16 items-center">
      <div className="w-full md:w-3/5 space-y-6 p-2">
        <img className="w-28 h-28" src={logoImg} alt="logo img" />
        <h1 className="text-[#331A15] font-bold text-2xl">Espresso Emporium</h1>
        <p className="font-thin">
          Always ready to be your friend. Come & Contact with us to share your
          memorable moments, to share with your best companion.
        </p>
        <div>fsfsd</div>
        <div>
          <h1 className="text-2xl font-bold space-y-4">Get in Touch</h1>
          <p>+88 01XXX XXX XXX</p>
          <p>coffee@mail.com</p>
          <p>72, Wall Street, King Road, Dhaka</p>
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
  );
};

export default Footer;
