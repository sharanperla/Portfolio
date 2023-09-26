import React from 'react'
import { useMode } from '../ModeProvider/ModeProvider';

function Projects() {
     const {mode}=useMode();
     return (
          <div className='h-full my-3'>
               <div className={`mt-2 w-[90%] p-5 rounded-xl mx-auto text-center md:text-[2rem] font-bold ${mode=='dark'?'bg-darkcard':'bg-lightcard'}`} >Projects</div>
               <div className="cards w-[90%] mx-auto mt-2 flex flex-wrap gap-3 justify-center">
                    <div className={`card bg-[#ebebeb] h-96 w-[100%] md:w-[49%] rounded-xl ${mode=='dark'?'bg-darkcard':'bg-lightcard'}`}>
                         lhk
                    </div>
                    <div className={`card bg-[#ebebeb] h-96 w-[100%] md:w-[49%] rounded-xl ${mode=='dark'?'bg-darkcard':'bg-lightcard'}`}>
                         lhk
                    </div>
                    <div className={`card bg-[#ebebeb] h-96 w-[100%] md:w-[49%] rounded-xl ${mode=='dark'?'bg-darkcard':'bg-lightcard'}`}>
                         lhk
                    </div>
                    <div className={`card bg-[#ebebeb] h-96 w-[100%] md:w-[49%] rounded-xl ${mode=='dark'?'bg-darkcard':'bg-lightcard'}`}>
                         lhk
                    </div>
                    <div className={`card bg-[#ebebeb] h-96 w-[100%] md:w-[49%] rounded-xl ${mode=='dark'?'bg-darkcard':'bg-lightcard'}`}>
                         lhk
                    </div>
               </div>
          </div>
     )
}

export default Projects;
