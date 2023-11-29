"use client";

import { Input, Button } from "@nextui-org/react";
import Link from "next/link.js";
import { useLogin } from "../hooks/useLogin.jsx";

export const Login = () => {
  const { loading, handleChange, handleSubmitLogin } = useLogin();
  return (
    <div className="space-y-3">
      <h1 className="block font-bold text-dark text-3xl mt-1 lg:text-5xl">Meetinscale.</h1>
      <Input
        name="email"
        placeholder="email@domain.com"
        onChange={handleChange}
      />
      <Input
        name="password"
        placeholder="password"
        type="password"
        onChange={handleChange}
      />
      <Button isDisabled={loading} color="primary" onClick={handleSubmitLogin}>
        Login
      </Button>
      <div className="flex gap-1">
        <div>Don't have an account?</div>
        <Link href="/register">Register</Link>
      </div>
    </div>
  );
};
