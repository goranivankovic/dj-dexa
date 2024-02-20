import React from 'react'
import {useEffect,useState} from 'react'
import navStyles from '../../css/Nav/nav.module.css'

import { IoSettings } from "react-icons/io5";

import { animate, motion  } from "framer-motion"
import { FaBars ,FaHome ,FaImages ,FaBook   } from "react-icons/fa";

import { FaPerson } from "react-icons/fa6";

import { BsQuestionSquare } from "react-icons/bs";




function navbar() {

const[laz,setLaz]=useState(false)

function toogleBar() {


        let line2 = document.getElementById('line2')


        if (!laz) {
          line2.style.transition='1200ms'
           line2.style.transform = 'translate(-50px)'
  
          setLaz(true)
        }else if(laz){
           line2.style.transition='1200ms'
           line2.style.transform = 'translate(0px)'
        }



       

  setTimeout(() => {
    setLaz(!laz)
  }, 800);
   
}
 
  return (
    <div>




 
                <div onClick={toogleBar} className={navStyles.bars}>
               
                    <svg width="114" height="59" viewBox="0 0 114 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="bars">
                                 <rect id="rec8" x="26" y="8" width="58" height="9" fill="#ff3333" stroke="#ff3333" strokeWidth="2"/>
                                <rect id="line2" x="51" y="23" width="58" height="9" fill="#ff3333" stroke="#ff3333" strokeWidth="2"/>
                                 <rect id="rec10" x="26" y="39" width="58" height="9" fill="#ff3333" stroke="#ff3333" strokeWidth="2"/>
                                 </g>
                             </svg>
               
               </div>

{laz ?

       <motion.div className={navStyles.navItems} animate={{x:[300,0],opacity:[0,1]}} transition={{  repeatDelay: 1, duration:2 }}>
            <a href="#home" onClick={toogleBar}><FaHome /> POČETNA</a>

            <a href="#services" onClick={toogleBar}><IoSettings /> USLUGE</a>

              <a href="#questions" onClick={toogleBar} ><BsQuestionSquare /> PITANJA</a>

            <a href="#about"onClick={toogleBar}><FaPerson /> O MENI</a>

            <a href="#galery"onClick={toogleBar}><FaImages /> GALERIJA</a>
            <a href="#contact" onClick={toogleBar}> <FaBook  /> KONTAKT</a>

        </motion.div>


:""}



    </div>
  )
}

export default navbar