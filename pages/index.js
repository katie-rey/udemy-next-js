import React from 'react'
import Link from 'next/Link'

function HomePage() {
  return (
    <div>
      <h1>Home Page </h1>
      <ul>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/clients">Clients</Link>
          {/* can add replace attribute to Link */}
        </li>
      </ul>
    </div>
  )
}

export default HomePage
