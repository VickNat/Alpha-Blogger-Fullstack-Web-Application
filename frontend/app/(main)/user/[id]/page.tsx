'use client'

import Image from 'next/image'
import React from 'react'
import landingImage from '@/public/landingImage.svg'
import ProfileCard from '@/components/ProfileCard'
import PersonalBlogs from '@/components/PersonalBlogs'

const page = () => {

  const stringifiedUser = localStorage.getItem('user')
  const user = JSON.parse(stringifiedUser ? stringifiedUser : "{}")

  // console.log("User", user);

  return (
    <div className='flex flex-col items-center justify-center gap-y-8 py-10'>
      <ProfileCard />
      {/* <PersonalBlogs /> */}
    </div>
  )
}

export default page