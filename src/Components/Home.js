import React from 'react'
import './../Constants'
import { AppText } from './../Constants'
import './../assets'
import './Home.css'
import Typewriter from 'typewriter-effect';
import Lottie from 'lottie-react'
import Think from '../assets/think.json'
import Resume from '../assets/MK-31280.pdf'
const Home = () => {

  return (
    <div className='flex p-[20px] md:px-20 justify-between flex-col md:flex-row'>
<div className='flex w-full flex-row  justify-end'>
        <div className='flex w-full flex-col  items-start content-end'>
            <h1 className='text-[35px] md:text-[40px] font-bold '>{AppText.hello}</h1>
            <div className='flex'>
            <h1 className='text-[35px]  md:text-[40px] font-bold mr-3'>{AppText.Iam}</h1>
            {/* <h1 className='text-[40px]  md:text-[60px] font-bold  text-red-600'>{AppText.RahulSanap}</h1> */}
            <Typewriter
  options={{
    strings: [AppText.RahulSanap, AppText.FrontedDeveloper,AppText.UIUXDesigner,AppText.BackendDeveloper],
    autoStart: true,
    loop: true,
    delay:75
    
  }}
/>
</div>
<div>
  <h1 className='my-5 text-gray-400'>I am Mosin Khan studying final year Computer Science at KL University!</h1>
</div>
            <button class="hover:z-50 transition-all duration-300 ease-in-out  hover:scale-125 bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-md text-white"><a href={Resume} download='Mosin-resume'>Resume</a></button>
        </div>
        </div>
        <div className=' w-full flex justify-center'>
          <Lottie loop={true} animationData={Think} className="w-[230px] md:w-[400px]"/>
        </div>
    </div>
  )
}

export default Home