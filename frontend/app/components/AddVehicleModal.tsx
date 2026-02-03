'use client'

import { useState } from 'react'
import Modal from './Modal'

type Props = {
  isOpen: boolean
  onClose: () => void
}

export default function AddVehicleModal({ isOpen, onClose }: Props) {
  const [form, setForm] = useState({
    make: '',
    model: '',
    year: '',
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const res = await fetch('/api/vehicles', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })

    if (!res.ok) {
      setError('Failed to add vehicle')
      setLoading(false)
      return
    }

    setLoading(false)
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-xl font-bold mb-4">Add Vehicle</h2>

      {error && <p className="text-red-500">{error}</p>}

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          placeholder="Make"
          value={form.make}
          onChange={e => setForm({ ...form, make: e.target.value })}
          required
        />

        <input
          placeholder="Model"
          value={form.model}
          onChange={e => setForm({ ...form, model: e.target.value })}
          required
        />

        <input
          placeholder="Year"
          value={form.year}
          onChange={e => setForm({ ...form, year: e.target.value })}
          required
        />

        <button
          disabled={loading}
          className="bg-primary-accent text-white py-2 rounded"
        >
          {loading ? 'Saving...' : 'Add Vehicle'}
        </button>
      </form>
    </Modal>
  )
}
