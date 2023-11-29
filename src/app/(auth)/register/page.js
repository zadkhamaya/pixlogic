import { AuthLayout } from "@/components/auth/components/AuthLayout";
import { RegisterUI } from "@/components/auth/components/RegisterUI";
import React from "react";

export default function Page() {
  return (
    <AuthLayout>
      <RegisterUI />
    </AuthLayout>
  );
}
