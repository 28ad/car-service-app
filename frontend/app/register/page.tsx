"use client"

import React from 'react'
import { useState } from 'react';
import styles from './register.module.css';

export default function Register() {

  const [userFormData, setUserFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    isChecked: false,
  })

  function handleSubmit(e: React.FormEvent) {
  e.preventDefault(); // stop page reload
  console.log('Form prevented');
}

  return (

    // main container
    <div className='w-full flex flex-col xl:flex-row xl:justify-center'>

      {/* shape divider for PC users */}
      <div className={`${styles['shapedividers_com-2897']} hidden xl:block xl:flex-1 xl:h-screen`}></div>

      {/* form section */}
      <div className='flex flex-col items-center justify-center xl:w1/2 '>

        {/* form selector */}
        <div className="font-extrabold text-3xl p-10 text-center cursor-pointer flex justify-center gap-8">
          <span className='border-b-6 border-primary-accent rounded-sm'>REGISTER</span>
          <span className=''>LOGIN</span>
        </div>

        {/* form */}
        <div className='border border-black rounded-sm shadow-md w-8/10 py-4'>

          <form onSubmit={handleSubmit} className='flex flex-col p-4 gap-2 text-sm font-bold'>

            <label htmlFor="username">Username:</label>
            <input type="text" name='username' value={userFormData.username} onChange={(e) => setUserFormData({
              ...userFormData,
              [e.target.name]: e.target.value,
            })} className='placeholder:font-normal border-gray-500 border rounded-sm p-2' placeholder='Username' />

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

            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input type="password" name='confirmPassword' onChange={(e) => setUserFormData({
              ...userFormData,
              [e.target.name]: e.target.value
            })} className='placeholder:font-normal border-gray-500 border rounded-sm p-2' placeholder='Confirm Password' />

            <div className='flex items-start gap-1'>
              <input type="checkbox" id="terms" name="terms" onChange={(e) => setUserFormData({
                ...userFormData,
                isChecked: e.target.checked,
              })} className='size-6 cursor-pointer'/>
              <label htmlFor="terms" className='text-gray-500'>By checking this box, you are agreeing to our terms of service. </label>
            </div>

            <button className='py-2 px-4 bg-primary-accent text-white rounded-sm hover:bg-primary-accent-hover cursor-pointer'
            onClick={() => console.log(userFormData)}>REGISTER</button>


          </form>

        </div>
      </div>

    </div>
  )
}


