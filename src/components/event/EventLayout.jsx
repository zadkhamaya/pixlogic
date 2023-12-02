import React from 'react'
import { Header } from '../common/Header'
import { Footer } from '../common/Footer'

export const EventLayout = ({ children }) => {
    return (
        <div className=' flex flex-col min-h-screen' >
            <section className=' justify-between mb-5'>
                <Header />
                <main>{children}</main>
            </section>
            <Footer />
        </div>
    )
}
