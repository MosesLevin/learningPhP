import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Link
        href={'/about'}
        className="border-yellow-500 border-4 rounded-3xl hover:border-yellow-700 hover:text-yellow-200 p-2"
      >
        About us
      </Link>
    </div>
  )
}
