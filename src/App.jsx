import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'




import Cursor from './components/Cursor/cursor'
import Navbar from './components/Navbar/navbar'
import Home from './components/Home/home'
import Services from './components/Services/services'

import About from './components/About/about'
import Galery from './components/Galery/galery'

import Contact from './components/Contact/contact'
import Footer from './components/Footer/footer'


import appStyles from '../src/css/App/app.module.css'
import { motion } from 'framer-motion'

function App() {
  let [count, setCount] = useState(0)
  const[laz,setlaz]=useState(false)



// useEffect(() => {

//   let intFunc=   setInterval(() => {

//     if (count >=100) {

//       setlaz(!laz)
//     clearInterval(intFunc)
      
//     }else{

//        setCount(count+=10)
//     }

   
// }, 650);

//   return () => {

  
//   }
// }, [])



  return (
    <>
    <div>
   

    {!laz ?
    <div>
    <Navbar /> 
     <Home />

    <Services />
      <About />
      
    <Galery />
     <Contact /> 
  
      <Footer />   

       </div>
     :
     <div className={appStyles.main}>

      <motion.div className={appStyles.firstDiv} animate={{opacity:[0,1]}} initial={!laz} transition={{duration:2,delay:1}}>
      <span> {count}%  Loading</span>
      <motion.div animate={{rotate:1400,scale:[0.5,1.2,1]}} transition={{duration:7.5,ease:"easeInOut",repeat: Infinity}}></motion.div>
        </motion.div>




     </div>
     
     }
     
    

     

    </div>

     
    </>
  )
}

export default App
