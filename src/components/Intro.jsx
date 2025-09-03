import { useState } from 'react'
import { motion } from "motion/react"



function Intro({}){
    return (
        <div className='bg-[#1E1C1C] flex items-center h-[550px] overflow-hidden'>
            <div className='w-[50%] flex flex-col items-center justify-center'>
                <div className='p-14'>
                    <span className='intro-titulo'>Isaac B. Silva</span>
                </div>
                <div className='flex flex-col items-center'>
                    <span className='intro-font'>Fullstack Developer</span>
                    <span className='intro-font'>AI Engineer</span>
                    <span className='intro-font'>Data Specialist</span>
                </div>
            </div>
            <div className='w-[50%]'>
                <img src="/extras/imagem_base_topo.png" alt="" className='w-[65%] pb-14' />
            </div>
        </div>
    )
}


export default Intro