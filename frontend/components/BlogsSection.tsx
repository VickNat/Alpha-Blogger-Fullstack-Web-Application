import React from 'react'
import PostCard from './PostCard'
import Link from 'next/link'
import { buttonVariants } from './ui/button'

const BlogsSection = () => {
  return (
    <div className='flex flex-col mx-auto max-w-screen-xl mt-40 md:mt-0 gap-y-5'>
      <div className='grid grid-cols-1 md:grid-cols-3 md:gap-x-8 md:gap-y-8 gap-y-4 justify-items-center'>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
      <div className='self-center'>
        <Link href={'/'} className={buttonVariants({ variant: "outline", })}>Load more...</Link>
      </div>
    </div>
  )
}

export default BlogsSection