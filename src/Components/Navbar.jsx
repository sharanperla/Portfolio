import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className='border-b-3 border-primary'>
            <div className='w-100 h-14 flex justify-between px-8 pt-3 '>
                <div className="logo text-[1.5rem] md:text-3xl font-bold">
                    Portfolio
                </div>
                <div className="github text-3xl font-bold flex gap-5">
                    {/* <button className='bg-git w-32 p-2 rounded-xl border border-black hover:bg-[#ccc]'><FontAwesomeIcon icon={faGithub} /></button> */}
                    <button ><FontAwesomeIcon icon={faMoon} className='item hover:text-blue-600 hover:scale-125'/></button>
                    <button ><FontAwesomeIcon icon={faMoon} className='item hover:text-blue-600 hover:scale-125'/></button>
                </div>
            </div>
            <div className='menuItems hidden md:flex justify-between max-w-[50%] m-auto text-black text-[1.3rem] font-bold'>
                <Link className='desktopMenuitems hover:text-primary hover:border-b-4 border-primary hover:pb-3'>Home</Link>
                <Link className='desktopMenuitems hover:text-primary hover:border-b-4 border-primary hover:pb-3'>Skills</Link>
                <Link className='desktopMenuitems hover:text-primary hover:border-b-4 border-primary hover:pb-3'>Projects</Link>
                <Link className='desktopMenuitems hover:text-primary hover:border-b-4 border-primary hover:pb-3'>contact</Link>
            </div>
        </div>
    )
}

export default Navbar
