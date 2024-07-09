'use client'
import React, { useState } from 'react';
import { FaHome, FaNetworkWired, FaBriefcase, FaEnvelope, FaBell, FaAngleDown, FaTh, FaBars, FaTimes } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa6';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='bg-white px-4 md:px-40 shadow-sm'>
      <div className='flex justify-between items-center py-3 shadow-sm'>
        <div className='flex items-center'>
          <FaLinkedin className="w-9 h-9 text-blue-600" />
          <div className="relative ml-4">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FiSearch className="w-4 h-4 text-gray-500" />
            </div>
            <input type="search" id="search" className="block w-full p-2.5 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-transparent focus:ring-blue-500 focus:border-blue-500" placeholder="Search" />
          </div>  
        </div>
        <div className='md:hidden'>
          <button onClick={toggleMenu}>
            {menuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
          </button>
        </div>
        <div className={`hidden md:flex space-x-8 items-center`}>
          <a href="#" className='flex flex-col items-center'>
            <FaHome className='h-6 w-6' />
            <small className='font-SourceSansProLight text-sm'>Home</small>
          </a>
          <a href="#" className='flex flex-col items-center'>
            <FaNetworkWired className='h-6 w-6' />
            <small className="font-SourceSansProLight text-sm">My Network</small>
          </a>
          <a href="#" className='flex flex-col items-center'>
            <FaBriefcase className='h-6 w-6' />
            <small className="font-SourceSansProLight text-sm">Jobs</small>
          </a>
          <a href="#" className='flex flex-col items-center'>
            <FaEnvelope className='h-6 w-6' />
            <small className="font-SourceSansProLight text-sm">Messaging</small>
          </a>
          <a href="#" className='flex flex-col items-center'>
            <FaBell className='h-6 w-6' />
            <small className="font-SourceSansProLight text-sm">Notifications</small>
          </a>
          <div className="flex items-center">
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton>
                <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                  <small className="font-SourceSansProLight text-sm">Sign In</small>
                </button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className='md:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-50'>
          <div className="bg-white w-64 h-full p-4">
            <div className="flex justify-end mb-4">
              <button onClick={toggleMenu}>
                <FaTimes className="h-6 w-6" />
              </button>
            </div>
            <div className='flex flex-col space-y-4'>
              <a href="#" className='flex items-center'>
                <FaHome className='h-6 w-6 mr-2' />
                <small className='font-SourceSansProLight text-sm'>Home</small>
              </a>
              <a href="#" className='flex items-center'>
                <FaNetworkWired className='h-6 w-6 mr-2' />
                <small className="font-SourceSansProLight text-sm">My Network</small>
              </a>
              <a href="#" className='flex items-center'>
                <FaBriefcase className='h-6 w-6 mr-2' />
                <small className="font-SourceSansProLight text-sm">Jobs</small>
              </a>
              <a href="#" className='flex items-center'>
                <FaEnvelope className='h-6 w-6 mr-2' />
                <small className="font-SourceSansProLight text-sm">Messaging</small>
              </a>
              <a href="#" className='flex items-center'>
                <FaBell className='h-6 w-6 mr-2' />
                <small className="font-SourceSansProLight text-sm">Notifications</small>
              </a>
              <SignedOut>
                <SignInButton>
                  <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                    <small className="font-SourceSansProLight text-sm">Sign In</small>
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
