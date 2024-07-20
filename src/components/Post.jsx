"use client"
import React, { useEffect, useState } from 'react';
import ProfilePhoto from './shared/profile';
import { useUser } from '@clerk/nextjs';
import { Button } from './ui/button';
import { Trash2 } from 'lucide-react';
import { Badge } from './ui/badge';
import PostContent from './PostContent';
import SocialOptions from './SocialOptions';
import ReactTimeago from "react-timeago";
import { deletePostAction } from '@/lib/serveractions'; 

const Post = ({ post }) => {
    const { user } = useUser();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const fullName = post?.user?.firstName + " " + post?.user?.lastName;
    const loggedInUser = user?.id === post?.user?.userId;

    return (
        <div className='bg-white my-2 mx-2 md:mx-0 rounded-lg border border-gray-300'>
            <div className=' flex gap-2 p-4'>
                <ProfilePhoto src={post?.user?.profilePhoto} />
                <div className='flex items-center justify-between w-50%'>
                    <div>
                        <h1 className='text-sm font-bold'>{fullName} {loggedInUser && <Badge variant={'secondary'} className='ml-2'>You</Badge>}</h1>
                        <p className='text-xs text-gray-500'>@{user ? user?.username : "username"}</p>
                        <p className='text-xs text-gray-500'>
                            {isMounted && <ReactTimeago date={new Date(post.createdAt)} />}
                        </p>
                    </div>
                </div>
                <div>
                    {loggedInUser && (
                        <Button onClick={() => deletePostAction(post._id)} size={'icon'} className='rounded-full' variant={'outline'}>
                            <Trash2 />
                        </Button>
                    )}
                </div>
            </div>
            <PostContent post={post} />
            <SocialOptions post={post} />
        </div>
    );
};

export default Post;
