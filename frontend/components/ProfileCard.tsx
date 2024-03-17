import Image from 'next/image'
import React, { useState } from 'react'
import landingImage from '@/public/landingImage.svg'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useFormik } from 'formik'
import axios from 'axios'

const ProfileCard = () => {
  const stringifiedUser = localStorage.getItem('user')
  const user = JSON.parse(stringifiedUser ? stringifiedUser : "{}")
  // console.log("User", user);

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      bio: ""
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    }
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log("Form submitted", formik.values);

    // send request to server
    try {
      const body = {
        name: formik.values.name ? formik.values.name : user?.user?.name,
        email: formik.values.email ? formik.values.email : user?.user?.email,
        bio: formik.values.bio ? formik.values.bio : user?.user?.bio
      }

      console.log("Body", body, user?._id)
      const response = await axios.patch(`https://dev-diaries-9f6n.onrender.com/user/${user?._id}`, body)
      console.log("Response", response);

      if(response.status == 200 || response.status == 201) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      
    } catch (error) {
      console.log("Error", error);
    }
  }


  return (
    <div className="mx-auto w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 py-6 gap-y-6">
      <div className="flex flex-col items-center gap-y-3">
        <div className='w-28 h-28 bg-black rounded-full shadow-lg relative overflow-hidden'>
          {user?.user?.profileImage ? <Image src={user?.image} alt="Profile Image" className="absolute top-0 left-0 w-full h-full object-cover"
          /> : <Image
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={landingImage}
            alt="Bonnie image"
          />}
        </div>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {user?.user?.name}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {user?.user?.email}
        </span>
        <p className='text-md text-gray-600 text-center mx-auto max-w-72 dark:text-gray-200'>
          {user?.user?.bio ? user?.user?.bio : "This user has not added a bio yet."}
        </p>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className='dark:bg-inherit dark:border dark:border-gray-600 dark:hover:bg-slate-700'>Edit Profile</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
            <form onSubmit={(e) => handleSubmit(e)}>
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you're done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    onChange={formik.handleChange}
                    defaultValue={user?.user?.name}
                    id="name"
                    className="col-span-3 dark:bg-slate-700 focus:ring-0"
                  />

                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="email" className="text-right">
                    Email
                  </Label>
                  <Input
                    id="email"
                    onChange={formik.handleChange}
                    defaultValue={user?.user?.email}
                    className="col-span-3 dark:bg-slate-700 focus:ring-0"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="bio" className="text-right">
                    Your bio
                  </Label>
                  <Textarea placeholder="Type your message here." id='bio' className="col-span-3 dark:bg-slate-700 focus:ring-0" onChange={formik.handleChange}
                    defaultValue={user?.user?.bio} />
                </div>
              </div>


              <DialogFooter>
                <Button type="submit" className="text-white bg-blue-700 hover:bg-blue-800  focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none"
                >Save changes</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

export default ProfileCard