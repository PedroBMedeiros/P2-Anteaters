import React from "react";
import { AuthForm } from "../components/Form/Form";
export const Auth = () => (
  <AuthForm fields={["username", "email", "password"]} action="signup" />
);
