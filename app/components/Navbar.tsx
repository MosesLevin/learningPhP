import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Logo from '/public/NellyAA.jpeg'

export default function Navbar() {
  return (
    <nav>
      <Image
        src={Logo}
        alt="Dojo Helpdesk logo"
        width={70}
        placeholder="blur"
        quality={100}
        className="rounded-full"
      />
      <Link href="/">Home</Link>
      <Link href="/about">About us</Link>
      <Link href="/activities">Activities</Link>
    </nav>
  )
}
