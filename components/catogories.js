"use client"
import Link from 'next/link'
import React from 'react'
import {
  SiPython, SiCsharp, SiReact, SiNextDotJs, SiWordPress, SiLinux, SiPhp,
  SiHtml5, SiCss3, SiTypescript, SiJavascript, SiRedux, SiTailwindcss,
  SiBootstrap, SiReactrouter, SiNextdotjs, SiGit, SiRestApi, SiCplusplus,
  SiPostgresql, SiMysql, SiWindows, SiGraphql
} from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { FaWordpress, FaServer } from 'react-icons/fa';
import { SiMongodb } from "react-icons/si";
import { SiFramer } from "react-icons/si";

const Nav = () => {



  return (
    <main className='flex flex-col items-center  xl:justify-center    bg-black  w-auto h-auto portrait-iphone '>
      <div className='flex flex-col items-center text-white text-center gap-7 xl:gap-48 font-extrabold font-new '>

        { /* About Me Section*/}


        <div className='flex flex-col gap-14 mt-12  font-new '>
          <h2 className='font-extrabold text-4xl font-news  '>Tech Stacks</h2>
          <div className='flex gap-14 flex-row text-2xl  '>
            <h1 className='items-center flex flex-col '> <SiPython /> Python</h1>
            <h1 className='items-center flex flex-col '> <SiCsharp /> Csharp</h1>
            <h1 className='items-center flex flex-col '>  <SiReact /> React</h1>
            <h1 className='items-center flex flex-col '>  <SiLinux />  Linux</h1>
            <h1 className='items-center flex flex-col '>   <SiPhp />   Php</h1>
            <h1 className='items-center flex flex-col '> <SiBootstrap />   Bootstrap</h1>
          </div>

          <div className='flex gap-14 flex-row text-2xl  '>

            <h1 className='items-center flex flex-col '>   <SiHtml5 />   Html5</h1>
            <h1 className='items-center flex flex-col '>   <SiCss3 />   Css3</h1>

            <h1 className='items-center flex flex-col '>   <SiTypescript />   Typescript</h1>
            <h1 className='items-center flex flex-col '>   <SiJavascript />   Javascript</h1>
            <h1 className='items-center flex flex-col '>   <FaServer />   REST API</h1>

          </div>


          <div className='flex gap-14 flex-row text-2xl  '>
            <h1 className='items-center flex flex-col '>   <SiTailwindcss />  Tailwindcss</h1>
            <h1 className='items-center flex flex-col '>   <SiCplusplus />  C++</h1>
            <h1 className='items-center flex flex-col '>   <SiGit />  Git</h1>
            <h1 className='items-center flex flex-col '>   <SiNextdotjs />  Nextjs</h1>
            <h1 className='items-center flex flex-col '>   <FaWordpress />   Wordpress</h1>
            <h1 className='items-center flex flex-col '>    <SiMongodb />   Mongodb</h1>

          </div>

          <div className='flex gap-14 flex-row text-2xl  '>

            <h1 className='items-center flex flex-col '>   <SiPostgresql />  Postgresql</h1>
            <h1 className='items-center flex flex-col '>   <SiMysql />  Mysql</h1>
            <h1 className='items-center flex flex-col '>   <SiReactrouter />  Reactrouter</h1>
            <h1 className='items-center flex flex-col '>   <SiRedux />   Redux</h1>
            <h1 className='items-center flex flex-col '>   <SiWindows />   Windows</h1>
            <h1 className='items-center flex flex-col '>   <FaNodeJs />   NodeJs</h1>
            <h1 className='items-center flex flex-col '>   <SiGraphql />  Graphql</h1>
            <h1 className='items-center flex flex-col '>   <SiFramer />  Framer-motion</h1>
          </div>




        </div>


        { /* Work History Section*/}



        <div className="mt-8">
          <h2 className='font-extrabold text-4xl font-news mb-4  '>Work History</h2>

          <div className="mb-2 flex flex-col items-center ">


            <img
              className='flex items-center   justify-center mb-6 mt-4  rounded-full   '
              width={100}
              height={100}
              src='/logo1.png'
              alt='dikgale'
            />


            <p className="text-xl font-bold">DIKGALE FOUNDATION - Web Developer</p>
            <p className="text-gray-500 mb-2">March 2022 – October 2023</p>
            <p className="mb-4">
              In my role as a web developer at DIKGALE FOUNDATION, my responsibilities encompassed
              the development, maintenance, and fulfillment of company requirements. Leveraging a
              robust tool stack, my expertise in front-end development included React.js, Next.js, HTML,
              CSS, and JavaScript, with proficiency in TypeScript. I utilized Tailwind CSS for UI frameworks,
              implemented Redux for effective state management, and seamlessly integrated APIs. My proficiency
              extended to database management using MySQL, and version control through Git ensured efficient
              collaboration and code management.
            </p>
          </div>
          <h2 className='font-extrabold text-xl font-news  '>Tech Stacks utilised :</h2>
          <div className='flex flex-col'>
            <div className='flex gap-12 flex-row text-2xl mt-14 items-center justify-center  '>
              <h1 className='items-center flex flex-col '>   <SiNextdotjs />  Nextjs</h1>
              <h1 className='items-center flex flex-col '>   <SiGit />  Git</h1>
              <h1 className='items-center flex flex-col '>   <SiTailwindcss />  Tailwindcss</h1>
              <h1 className='items-center flex flex-col '>   <SiMysql />  Mysql</h1>
              <h1 className='items-center flex flex-col '>   <SiReactrouter />  Reactrouter</h1>
              <h1 className='items-center flex flex-col '>   <SiRedux />   Redux</h1>

              <h1 className='items-center flex flex-col '>   <SiWindows />   Windows</h1>
            </div>

            <div className='flex gap-12 flex-row mt-14 text-2xl items-center justify-center  '>
              <h1 className='items-center flex flex-col '>   <FaNodeJs />   NodeJs</h1>
              <h1 className='items-center flex flex-col '>   <SiHtml5 />   Html5</h1>
              <h1 className='items-center flex flex-col '>   <SiCss3 />   Css3</h1>

              <h1 className='items-center flex flex-col '>   <SiTypescript />   Typescript</h1>
              <h1 className='items-center flex flex-col '>   <SiJavascript />   Javascript</h1>
              <h1 className='items-center flex flex-col '>   <FaServer />   REST API</h1>

            </div>
          </div>
        </div>



      </div>






    </main>
  )
};

export default Nav;