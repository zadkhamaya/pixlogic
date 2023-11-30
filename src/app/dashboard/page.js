import { Dashboard } from '@/components/dashboard/Dashboard'
import { EVENTS_URL } from '@/config/apiUrl'
import { cookies } from 'next/headers'
import React from 'react'

export default async function Page() {
  const { value } = cookies().get('user')
  const user = JSON.parse(value);
  async function getEventsByUser() {
    const res = await fetch(`${EVENTS_URL}?userid=${user.id}`, { cache: "no-store" })
    const { data } = await res.json()
    return data
  }

  const events = await getEventsByUser();
  return (
    <Dashboard>
      {events}
    </Dashboard>
  )
}
