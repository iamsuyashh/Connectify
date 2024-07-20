import Navbar from '@/components/navbar'
import React from 'react'
import SideBar from '@/components/sidebar'
import News from '@/components/news'
import Feed from '@/components/feed'
import { currentUser } from '@clerk/nextjs/server'

export default async function page() {
  const user = await currentUser()
  // console.log(user)  
  return (
    <>
      <div className='pt-20 max-w-6xl mx-auto flex justify-between gap-8'>
            <SideBar user = {user}/>
            <Feed user = {user}/>
            {/* <News className="hidden md:block"/> */}
           
      </div>
    </>
   
  )
}

