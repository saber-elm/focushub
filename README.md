This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# 🧠 FocusHub – Task Management Component

A simple, accessible, and tested TaskList + TaskItem component built with React, TypeScript, and Tailwind CSS. Built as part of a frontend learning journey with a focus on testing, accessibility, and clean component architecture.

\*\*\* This Project is under developing ! \*\*\*

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## 🚀 Features

- ✅ Renders a list of tasks (TaskList)
- ✅ Each task is toggleable and deletable (TaskItem)
- ✅ Fully unit tested with Vitest
- ✅ Snapshot tested
- ✅ Accessibility tested with `jest-axe`
- ✅ Storybook integration

## 🛠️ Tech Stack

- React
- TypeScript
- Tailwind CSS
- Vitest & Testing Library
- Storybook
- jest-axe for a11y testing

## 📦 Components

### TaskList

- Displays list of tasks with checkbox and delete button
- Fully tested (unit, snapshot, accessibility)
- View in Storybook: `npm run storybook`

### TaskItem

- Displays a single task with checkbox and delete button
- Fully tested (unit, snapshot, accessibility)
- View in Storybook: `npm run storybook`

## 🧪 Run Tests

.bash
npm run test

## 🧪 Run Storybook

npm run storybook
Open [http://localhost:6006](http://localhost:6006) with your browser to see the result.

## 👀 Screenshots

Open [public/Storybook screenshot (TaskList,TaskItem).png]

## 📂 Folder Structure

src/
  components/
    tasks/
      task-item.tsx
      task-list.tsx
      __tests__/
      task-item.stories.tsx


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 🙌 Author

Saber Elmbaz
