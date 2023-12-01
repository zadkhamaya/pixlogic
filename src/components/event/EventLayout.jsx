import React from 'react'
import { Header } from '../common/Header'
import { Footer } from '../common/Footer'

export const EventLayout = ({ children }) => {
    return (
        <div className=' flex flex-col min-h-screen overflow-scroll' >
            <section className=' flex-grow'>
                <Header />
                <main>{children}</main>
            </section>
            <Footer />
        </div>
    )
}
