import React, { useState } from 'react';
import { Button } from './ui/button';
import { MessageCircleMore, Repeat, Send, ThumbsUp } from 'lucide-react';
import { useUser } from '@clerk/nextjs';
import CommentInput from './CommentInput';
import Comments from './Comments';

const SocialOptions = ({ post }) => {
  const { user } = useUser();
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes);
  const [commentOpen, setCommentOpen] = useState(false);

  const likeOrDislikeHandler = async () => {
    if (!user) throw new Error('User not authenticated');

    // Save current state for potential rollback
    const tempLiked = liked;
    const tempLikes = likes;

    // Ensure likes is always an array
    const currentLikes = likes ?? [];

    // Filter to create dislike array
    const dislike = currentLikes.filter((userId) => userId !== user.id);

    // Create like array
    const like = [...currentLikes, user.id];

    // Determine newLike based on the current liked state
    const newLike = liked ? dislike : like;

    // Update state
    setLiked(!liked);
    setLikes(newLike);

    try {
      const res = await fetch(`/api/posts/${post._id}/${liked ? 'dislike' : 'like'}`, {
        method: 'POST',
        headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify(user.id),
      });

      if (!res.ok) {
        setLiked(tempLiked);
        setLikes(tempLikes);
        throw new Error(`Failed to ${liked ? 'dislike' : 'like'} the post. Response status: ${res.status}`);
      }

      // Fetch the updated likes count
      const fetchAllLikes = await fetch(`/api/posts/${post._id}/like`);
      if (!fetchAllLikes.ok) {
        setLikes(tempLikes);
        throw new Error(`Failed to fetch updated likes. Response status: ${fetchAllLikes.status}`);
      }

      const likeData = await fetchAllLikes.json();
      setLikes(likeData);
    } catch (error) {
      console.error('Error in likeOrDislikeHandler:', error);
      alert('An error occurred while processing your request.');
    }
  };


  return (
    <div> 
      <div className='text-sm mx-2 p-2 flex items-center justify-between border-b border-gray-300'>
        {
          (likes && likes.length > 0) && (
            <p className='text-xm text-gray-500 hover:text-blue-500 hover:underline hover:cursor-pointer'>
              {likes.length} likes
            </p>
          )
        }
        {
          (post.comments && post.comments.length > 0) && (
            <p onClick={() => setCommentOpen(!commentOpen)} className='text-xm text-gray-500 hover:text-blue-500 hover:underline hover:cursor-pointer'>
              {post.comments.length} message
            </p>
          )
        }
      </div>
      <div className='flex items-center m-1 justify-between'>
        <Button
          onClick={likeOrDislikeHandler}
          variant={'ghost'}
          className='flex items-center gap-1 rounded-lg text-gray-600 hover:text-black'>
          <ThumbsUp className={`${liked && 'fill-[#378FE9]'}`} />
          <p className={`${liked && 'text-[#378FE9]'}`}>Like</p>
        </Button>
        <Button onClick={() => setCommentOpen(!commentOpen)} variant={'ghost'} className='flex items-center gap-1 rounded-lg text-gray-600 hover:text-black'>
          <MessageCircleMore />
          <p>Message</p>
        </Button>
        <Button variant={'ghost'} className='flex items-center gap-1 rounded-lg text-gray-600 hover:text-black'>
          <Repeat />
          <p>Repost</p>
        </Button>
        <Button variant={'ghost'} className='flex items-center gap-1 rounded-lg text-gray-600 hover:text-black'>
          <Send />
          <p>Send</p>
        </Button>
      </div>
      {
        commentOpen && (
          <div className='p-4'>
            <CommentInput postId={post._id} />
            <Comments post={post} />
          </div>
        )
      }
    </div>
  );
}

export default SocialOptions;
