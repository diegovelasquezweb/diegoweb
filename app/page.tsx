"use client";

import Link from 'next/link'
import SpaceBackground from './ui/background'

export default function Home() {
  return (
    <div>
      <h1>DiegoWeb</h1>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <SpaceBackground />
    </div>
  )
}