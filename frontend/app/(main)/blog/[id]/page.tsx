import Image from 'next/image'
import React from 'react'
import landingImage from '@/public/landingImage.svg'

const page = () => {
  return (
    <div className='mx-auto max-w-screen-md py-10 flex flex-col gap-y-5'>
      <div className='flex flex-col gap-y-5'>
        <p className='bg-blue-100 text-blue-500 dark:bg-blue-600 dark:text-white font-semibold py-1 px-4 max-w-28 rounded-lg'>
          Technology
        </p>

        <h2 className='md:text-3xl text-2xl font-semibold text-black dark:text-white'>
          The Impact of Technology on the Workplace: How Technology is Changing
        </h2>

        <div className='flex items-center gap-x-3 md:gap-x-4'>
          <div className='md:w-14 md:h-14 w-10 h-10 bg-black rounded-full relative overflow-hidden'>
            <Image src={landingImage} alt='' className='absolute top-0 left-0 w-full h-full object-cover' />
          </div>
          <p className='text-sm text-slate-400'>Lorem, ipsum.</p>
          <p className='text-sm text-slate-400'>Lorem, ipsum.</p>
        </div>
      </div>
      <Image src={landingImage} alt="" className='h-96 w-auto' />
      <p className="text-base leading-relaxed dark:text-gray-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum repellendus ut deleniti praesentium tempora quas a dicta veritatis natus animi. Deserunt, assumenda alias. Repellat eligendi repudiandae voluptate culpa dolore repellendus, eius quasi sequi quidem dolorem earum debitis, vero magnam ipsa illum nulla obcaecati voluptatibus? Nulla eius vitae illo architecto dolore libero ea eaque, ab fuga corporis dolorem vel modi ad suscipit ipsa et similique? Quis, doloremque asperiores quas nam, optio et reprehenderit nisi autem ipsum enim, earum tempora. Optio, debitis.
      </p>
    </div>
  )
}

export default page