import React from 'react'
import aboutStyles from '../../css/About/about.module.css'



import { useEffect ,useState } from 'react';

import { motion  } from "framer-motion"

function about() {
  const[laz1,setLaz1]=useState(true)
  const[laz2,setLaz2]=useState(true)
  const[laz3,setLaz3]=useState(true)
  const[laz4,setLaz4]=useState(true)  
  const[laz5,setLaz5]=useState(true)  

 function item1() {
    setLaz1(!laz1)
    setLaz2(true)
    setLaz3(true)
    setLaz4(true) 
    setLaz5(true)
    
  }

    function item2() {
    setLaz2(!laz2)
    setLaz1(true)
    setLaz3(true)
    setLaz4(true) 
    setLaz5(true)
    
  }


    function item3() {
    setLaz3(!laz3)
    setLaz1(true)
    setLaz2(true)
    setLaz4(true) 
    setLaz5(true)
    
  }

    function item4() {
    setLaz4(!laz4)
     setLaz1(true)
    setLaz2(true)
    setLaz3(true) 
    setLaz5(true)
    
  }


   function item5() {
    setLaz5(!laz5)
     setLaz1(true)
    setLaz2(true)
    setLaz3(true) 
    setLaz4(true)
    
  }
 

  return (
    <div  className={aboutStyles.main}>

    
  <div className={aboutStyles.fourDiv} id='questions'>


                       {/* First Qustion */}
                     <div className={aboutStyles.fourDivItems}  >
                           Šta sve puštate od muzike? {laz1 ? <span onClick={item1}>+</span> : <span onClick={item1}>-</span> }
 
                               {!laz1  ? 
                               <div>

                               Muzika je širok pojam, miksujemo sve žanrove po vašoj želji, od starijih pesama do najnovijih kako bi ucinili Vase veče jedinstvenim.
                      

                               </div>
                                :""}

                      </div>


              {/* Second Qustion */}
                     <div className={aboutStyles.fourDivItems}  >
                          Da li možemo da učestvujemo u pravljenju Playlist-e? {laz2 ? <span onClick={item2}>+</span> : <span onClick={item2}>-</span> }
 
                               {!laz2  ? 
                               <div>

                              Naravno, uzimaju se u obzir svi Vaši zahtevi i predlozi, ja sam tu kako bih ispratio da sve bude kako ste zamislili.
                      

                               </div>
                                :""}

                      </div>






                      {/* THreed Qustion */}
                     <div className={aboutStyles.fourDivItems}  >
                         Postoji li mogućnost da donesete ozvučenje? {laz3 ? <span onClick={item3}>+</span> : <span onClick={item3}>-</span> }
 
                               {!laz3  ? 
                               <div>

                             Postoji, imamo novu profesionalnu opremu, rasvetu i najbolje JBL ozvučenje kojim mozemo ozvučiti objekte svih veličina.
                      

                               </div>
                                :""}

                      </div> 



  {/* Four Qustion */}
                     <div className={aboutStyles.fourDivItems}  >
                       Da li puštate samo na teritoriji Novog Sada? {laz4 ? <span onClick={item4}>+</span> : <span onClick={item4}>-</span> }
 
                               {!laz4  ? 
                               <div>

                           Bez obzira što sam iz Novog Sada, veoma često sam angaržovan u okolini Novog Sada kao i u drugim gradovima.
                      

                               </div>
                                :""}

                      </div>         



</div>  




       <div className={aboutStyles.firstDiv} id='about'>

     

      

       <div className={aboutStyles.firstDivItems1}>
          <div>O MENI</div>
          <div> Muzikom se bavim od tinejdžerskih godina.  </div>
          <div> Najpre sam počeo da puštam muziku na rođendanima mojih drugara, a kasnije sam pozivan da doprinesem atmosferi i na nekim drugim žurkama. </div> 
      

          <div>Vrlo brzo sam shvatio da me eksperimentisanje sa muzikom ispunjava i da je to moja idealna profesija. </div>

          <div>U proteklih blizu deset godina, koliko nastupam kao DJ, vrlo često sam učestvovao u organizaciji najludjih žurki u Novom Sadu i u okolini. </div>

         

       </div>  





        


        
         
          
       </div>





    </div>
  )
}

export default about