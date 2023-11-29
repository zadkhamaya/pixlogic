"use client";
import React from "react";
import { useRegister } from "../hooks/useRegister";
import { Button, Input } from "@nextui-org/react";
import { EyeFilledIcon } from "./NextUI/EyeFilledIcon";
import { EyeSlashFilledIcon } from "./NextUI/EyeSlashFilledIcon";
import Link from "next/link";

export const RegisterUI = () => {
  const { loading, handleChange, handleInputSubmitRegister } = useRegister();
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <main className="space-y-3 font-mono p-10 bg-gradient-to-tr from-blue-300 to-gray-300 text-center rounded-lg hover:border-3 hover:border-slate-100 hover:scale-110 transition-transform duration-300">
      <div className="text-3xl pb-4 font-bold tracking-tight">RegisterNow</div>
      <Input name="username" label="Username" onChange={handleChange} />
      <Input name="email" type="email" label="Email" onChange={handleChange} />
      <Input
        name="password"
        label="Password"
        endContent={
          <Button className="focus:outline-none" onClick={toggleVisibility}>
            {isVisible ? (
              <EyeSlashFilledIcon className="text-2xl" />
            ) : (
              <EyeFilledIcon className="text-2xl" />
            )}
          </Button>
        }
        type={isVisible ? "text" : "password"}
        onChange={handleChange}
      />
      <Button
        color="primary"
        isDisabled={loading}
        onClick={handleInputSubmitRegister}
      >
        Register
      </Button>

      <div className="flex flex-col text-center gap-2">
        <div>Have an account ?</div>
        <Link href="/login">Login</Link>
      </div>
    </main>
  );
};
