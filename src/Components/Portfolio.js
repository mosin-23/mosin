import React, { useEffect, useState } from 'react'
import { AppText, portfolio } from '../Constants'
import SectionHeading from '../Shared/SectionHeading';
import {robo} from './../assets/index'
const Portfolio = () => {

    const [portfolioList,setPortfolioList]=useState([]);
    const [portfolioListOrg,setPortfolioListOrg]=useState([]);

    useEffect(()=>{
        
        setPortfolioList(portfolio);
        setPortfolioListOrg(portfolio)
    },[])
    const filterPortfolio=(type)=>{
        if(type=='All')
        {
            setPortfolioList(portfolioListOrg);
        }
        else{
           const result= portfolioListOrg.filter(item=>item.type==type);
           setPortfolioList(result)
           console.log(result) 
        }
    }
  return (
    <div className='mt-5 flex justify-center flex-col'>
        <div className='flex flex-row px-6 md:px-0 items-center justify-center'>
        {/* <h1 className='text-[40px] font-bold'>{AppText.Creative}
        <span className='text-purple-600'>{AppText.Portfolio}</span></h1> */}
        <SectionHeading firstTitle={AppText.Creative} secondTitle={AppText.Portfolio} />
        <img src={robo} className="w-[70px] ml-5 animate-bounce object-contain"/>
        </div>
        <div className='flex flex-row justify-evenly gap-2 px-4 md:px-72'>
            <button onClick={()=>filterPortfolio('All')} className='border-purple-600 border-2 
            text-black focus:text-white
            active:bg-gradient-to-r from-fuchsia-600 to-purple-600 p-1 px-4 rounded-md
            focus:ring-violet-30 focus:bg-gradient-to-r from-fuchsia-600 to-purple-600 focus:ring '>All</button>
             <button  onClick={()=>filterPortfolio('website')}  className='border-purple-600 border-2 
            text-black focus:text-white
            active:bg-gradient-to-r from-fuchsia-600 to-purple-600 p-1 px-4 rounded-md
            focus:ring-violet-300 focus:bg-purple-600 focus:ring '>Web Apps</button>
             <button onClick={()=>filterPortfolio('mobile')} className='border-purple-600 border-2 
            text-black focus:text-white
            active: p-1 px-4 rounded-md
            focus:ring-violet-300 focus:bg-purple-600 focus:ring '>Java Apps</button>
             
        </div>
        <div className='grid grid-cols-1 items-center content-center md:grid-cols-3 lg:grid-cols-2
        md:px-24 lg:px-48 p-4 '>
            {portfolioList.map((item,index)=>(
                <div className='p-2 flex flex-col m-2 rounded-lg bg-purple-100
                transition-all ease-in-out group hover:scale-110 cursor-pointer'>
                    <img src={item.imageUrl} className="h-36  object-contain rounded-xl "/>
                    <h1 className='text-[14px] group-hover:scale-110 mt-2 text-center  font-bold'>{item.title}</h1>
                    <h1 className='text-[12px] text-gray-500 px-6 pb-3 text-center'>{item.desc}</h1>
                    <h1 className='text-[12px] text-gray-500 px-6 pb-3 oveflow-hidden text-blue-500 text-center' onClick={()=>{window.location.href=item.link}}>{item.link}</h1>

                </div>
            ))}
        </div>
    </div>
  )
}

export default Portfolio