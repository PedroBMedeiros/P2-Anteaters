import React from "react";
import axios from "axios";
import { FaRegTrashAlt } from "react-icons/fa";
export const Item = ({ children, id, refetch, completed, add }) => {
  const removeTodo = async () => {
    console.log(id);
    const data = {
      id,
    };
    const response = await axios({
      method: "delete",
      url: `https://p2-anteaters-api.herokuapp.com/remove_todo`,
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
      url: `https://p2-anteaters-api.herokuapp.com/update_todo/${id}/${attr[0]}`,
      data,
    }).catch((error) => error.response);
    if (response.status === 201) {
      return refetch();
    }
    console.log(response);
  };

  // completed={completed ? "complete" : "incomplete"}
  return (
    <div className="group px-12 py-8 rounded-2xl border-4 bg-white shadow-lg hover:border-indigo-600 duration-200">
      {children}
      {!add ? (
        <div className="mt-4">
          <span
            onClick={() => updateTodo(["completed", !completed])}
            className={`float-right rounded-lg px-2 cursor-pointer group active:outline-none active:ring-4 active:ring-opacity-20 select-none ${
              completed
                ? "bg-green-100 text-green-600 active:ring-green-600"
                : "bg-red-100 text-red-600 active:ring-red-600"
            }`}
          >
            {completed ? "completed" : "incomplete"}
          </span>
          <FaRegTrashAlt
            onClick={removeTodo}
            className="float-left text-red-400 cursor-pointer"
          />
        </div>
      ) : null}
    </div>
  );
};
