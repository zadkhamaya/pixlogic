import { AuthLayout } from "@/components/auth/components/AuthLayout.jsx";
import React from "react";

export default function Layout({ children }) {
  return <AuthLayout>{children}</AuthLayout>;
}
