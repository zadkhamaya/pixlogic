import { Dashboard } from '@/components/dashboard/Dashboard'
import { EVENTS_URL } from '@/config/apiUrl'
import React from 'react'

export default async function Page() {
  async function getEvents() {
    const res = await fetch(EVENTS_URL, { cache: "no-store" })
    const { data } = await res.json()
    return data
  }

  const events = await getEvents();
  return (
    <Dashboard>
      {events}
    </Dashboard>
  )
}
