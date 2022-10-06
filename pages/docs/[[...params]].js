import { useRouter } from 'next/router'

import React from 'react'

export default function Docs() {
  const router = useRouter()
  const { params = [] } = router.query
  console.log(params)
  return (
    <div>
      <h1>document service</h1>
      {params.map((params) => (
        <p key={params}>{params}</p>
      ))}
    </div>
  )
}
