import React, { useEffect } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { useHistory, useLocation } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Item } from "../components/Item";
export const Dashboard = () => {
  const history = useHistory();
  const { state } = useLocation();
  const { isLoading, isError, data, error, refetch } = useQuery("todos", () =>
    axios.get(`https://p2-anteaters-api.herokuapp.com/todos/${state.username}`)
  );
  const addTodo = async ({ name, desc }) => {
    const data = {
      name,
      desc,
      completed: false,
    };
    console.log(data);
    const response = await axios({
      method: "post",
      url: `https://p2-anteaters-api.herokuapp.com/add_todo/${state.username}`,
      data,
    }).catch((error) => error.response);
    if (response.status === 201) {
      console.log("todo added");
      refetch();
    } else {
      console.log(response.status);
    }
  };

  const TodoSchema = Yup.object().shape({
    name: Yup.string()
      .min(4, "Too Short!")
      .max(120, "Too Long!")
      .required("Required"),
    desc: Yup.string().min(5, "Too Short!"),
  });

  useEffect(() => {
    if (state === undefined) {
      history.push({ pathname: "/auth" });
    }
  }, []);

  return (
    <div className="w-100">
      <div className="mt-2 my-0 mx-auto">
        <div className="text-center text-6xl">
          {state !== undefined ? (
            <div className="font-bold">
              <h1 className="inline">Hello</h1>{" "}
              <span className="inline text-indigo-600">{state.username}!</span>
            </div>
          ) : null}
          <div className="mt-2 text-xl font-semibold">
            {!isLoading ? (
              data.data.todos.length !== 0 ? (
                <h2>Add your first todo!</h2>
              ) : null
            ) : (
              <h2>Loading ...</h2>
            )}
          </div>
        </div>

        {isLoading ? (
          <h1>loading...</h1>
        ) : isError ? (
          <h1>Error: {error.message}</h1>
        ) : (
          <div className="grid grid-cols-layout gap-4 mt-12">
            {data.data.todos.length !== 0 ? (
              <>
                {data.data.todos.map((content) => (
                  <Item
                    add={false}
                    key={content.id}
                    id={content.id}
                    refetch={refetch}
                    completed={content.completed}
                  >
                    <div>
                      <h1 className="text-black text-2xl font-bold group-hover:text-indigo-500 duration-200">
                        {content.name}
                      </h1>
                      <h1 className="text-gray-300 text-sm">
                        {content.date_added}
                      </h1>
                    </div>
                    <div className="text-lg mt-2">
                      <p>{content.desc}</p>
                    </div>
                  </Item>
                ))}
              </>
            ) : null}

            <Item add={true}>
              <Formik
                initialValues={{
                  name: "",
                  desc: "",
                }}
                validationSchema={TodoSchema}
                onSubmit={(values) => addTodo(values)}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div className="outline-none">
                      <Field
                        name="name"
                        type="text"
                        placeholder="name"
                        className="-mt-3 text-2xl bg-transparent font-bold block w-full px-0.5 border-0 border-0-2 border-gray-200 focus:ring-0 focus:border-black"
                      />
                      {errors.name && touched.name ? (
                        <div className="err">{errors.name}</div>
                      ) : null}
                      <Field
                        name="desc"
                        type="text"
                        placeholder="description"
                        className="mt-0 text-lg block w-full px-0.5 border-0 border-0-2 border-gray-200 focus:ring-0 focus:border-black"
                      />
                      {errors.desc && touched.desc ? (
                        <div className="err">{errors.desc}</div>
                      ) : null}
                    </div>
                    <button
                      type="submit"
                      className="mt-4 w-full flex-none bg-indigo-600 hover:bg-indigo-700 text-white text-lg leading-6 font-semibold py-2 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-indigo-700 focus:outline-none transition-colors duration-200"
                    >
                      Add todo
                    </button>
                  </Form>
                )}
              </Formik>
            </Item>
          </div>
        )}
      </div>
    </div>
  );
};
