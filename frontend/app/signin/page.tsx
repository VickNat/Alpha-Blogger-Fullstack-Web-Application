"use client"

import React from 'react'
import signInImage from '@/public/SignUpPic.svg'
import { useFormik } from 'formik'
import Link from 'next/link'
import '../globals.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import axios from 'axios'

const SignIn = () => {
  const router = useRouter()

  if (typeof window !== 'undefined' && window.localStorage.getItem('user')) {
    router.push('/')
  }
  const BASE_URL = 'https://dev-diaries-9f6n.onrender.com'

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    }
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log("Form submitted", formik.values);
  
    // send request to server
    try {
      const response = await axios.post(`${BASE_URL}/user/login`, {
        email: formik.values.email,
        password: formik.values.password
      });
  
      console.log('response', response);
  
      if (response.status === 200 || response.status === 201) {
        localStorage.setItem('user', JSON.stringify(response.data.user));
        console.log('user', localStorage.getItem('user'));
        
        router.push('/');
      }
  
    } catch (error) {
      console.log('error', error);
      alert('Error signing in');
    }
  }

  return (
    <div className='flex lg:flex-row flex-col'>
      <div className='h-screen w-1/2 overflow-hidden lg:block hidden'>
        <Image src={signInImage} alt='Sign In' className='w-full h-screen object-cover' />
      </div>
      <div className='flex flex-col h-screen justify-center items-center lg:items-start lg:justify-start lg:pl-32 lg:pt-24 lg:w-1/2 gap-y-6'>
        <div>
          <h1 className='text-3xl'>Sign in</h1>
          <p>Don&apos;t have an Account? <Link href="/signup" className='underline text-slate-500 hover:text-slate-900' >Login</Link></p>
        </div>
        <form onSubmit={(e) => handleSubmit(e)} className='w-full flex flex-col gap-y-4 items-center lg:items-start'>
          <div className='flex flex-col w-8/12 gap-y-1'>
            <label htmlFor="email" className='text-slate-600'>Email:</label>
            <input
              id="email"
              name="email"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="border border-gray-400 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className='flex flex-col w-8/12 gap-y-1'>
            <label htmlFor="password" className='text-slate-600'>Password:</label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              className="border border-gray-400 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className='flex flex-col w-8/12 gap-y-1'>
            <button
              type="submit"
              className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none  font-medium rounded text-sm px-5 py-2.5 text-center"
            >
              Sign in
            </button>
            <p>Already have an Account? <Link href="/signup" className='underline text-slate-500 hover:text-slate-900' >Login</Link></p>

          </div>
        </form>
      </div>
    </div>
  )
}

export default SignIn