import React from 'react'
import './../assets'
import './../Components'
import { book, laptop, wave } from './../assets'
import { aboutSection, AppText } from '../Constants'
const AboutMe = () => {
  return (
    <div id="aboutme" className='mt-[100px]'>
          <img src={wave}  className="w-screen absolute " />
        <div className='w-full bg-gradient-to-r from-emerald-500 to-emerald-900 h-[300px]  justify-center items-center'>
        <div className='flex flex-row justify-between absolute'>
            <img src={laptop}  className="hidden lg:block lg:w-[250px]  mt-[-100px]" />
        </div>
            <h1 className='text-white lg:text-[50px] pt-[50px] font-bold text-center md:text-sm sm:text-sm'>About <span className='text-[#F2EFC7] mt-10'>Me</span></h1>
            <h1 className="w-auto px-10 lg:text-xl lg:font-sans lg:text-justify  md:text-base sm:text-xs lg:px-48 mt-[50px] text-white py-0 leading-relaxed pb-1">
  {AppText.aboutMeDescripion}
</h1>

        </div>
        <div className='flex flex-col md:flex-row mt-[-75px] md:px-32 '>
           {
            aboutSection.map((item,index)=>(
               
                <div key={index} className="flex  relative w-full items-center justify-center flex-col m-2
                group md:hover:bg-gradient-to-br from-teal-200 to-purple-600 rounded-lg py-2">
                <img src={item.image} className="w-[230px] rounded-lg h-[170px] object-contain aspect-auto"/>
                <h1 className='font-bold md:group-hover:text-white'>{item.title}</h1>
                <h1 className='text-[12px] md:group-hover:text-gray-200 text-gray-500 px-7 text-center '>{item.desc}</h1>
                    </div>
             

            ))
            }
            
        </div>
    </div>
   
  )
}

export default AboutMe