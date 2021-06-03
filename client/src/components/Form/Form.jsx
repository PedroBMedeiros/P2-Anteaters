import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { CgSpinner } from "react-icons/cg";
import * as Yup from "yup";
import axios from "axios";
import { useStore } from "../../state";
export const AuthForm = () => {
  const { logIn, setUsername } = useStore();
  const history = useHistory();
  const [loggingIn, setLoggingIn] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignup = async ({ username, email, password }) => {
    const data = {
      username,
      email,
      password,
    };
    const response = await axios({
      method: "post",
      url: "https://p2-anteaters-api.herokuapp.com/signup",
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
    setLoading(true);
    const response = await axios({
      method: "post",
      url: "https://p2-anteaters-api.herokuapp.com/login",
      data,
    }).catch((error) => error.response);
    if (response.status === 200) {
      setUsername(username);
      logIn();
      history.push({
        pathname: "/dashboard",
        state: { username: username, loggedIn: true },
      });
    } else {
      console.log(response.status);
    }
    setLoading(false);
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
      .min(4, "Username must be at least 4 characters.")
      .max(15, "Username can be no longer than 15 characters.")
      .required("This field is required."),
    password: Yup.string()
      .min(5, "Password must be at least 5 characters.")
      .max(80, "Password can be no longer than 80 characters.")
      .required("This field is required."),
  });

  return (
    <div className="w-100">
      <div className="mt-12 w-full lg:w-1/2 my-0 mx-auto">
        <h1 className="text-5xl font-bold">{loggingIn ? "Login" : "Signup"}</h1>
        <div className="max-w-full">
          <div className="mt-8 grid grid-cols-1 gap-8">
            {loggingIn ? (
              <Formik
                className=""
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
                    <label className="block">
                      <span className="text-gray-700">Username</span>
                      <Field
                        name="username"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        type="text"
                        placeholder="username"
                      />
                    </label>
                    {errors.username && touched.username ? (
                      <span className="mt-2 text-sm text-red-400">
                        {errors.username}
                      </span>
                    ) : null}
                    <label className="block mt-4">
                      <span className="text-gray-700">Password</span>
                      <Field
                        name="password"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        type="password"
                        placeholder="password"
                      />
                    </label>
                    {errors.password && touched.password ? (
                      <span className="mt-2 text-sm text-red-400">
                        {errors.password}
                      </span>
                    ) : null}
                    <div className="block">
                      <div className="mt-4">
                        <label className="inline-flex items-center">
                          <Field
                            type="checkbox"
                            className="cursor-pointer rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50"
                            name="remember"
                          />
                          <span className="ml-2 text-gray-500">
                            Remember me
                          </span>
                        </label>
                      </div>
                    </div>
                    <button
                      type="submit"
                      disabled={loading ? true : false}
                      className="mt-4 w-full flex-none bg-indigo-600 hover:bg-indigo-700 text-white text-lg leading-6 font-semibold py-2 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-indigo-700 focus:outline-none transition-colors duration-200"
                    >
                      {loading ? (
                        <CgSpinner className="animate-spin inline h-5 w-5" />
                      ) : (
                        "Login"
                      )}
                    </button>
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
                    <label className="block">
                      <span className="text-gray-700">Username</span>
                      <Field
                        name="username"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        type="text"
                        placeholder="username"
                      />
                    </label>
                    {errors.username && touched.username ? (
                      <span className="mt-2 text-sm text-red-400">
                        {errors.username}
                      </span>
                    ) : null}

                    <label className="block mt-4">
                      <span className="text-gray-700">Email</span>
                      <Field
                        name="email"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        type="email"
                        placeholder="email"
                      />
                    </label>
                    {errors.email && touched.email ? (
                      <span className="mt-2 text-sm text-red-400">
                        {errors.email}
                      </span>
                    ) : null}
                    <label className="block mt-4">
                      <span className="text-gray-700">Password</span>
                      <Field
                        name="password"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        type="password"
                        placeholder="password"
                      />
                    </label>
                    {errors.password && touched.password ? (
                      <span className="mt-2 text-sm text-red-400">
                        {errors.password}
                      </span>
                    ) : null}
                    <button
                      type="submit"
                      disabled={loading ? true : false}
                      className="mt-6 w-full flex-none bg-indigo-600 hover:bg-indigo-700 text-white text-lg leading-6 font-semibold py-2 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-indigo-700 focus:outline-none transition-colors duration-200"
                    >
                      {loading ? (
                        <CgSpinner className="animate-spin inline h-5 w-5" />
                      ) : (
                        "Signup"
                      )}
                    </button>
                  </Form>
                )}
              </Formik>
            )}
          </div>
        </div>
        <div className="mt-3">
          <p className="text-gray-500">
            {loggingIn ? "Dont have an account?" : "Already have an account?"}{" "}
            <span
              className="text-indigo-600 cursor-pointer font-bold"
              onClick={() => setLoggingIn(!loggingIn)}
            >
              {loggingIn ? "Signup" : "Login"}
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
};
