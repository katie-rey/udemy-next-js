import React from 'react'
import Link from 'next/Link'

function ClientsPage() {
  // example of data from server

  const clients = [
    { id: 'max', name: 'Maximus' },
    { id: 'katie', name: 'Katie' },
  ]

  return (
    <div>
      <h1>All Clients</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            {/* <Link href={`/clients/${client.id}`}>{client.name}</Link> */}
            {/* To different approaches usinf the link component */}
            <Link
              href={{
                pathname: '/clients/[id]',
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ClientsPage
