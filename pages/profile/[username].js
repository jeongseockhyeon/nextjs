import { useRouter } from 'next/router'
import React from 'react'

export default function User() {
  const router = useRouter()
  const { username } = router.query
  console.log(router.query)
  return (
    <div>
      <h1>User Detail page - {username}</h1>
      <p>Dynamic routing</p>
    </div>
  )
}
