import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { axe, toHaveNoViolations } from 'jest-axe'
import TaskList from '../task-list'

const mockTasks = [
  {
    id: '1',
    title: 'Task One',
    completed: false,
  },
  {
    id: '2',
    title: 'Task Two',
    completed: true,
  },
]

describe('TaskList', () => {
  it('renders a list of TaskItem components', () => {
    render(
      <TaskList tasks={mockTasks} onToggle={() => {}} onDelete={() => {}} />
    )
    expect(screen.getByText('Task One')).toBeInTheDocument()
    expect(screen.getByText('Task Two')).toBeInTheDocument()
  })

  it('displays a message when there are no tasks', () => {
    render(<TaskList tasks={[]} onToggle={() => {}} onDelete={() => {}} />)
    expect(screen.getByText('No tasks yet.')).toBeInTheDocument()
  })
})

describe('TaskList snapshots', () => {
  it('matches snapshot with tasks', () => {
    const { asFragment } = render(
      <TaskList tasks={mockTasks} onToggle={() => {}} onDelete={() => {}} />
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('matches snapshot with no tasks', () => {
    const { asFragment } = render(
      <TaskList tasks={[]} onToggle={() => {}} onDelete={() => {}} />
    )
    expect(asFragment()).toMatchSnapshot()
  })
})

expect.extend(toHaveNoViolations)

const accessibleMockTasks = [
  { id: '1', title: 'Accessible task', completed: false },
]

describe('TaskList Accessibility ', () => {
  it('has no accessibility violation', async () => {
    const { container } = render(
      <TaskList
        tasks={accessibleMockTasks}
        onToggle={() => {}}
        onDelete={() => {}}
      />
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
