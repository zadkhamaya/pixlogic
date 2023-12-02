"use client"

import { Button } from '@nextui-org/react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Cookies from "js-cookie";
import { useRouter } from "next/navigation.js";


export const Header = () => {
    const router = useRouter();
    const [user, setUser] = useState({})
    function handleLogout() {
        Cookies.remove("token")
        Cookies.remove("user")
        router.push("/login")

    }

    useEffect(() => {
        const user = JSON.parse(Cookies.get('user'));
        setUser(user)
    }, [])



    return (
        <main className=' flex justify-between p-3 border-b-2 border-violet-800'>
            <Image src="https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-2.svg" alt="logo" width={100} height={100} priority  style={{height:'auto'}} />
            <div className=' grid grid-cols-2 items-center'>
                <p className="mr-3">
                    {user.name}
                </p>
                <Button color='primary' onClick={handleLogout}>Logout</Button>
            </div>

        </main>
    )
}
