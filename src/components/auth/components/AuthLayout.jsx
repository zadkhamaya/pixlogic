import React from "react";
import Image from "next/image";

export const AuthLayout = ({ children }) => {
  return (
    <main className="h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="hidden lg:block">
        <div className="flex justify-center items-center h-screen">
          <Image
            src="/auth-v2-login-illustration-light.png"
            width={500}
            height={500}
            alt="Image"
          />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <section className="w-[320px]">{children}</section>
      </div>
    </main>
  );
};
