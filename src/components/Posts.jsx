import React from 'react'
import Post from './Post'

const Posts = ({ posts }) => {
  
  return (
    <div>
      {
        posts?.map((post) => {
          return (
            <Post key={post._id} post={post} />
          )
        })
      }
    </div>
  )
}

export default Posts