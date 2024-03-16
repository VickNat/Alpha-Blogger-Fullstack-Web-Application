'use client'
import React from 'react'
import { Input } from "@/components/ui/input"
import BlogsSection from '@/components/BlogsSection'
import BlogsBackgroundImageSection from '@/components/BlogsBackgroundImageSection'

const page = () => {
  const [search, setSearch] = React.useState('')

  console.log("Search", search);

  return (
    <div className="mx-auto max-w-screen-xl md:py-8 py-4 dark:bg-darkPrimary flex flex-col gap-y-5">
      <div className='mx-auto max-w-96 w-10/12'>
        <Input type='search' placeholder='Search...' className='' onChange={(e) => setSearch(e.target.value)} />
      </div>
      <h1 className="text-2xl font-extrabold dark:text-white text-center w-full">
        Blogs
      </h1>
      <BlogsBackgroundImageSection />
      <BlogsSection />
    </div>
  )
}

export default page