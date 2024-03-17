'use client'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useFormik } from 'formik'
import { Button } from "@/components/ui/button"
import React from 'react'
import axios from 'axios'

const page = () => {
  const stringifiedUser = localStorage.getItem('user')
  const user = JSON.parse(stringifiedUser ? stringifiedUser : "{}")


  const formik = useFormik({
    initialValues: {
      headline: 'Hi there!',
      content: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    }
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted", formik.values);

    // send request to server
    try {
      const response = await axios.post(`https://dev-diaries-9f6n.onrender.com/blog`, {
        headline: formik.values.headline,
        content: formik.values.content,
        // postedBy: user?.
      })
      console.log("Response", response);

      if(response.status == 200 || response.status == 201) {
        console.log("Blog created successfully");
        
      }
      
    } catch (error) {
      console.log("Error", error);
    }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className='mx-auto max-w-screen-sm flex flex-col gap-y-5 my-10'>
      <div className="flex flex-col items-center gap-4">
        <Label htmlFor="headline" className="text-right self-start">
          Headline
        </Label>
        <Input
          onChange={formik.handleChange}
          defaultValue={formik.values.headline}
          id="headline"
          className="col-span-3 dark:bg-slate-700 focus:ring-0"
        />
      </div>
      <div className="flex flex-col items-center gap-4">
        <Label htmlFor="content" className="text-right self-start">
          Content
        </Label>
        <Textarea
          onChange={formik.handleChange}
          defaultValue={formik.values.content}
          id="Content"
          className="col-span-3 dark:bg-slate-700 focus:ring-0"
        />
      </div>
      <Button type="submit" className="text-white bg-blue-700 hover:bg-blue-800  focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none w-3/12 min-w-12 self-center"
      >Save changes</Button>
    </form>
  )
}

export default page