import { Button } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'

<<<<<<< HEAD
export const EventCard = ({ id, image, name, description, date, location, participants }) => {
  participants = participants.slice(0, 3)
  return (
    <main className='  bg-slate-300 rounded-lg p-3'>

      <div className=' flex gap-3'>
        <Image className=' w-1/2' src={image} width={100} height={100} alt={name} />
=======
export const EventCard = ({ id, image, name, description, date, location }) => {
  return (
    <main>
      <div className=' flex'>
        <Image src={image} width={100} height={100} alt={name} />
>>>>>>> 348d369 (create EventCard and display get events from API)
        <div>
          <h1 className=' font-medium'>{name}</h1>
          <p>{description}</p>
          <p>{date} - {location}</p>
          <Button color='primary'>View more...</Button>
        </div>
      </div>

<<<<<<< HEAD
      {participants && <div className=' grid grid-cols-3'>
        {participants.map(participant => (
          <div key={participant.id}>
            <p>{participant.name}, </p>
          </div>
        ))}
      </div>}
      {participants.length > 0 ? <p>and others have joined this event.</p> : <p>No one has joined this event yet.</p>}

=======
>>>>>>> 348d369 (create EventCard and display get events from API)

    </main>
  )
}
