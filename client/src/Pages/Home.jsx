import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <Link to="/dashboard">Dashboard</Link>
      <h1>Home</h1>
      <Link to="/auth">auth</Link>
    </div>
  );
};
