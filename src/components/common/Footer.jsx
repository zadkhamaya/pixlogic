import Link from 'next/link'
import React from 'react'

export const Footer = () => {
    return (
        <footer className=' bg-primary text-center py-5'>
            <p>
                <small className=" text-slate-100">
                    Copyright © 2023 Pixlogic for <Link href="https://devscale.id/">Devscale</Link>
                </small>
            </p>
        </footer>
    )
}
