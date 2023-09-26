import React from 'react'
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faWind } from '@fortawesome/free-solid-svg-icons'
import { faBootstrap, faCss3, faFigma, faGit, faGithub, faHtml5, faInstagram, faJs, faLinkedin, faPhp, faPinterest, faReact, faSpotify, faTwitch, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { useMode } from '../../ModeProvider/ModeProvider';
function About() {
    const {mode}=useMode();
 return (
        <div className="wrapper relative bg-primary mt-44">
            <div className="custom-shape-divider-top-1693470071">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className='w-full h-full'>
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={`${mode=='dark'?'fill-darkmodebg':'fill-main'}`}></path>
                </svg>
            </div>
            <div className='container3 flex flex-col justify-center items-center h-screen gap-4'>
                <h1 className='font-bold text-[3rem]'>About me</h1>
                <div className='biocontent'><div className={`card shadow-2xl bg-main p-2 m-4 md:p-10 rounded-xl text-text`}><p>Hello! I'm Sharan, a student and fullstack developer. <br />I love crafting websites using HTML, CSS, and JavaScript, and I'm <br />also skilled in React, PHP, Python, and C. Let's build something amazing together.</p></div></div>
                <div className='skillsLogo flex flex-col gap-10  md:gap-10 mt-16'>
                    <div className="list flex flex-wrap justify-center items-center gap-10 text-[2rem] md:text-[3rem]">
          
                        <FontAwesomeIcon icon={faHtml5} className='item hover:text-blue-600 hover:scale-125' />
                        <FontAwesomeIcon icon={faCss3} className='item hover:text-blue-600 hover:scale-125' />
                        <FontAwesomeIcon icon={faJs} className='item hover:text-blue-600 hover:scale-125' />
                        <FontAwesomeIcon icon={faReact} className='item hover:text-blue-600 hover:scale-125' />
                        <FontAwesomeIcon icon={faWind} className='item hover:text-blue-600 hover:scale-125' />
                        <FontAwesomeIcon icon={faBootstrap} className='item hover:text-blue-600 hover:scale-125' />
                        <FontAwesomeIcon icon={faGithub} className='item hover:text-blue-600 hover:scale-125' />
                        <FontAwesomeIcon icon={faFigma} className='item hover:text-blue-600 hover:scale-125' />
                        <FontAwesomeIcon icon={faPhp} className='item hover:text-blue-600 hover:scale-125' />
                    </div>
                    <div className="list flex flex-wrap justify-center text-center items-center gap-12 text-[2rem] md:text-[3rem]">

                        <FontAwesomeIcon icon={faInstagram} className='item hover:text-blue-600 hover:scale-125' />
                        <FontAwesomeIcon icon={faLinkedin} className='item hover:text-blue-600 hover:scale-125' />
                        <FontAwesomeIcon icon={faGithub} className='item hover:text-blue-600 hover:scale-125' />
                        <FontAwesomeIcon icon={faSpotify} className='item hover:text-blue-600 hover:scale-125' />
                        <FontAwesomeIcon icon={faPinterest} className='item hover:text-blue-600 hover:scale-125' />
                    </div>


                </div>
            </div>

        </div>

    )
}

export default About
