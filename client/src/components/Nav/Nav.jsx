import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div className="w-full h-20">
      <div className="uppercase text-m font-bold">
        <Link
          to="/"
          className="inline float-left text-indigo-600 cursor-pointer hover:text-indigo-500 duration-200"
        >
          Home
        </Link>
        <Link
          to="/members"
          className="inline relative bottom-1 float-right text-white bg-indigo-600 py-1 px-4 rounded-md cursor-pointer hover:bg-indigo-500 duration-200"
        >
          Members
        </Link>
        <Link
          to="/auth"
          className="inline float-right mr-7 text-indigo-600 cursor-pointer hover:text-indigo-500 duration-200"
        >
          Signup
        </Link>
      </div>
    </div>
  );
};
