'use client';
import React, { useState } from 'react';
import { FaPhotoVideo, FaCalendarAlt, FaEdit } from 'react-icons/fa';
import ProfilePhoto from './shared/profile';
import { PostDialog } from './postDialog';

const PostInput = ({ user }) => {
  const [open, setOpen] = useState(false);

  const inputHandler = () => {
    setOpen(true);
  };

  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <div className="flex items-center gap-2 md:gap-4 mb-4">
        <ProfilePhoto src={user ? user?.imageUrl : '/banner.jpg'} />
        <input
          type="text"
          placeholder="Start a post"
          className="flex-1 p-2 border rounded-full text-sm md:text-base"
          onClick={inputHandler}
        />
      </div>
      {/* Optional feature section for mobile responsiveness */}
      {/* <div className="flex justify-between md:justify-around mt-4">
        <div className="flex items-center cursor-pointer text-xs md:text-sm">
          <FaPhotoVideo className="w-5 h-5 mr-1 text-blue-500 md:w-6 md:h-6 md:mr-2" />
          <span className="hidden md:block">Media</span>
        </div>
        <div className="flex items-center cursor-pointer text-xs md:text-sm">
          <FaCalendarAlt className="w-5 h-5 mr-1 text-yellow-500 md:w-6 md:h-6 md:mr-2" />
          <span className="hidden md:block">Event</span>
        </div>
        <div className="flex items-center cursor-pointer text-xs md:text-sm">
          <FaEdit className="w-5 h-5 mr-1 text-red-500 md:w-6 md:h-6 md:mr-2" />
          <span className="hidden md:block">Write article</span>
        </div>
      </div> */}
      <PostDialog setOpen={setOpen} open={open} src={user?.imageUrl} />
    </div>
  );
};

export default PostInput;
