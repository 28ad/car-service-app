'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { MdHome } from "react-icons/md";
import { AiFillTool } from "react-icons/ai";
import { FaCarAlt } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";

export default function Navbar() {

  // variable to check hamburger menu state
  const [isOpen, setIsOpen] = useState(false);

  // function to toggle menu
  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (

    // Siderbar wrapper
    <nav className={`w-8 sm:w-48 min-h-screen flex-col justify-center bg-white shadow-md z-10 fixed duration-300 ease-in ${isOpen ? 'w-full' : 'w-8'}`}>

      {!isOpen &&
        <div onClick={toggleMenu} className='cursor-pointer sm:hidden'>
          <IoMenu size={32} color='#1F2937' />
        </div>
      }

      {isOpen &&
        <div onClick={toggleMenu} className='cursor-pointer sm:hidden'>
          <IoClose size={32} color='#1F2937' />
        </div>
      }

      {isOpen ? (<div>

      </div>) : (<div>

      </div>)}

      {/* head */}
      <div className={`flex-row justify-center items-center w-full h-20 cursor-pointer  ${isOpen ? 'flex' : 'hidden'} sm:flex`}>

        {/* logo */}
        <div className='text-2xl text-black font-extrabold'><Link href="/">Logo</Link></div>
      </div>

        {/* links */}
        <div className={`flex-col items-center text-black text-md font-bold cursor-pointer mt-10 w-full ${isOpen ? 'flex' : 'hidden'} sm:flex`}>

          <div className='flex flex-col items-center w-full'>
            <Link onClick={() => setIsOpen(false)} href="/dashboard" className='py-4 px-2 hover:bg-zinc-200 w-full text-left flex items-center justify-center sm:justify-start'><MdHome size={18} className='mx-2'/>Dashboard</Link>
            <Link onClick={() => setIsOpen(false)} href="/maintenance" className='py-4 px-2 hover:bg-zinc-200 w-full text-left flex items-center justify-center sm:justify-start'><AiFillTool size={18} className='mx-2'/>Maintenance</Link>
            <Link onClick={() => setIsOpen(false)} href="/vehicles" className='py-4 px-2 hover:bg-zinc-200 w-full text-left flex items-center justify-center sm:justify-start'><FaCarAlt size={18} className='mx-2' />Vehicles</Link>
            <Link onClick={() => setIsOpen(false)} href="/account" className='py-4 px-2 hover:bg-zinc-200 w-full text-left flex items-center justify-center sm:justify-start'><MdAccountCircle size={18} className='mx-2' />Account</Link>
          </div>
        </div>

        {/* logout */}
        <div className={`absolute bottom-0 flex-row justify-center items-center w-full h-20 cursor-pointer hover:bg-zinc-200 ${isOpen ? 'flex' : 'hidden'} sm:flex`}>

          <div className='text-2xl text-black font-bold'>Logout</div>

        </div>
        
    </nav>
  )
}
