import Link from 'next/link'
import React from 'react'

const AboutUs = () => {
  return (
    <div className=" grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="">Hello guys</div>
      <Link
        className="border-yellow-500 border-4 rounded-3xl hover:border-yellow-700 hover:text-yellow-200 p-2"
        href="/"
      >
        Home
      </Link>
    </div>
  )
}

export default AboutUs
