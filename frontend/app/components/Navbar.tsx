import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (

    // Siderbar wrapper
    <nav className='w-48 min-h-screen flex-col justify-center bg-white shadow-md z-10 fixed'>

      {/* head */}
      <div className='flex flex-row justify-center items-center w-full h-20 cursor-pointer'>

        {/* logo */}
        <div className='text-2xl text-black font-extrabold'><Link href="/">Logo</Link></div>
      </div>

      {/* links */}
        <div className='flex flex-col items-center text-black text-md font-bold cursor-pointer mt-10 w-full'>
            <Link href="/dashboard" className='py-4 px-2 hover:bg-zinc-200 w-full text-left'><span className='py-4 px-2'>O</span>Dashboard</Link>
            <Link href="/maintenance" className='py-4 px-2 hover:bg-zinc-200 w-full text-left'><span className='py-4 px-2'>O</span>Maintenance</Link>
            <Link href="/vehicles" className='py-4 px-2 hover:bg-zinc-200 w-full text-left'><span className='py-4 px-2'>O</span>Vehicles</Link>
            <Link href="/account" className='py-4 px-2 hover:bg-zinc-200 w-full text-left'><span className='py-4 px-2'>O</span>Account</Link>
        </div>

        {/* logout */}
        <div className='absolute bottom-0 flex flex-row justify-center items-center w-full h-20 cursor-pointer hover:bg-zinc-200'>

          <div className='text-2xl text-black font-bold'>Logout</div>

        </div>
    </nav>
  )
}
