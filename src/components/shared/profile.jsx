import React from 'react'
import { Avatar, AvatarImage } from "@/components/ui/avatar"


const ProfilePhoto = ({ src }) => {
  return (
    <div className = 'mb-5 cursor-pointer'>
    <Avatar>
      <AvatarImage src={src} alt="banner" />
    </Avatar>
    </div>
    

  )
}

export default ProfilePhoto