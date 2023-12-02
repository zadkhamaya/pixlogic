"use client"

import { AvatarGroup, Button, Card, CardHeader, CardBody, Image } from "@nextui-org/react"
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import React from 'react';
import { ParticipantCard } from "@/components/event/components/ParticipantCard";

export const EventCard = ({ id, image, name, description, date, location, participants }) => {
  const router = useRouter()


  const handleClickEvent = () => {
    Cookies.set('eventId', id)
    router.push("/event")
  }
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <small className="text-default-500">{date} - {location}</small>
        <h4 className="font-bold text-large">{name}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={image}
          width={270}
        />
        <p className="text-tiny font-regular mt-3">{description}</p>

        <Button color='primary' className=" w-1/3 my-2" onClick={handleClickEvent}>View more...</Button>
        <p className="text-tiny uppercase font-bold py-3">Participants</p>
        <AvatarGroup className=' justify-start py-2 px-4' isBordered max={10}>
          {participants && participants.map(({ id, name }) => { return <ParticipantCard key={id} name={name} /> })}
        </AvatarGroup>
        {participants.length < 1 && <p>Noone has joined this event.</p>}
      </CardBody>
    </Card>
  )
}
