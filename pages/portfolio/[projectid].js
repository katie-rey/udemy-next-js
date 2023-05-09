import { useRouter } from 'next/router'
//dynamic paths

import React from 'react'

// if typing in the url localhost:3000/something

function PortfolioProjectPage() {
  const router = useRouter()

  console.log(router.pathname) //portfolio/[projectid]
  console.log(router.query) //{projectid: 'something'}

  // send a request to a backend server
  // fetch data with an id or router.query.projectid

  return <div>PortfolioProjectPage</div>
}

export default PortfolioProjectPage
