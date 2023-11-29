import React from 'react'
<<<<<<< HEAD
import { Header } from '../common/Header'
import { EventCard } from './components/EventCard'
import { Button } from '@nextui-org/react'
import { Footer } from '../common/Footer'

const urlImage = "https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-2.svg"

export const Dashboard = ({ children }) => {

    const eventList = children

    return (
        <>
            <Header />
            <div className=' flex-grow'>
                <section className=' p-5 m-auto'>
                    <h2 className=' text-4xl font-semibold pb-3'>My Events</h2>
                    <div className=' grid grid-cols-2 gap:1 lg:grid-cols-3 lg:gap-3'>
                        {eventList && eventList.map(({ id, image, name: eventName, description, date, location, participants }) => {
                            return <EventCard key={id} image={image && image.startsWith("http") ? image : urlImage} name={eventName} description={description} date={date} location={location} participants={participants}></EventCard>
                        })}
                    </div>
                </section>

                <section className=' flex m-auto p-5 justify-center'>
                    <Button color='primary'>Create new event!</Button>
                </section>
            </div>
            <Footer />
        </>
=======
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
>>>>>>> 348d369 (create EventCard and display get events from API)
    )
}
