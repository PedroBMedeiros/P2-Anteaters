import React from "react";
import { Link, useParams } from "react-router-dom";
import { Kenzie, Anthony, Pedro, Naweid, Cherry } from ".";
import { BubbleSort } from "./BubbleSort";
export const MemberTemplate = () => {
  let { member } = useParams();
  return (
    <div>
      {member === "Kenzie" ? (
        <Kenzie />
      ) : member === "Anthony" ? (
        <Anthony />
      ) : member === "Pedro" ? (
        <Pedro />
      ) : member === "Naweid" ? (
        <Naweid />
      ) : member === "Cherry" ? (
        <Cherry />
      ) : (
        <h1>member not found</h1>
      )}
      <BubbleSort />
    </div>
  );
};
