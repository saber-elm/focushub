import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Task } from '@/types/task'
import TaskItem from '../task-item'
import { axe, toHaveNoViolations } from 'jest-axe'

const mockTask: Task = {
  id: '1',
  title: 'Test Task',
  completed: false,
}

describe('TaskItem', () => {
  it('renders task title', () => {
    render(<TaskItem task={mockTask} onToggle={() => {}} onDelete={() => {}} />)
    expect(screen.getByText(/Test Task/i)).toBeInTheDocument()
  })

  it('Calls onToggle when toggle is clicked', () => {
    const onToggle = vi.fn()
    render(<TaskItem task={mockTask} onToggle={onToggle} onDelete={() => {}} />)

    const toggleInput = screen.getByTestId('task-toggle')
    fireEvent.click(toggleInput)

    expect(onToggle).toHaveBeenCalled()
  })

  it('Calls onDelete when delete button is clicked', () => {
    const onDelete = vi.fn()
    const { getByText } = render(
      <TaskItem task={mockTask} onToggle={() => {}} onDelete={onDelete} />
    )

    const deleteButton = getByText(/❌ Delete/i)
    deleteButton.click()

    expect(onDelete).toHaveBeenCalledWith(mockTask.id)
  })

  it('displays completed task with line-through style', () => {
    const completedTask = { ...mockTask, completed: true }

    const { getByText } = render(
      <TaskItem task={completedTask} onToggle={() => {}} onDelete={() => {}} />
    )
    const taskText = getByText(/Test Task/i)
    expect(taskText).toHaveClass('line-through')
  })

  it('renders completed task correctly', () => {
    const completedTask: Task = {
      id: '2',
      title: 'Complete Task',
      completed: true,
    }

    const { getByText, getByTestId } = render(
      <TaskItem task={completedTask} onToggle={() => {}} onDelete={() => {}} />
    )

    const title = getByText(/Complete Task/i)
    const checkbox = getByTestId('task-toggle')
    const label = getByText(/Completed/i)

    expect(title).toHaveClass('line-through')
    expect(checkbox).toBeChecked()
    expect(label).toHaveTextContent('Completed')
  })

  expect.extend(toHaveNoViolations)
  it('should have no accessibility violations', async () => {
    const { container } = render(
      <TaskItem task={mockTask} onToggle={() => {}} onDelete={() => {}} />
    )
    const result = await axe(container)
    expect(result).toHaveNoViolations()
  })

  it('matches the snapshot', () => {
    const { asFragment } = render(
      <TaskItem task={mockTask} onToggle={() => {}} onDelete={() => {}} />
    )
    expect(asFragment()).toMatchSnapshot()
  })
})