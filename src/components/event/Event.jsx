import { Button, Input } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'

const urlImage = "https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-2.svg"

export const Event = ({ children }) => {
    const { id, image, name, description, location, date, author, participants, createdAt, updatedAt } = children
    return (
        <div className='flex flex-col h-screen'>
            <div className=' w-screen bg-purple-200 bg-opacity-75 flex items-center justify-center'>
                <div className=' bg-purple-500 w-[80vw] bg-opacity-75 flex items-center justify-center rounded-3xl'>
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
                    </div>

                    <p>Hosted by {author.name}</p>
                    <p>Created on {createdAt}</p>
                    <p>Updated on {updatedAt}</p>

                </section>

                <section className=' bg-blue-600 p-5 lg:w-[20vw] space-y-2'>
                    <Input
                        name="name"
                        type='text'
                        placeholder="Your Name"
                    />
                    <Input
                        name="email"
                        type='email'
                        placeholder="email@domain.com"
                    />
                    <Input
                        name="phone"
                        type='number'
                        placeholder="6281234567"
                    />
                    <Button>Join Event</Button>
                </section>
            </div>
        </div>
    )
}
