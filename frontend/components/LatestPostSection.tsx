import React from 'react'
import PostCard from './PostCard'
import axios from "axios"
import { buttonVariants } from "@/components/ui/button"
import Link from 'next/link'


const LatestPostSection = () => {
  const [posts, setPosts] = React.useState([])

  React.useEffect(() => {
    axios.get('')
      .then(response => {
        setPosts(response.data)
        console.log("Posts", response.data);

      })
      .catch(error => console.log(error))
  }, [])


  return (
    <div className='flex flex-col mx-auto max-w-screen-xl mt-40 md:mt-0 gap-y-5'>
      <h2 className="text-xl text-slate-900 dark:text-white font-semibold ml">Latest Post</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 md:gap-x-8 md:gap-y-8 gap-y-4 justify-items-center '>
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
        <Link href={'/'} className={buttonVariants({ variant: "outline", })}>View All Posts</Link>
      </div>
    </div>
  )
}

export default LatestPostSection