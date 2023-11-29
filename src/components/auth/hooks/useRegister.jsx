"use client";
import { useState } from "react";
import { API_URL } from "@/config/apiUrl";
import toast from "react-hot-toast";
export const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const [inputRegisterData, setInputRegisterData] = useState({
    username: "",
    email: "",
    password: "",
  });
  async function handleInputSubmitRegister() {
    setLoading(true);
    const { username, email, password } = inputRegisterData;
    const res = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });
    const data = await res.json();
    if (!data) {
      setLoading(false);
      toast.error("Registration is Error, please register again!");
    }
    setLoading(false);
    toast.success("Registration is succesful, please log in");
  }
  function handleChange(e) {
    const { username, value } = e.target;
    setInputRegisterData({
      ...inputRegisterData,
      [username]: value,
    });
  }
  return { loading, handleChange, handleInputSubmitRegister };
};
