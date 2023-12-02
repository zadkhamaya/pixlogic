"use client"

import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
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
        <Navbar shouldHideOnScroll >
            <NavbarBrand>
                <Image src="https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-2.svg" alt="logo" width={100} height={100} priority style={{ height: 'auto' }} />
                <p className="font-bold text-inherit">Meetinscale</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="/">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/dashboard">
                        Dashboard
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <p>Hello, {user.name}</p>
                </NavbarItem>
                <NavbarItem>
                    <Button onClick={handleLogout} color="primary" variant="flat">
                        Logout
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}
