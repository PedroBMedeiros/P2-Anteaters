import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useStore } from "../../state";
import { FormWrapper } from "./Elements";
export const AuthForm = ({ children }) => {
  const { logIn, setUsername } = useStore();
  const history = useHistory();
  const [loggingIn, setLoggingIn] = useState(false);
  const handleSignup = async ({ username, email, password }) => {
    const data = {
      username,
      email,
      password,
    };
    const response = await axios({
      method: "post",
      url: "http://localhost:5000/signup",
      data,
    }).catch((error) => error.response);
    if (response.status === 201) {
      setLoggingIn(true);
    } else {
      console.log(response.status);
    }
  };

  const handleLogin = async ({ username, password, remember }) => {
    const data = {
      username,
      password,
      remember: remember === undefined ? false : remember,
    };
    console.log(data);
    const response = await axios({
      method: "post",
      url: "http://localhost:5000/login",
      data,
    }).catch((error) => error.response);
    if (response.status === 200) {
      setUsername(username);
      logIn();
      history.push("/dashboard");
    } else {
      console.log(response.status);
    }
  };

  const SignupSchema = Yup.object().shape({
    username: Yup.string()
      .min(4, "Too Short!")
      .max(15, "Too Long!")
      .required("Required"),
    password: Yup.string()
      .min(5, "Too Short!")
      .max(80, "Too Long!")
      .required("Required"),
    email: Yup.string()
      .email("Invalid email")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const LoginSchema = Yup.object().shape({
    username: Yup.string()
      .min(4, "Too Short!")
      .max(15, "Too Long!")
      .required("Required"),
    password: Yup.string()
      .min(5, "Too Short!")
      .max(80, "Too Long!")
      .required("Required"),
  });

  return (
    <FormWrapper>
      <h1>{loggingIn ? "Login" : "Signup"}</h1>

      {loggingIn ? (
        <Formik
          initialValues={{
            username: "",
            password: "",
            remember: false,
          }}
          validationSchema={LoginSchema}
          onSubmit={(values) => handleLogin(values)}
        >
          {({ errors, touched }) => (
            <Form>
              <Field name="username" type="text" placeholder="username" />
              {errors.username && touched.username ? (
                <div>{errors.username}</div>
              ) : null}
              <Field name="password" type="password" placeholder="password" />
              {errors.password && touched.password ? (
                <div>{errors.password}</div>
              ) : null}
              <Field type="checkbox" name="remember" />
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      ) : (
        <Formik
          initialValues={{
            username: "",
            password: "",
            email: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            handleSignup(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Field name="username" type="text" placeholder="username" />
              {errors.username && touched.username ? (
                <div>{errors.username}</div>
              ) : null}
              <Field name="email" type="email" placeholder="email" />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
              <Field name="password" type="password" placeholder="password" />
              {errors.password && touched.password ? (
                <div>{errors.password}</div>
              ) : null}
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      )}
      <p>
        {loggingIn ? "Dont have an account?" : "Already have an account?"}{" "}
        <span onClick={() => setLoggingIn(!loggingIn)}>
          {loggingIn ? "Signup" : "Login"}
        </span>
        .
      </p>
    </FormWrapper>
  );
};
