"use client"

import { Button } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'
import Cookies from "js-cookie";
import { useRouter } from "next/navigation.js";


export const Header = () => {
    const router = useRouter();
    function handleLogout() {
        Cookies.remove("token")
        router.push("/login")

    }

    return (
        <main className=' flex justify-between p-3 border-b-2 border-violet-800'>
            <Image src="https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-2.svg" alt="logo" width={100} height={100} />
            <div className=' lg:flex w-1/5 justify-between items-center'>
                <p>
                    Hello, user123
                </p>
                <Button color='primary' onClick={handleLogout}>Logout</Button>
            </div>

        </main>
    )
}
