'use client'

import { useState } from 'react'
import Modal from './Modal'
import { cars } from '@/app/data/cars-dataset';
import StatusMessage from './StatusMessage';
import { useRouter } from 'next/navigation';


type Props = {
  isOpen: boolean
  onClose: () => void
}

export default function AddVehicleModal({ isOpen, onClose }: Props) {

  const router = useRouter()

  const [form, setForm] = useState({
    make: '',
    model: '',
    year: '',
    logo: '',
  })

  const [make, setMake] = useState('')
  const [model, setModel] = useState('')

  const selectedMake = cars.find(car => car.make === make)

  const [loading, setLoading] = useState(false)

  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'error' | 'success' | 'info'>('info');


  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)


    const res = await fetch('/api/vehicles', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })

    if (!res.ok) {
      setMessage('Failed to add vehicle')
      setMessageType('error')
      setLoading(false)
      console.log('Failed to add vehicle:', await res.text())
      return
    }

    console.log('Vehicle added successfully')
    setLoading(false)
    onClose()
    window.location.reload()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>

      <div className='flex justify-center items-center'>
        {message && <StatusMessage statusType={messageType} statusMessage={message} />}
      </div>

      <h2 className="text-xl font-bold mb-4">Add Vehicle</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3 rounded-md">

        {/* MAKE DROPDOWN */}
        <label className="font-bold">Car Make</label>
        <select
          value={make}
          onChange={(e) => {
            setMake(e.target.value)
            setModel('') // reset model
          }}
          className="border rounded p-2 capitalize"
        >
          <option value="">Select make</option>
          {cars.map(car => (
            <option key={car.make} value={car.make} className='capitalize'>
              {car.make}
            </option>
          ))}
        </select>

        {/* MODEL DROPDOWN */}
        <label className="font-bold">Car Model</label>
        <select
          value={model}
          onChange={(e) => setModel(e.target.value)}
          disabled={!make}
          className={`border rounded p-2 capitalize ${!make ? 'bg-gray-100 cursor-not-allowed' : ''
            }`}
        >
          <option value="">
            {make ? 'Select model' : 'Select make first'}
          </option>

          {selectedMake?.models.map(model => (
            <option key={model} value={model} className='capitalize'>
              {model}
            </option>
          ))}
        </select>

        <label className="font-bold">Year</label>
        <input
          placeholder="Year"
          value={form.year}
          onChange={e => setForm({ ...form, year: e.target.value })}
          required
          className="border rounded p-2 capitalize"
        />

        <button
          onClick={() => {
            setForm({ make: make, model: model, year: form.year, logo: selectedMake?.logo || '' })
            console.log('Form submitted:', { make, model, year: form.year, logo: selectedMake?.logo })

          }}
          disabled={loading}
          className="bg-primary-accent hover:bg-primary-accent-hover text-white py-2 rounded cursor-pointer font-bold"
        >
          {loading ? 'Saving...' : 'Add Vehicle'}
        </button>
      </form>
    </Modal>
  )
}
