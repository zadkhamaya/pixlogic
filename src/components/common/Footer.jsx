import Link from 'next/link'
import React from 'react'

export const Footer = () => {
    return (
        <footer className=' bg-purple-700 text-center py-5'>
            <p>
            Copyright © 2023 Pixlogic for <Link href="https://devscale.id/">Devscale</Link>
            </p>
        </footer>
    )
}
