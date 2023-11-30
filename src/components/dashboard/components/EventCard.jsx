import { Button } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'

export const EventCard = ({ id, image, name, description, date, location }) => {
  return (
    <main>
      <div className=' flex bg-slate-300 rounded-lg'>
        <Image className=' w-1/2' src={image} width={100} height={100} alt={name} />
        <div>
          <h1 className=' font-medium'>{name}</h1>
          <p>{description}</p>
          <p>{date} - {location}</p>
          <Button color='primary'>View more...</Button>
        </div>
      </div>


    </main>
  )
}
