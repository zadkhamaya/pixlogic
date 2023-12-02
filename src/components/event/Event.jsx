"use client"

import { AvatarGroup, Button, Card, CardHeader, Input } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'
import { useJoin } from './hooks/useJoin'
import { ParticipantCard } from './components/ParticipantCard'

const urlImage = "https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-2.svg"

export const Event = ({ children }) => {
    const { loading, joinData, handleChange, handleSubmitJoin } = useJoin()
    const { id, image, name, description, location, date, author, participants, createdAt, updatedAt } = children
    return (
        <div className='flex flex-col'>
            <div className=' w-screen bg-sky-300 bg-opacity-75 flex items-center justify-center'>
                <div className=' bg-primary w-[80vw] bg-opacity-75 flex items-center justify-center rounded-3xl'>
                    <Image src={image && image.startsWith("http") ? image : urlImage} width={500} height={500} alt={"photo-event"}>
                    </Image>
                </div>
            </div>
            <h2 className=' text-3xl lg:text-7xl py-3 text-center'>{name}</h2>
            <div className=' lg:flex w-screen'>
                <section className=' lg:w-[70vw] space-y-3 pl-20'>
                    <div>
                        <h3 className=' font-semibold text-2xl'>Date</h3>
                        <p>{date}</p>
                    </div>

                    <div>
                        <h3 className=' font-semibold text-2xl'>Location</h3>
                        <p>{location}</p>
                    </div>

                    <div>
                        <h3 className=' font-semibold text-2xl'>About</h3>
                        <p>{description}</p>
                    </div>

                    <div>
                        <h3 className=' font-semibold text-2xl'>Participants</h3>
                        {/* mapping data participants */}
                        <AvatarGroup className=' justify-start py-2' isGrid isBordered max={10}>
                            {participants && participants.map(({ id, name }) => { return <ParticipantCard key={id} name={name} /> })}
                        </AvatarGroup>
                    </div>

                    <div>
                        <p>Hosted by {author.name}</p>
                        <p>Created on {createdAt}</p>
                        <p>Updated on {updatedAt}</p>
                    </div>


                </section>

                <Card isBlurred className=' bg-sky-300 p-5 lg:w-[20vw] space-y-2 m-auto'>
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <h4 className="font-bold text-large">Don't miss it!</h4>
                    <p className="text-tiny font-bold">Sign yourself up now.</p>
                </CardHeader>
                    <Input
                        name="name"
                        type='text'
                        placeholder="Your Name"
                        onChange={handleChange}
                        value={joinData.name}
                    />
                    <Input
                        name="email"
                        type='email'
                        placeholder="email@domain.com"
                        onChange={handleChange}
                        value={joinData.email}
                    />
                    <Input
                        name="phone"
                        type='number'
                        placeholder="6281234567"
                        onChange={handleChange}
                        value={joinData.phone}
                    />
                    <Button color="primary" isDisabled={loading} onClick={handleSubmitJoin}>Join Event</Button>
                </Card>
            </div>
        </div>
    )
}
