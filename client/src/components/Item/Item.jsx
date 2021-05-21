import React from "react";
import axios from "axios";
import { FaRegTrashAlt } from "react-icons/fa";
import { ItemWrapper } from "./Elements";
export const Item = ({ children, id, refetch, completed }) => {
  const removeTodo = async () => {
    console.log(id);
    const data = {
      id,
    };
    const response = await axios({
      method: "delete",
      url: `http://localhost:5000/remove_todo`,
      data,
    }).catch((error) => error.response);
    if (response.status === 201) {
      return refetch();
    }
    console.log(response);
  };

  const updateTodo = async (attr) => {
    console.log(id);
    const data = {
      [attr[0]]: attr[1],
    };
    const response = await axios({
      method: "put",
      url: `http://localhost:5000/update_todo/${id}/${attr[0]}`,
      data,
    }).catch((error) => error.response);
    if (response.status === 201) {
      return refetch();
    }
    console.log(response);
  };

  return (
    <ItemWrapper completed={completed ? "complete" : "incomplete"}>
      {children}
      <div className="options">
        <span onClick={() => updateTodo(["completed", !completed])}>
          {completed ? "completed" : "incomplete"}
        </span>
        <FaRegTrashAlt onClick={removeTodo} />
      </div>
    </ItemWrapper>
  );
};
