"use client"

import { Button } from '@nextui-org/react'
import Cookies from 'js-cookie'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

export const EventCard = ({ id, image, name, description, date, location, participants }) => {
  const showParticipants = participants.slice(0, 3)
  const router = useRouter()


  const handleClickEvent = () => {
    Cookies.set('eventId', id)
    router.push("/event")
  }
  return (
    <main className='  bg-slate-300 rounded-lg p-3'>

      <div className=' flex gap-3'>
        <Image className=' w-1/2' src={image} width={100} height={100} alt={name} />
        <div>
          <h1 className=' font-medium'>{name}</h1>
          <p>{description}</p>
          <p>{date} - {location}</p>
          <Button color='primary' onClick={handleClickEvent}>View more...</Button>
        </div>
      </div>

      {showParticipants && <div className=' grid grid-cols-3'>
        {showParticipants.map(participant => (
          <div key={participant.id}>
            <p>{participant.name}, </p>
          </div>
        ))}
      </div>}
      {participants.length > 0 ? <p>and others have joined this event.</p> : <p>No one has joined this event yet.</p>}
    </main>
  )
}
