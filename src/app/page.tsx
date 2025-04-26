import Link from 'next/link'

// app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center text-2xl">
      Welcome to
      <p>&nbsp;</p>
      <Link href={'/tasks'}>FocusHub</Link>
      <p>&nbsp;</p>
      🚀
    </main>
  )
}
