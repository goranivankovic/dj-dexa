import {useEffect,useState} from 'react'
import homeStyles from '../../css/Home/home.module.css'
import dj from '../../video/dj.mp4'

import { motion  } from "framer-motion"


import { TypeAnimation } from 'react-type-animation';

import { FaHeadphonesAlt } from "react-icons/fa";



function home() {
  

  

  return (
    <div id='home'>
     
              <video className={homeStyles.video}  type="video/mp4" src={dj}  autoPlay loop muted ></video> 
 
      <div className={homeStyles.logo}><span style={{color:"#ff3333"}}>DJ</span>  | DEXA  <FaHeadphonesAlt style={{color:"#ff3333"}}/></div>

             
             <div className={homeStyles.main}>

                 <div className={homeStyles.firstDiv}>
                   <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        `DJ | DEXA`,
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        `ROĐENDANI`,
        2000,
        ,
        `SVADBE`,
        2000,
        ,
       
        'PROSLAVE',
        2000,
        
        'ŽURKE',
        2000,


       
      ]}

      wrapper="span"
      speed={10}
      deletionSpeed={99}
      
      repeat={Infinity}
    />  
                

                 </div>


                <div className={homeStyles.secondDiv}>ZA SVE  VRSTE  PROSLAVA</div> 


                <a className={homeStyles.threedDiv} href="#contact" >KONTAKT</a>
          
                 
       
     
             </div>

       

    </div>
  )
}

export default home;