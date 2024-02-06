import React from 'react'
import Image from 'next/image';
import '../app/globals.css';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/ai"



const Homecomp = () => {
  return (
    <main className='flex flex-row items-center justify-center w-screen h-screen portrait-iphone '>
      <div id='leftside' className='w-1/2 h-screen rounded-md  text-center flex-col  items-center justify-center flex text-white  '>
      <h1 id='anim' className='font-extrabold font-new text-2xl xl:text-6xl '>GIFT LETUKA</h1>
      <h2  className='font-new font-extrabold text-base xl:text-xl '>FULL STACK DEVELOPER</h2>
      </div>

      <div className='bg-gray-200 w-1/2 h-screen    text-center flex-col  items-center justify-center flex'>
      <div className='w-auto h-auto'>
      <h2 className='font-new font-extrabold text-xl mt-4 '>FULL STACK DEVELOPER</h2>
      <p className='mt-2 font-news text-sm  '>Full stack developer 
      specializing in 
      Python,C#,React.js, Next.js, 
      WordPress, Linux,
      PHP,HTML, CSS, Typescript
      and JavaScript, with 
      experience in Redux, 
      Tailwind CSS, Bootstrap, 
      React Native, GIT, REST API, 
      C++, PostgreSQL and 
      MySQL, has a strong 
      foundation in building 
      modern applications. 
      Currently pursuing year 3 in 
      Bachelor of Science IT, 
      actively expanding my 
      knowledge and skills in the 
      field. My expertise lies in 
      creating responsive and 
      interactive user interfaces, 
      integrating APIs, and 
      utilizing popular 
      frameworks and libraries to 
      deliver high-quality 
      software solutions.</p>
      </div>
   <div className='flex text-center items-center justify-center  flex-row mt-4 mb-4 gap-3 text-xl font-news    '> 
<a className='text-2xl   items-center  flex flex-col justify-center text-center '  href='https://www.linkedin.com/in/gift-l-763160295/' target='blank'><AiFillLinkedin /><p className='text-xs ' >Linkedin </p></a>
<a className='text-2xl items-center flex flex-col justify-center text-center ' href='/'> <AiFillInstagram /><p className='text-xs '>Instagram</p></a>
<a className='text-2xl items-center flex flex-col justify-center text-center ' href='https://github.com/GIFT2105' target='blank'>   <AiFillGithub /><p className='text-xs '>Github</p></a>
</div>
     
      </div>


      
    </main>
  )
}

export default Homecomp
