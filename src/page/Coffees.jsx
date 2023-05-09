import React, { useEffect, useState } from 'react';

import SingleCoffee from '../components/SingleCoffee';
import { NavLink } from 'react-router-dom';


const Coffees = () => {
    const [coffees, setCoffees] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/coffees')
        .then(res => res.json())
        .then(data => setCoffees(data))
    },[])

    return (
        <div className='flex flex-col items-center md:p-10 p-3'>
            <p>--- Sip & Savor ---</p>
            <NavLink to="/add-coffee" className="btn bg-[#D2B48C] py-1 my-4">Add Coffee</NavLink>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 rounded overflow-hidden'>
            {coffees.map(coffee => <SingleCoffee key={coffee._id} coffee={coffee} />)}
        </div>
        </div>
    );
};

export default Coffees;