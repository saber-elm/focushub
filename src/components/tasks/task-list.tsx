// shows all tasks

import React from 'react'
import { Task } from '@/types/task'
import TaskItem from './task-item'

type Props = {
  tasks: Task[]
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

export default function TaskList({ tasks, onToggle, onDelete }: Props) {
  if (tasks.length === 0) {
    return <p className="text-gray-500">No tasks yet.</p>
  }

  return (
    <ul className="space-y-2 mt-4">
      {tasks.map((task) => (
        <li key={task.id}>
          <TaskItem task={task} onToggle={onToggle} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  )
}
