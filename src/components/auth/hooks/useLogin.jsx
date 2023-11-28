"use client";

import { useState } from "react";
import { API_URL } from "@/config/apiUrl.js";

export const useLogin = () => {
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
    const res = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.status !== 200) {
      setLoading(false);
      return;
    }

    setLoading(false);
  }

  return {
    loading,
    handleChange,
    handleSubmitLogin,
  };
};
