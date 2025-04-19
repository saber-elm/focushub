'use client'

import Layout from '@/components/layout/layout'
import TaskForm from '@/components/tasks/task-form'
import TaskList from '@/components/tasks/task-list'
import PageContainer from '@/components/ui/page-container'
import { Task } from '@/types/task'
import { useState } from 'react'

const taskItems = [
  {
    id: '123',
    title: 'Create new task',
    completed: false,
  },
  {
    id: '234',
    title: 'Build UI',
    completed: false,
  },
]

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>(taskItems)

  const handleToggle = (id: string) => {
    setTasks((prev) => {
      return prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    })
  }

  const handleDelete = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }

  const handleAdd = (title: string) => {
    const newTask: Task = {
      id: new Date().toISOString(),
      title: title,
      completed: false,
    }
    setTasks((prev) => [...prev, newTask])
  }
  return (
    <Layout>
      <PageContainer>
        <h1 className="text-2xl font-semibold">Your Tasks</h1>
        <p className="text-gray-600">This is your tasks lists:</p>
        <TaskList
          tasks={tasks}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
        <TaskForm onAdd={handleAdd} />
      </PageContainer>
    </Layout>
  )
}
