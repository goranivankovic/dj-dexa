import React from 'react'

import contactStyle from '../../css/Contact/contact.module.css'
import  phones from  '../../image/phones.png'


import { FaFacebook,FaInstagram ,FaGoogle,FaPhone, FaBook } from "react-icons/fa";

function contact() {
  return (
    <div id='contact'  className={contactStyle.main}>

    

        <div className={contactStyle.firstDiv}>

          <div className={contactStyle.firstDivText}>
            <div><FaBook /> KONTAKT</div>
            <div><FaPhone />  : 069/626-858</div>
            <div><FaGoogle /> : denisdenytm1@gmail.com</div>
            <a href="https://www.instagram.com/dexaa0?igsh=cG90d3R1cXczMzh1" target="_blank"><FaInstagram /> : @dexaa0</a>
            <a href="https://www.facebook.com/denis.bazik.1/?locale=sr_RS" target="_blank"><FaFacebook /> :  /denis.bazik.1   </a>

          </div>

          <div className={contactStyle.text}>KONTAKT</div>
          <img src={phones} alt="" />
         
          
          </div>
        
      
    </div>
  )
}

export default contact