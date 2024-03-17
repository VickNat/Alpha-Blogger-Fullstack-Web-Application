'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import landingImage from '@/public/landingImage.svg'
import axios from 'axios'

const page = ({ params }: { params: { id: string } }) => {
  const [post, setPost] = useState({} as any)
  const [user, setUser] = useState({} as any)

  // console.log("Params", params.id);

  // console.log("HELLOOOO");

  // fetch blog info and user info
  useEffect(() => {
    axios.get(`https://dev-diaries-9f6n.onrender.com/blog/${params.id}`)
      .then(response => {
        // console.log("Post", response.data);
        setPost(response.data)
      })
      .catch(error => console.log(error))
  }, [])

  //Get user from poster id
  useEffect(() => {
    axios.get(`https://dev-diaries-9f6n.onrender.com/user/${post?.postedBy}`)
      .then(response => {
        // console.log("User", response.data);
        setUser(response.data)
      })
      .catch(error => console.log(error))
  }, [post])

  return (
    <div className='mx-auto max-w-screen-md py-10 flex flex-col gap-y-5'>
      <div className='flex flex-col gap-y-5'>
        <div className='flex flex-wrap justify-start gap-x-2 gap-y-2'>
          {post?.tags?.map((tag: any, index: number) => (
            <p key={index} className='bg-blue-100 text-blue-500 dark:bg-blue-600 dark:text-white font-semibold py-1 px-4 rounded-lg'>
              {tag?.name}
            </p>
          ))}
        </div>

        <h2 className='md:text-3xl text-2xl font-semibold text-black dark:text-white'>
          {post?.headline}
        </h2>

        <div className='flex items-center gap-x-3 md:gap-x-4'>
          <div className='md:w-14 md:h-14 w-10 h-10 bg-black rounded-full relative overflow-hidden'>
            {user?.image ? (
              <Image src={user?.image} alt='' className='absolute top-0 left-0 w-full h-full object-cover' />
            ) : (
              <Image src={landingImage} alt='' className='absolute top-0 left-0 w-full h-full object-cover' />
            )}
          </div>
          <p className='text-sm text-slate-400'>{post?.postedOn?.slice(0, 10)}</p>
        </div>
      </div>
      {
        post?.image ? (
          <Image src={post?.image} alt='' className='rounded-lg' />
        ) : (
          <Image className="rounded-t-lg" src={landingImage} alt="" />
        )
      }
      <p className="text-base leading-relaxed dark:text-gray-300">
        {post?.content}
      </p>
    </div>
  )
}

export default page