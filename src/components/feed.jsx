import React from 'react'
import PostInput from './PostInput'
import Post from './Post'

const feed = ({user}) => {
  const userData = JSON.parse(JSON.stringify(user));
  return (
    <>
      <div className='flex-1'>
       <PostInput user = {userData}/>
       <Post/> 

      </div>
    </>
  )
}

export default feed