import React from 'react'
import PostCard from './PostCard'
import { buttonVariants } from './ui/button'
import Link from 'next/link'
import axios from 'axios'

const PersonalBlogs = () => {
  let user: any = null;
  if (typeof window !== 'undefined') {
    const stringifiedUser = localStorage.getItem('user')
    user = JSON.parse(stringifiedUser ? stringifiedUser : "null")
  }
  const [posts, setPosts] = React.useState([])

  React.useEffect(() => {
    axios.get(`https://dev-diaries-9f6n.onrender.com/blog/user/${user?._id}`)
      .then(response => {
        setPosts(response.data)
        // console.log("Posts", response.data);
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <div className='flex flex-col mx-auto max-w-screen-xl mt-40 md:mt-0 gap-y-5'>
      <h2 className="text-xl text-slate-900 dark:text-white font-semibold ml">Your Posts</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 md:gap-x-8 md:gap-y-8 gap-y-4 justify-items-center '>
        {posts.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </div>
      <div className='self-center'>
        <Link href={'/'} className={buttonVariants({ variant: "outline", })}>View All Posts</Link>
      </div>
    </div>
  )
}

export default PersonalBlogs