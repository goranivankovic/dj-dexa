import React from 'react'

import footerStyle from '../../css/Footer/footer.module.css'

import { FaFacebook,FaInstagram ,FaTwitter} from "react-icons/fa";

let date =new Date()
let year =date.getFullYear()

function footer() {
  return (
    <div>
      
   <div className={footerStyle.mainFooter}>

      <div className={footerStyle.firstDiv}>

         <div>dj <span style={{color: "#cd5959"}}>de</span>xa</div>

         <div>
             <a href="https://www.facebook.com/denis.bazik.1/?locale=sr_RS" target="_blank"><FaFacebook /></a>
            <a href="https://www.instagram.com/dexaa0?igsh=cG90d3R1cXczMzh1" target="_blank"><FaInstagram /> </a>
            <a href="https://twitter.com" target="_blank"><FaTwitter /></a> 
         
         </div>

      </div>




               <div className={footerStyle.threedDiv}>
                  <a href='https://ma-go.net' target="_blank">Copyright © {year} ma<span style={{color: "#cd5959"}}>G</span>o</a>
                  <div>All rights reserved.</div>

               </div>


  
   </div>  

    </div>
  )
}

export default footer