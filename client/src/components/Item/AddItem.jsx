import React, { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AddItemWrapper } from "./Elements";
export const AddItem = ({ children }) => {
  const [show, setShow] = useState(false);
  return (
    <AddItemWrapper state={show ? "content" : "icon"}>
      {show ? children : <AiOutlinePlusCircle onClick={() => setShow(true)} />}
    </AddItemWrapper>
  );
};
