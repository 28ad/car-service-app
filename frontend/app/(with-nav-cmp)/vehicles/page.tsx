'use client'

import React from 'react'
import { useState } from 'react';
import AddVehicleModal from '@/app/components/AddVehicleModal';

export default function Vehicles() {
  const [isOpen, setIsOpen] = useState(false)

  return (

    // main container
    <div className='p-10'>

      {/* page header */}
      <div className="font-extrabold text-3xl text-center sm:text-left">
        <span className='border-b-6 border-primary-accent rounded-sm'>MY VEHICLES</span>

        {/* vehicles list grid */}
        <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10'>

          {/* add vehicle card */}

            <AddVehicleModal
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
            />


        </div>
      </div>
    </div>
  )
}
