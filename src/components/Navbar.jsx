import React from "react";
import { NavLink } from "react-router-dom";
import navImg from "../../public/images/more/15.jpg";
import logoImg from '../../public/images/more/logo1.png'

const Navbar = () => {
  return (
    <div className="navbar-center text-center" style={{backgroundImage: `url('${navImg}')`}}>
      <NavLink className=" flex items-center justify-center font-black text-2xl" to="/"> <img className="w-16 h-20" src={logoImg} alt="Espresso Emporium" /> Espresso Emporium</NavLink>
    </div>
  );
};

export default Navbar;
