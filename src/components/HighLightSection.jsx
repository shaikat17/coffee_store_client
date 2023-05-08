import React from 'react';
import recImg from "../../public/images/more/Rectangle 4.png";
import coffee from "../../public/images/icons/1.png";
import quality from "../../public/images/icons/2.png";
import purity from "../../public/images/icons/3.png";
import toffee from "../../public/images/icons/4.png";


const HighLightSection = () => {
    return (
        <div className='flex flex-col md:flex-row sm:flex-col justify-center py-14 px-10 gap-4 space-y-5' style={{backgroundImage: `url('${recImg}')`}}>
            <div className=' flex flex-col space-y-3'>
                <img className='w-14 h-14' src={coffee} alt="coffee" />
                <h3 className='text-2xl font-semibold text-[#331A15]'>Awesome Aroma</h3>
                <p className='font-light'>You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            <div className=' flex flex-col space-y-3'>
                <img className='w-14 h-14' src={quality} alt="quality" />
                <h3 className='text-2xl font-semibold text-[#331A15]'>High Quality</h3>
                <p className='font-light'>We served the coffee to you maintaining the best quality</p>
            </div>
            <div className=' flex flex-col space-y-3'>
                <img className='w-14 h-14' src={purity} alt="purity" />
                <h3 className='text-2xl font-semibold text-[#331A15]'>Pure Grades</h3>
                <p className='font-light'>The coffee is made of the green coffee beans which you will love</p>
            </div>
            <div className=' flex flex-col space-y-3'>
                <img className='w-14 h-14' src={toffee} alt="toffee" />
                <h3 className='text-2xl font-semibold text-[#331A15]'>Proper Roasting</h3>
                <p className='font-light'>Your coffee is brewed by first roasting the green coffee beans</p>
            </div>
        </div>
    );
};

export default HighLightSection;