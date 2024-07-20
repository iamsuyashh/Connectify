import React from 'react'
import Comment from './Comment' 
const Comments = ({post}) => {
  return (
    <div> 
        {
            post?.comments?.map((comment)=>{
                return (
                    <Comment key={comment._id} comment={comment}/>
                )
            })
        } 
    </div>
  )
}

export default Comments