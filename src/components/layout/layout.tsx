// layout.tsx

import Link from 'next/link'
import React from 'react'

// define a functional component called Layout

// export it so other parts of the app can use it

// for now, it returns a simple div with the text "Layout works"

type Props = { children: React.ReactNode }
export default function Layout({ children }: Props) {
  return (
    <div className="min-h-screen">
      <header className="px-4 py-3 font-bold text-4xl border-b border-gray-300">
        <div className="flex justify-center md:justify-between items-center">
          <div>FocusHub</div>
          <nav className="space-x-4 hidden md:block">
            <Link
              href="/"
              className="text-gray-500 hover:text-black hover:underline"
            >
              Home
            </Link>
            <Link
              href="/tasks"
              className="text-gray-500 hover:text-black hover:underline"
            >
              Tasks
            </Link>
            <Link
              href="/settings"
              className="text-gray-500 hover:text-black hover:underline"
            >
              Settings
            </Link>
          </nav>
        </div>
      </header>
      <main className="p-4 flex justify-center">{children}</main>
    </div>
  )
}
