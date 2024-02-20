import React from 'react'

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";

import { FaCaretLeft   }from 'react-icons/fa'

import galeryStyls from '../../css/Galery/galery.module.css'

import  i1 from  '../../image/i1.jpg'
import  i2 from  '../../image/i2.jpg'
import  i3 from  '../../image/i3.jpg'

import  i4 from  '../../image/i4.jpg'
import  i5 from  '../../image/i5.jpg'
import  i6 from  '../../image/c.png'
import  i8 from  '../../image/i8.jpg'

const images=[i8,i5,i2,i1,i6]






function galery() {
  const[num,setNum]=useState(0)


function rightArrow() {


  if (num == 4) {
    setNum(0)
  }else{
    setNum(num+1)
  }

  
}




 
function leftArrow() {


  if (num == 0) {
    setNum(4)
  }else{
    setNum(num-1)
  }

  
}




  return (
    <div className={galeryStyls.main} id='galery'>

      <div className={galeryStyls.slider}>
        <button className={galeryStyls.leftBtn}
         onClick={leftArrow}
        
        >{"<"}</button>
           <img src={[images[num]]} alt="" />

        <button className={galeryStyls.rightBtn}
        onClick={rightArrow}
        >{">"}</button>
      </div>

    </div>
  )
}

export default galery