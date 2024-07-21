import Image from 'next/image';
import React from 'react';
import ProfilePhoto from './shared/profile';
import { getAllPosts } from '@/lib/serveractions';

const SideBar = async ({ user }) => {
    const posts =await getAllPosts();
    return (
        <div className="hidden md:block w-[20%] h-fit border border-grey-300">
            <div className="flex relative flex-col items-center">
                <div className="w-full h-16 overflow-hidden">
                    {user && (
                        <Image
                            src="/banner.jpg"
                            alt="Banner"
                            width={200}
                            height={200}
                            className="w-full h-full rounded-t"
                        />
                    )}
                </div>
                <div className='my-1 absolute cursor-pointer top-4'>
                    <ProfilePhoto src={user ? user?.imageUrl : '/banner.jpg'} />
                </div>
                <div>
                    <div className='p-2 mt-5 text-center'>
                        <h1 className='font-bold hover:underline cursor-pointer'>{user ? `${user?.firstName} ${user?.lastName}` : "Sign Up first"}</h1>
                        <p className=' text-xs'>@{user ? `${user?.username} ` : 'username'}</p>
                    </div>
                </div>
            </div>
            <div className='text-xs'>
                    <div className='w-full flex justify-between items-center px-3 py-2 hov'>
                        <p>Post Impression</p>
                        <p className='text-blue-500 font-bold'>88</p>
                    </div>
                    <div className='w-full flex justify-between items-center px-3 py-2 h'>
                        <p>Posts</p>
                        <p className='text-blue-500 font-bold'>{posts.length}</p>
                    </div>
                </div>
        </div>
    );
};

export default SideBar;
