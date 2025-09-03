import { useState } from 'react'
import { motion } from "motion/react"


function NavBar({}){
    return(
        <div className='flex items-center gap-7 ml-14'>
            <span className='navbar-font p-8'>About</span>
            <span className='navbar-font p-8'>Works</span>
            <span className='navbar-font p-8'>Contact</span>
        </div>
    )
}


export default NavBar