'use client'

import React from 'react'
import { useState, useEffect } from 'react';
import AddVehicleModal from '@/components/AddVehicleModal';
import { supabase } from '@/app/supabase/supabaseClient';

export default function VehiclesClient({ userId }: { userId: string }) {

    const [isOpen, setIsOpen] = useState(false)
    const [vehicles, setVehicles] = useState<any[]>([])

    async function fetchUserVehicles() {

        const { data, error } = await supabase
            .from('vehicles')
            .select()
            .eq('by_user', userId)

        if (error) {
            console.error('Error fetching vehicles:', error)
            return []
        }

        console.log('Fetched vehicles:', data)
        setVehicles(data)

    }

    useEffect(() => {
        console.log('Fetching vehicles for user:', userId)
        fetchUserVehicles()
    }, [])


    return (

        // main container
        <div className='p-10'>

            {/* page header */}
            <div className="font-extrabold text-3xl text-center sm:text-left">
                <span className='border-b-6 border-primary-accent rounded-sm'>MY VEHICLES</span>

                {/* vehicles list grid */}
                <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10'>

                    {vehicles.map(vehicle => (
                        <div key={vehicle.id} className='bg-white min-w-64 p-8 py-10 rounded-md shadow-lg flex justify-center items-center flex-col cursor-pointer hover:scale-105 duration-200 ease-in-out'>

                            <img
                                src={vehicle.logo}
                                alt={vehicle.make}
                                className="h-20 mb-2"
                            />
                            <span className='font-bold text-2xl capitalize'>{vehicle.vehicle_make}</span>
                            <span className='font-bold text-2xl capitalize'>{vehicle.vehicle_model}</span>
                            <span>Year: {vehicle.vehicle_year}</span>
                        </div>
                    ))}

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
