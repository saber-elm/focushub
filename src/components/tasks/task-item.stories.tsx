import { Meta, StoryObj } from '@storybook/react'
import TaskItem from './task-item'
import { action } from '@storybook/addon-actions'

const meta: Meta<typeof TaskItem> = {
  title: 'Tasks/TaskItem',
  component: TaskItem,
  args: {
    task: {
      id: '1',
      title: 'Do something great',
      completed: false,
    },
    onToggle: action('Toggle Clicked!'),
    onDelete: action('Delete Dlicked!'),
  },
  argTypes: {
    task: {
      control: 'object',
    },
    onToggle: { action: 'onToggle' },
    onDelete: { action: 'onDelete' },
  },
}

export default meta

type Story = StoryObj<typeof TaskItem>

export const Default: Story = {}

export const Completed: Story = {
  args: {
    task: {
      id: '2',
      title: 'Already Done.',
      completed: true,
    },
  },
}
