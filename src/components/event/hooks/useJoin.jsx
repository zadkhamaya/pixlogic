"use client"

import { API_URL } from "@/config/apiUrl.js";
import Cookies from 'js-cookie';
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import React, { useState } from 'react'

export const useJoin = () => {
    const router = useRouter()
    const [loading, setLoading] = useState(false);
    const [joinData, setJoinData] = useState({
        name: "",
        email: "",
        phone: ""
    })

    function handleChange(event) {
        const { name, value } = event.target;
        setJoinData({ ...joinData, [name]: value });
    }

    async function handleSubmitJoin() {
        setLoading(true);
        const eventId = Cookies.get('eventId')
        const { name, email, phone } = joinData;
        try {
            const res = await fetch(`${API_URL}/join-events`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, phone, eventId })
            })
            const data = await res.json()
            if (res.status !== 201) {
                setLoading(false);
                toast.error(data.message);
                return;
            }
            toast.success(data.message)
            setJoinData({
                name: "",
                email: "",
                phone: ""
            })
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
            router.refresh();
        }
    }

    return {
        loading,
        joinData,
        handleChange,
        handleSubmitJoin
    }
}
