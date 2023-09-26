import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCross, faMoon, faX } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { useMode } from '../ModeProvider/ModeProvider';

function Navbar() {
    const { mode, toggleMode } = useMode();
    const [mobiledraw, setMobiledraw] = useState("hidden");
    return (
        <div className='border-b-3 border-primary relative'>
            {
                mobiledraw == 'show' ? <div className={`absolute z-1 animate bg-black w-full h-screen text-white ${mobiledraw == "show" ? 'animate' : ''}`}>
                    <div className='flex justify-end px-8 py-4'>
                        <button ><FontAwesomeIcon icon={faX} className={`text-white text-2xl font-extrabold ${mobiledraw == "show" ? '' : 'hidden'}`} onClick={() => mobiledraw == 'hidden' ? setMobiledraw('show') : setMobiledraw('hidden')} /></button>
                    </div>
                    <div className='flex flex-col justify-center text-center items-center text-[1rem] gap-10'>
                        <h1>Home</h1>
                        <h1>Skills</h1>
                        <h1>Projects</h1>
                        <h1>contact</h1>
                    </div>
                </div> : ''
            }
            <div className='w-100 h-14 flex justify-between px-8 pt-3'>
                <div className={`logo text-[1.5rem] md:text-3xl font-bold rounded-full  px-3 py-1  ${mode=='dark'?'bg-darkcard':'bg-lightcard'}`}>
                    Portfolio
                </div>
                <div className="github text-3xl font-bold flex gap-5">
                    {/* <button className='bg-git w-32 p-2 rounded-xl border border-black hover:bg-[#ccc]'><FontAwesomeIcon icon={faGithub} /></button> */}
                    <button ><FontAwesomeIcon icon={faMoon} className={`item hover:text-blue-600 hover:scale-125 text-[2rem] rounded-full px-2 py-1  ${mode=='dark'?'bg-darkcard':'bg-lightcard'}`} onClick={toggleMode} /></button>
                    <button ><FontAwesomeIcon icon={faBars} className={`item hover:text-blue-600 hover:scale-125 md:hidden text-[2rem] rounded-full px-3 py-1 ${mobiledraw == "show" ? 'hidden' : ''} ${mode=='dark'?'bg-darkcard':'bg-lightcard'}`} onClick={() => mobiledraw == 'hidden' ? setMobiledraw('show') : setMobiledraw('hidden')} /></button>
                </div>

            </div>
            <div className='menuItems hidden md:flex justify-between max-w-[50%] m-auto  text-[1.3rem] font-bold'>
                <Link className='desktopMenuitems hover:text-primary hover:border-b-4 border-primary hover:pb-3'>Home</Link>
                <Link className='desktopMenuitems hover:text-primary hover:border-b-4 border-primary hover:pb-3'>Skills</Link>
                <Link className='desktopMenuitems hover:text-primary hover:border-b-4 border-primary hover:pb-3'>Projects</Link>
                <Link className='desktopMenuitems hover:text-primary hover:border-b-4 border-primary hover:pb-3'>contact</Link>
            </div>


        </div>
    )
}

export default Navbar
