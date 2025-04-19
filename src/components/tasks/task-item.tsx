// Show each individual task
'use client'
import type { Task } from '@/types/task'
import { useState } from 'react'

type Props = {
  task: Task
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

export default function TaskItem({ task, onToggle, onDelete }: Props) {
  const [checked, setChecked] = useState(false)

  return (
    <div className="flex justify-between border px-4 py-2 rounded">
      <span
        className={
          task.completed
            ? 'line-through text-gray-400'
            : 'max-w-xl wrap-break-word min-w-1'
        }
      >
        {task.title}
      </span>
      <div className="flex items-center gap-4">
        <div className="space-x-1">
          <input
            type="checkbox"
            name="status"
            id={`task-${task.id}`}
            className="text-blue-600 hover:underline"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
            data-testid="task-toggle"
          />
          <label htmlFor={`task-${task.id}`} className="hover:underline">
            {task.completed ? 'Completed' : 'inComplete'}
          </label>
        </div>

        <button
          className="text-red-500 hover:underline"
          onClick={() => onDelete(task.id)}
        >
          ❌ Delete
        </button>
      </div>
    </div>
  )
}
