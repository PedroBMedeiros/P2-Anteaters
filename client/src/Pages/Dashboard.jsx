import React, { useEffect } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useStore } from "../state";
import { ItemsWrapper } from "../components/Item/Elements";
import { Item, AddItem } from "../components/Item";
export const Dashboard = () => {
  const { loggedIn, logOut } = useStore();
  const history = useHistory();

  const { state } = JSON.parse(window.localStorage.getItem("user_settings"));
  const { isLoading, isError, data, error, refetch } = useQuery("todos", () =>
    axios.get(`http://localhost:5000/todos/${state.username}`)
  );

  console.log(data);

  const addTodo = async ({ name, desc }) => {
    const data = {
      name,
      desc,
      completed: false,
    };
    console.log(data);
    const response = await axios({
      method: "post",
      url: `http://localhost:5000/add_todo/${state.username}`,
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
    if (!state.loggedIn) {
      console.log("not logged in");
      history.push("/auth");
    }
  }, [loggedIn]);

  return (
    <div>
      <Link to="/">Home</Link>
      <button onClick={logOut}>Logout</button>
      <div>
        <h1>Hello {state.username}!</h1>
        {!isLoading ? (
          data.data.todos.length === 0 ? (
            <h2>Add your first todo!</h2>
          ) : null
        ) : (
          <h2>Loading ...</h2>
        )}
      </div>

      {isLoading ? (
        <h1>loading...</h1>
      ) : isError ? (
        <h1>Error: {error.message}</h1>
      ) : (
        <ItemsWrapper>
          {data.data.todos.length !== 0 ? (
            <>
              {data.data.todos.map((content) => (
                <Item
                  key={content.id}
                  id={content.id}
                  refetch={refetch}
                  completed={content.completed}
                >
                  <div className="header">
                    <h1>{content.name}</h1>
                    <h4>{content.date_added}</h4>
                  </div>
                  <div className="content">
                    <p>{content.desc}</p>
                  </div>
                </Item>
              ))}
            </>
          ) : null}

          <AddItem>
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
                  <div className="inputs">
                    <Field name="name" type="text" placeholder="name" />
                    {errors.name && touched.name ? (
                      <div className="err">{errors.name}</div>
                    ) : null}
                    <Field name="desc" type="text" placeholder="description" />
                    {errors.desc && touched.desc ? (
                      <div className="err">{errors.desc}</div>
                    ) : null}
                  </div>
                  <button type="submit">Submit</button>
                </Form>
              )}
            </Formik>
          </AddItem>
        </ItemsWrapper>
      )}
    </div>
  );
};
