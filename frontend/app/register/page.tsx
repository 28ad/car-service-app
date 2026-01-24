"use client"

import React from 'react'
import { useState } from 'react';
import styles from './register.module.css';
import Link from 'next/dist/client/link';
import {supabase} from '../supabase/supabaseClient';
import StatusMessage from '../components/StatusMessage';

export default function Register() {

  const [userFormData, setUserFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    isChecked: false,
  })

  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'error' | 'success' | 'info'>('info');

  function handleSubmit(e: React.FormEvent) {
  e.preventDefault(); // stop page reload
  console.log('Form prevented');
}

// Simple form validation function
  function validateForm() {
    if (userFormData.username.trim() === '' || userFormData.email.trim() === '' || userFormData.password.trim() === '' || userFormData.confirmPassword.trim() === '') {
      setMessage("All fields must be completed !");
      setMessageType("error");
      return false;
    }
    else if (!userFormData.isChecked) {
      setMessage("You must agree to the terms of service !");
      setMessageType("error");
      return false;
    }
    else if (userFormData.password !== userFormData.confirmPassword) {
      setMessage("Passwords do not match !");
      setMessageType("error");
      return false;
    }
    else if (userFormData.password.length < 6){
      setMessage("Password must be at least 6 characters long !");
      setMessageType("error");
      return false;
    }

    console.log('Form validated');

    return true;
  }

  // Function to register user with Supabase
  async function registerUser() {

    // Reset status message
    setMessage('');
    setMessageType('info');


    if (!validateForm()) {
      return;
    } else {
      console.log(userFormData)

    const { data, error } = await supabase.auth.signUp({
      email: userFormData.email,
      password: userFormData.password,
    });

    if (error) {
      <StatusMessage statusMessage={`Registration failed: ${error.message}`} statusType="error" />;
      return;
    }

    if (data) {
      
      const {error: profileError} = await supabase.from('users').insert([
        {
          user_id: data.user?.id,
          username: userFormData.username,
          email: userFormData.email,
        }
      ]); 

      if (profileError) {
        setMessage(`Profile creation failed: ${profileError.message}`);
        setMessageType("error");
        return;
      }
    }
    }

    
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
          <Link href={"/register"} className='border-b-6 border-primary-accent rounded-sm'>REGISTER</Link>
          <Link href={"/login"} className=''>LOGIN</Link>
        </div>

        {/* form */}
        <div className='bg-impure-white rounded-sm shadow-lg w-8/10 py-4'>


          <form onSubmit={handleSubmit} className='flex flex-col p-4 gap-4 lg:gap-2 text-sm font-bold'>

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
            onClick={registerUser}>REGISTER</button>


          </form>

        </div>
      </div>

    </div>
  )
}



