import React from 'react'

import servicesStyles from '../../css/Services/services.module.css'
import { GrServices } from "react-icons/gr";
import { LiaRingSolid } from "react-icons/lia";
import { FaBirthdayCake ,FaRecordVinyl, FaRing  } from "react-icons/fa";
import { BiParty } from "react-icons/bi";

//Images
import i1 from '../../image/i1.jpg'
import i2 from '../../image/i2.jpg'
import i3 from '../../image/i3.jpg'
import i4 from '../../image/i4.jpg'
import i5 from '../../image/i5.jpg'
import i6 from '../../image/i6.jpg'
import i7 from '../../image/i7.jpg'
import i8 from '../../image/i8.jpg'


import c from '../../image/c.png'


import djVideo from '../../video/dj.mp4'


import { animate, motion  } from "framer-motion"

function services() {
  return (
    <div id='services'>
        <div className={servicesStyles.main}>
           

            <div className={servicesStyles.secondDiv} >
          

          
               
               <div className={servicesStyles.secondDiviTems}>

                <div className={servicesStyles.secondDiviTemsNav}>
                    <div>Uži<span>vaj</span>te u muzici, </div>
                    <div>najbolja a<span>tmo</span>sfera</div>
                    <div>naj<span>novi</span>ji hitovi</div>

                </div>
                 
                 <div className={servicesStyles.secondDiviTemsText}>
                   <div><span className={servicesStyles.icons}>-</span> ROĐENDANI <FaBirthdayCake  className={servicesStyles.icons}/>  </div>
                   <div><span className={servicesStyles.icons}>-</span> PROSLAVE <FaRecordVinyl className={servicesStyles.icons} /></div>
                   <div><span className={servicesStyles.icons}>-</span> SVADBE <FaRing className={servicesStyles.icons} /></div>
                   <div><span className={servicesStyles.icons}>-</span> ŽURKE <BiParty className={servicesStyles.icons} /></div>

                 </div>
               </div>

              <div className={servicesStyles.emptyDiv}> </div>




          </div>



          <div className={servicesStyles.thrredDiv} >
              <div className={servicesStyles.thrredDivItem1}>

                 <img   src={i2}  alt="" />

                <img src={i3} alt="" />
                <img src={i1} alt="" />
              </div>
 
          <div className={servicesStyles.thrredDivItem2}>

                 <video className={servicesStyles.video} src={djVideo}  type="video/mp4" autoPlay={true} muted={true} loop={true}></video>  
                 <img   src={i4}  alt="" />

                <img src={i6} alt="" />
               
          </div>


            <div className={servicesStyles.thrredDivItem1}>

                 <img   src={i8}  alt="" />

                <img src={i5} alt="" />
                <img src={i7} alt="" />
              </div>



              <div className={servicesStyles.thrredDivItem2}>

               
                 <img   src={i4}  alt="" />

                <img src={i6} alt="" />
                 <img   src={c}  alt="" />
               
          </div>

      
          </div> 




        </div>

    </div>
  )
}

export default services