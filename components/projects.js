"use client"
import React from 'react'
import { useState } from "react";
import { motion } from "framer-motion";
import {
  SiPython, SiCsharp, SiReact, SiNextDotJs, SiWordPress, SiLinux, SiPhp,
  SiHtml5, SiCss3, SiTypescript, SiJavascript, SiRedux, SiTailwindcss,
  SiBootstrap, SiReactrouter, SiNextdotjs, SiGit, SiRestApi, SiCplusplus,
  SiPostgresql, SiMysql, SiWindows, SiGraphql
} from 'react-icons/si';
import { IoLogoFirebase } from 'react-icons/io5';
import { FaNodeJs } from 'react-icons/fa';
import { FaWordpress, FaServer } from 'react-icons/fa';
import { SiMongodb } from "react-icons/si";
import { SiFramer } from "react-icons/si";

const Projects = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  return (
    <div className='bg-black text-white'>
      <div id='projects' className='flex flex-col text-center'  >
        <h2 className='font-extrabold text-4xl font-news mt-24  '>Projects</h2>
        <p className='text-sm text-white  mt-6 font-new  text-center' >
          As a front-end developer specializing in React.js, Next.js, HTML, CSS, JavaScript, Redux, Tailwind CSS, Bootstrap, React Native, REST API, MySQL, and Python, I have worked on a diverse range of projects to showcase my expertise. Some of the notable projects I have completed include:
        </p>
        <h2 className='font-extrabold text-base mt-5 mb-5  font-news  '>Press on the project for more Project info</h2>

        {/*Project 1*/}


        <div className="flex flex-col gap-4 items-center justify-center bg-black h-[800px] cursor-pointer">
          <div
            className="flip-card w-[900px] h-[600px] rounded-md"
            onClick={handleFlip}
          >
            <motion.div
              className="flip-card-inner w-[100%] h-[100%]"
              initial={false}
              animate={{ rotateY: isFlipped ? 180 : 360 }}
              transition={{ duration: 0.6, animationDirection: "normal" }}
              onAnimationComplete={() => setIsAnimating(false)}
            >
              <div className="flip-card-front w-full h-full relative overflow-hidden border-[1px] rounded-lg">
                <img
                  src="/cars1.png"
                  alt="Car Image"
                  className="w-full h-auto object-cover rounded-t-lg"
                />
                <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white">
                  <h1 className="text-2xl font-bold">Cars.co.za Clone</h1>
                  <p>Dream.Search.Drive</p>
                </div>
              </div>



              <div className="flip-card-back w-full h-full relative overflow-hidden border-[1px] rounded-lg">
                <img
                  src="/cars2.png" // Replace with the actual path to your image
                  alt="Earth Image"
                  className="w-full h-auto object-cover rounded-t-lg"
                />
                <h2 className='font-extrabold text-xl font-news  '>Tech Stacks utilised :</h2>
                {/*teck stacks here*/}
                <div className='flex text-xl font-new flex-row items-center justify-center text-center gap-6 mt-10'>
                  <h1 className='items-center flex flex-col '>  <SiReact /> React</h1>
                  <h1 className='items-center flex flex-col '>   <SiNextdotjs />  Nextjs</h1>
                  <h1 className='items-center flex flex-col '>   <SiTypescript />   Typescript</h1>
                  <h1 className='items-center flex flex-col '>   <SiJavascript />   Javascript</h1>
                  <h1 className='items-center flex flex-col '>   <FaServer />   REST API</h1>
                  <h1 className='items-center flex flex-col '>   <SiGit />  Git</h1>
                  <h1 className='items-center flex flex-col '>   <SiTailwindcss />  Tailwindcss</h1>
                  <h1 className='items-center flex flex-col '>   <SiRedux />   Redux</h1>
                </div>
              </div>

            </motion.div>
          </div>

          <p className='text-white  text-center      text-sm font-news '>
            The Cars.co.za website clone is a meticulously crafted replica of the original Cars.co.za platform,
            tailored to imitate its design and functionality.
            Developed using cutting-edge technologies,
            including Next.js and Tailwind CSS,
            the clone offers a seamless user experience with its responsive and visually appealing interface.

            In addition, the website integrates CarsByNinjaAPI, ensuring real-time access to a vast database of car-related information.
            Users can explore an extensive range of vehicles, compare specifications, read expert reviews, and find the best deals, all within a user-friendly environment reminiscent of the Cars.co.za website. <br />
            <br />

            The Cars.co.za website clone not only leverages Next.js and Tailwind CSS but is also powered by TypeScript, a statically typed superset of JavaScript. <br />
            TypeScript enhances the development process by providing type checking at compile time, leading to more robust and maintainable code.<br />
            This integration ensures a high level of code quality, making the website clone reliable, efficient, and scalable. <br />
            Users can enjoy a smooth browsing experience while developers benefit from the enhanced productivity and error prevention offered by TypeScript. </p>


          <p className='flex flex-row mt-10 font-new  text-sm  mb-4'  >Demo Link: <a href='https://cars-clone.vercel.app/' target='blank' className='text-blue-500 ml-3 '> https://cars-clone.vercel.app/</a></p>
          <p className='flex flex-row mt-10 font-new  text-sm  mb-4'  >Github Link: <a href='https://cars-clone.vercel.app/' target='blank' className='text-blue-500 ml-3 '>https://github.com/GIFT2105/cars.CO</a></p>


        </div>
      </div>


      {/*Project 2*/}



      <div className="flex mt-16  flex-col items-center justify-center bg-black h-[800px] cursor-pointer">
        <div
          className="flip-card w-[900px] h-[600px] rounded-md"
          onClick={handleFlip}
        >
          <motion.div
            className="flip-card-inner w-[100%] h-[100%]"
            initial={false}
            animate={{ rotateY: isFlipped ? 180 : 360 }}
            transition={{ duration: 0.6, animationDirection: "normal" }}
            onAnimationComplete={() => setIsAnimating(false)}
          >
            <div className="flip-card-front w-full h-full relative overflow-hidden border-[1px] rounded-lg">
              <img
                src="/v34.png"
                alt="Car Image"
                className="w-full h-auto object-cover rounded-t-lg"
              />
              <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white">
                <h1 className="text-2xl font-bold">  GreenTech Innovations Mockup</h1>
                <p>🌿 GreenTech Innovations Mockup: Explore a fictional world where sustainability meets innovation! This Next.js project showcases a mockup website for 'GreenTech Innovations,' a visionary company committed to eco-friendly solutions. Dive into the future of green technology with our interactive demo </p>
              </div>
            </div>



            <div className="flip-card-back w-full h-full relative overflow-hidden border-[1px] rounded-lg">
              <img
                src="/v34.png" // Replace with the actual path to your image
                alt="Earth Image"
                className="w-full h-auto object-cover rounded-t-lg"
              />
              <h2 className='font-extrabold text-xl font-news  '>Tech Stacks utilised :</h2>
              {/*teck stacks here*/}
              <div className='flex text-xl font-new flex-row items-center justify-center text-center gap-6 mt-10'>
                <h1 className='items-center flex flex-col '>  <SiReact /> React</h1>
                <h1 className='items-center flex flex-col '>   <SiNextdotjs />  Nextjs</h1>
                <h1 className='items-center flex flex-col '>   <SiJavascript />   Javascript</h1>
                <h1 className='items-center flex flex-col '>   <SiGit />  Git</h1>
                <h1 className='items-center flex flex-col '>   <SiTailwindcss />  Tailwindcss</h1>

              </div>
            </div>

          </motion.div>
        </div>
        <p className='flex flex-row mt-10 font-new  text-sm  mb-4'  >Demo Link: <a href='https://green-tech-fake-company-site.vercel.app/' target='blank' className='text-blue-500 ml-3 '> https://green-tech-fake-company-site.vercel.app/</a></p>
        <p className='flex flex-row mt-10 font-new  text-sm  mb-4'  >Github Link: <a href='https://github.com/GIFT2105/GreenTechFakeCompanySite' target='blank' className='text-blue-500 ml-3 '>https://github.com/GIFT2105/GreenTechFakeCompanySite</a></p>


      </div>


      {/*Project 3*/}


      <div>
        <div className="flex flex-col items-center justify-center bg-black h-[800px] cursor-pointer">
          <div
            className="flip-card w-[900px] h-[600px] rounded-md"
            onClick={handleFlip}
          >
            <motion.div
              className="flip-card-inner w-[100%] h-[100%]"
              initial={false}
              animate={{ rotateY: isFlipped ? 180 : 360 }}
              transition={{ duration: 0.6, animationDirection: "normal" }}
              onAnimationComplete={() => setIsAnimating(false)}
            >
              <div className="flip-card-front w-full h-full  border-[1px] rounded-lg">
                <img
                  src="/MAINp.png"
                  alt="Car Image"
                  className="w-full h-96 object-fill   rounded-t-lg"
                />
                <h1 className="text-2xl font-bold mt-8 "> BloomPath</h1>
                <p className='flex font-news  text-white'>
                  BloomPath,fomerly known as CareerRoutes101 is an interactive career guidance tool designed to help users explore different career paths based on their preferences and interests. It presents users with a series of questions related to their hobbies, skills, and interests. Based on their answers, the app provides tailored career recommendations from various fields, such as software development, graphic design, teaching, and more. The app aims to assist users, especially students, in making informed decisions about their future careers by suggesting paths that align with their interests.
                </p>

              </div>



              <div className="flip-card-back w-full h-full  border-[1px] rounded-lg">
                <img
                  src="/Careers.png" // Replace with the actual path to your image
                  alt="careers"
                  className="w-full h-96 object-cover rounded-t-lg"
                />
                <h2 className='font-extrabold text-xl font-news  '>Navigating Your Career Journey with Wise Decisions :</h2>
                <div className='flex flex-col items-center  text-center gap-2'>
                  <h2 className='font-extrabold text-xl text-center font-news mt-14 '>Tech Stacks utilised :</h2>
                  {/*teck stacks here*/}
                  <div className='flex  font-new flex-row items-center justify-center text-center gap-6 '>
                    <h1 className='items-center flex flex-col '>  <SiReact /> React</h1>
                    <h1 className='items-center flex flex-col '>   <SiNextdotjs />  Nextjs</h1>
                    <h1 className='items-center flex flex-col '>   <SiTypescript />   Typescript</h1>
                    <h1 className='items-center flex flex-col '>   <SiJavascript />   Javascript</h1>
                    <h1 className='items-center flex flex-col '>   <FaServer />   REST API</h1>
                    <h1 className='items-center flex flex-col '>   <SiGit />  Git</h1>
                    <h1 className='items-center flex flex-col '>   <SiTailwindcss />  Tailwindcss</h1>
                    <h1 className='items-center flex flex-col '>    <SiMongodb />   Mongodb</h1>
                    <h1 className='items-center flex flex-col '>   <SiFramer />  Framer-motion</h1>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>

        </div>


        <div className='flex flex-col items-center gap-4'>


          <p className='text-center  font-new text-sm '>
            How the App Works:<br />User Interaction: Users interact with the app by answering a series of questions related to their preferences, hobbies, and skills. State Management: React Hooks, specifically useState, manage the state of the user's answers and the current question displayed on the screen. Conditional Rendering: Based on the user's answers, the app conditionally renders different questions and options, guiding the user through the quiz. Career Recommendations: After the user completes the quiz, the app processes their answers using conditional logic. It determines suitable career paths based on the combinations of selected answers. Displaying Recommendations: The app displays the career recommendations to the user, suggesting potential fields they might be interested in pursuing. Additional Features: The app also includes extra features, such as detailed descriptions of each career path, educational requirements, skills needed, and steps to succeed in that particular field. This app provides an interactive and engaging way for users to explore potential career options, making use of modern web technologies to create a seamless user experience
          </p>

          <p className='flex flex-row mt-10 font-new  text-sm  mb-4'  >Demo Link: <a href='https://blooms-rho.vercel.app/' target='blank' className='text-blue-500 ml-3 '> https://blooms-rho.vercel.app/</a></p>
          <p className='flex flex-row mt-10 font-new  text-sm  mb-4'  >Github Link: <a href='https://github.com/GIFT2105/blooms' target='blank' className='text-blue-500 ml-3 '>https://github.com/GIFT2105/blooms</a></p>

        </div>
      </div>


      {/*Project 4*/}



      <div className="flex flex-col mt-16  items-center justify-center bg-black h-[800px] cursor-pointer">
        <div
          className="flip-card w-[900px] h-[600px] rounded-md"
          onClick={handleFlip}
        >
          <motion.div
            className="flip-card-inner w-[100%] h-[100%]"
            initial={false}
            animate={{ rotateY: isFlipped ? 180 : 360 }}
            transition={{ duration: 0.6, animationDirection: "normal" }}
            onAnimationComplete={() => setIsAnimating(false)}
          >
            <div className="flip-card-front w-full h-full relative overflow-hidden border-[1px] rounded-lg">
              <img
                src="/View3.png"
                alt="Car Image"
                className="w-full h-auto object-cover rounded-t-lg"
              />
              <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white">
                <h1 className="text-2xl font-bold"> SAbuilds-101</h1>
                <p> a dynamic car blog app designed for passionate car enthusiasts to come together and share their innovative car build ideas. This platform is built using cutting-edge technologies, including React with Vite for a lightning-fast frontend experience and Tailwind CSS for sleek, responsive design. </p>
              </div>
            </div>



            <div className="flip-card-back w-full h-full relative overflow-hidden border-[1px] rounded-lg">
              <img
                src="/View3.png" // Replace with the actual path to your image
                alt="Earth Image"
                className="w-full h-auto object-cover rounded-t-lg"
              />
              <h2 className='font-extrabold text-xl font-news  '>Tech Stacks utilised :</h2>
              {/*teck stacks here*/}
              <div className='flex text-xl font-new flex-row items-center justify-center text-center gap-6 mt-10'>
                <h1 className='items-center flex flex-col '>  <SiReact /> React</h1>
                <h1 className='items-center flex flex-col '>   <SiNextdotjs />  Nextjs</h1>
                <h1 className='items-center flex flex-col '>   <SiJavascript />   Javascript</h1>
                <h1 className='items-center flex flex-col '>   <SiGit />  Git</h1>
                <h1 className='items-center flex flex-col '>   <SiTailwindcss />  Tailwindcss</h1>
                <h1 className='items-center flex flex-col '>      <IoLogoFirebase />  Firebase</h1>

              </div>
            </div>

          </motion.div>
        </div>

        <p className='text-white text-center font-new text-sm mt-6 '> Behind the scenes, Firebase Firestore handles real-time data storage, ensuring seamless collaboration and discussion among users. Additionally, Firebase Storage supports effortless media uploads, allowing users to showcase their car projects with ease. With a user-friendly UI, this app fosters a vibrant community of car enthusiasts, encouraging the exchange of creative car build ideas and inspiring the next generation of automotive innovation. </p>

      </div>

      <h3 className='text-sm font-new text-white mb-4 font-burtons   mt-5 text-center'>
        <a className='text-blue-500 ' href='https://github.com/GIFT2105'>See More Projects on Github</a>
      </h3>

    </div >


  )
}

export default Projects
