import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin, faTwitch, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Banner() {
    return (
        <>
            <div className='flex flex-col justify-center text-center h-[50vh] md:h-[70vh] font-bold '>
                <div className=''>
                    <div className='hey text-[3rem] mb-1 md:text-[5rem] md:mb-8'>Hey</div>
                    <div className='name text-[3rem] md:text-[5rem]'>I am <span className='animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-[3rem] md:text-[5rem]'>Sharan</span>,</div>
                    <div>
                        <TypeAnimation className='typeanimation text-blue-600 font-bold text:[1rem] md:text-[2rem] '
                            sequence={[
                                `Welcome to my website!\nI'm a Developer\nand a Designer.`,
                                1000,
                                "",
                            ]}
                            repeat={Infinity}
                            speed={30}
                            style={{ whiteSpace: 'pre-line' }}

                        />
                    </div>
                </div>

            </div>
            <div className='w-full justify-center text-center '><button className='bg-primary  w-[200px] p-3 mb-4 rounded-md border border-black hover:bg-[#f9ce30] text-xl font-bold'>Resume</button></div>
            <div className='flex justify-center gap-5 text-[2rem] '>  <FontAwesomeIcon icon={faGithub} className='item hover:text-blue-600 hover:scale-125'/>
                        <FontAwesomeIcon icon={faLinkedin} className='item hover:text-blue-600 hover:scale-125' />
                        <FontAwesomeIcon icon={faInstagram} className='item hover:text-blue-600 hover:scale-125' />
                        </div>
        </>
    )
}

export default Banner
