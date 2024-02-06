"use client"
import React, { useState } from 'react';
import { FaEnvelope, FaUser, FaPhone } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission, such as sending data to a server
    console.log('Form submitted:', formData);
    // You can add your own logic here to handle form submission, like sending the data to a server
  };

  return (
    <main className='h-96 w-screen flex flex-col'>
      <div className="relative h-96 ">
        <video
          className="object-cover    w-full h-full"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="im3.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl font-Barlow font-bold">
              <span className='text-7xl font-extrabold'>Contact Me</span>
            </h1>
            <form className="mt-8" onSubmit={handleSubmit}>
              <div className="flex flex-col justify-center  text-center mb-4">
                <label htmlFor="name" className="text-white text-center">
                  Name
                </label>
                <div className="flex text-center items-center">
                  <FaUser className="mr-2" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-transparent  border-b-2 border-white focus:outline-white focus:outline-double    text-white"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col mb-4">
                <label htmlFor="email" className="text-white">
                  Email
                </label>
                <div className="flex items-center">
                  <FaEnvelope className="mr-2" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-transparent border-b-2 border-white focus:outline-white focus:outline-double  text-white"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col mb-4">
                <label htmlFor="phone" className="text-white">
                  Phone
                </label>
                <div className="flex items-center">
                  <FaPhone className="mr-2" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-transparent border-b-2 border-white focus:outline-white focus:outline-double  text-white"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="bg-white text-black py-2 px-4 rounded-md hover:bg-gray-200 focus:outline-none"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactForm;
