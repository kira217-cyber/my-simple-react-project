import React from 'react';
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className='md:container mx-auto mt-10'>
            <div className="navbar bg-base-100 ">
  <div className="flex-1">
    <a className="btn btn-ghost text-2xl">My Simple Project</a>
  </div>
  <div className="flex gap-5">
    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    <button className='hover:cursor-pointer'><FaSearch size={20} /></button>
  </div>
    </div>
</div>
    );
};

export default Navbar;