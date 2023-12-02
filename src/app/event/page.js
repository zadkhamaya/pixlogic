import React from 'react';
import { API_URL } from '@/config/apiUrl'
import { cookies } from 'next/headers'
import { Event } from '@/components/event/Event';


export default async function Page() {
    const id = cookies().get('eventId')?.value;

    async function getEventDetails() {
        try {
            const res = await fetch(`${API_URL}/events/${id}`, { cache: "no-store" })
            const { data } = await res.json()
            return data
        } catch (error) {
            console.log(error)
        }
    }

    const event = await getEventDetails();
    return (
        <Event>
            {event}
        </Event>
    )
}
