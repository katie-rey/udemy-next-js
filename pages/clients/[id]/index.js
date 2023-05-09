import React from 'react'
import { useRouter } from 'next/router'

function ClientsProjectPage() {
  const router = useRouter()

  console.log(router.query)

  function loadProjectHandler(e) {
    router.push({
      pathname: '/clients/[id]/[clientprojectid]}',
      query: {
        // id: {client.id}.
        // clientprojectid: {project.id},
        id: 'max',
        clientprojectid: 'projecta',
      },
    })
  }

  return (
    <div>
      <h1>All projects of a given client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  )
}

export default ClientsProjectPage
