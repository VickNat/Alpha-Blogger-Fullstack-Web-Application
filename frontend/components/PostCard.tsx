import Image from 'next/image'
import React, { useEffect } from 'react'
import cardImage from '@/public/SignUpPic.svg'
import landingImage from '@/public/landingImage.svg'
import axios from 'axios'
import Link from 'next/link'

const PostCard = ({ post }: any) => {
  const [user, setUser] = React.useState({} as any)

  // console.log("Post", post);

  //Get user from poster id
  useEffect(() => {
    axios.get(`https://dev-diaries-9f6n.onrender.com/user/${post?.postedBy}`)
      .then(response => {
        // console.log("User", response.data);
        setUser(response.data)
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <Link href={`/blog/${post?._id}`} className="hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer p-3 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      {
        post?.image ? (
          <Image src={post?.image} alt='' className='rounded-lg' />
        ) : (
          <Image className="rounded-t-lg" src={cardImage} alt="" />
        )
      }
      <div className="my-4 flex flex-col gap-y-2">
        <div className='flex flex-wrap justify-center gap-x-2 gap-y-2'>
          {post?.tags.map((tag: any, index: number) => (
            <p key={index} className='bg-blue-100 text-blue-500 dark:bg-gray-700 dark:text-gray-300 font-semibold py-1 px-4 rounded-lg'>
              {tag?.name}
            </p>
          ))}
        </div>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {post?.headline}
        </h5>
        <div className='flex items-center gap-x-3 md:gap-x-4'>
          <div className='md:w-14 md:h-14 w-12 h-12 bg-black rounded-full relative overflow-hidden'>
            {user?.image ? (
              <Image src={user?.image} alt='' className='absolute top-0 left-0 w-full h-full object-cover' />
            ) : (
              <Image src={landingImage} alt='' className='absolute top-0 left-0 w-full h-full object-cover' />
            )}
          </div>
          <p className='text-sm text-slate-400'>{post?.postedOn.slice(0, 10)}</p>
        </div>
      </div>
    </Link>
  )
}

export default PostCard