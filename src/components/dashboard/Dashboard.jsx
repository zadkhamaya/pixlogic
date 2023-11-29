import React from 'react'
import { Header } from './components/Header'
import { EventCard } from './components/EventCard'
import { Button } from '@nextui-org/react'

export const Dashboard = (events) => {

    const eventList = events.children

    return (
        <div>
            <Header />

            <section className=' flex m-auto p-5 justify-center'>
                <Button color='primary'>Create new event!</Button>
            </section>

            <section className=' p-5 m-auto'>
                <h2 className=' text-large font-semibold'>Featured Events</h2>
                <div className=' grid grid-cols-2 gap:1 lg:grid-cols-3 lg:gap-3'>
                    {eventList.map(({ id, image, name: eventName, description, date, location }) => {
                        return <EventCard key={id} image={image ? image : "https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-2.svg"} name={eventName} description={description} date={date} location={location}></EventCard>
                    })}
                </div>
            </section>

        </div>
    )
}
