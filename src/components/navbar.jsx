import React from 'react';
import { FaHome, FaNetworkWired, FaBriefcase, FaEnvelope, FaBell, FaAngleDown, FaTh } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { TbCloudDataConnection } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className='bg-white'>
      <div className='md:mx-8 py-3 flex flex-row w-full'>
        <div className='grid grid-cols-2 w-[20%] ml-40'>
        <TbCloudDataConnection  className="w-9 h-9 text-gray-500 dark:text-black-900" />
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FiSearch className="w-4 h-4 text-gray-100 dark:text-gray-100" />
            </div>
            <input type="search" id="search" className="block w-100% p-2.5 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-blue-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" />
          </div>
        </div>
        <div className='mx-28 flex flex-row'>
          <div className='grid grid-cols-7 px-22'>
            <div className='flex flex-col items-center'>
              <FaHome className='h-6 w-6' />
              <small className='font-SourceSansProLight text-sm'>Home</small>
            </div>
            <div className='flex flex-col items-center'>
              <FaNetworkWired className='h-6 w-6' />
              <small className="font-SourceSansProLight text-sm">My Network</small>
            </div>
            <div className='flex flex-col items-center'>
              <FaBriefcase className='h-6 w-6' />
              <small className="font-SourceSansProLight text-sm">Jobs</small>
            </div>
            <div className='flex flex-col items-center'>
              <FaEnvelope className='h-6 w-6' />
              <small className="font-SourceSansProLight text-sm">Messaging</small>
            </div>
            <div className='flex flex-col items-center'>
              <FaBell className='h-6 w-6' />
              <small className="font-SourceSansProLight text-sm">Notifications</small>
            </div>
            <div className='flex flex-col items-center'>
              <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" className='w-6 h-6 rounded-full' alt="profile" />
              <div className='flex flex-row'>
                <small className="font-SourceSansProLight text-sm">Me </small>
                <FaAngleDown className='h-4 w-4 mt-1' />
              </div>
            </div>
            <div className='flex flex-col items-center'>
              <FaTh className='w-6 h-6' />
              <div className='flex flex-row'>
                <small className="font-SourceSansProLight text-sm">For Business</small>
                <FaAngleDown className='h-4 w-4 mt-1' />
              </div>
            </div>
          </div>
          <div className='w-28 mx-4 flex items-center justify-center'>
            <small className="font-SourceSansProRegular text-sm underline text-wrap text-yellow-700">Network Smarter, Try Premium Free</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
