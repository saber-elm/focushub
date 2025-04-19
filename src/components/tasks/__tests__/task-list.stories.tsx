import { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import TaskList from '../task-list'

const meta: Meta<typeof TaskList> = {
  title: 'Tasks/TaskList',
  component: TaskList,
  args: {
    tasks: [
      {
        id: '1',
        title: 'Do something great',
        completed: false,
      },
      {
        id: '2',
        title: 'Do another thing great',
        completed: true,
      },
    ],
    onToggle: action('Toggle Clicked!'),
    onDelete: action('Delete Dlicked!'),
  },
  argTypes: {
    tasks: [
      {
        control: 'object',
      },
    ],
    onToggle: { action: 'onToggle' },
    onDelete: { action: 'onDelete' },
  },
}

export default meta

type Story = StoryObj<typeof TaskList>

export const Default: Story = {}

export const Completed: Story = {
  args: {
    tasks: [
      {
        id: '3',
        title: 'Already Done.',
        completed: true,
      },
    ],
  },
}
