import React from 'react'
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';

const Sects = () => {
  return (
    <main className='flex flex-col items-center  xl:justify-center  bg-black  w-auto h-auto portrait-iphone '>
    <div className='flex flex-col items-center mt-40    text-white text-center gap-7  font-extrabold font-new '>
       { /* Education Section*/}
<div id='Education' className=''>
<h2 className='font-extrabold text-4xl mb-4 font-news  '>Education</h2>
<section>
<div className="mb-8 flex flex-col">


  {/* Bachelor's Degree */}
  <div className=" flex items-center mb-4 flex-col">
    <FaGraduationCap className=" text-8xl mb-4 " />
    <div className="">
      <h3 className="font-new text-2xl ">Bachelor of Science in Information Technology</h3>
      <p className="font-news ">Eduvos | 1 February 2022 – 1 December 2024</p>
    </div>
  </div>

  {/* JavaScript Algorithms and Data Structures Certificate */}
  <div className="mb-4">
    <FaCertificate className="inline-block mr-2 text-2xl text-green-500" />
    <div className="inline-block">
      <h3 className="text-lg font-semibold">Certificate in JavaScript Algorithms and Data Structures</h3>
      <p className="text-gray-600">freeCodeCamp | 1 January 2023 – 1 March 2023</p>
    </div>
  </div>

  {/* Responsive Web Design Certificate */}
  <div>
    <FaCertificate className="inline-block mr-2 text-2xl text-red-500" />
    <div className="inline-block">
      <h3 className="text-lg font-semibold">Certificate in Responsive Web Design</h3>
      <p className="text-gray-600">freeCodeCamp | 1 January 2023 – 1 March 2023</p>
    </div>
  </div>
</div>
</section>
</div>


    </div>
    </main>
  )
}

export default Sects
