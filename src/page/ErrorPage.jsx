import React from 'react';
import { BiLeftArrowAlt } from 'react-icons/bi'
import errorImg from '../../public/images/404/404.gif'
import Footer from './Footer';
import Navbar from '../components/Navbar'
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <>
        <Navbar />
        <div className='flex flex-col justify-center items-center mt-4'>
            <NavLink className="flex items-center gap-2" to="/"><BiLeftArrowAlt size={"1.5rem"} />Back to Home</NavLink>
        <img src={errorImg} alt="erroe" />
        </div>
        <Footer />
        </>
    );
};

export default ErrorPage;