// form to add a new task
'use client'

import { useState } from 'react'

type Props = {
  onAdd: (title: string) => void
}

export default function TaskForm({ onAdd }: Props) {
  const [title, setTitle] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim()) return

    onAdd(title.trim())
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-2 my-4 ">
      <input
        type="text"
        value={title}
        placeholder="Add new task ..."
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1 border px-4 py-2 rounded"
      />
      <button
        type="submit"
        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
      >
        Add
      </button>
    </form>
  )
}
