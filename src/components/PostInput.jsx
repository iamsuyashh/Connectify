'use client'
import {React,useState} from 'react';
import { FaPhotoVideo, FaCalendarAlt, FaEdit } from 'react-icons/fa';
import ProfilePhoto from './shared/profile';
import { PostDialog } from './postDialog';
const PostInput = ({user}) => {
    const [open , setOpen] = useState(false)
    const inputHandler = () => {
        setOpen(true)
    }
    return (
        <div className="p-4 border rounded-lg shadow-md">
            <div className="flex items-center mb-4">
            <ProfilePhoto src={user ? user?.imageUrl : '/banner.jpg'} />
                <input
                    type="text"
                    placeholder="Start a post"
                    className="w-full p-2 border rounded-full"
                    onClick={inputHandler   }
                />
                <PostDialog setOpen={setOpen} open={open} src={user?.imageUrl}/>
                
            </div>
            <div className="flex justify-around">
                <div className="flex items-center cursor-pointer">
                    <FaPhotoVideo className="w-6 h-6 mr-2 text-blue-500" />
                    <span>Media</span>
                </div>
                <div className="flex items-center cursor-pointer">
                    <FaCalendarAlt className="w-6 h-6 mr-2 text-yellow-500" />
                    <span>Event</span>
                </div>
                <div className="flex items-center cursor-pointer">
                    <FaEdit className="w-6 h-6 mr-2 text-red-500" />
                    <span>Write article</span>
                </div>
            </div>
        </div>
    );
};


export default PostInput