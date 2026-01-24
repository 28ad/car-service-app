"use client"

import React from 'react'
import { useState } from 'react';
import styles from './register.module.css';
import Link from 'next/dist/client/link';
import StatusMessage from '../components/StatusMessage';

export default function Login() {

  const [userFormData, setUserFormData] = useState({
    email: '',
    password: '',
  })

  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'error' | 'success' | 'info'>('info');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault(); // stop page reload
    console.log('Form prevented');
  }

  return (

    // main container
    <div className='w-full flex flex-col lg:flex-row lg:justify-center'>

      {/* shape divider for PC users */}
      <div className='bg-primary-accent w-[30%] flex-col items-center justify-evenly hidden lg:flex'>
        <span className='text-white text-6xl font-extrabold'>Logo</span>

        <div className='text-white text-3xl font-extrabold flex flex-col items-center justify-center text-center px-8'>Track. Maintain. Drive.
          <span className='text-white text-lg font-normal '>Sign up to monitor services, repairs, and vehicle data all in one dashboard.</span>
        </div>

      </div>
      <div className={`${styles['shapedividers_com-2874']} hidden lg:block lg:flex-1 lg:h-screen`}></div>

      {/* form section */}
      <div className='flex flex-col items-center justify-center lg:w-1/2 lg:px-20'>

        {/* status message */}
        {
          message &&
          <StatusMessage statusMessage={message} statusType={messageType} />
        }

        {/* form selector */}
        <div className="font-extrabold text-3xl px-10 py-4 text-center cursor-pointer flex justify-center gap-8">
          <Link href={"/register"} className=''>REGISTER</Link>
          <Link href={"/login"} className='border-b-6 border-primary-accent rounded-sm'>LOGIN</Link>
        </div>

        {/* form */}
        <div className='bg-impure-white rounded-sm shadow-md w-8/10 lg:w-6/10 py-4'>

          <form onSubmit={handleSubmit} className='flex flex-col p-4 gap-2 text-sm font-bold'>

            <label htmlFor="email">Email:</label>
            <input type="text" name='email' value={userFormData.email} onChange={(e) => setUserFormData({
              ...userFormData,
              [e.target.name]: e.target.value
            })} className='placeholder:font-normal border-gray-500 border rounded-sm p-2' placeholder='Email' />

            <label htmlFor="password">Password:</label>
            <input type="password" name='password' onChange={(e) => setUserFormData({
              ...userFormData,
              [e.target.name]: e.target.value
            })} className='placeholder:font-normal border-gray-500 border rounded-sm p-2' placeholder='Password' />

            <button className='py-2 px-4 bg-primary-accent text-white rounded-sm hover:bg-primary-accent-hover cursor-pointer'
              onClick={() => console.log(userFormData)}>LOGIN</button>


          </form>

        </div>
      </div>

    </div>
  )
}


