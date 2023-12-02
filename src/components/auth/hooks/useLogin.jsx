"use client";

import { useState } from "react";
import { API_URL } from "@/config/apiUrl.js";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation.js";
import Cookies from "js-cookie";

export const useLogin = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  }

  async function handleSubmitLogin() {
    setLoading(true);
    const { email, password } = loginData;
    const res = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.status !== 200) {
      setLoading(false);
      toast.error(data.message);
      return;
    }
    
    //set token ke cookie
    Cookies.set("token", data.token);
    Cookies.set("user", JSON.stringify(data.data));

    setLoading(false);
    toast.success(data.message);

    //arahkan ke dashboard. akan masuk ke middleware dahulu
    setTimeout(() => router.push("/dashboard"), 2000);
  }

  return {
    loading,
    handleChange,
    handleSubmitLogin,
  };
};
