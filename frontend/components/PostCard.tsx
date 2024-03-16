import Image from 'next/image'
import React from 'react'
import cardImage from '@/public/SignUpPic.svg'
import landingImage from '@/public/landingImage.svg'

const PostCard = () => {
  return (
    <div className="p-3 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Image className="rounded-t-lg" src={cardImage} alt="" />
      <div className="my-4 flex flex-col gap-y-2">
        <div className='flex flex-wrap justify-center gap-x-2 gap-y-2'>
          <p className='bg-blue-100 text-blue-500 dark:bg-gray-700 dark:text-gray-300 font-semibold py-1 px-4 max-w-28 rounded-lg'>
            Technology
          </p>
          <p className='bg-blue-100 text-blue-500 dark:bg-gray-700 dark:text-gray-300 font-semibold py-1 px-4 max-w-28 rounded-lg'>
            Technology
          </p>
          <p className='bg-blue-100 text-blue-500 dark:bg-gray-700 dark:text-gray-300 font-semibold py-1 px-4 max-w-28 rounded-lg'>
            Technology
          </p>
          <p className='bg-blue-100 text-blue-500 dark:bg-gray-700 dark:text-gray-300 font-semibold py-1 px-4 max-w-28 rounded-lg'>
            Technology
          </p>
          <p className='bg-blue-100 text-blue-500 dark:bg-gray-700 dark:text-gray-300 font-semibold py-1 px-4 max-w-28 rounded-lg'>
            Technology
          </p>
        </div>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        The Impact of Technology on the Workplace: How Technology is Changing
        </h5>
        <div className='flex items-center gap-x-3 md:gap-x-4'>
          <div className='md:w-14 md:h-14 w-12 h-12 bg-black rounded-full relative overflow-hidden'>
            <Image src={landingImage} alt='' className='absolute top-0 left-0 w-full h-full object-cover' />
          </div>
          <p className='text-sm text-slate-400'>Lorem, ipsum.</p>
          <p className='text-sm text-slate-400'>Lorem, ipsum.</p>
        </div>
      </div>
    </div>
  )
}

export default PostCard