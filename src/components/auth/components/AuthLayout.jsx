import React from "react";

export const AuthLayout = ({ children }) => {
  return (
    <main className="width-[400px] m-auto h-screen grid grid-cols-1">
      <div className="flex justify-center items-center">
        <section>{children}</section>
      </div>
    </main>
  );
};
