import React from 'react'

type Props = { children: React.ReactNode }
export default function PageContainer({ children }: Props) {
  return <div className="min-w-md max-w-8xl mx-auto px-4 py-6">{children}</div>
}
