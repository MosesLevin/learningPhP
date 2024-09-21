import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Logo from '/public/NellyAA.jpeg'

export default function Navbar() {
  return (
    <nav
      className="flex pb-4
    border-b-2 border-red-600
    items-center gap-5 
    my-10 mx-auto 
    max-w-5xl"
    >
      <Image
        src={Logo}
        alt="Dojo Helpdesk logo"
        width={70}
        placeholder="blur"
        quality={100}
        className="rounded-full"
      />
      <Link href="/" className="text-gray-500 hover:text-black">
        Home
      </Link>
      <Link href="/about" className="text-gray-500 hover:text-black">
        About us
      </Link>
      <Link href="/activities" className="text-gray-500 hover:text-black">
        Activities
      </Link>
    </nav>
  )
}
