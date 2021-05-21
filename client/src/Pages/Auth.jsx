import React from "react";
import { AuthForm } from "../components/Form/Form";
export const Auth = () => {
  const action = "signup";
  return (
    <div>
      <AuthForm fields={["username", "email", "password"]} action="signup" />
    </div>
  );
};
