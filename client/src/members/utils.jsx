import React from "react";
import { Field } from "formik";
import { ImArrowRight2 } from "react-icons/im";
export const InputForm = ({ type, name, label, placeholder }) => (
  <label className="block">
    <span className="text-gray-700">{label}</span>
    <Field
      name={name}
      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      type={type}
      placeholder={placeholder === undefined ? label : placeholder}
    />
  </label>
);

export const SubmitButton = ({ text }) => (
  <button
    className="w-full self-end flex-none bg-indigo-600 hover:bg-indigo-700 text-white text-lg leading-6 font-semibold py-2 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-indigo-700 focus:outline-none transition-colors duration-200"
    type="submit"
  >
    {text}
  </button>
);

export const FormWrapper = ({ children }) => (
  <div className="grid grid-cols-form gap-4 mt-12">{children}</div>
);

export const Heading = ({ name }) => (
  <div>
    <h1 className="text-5xl font-bold">
      Hello i'm <span className="text-indigo-600">{name}!</span>
    </h1>
    <h2 className="font-semibold">Here is some of my work:</h2>
  </div>
);

export const Label = ({ children }) => (
  <h1 className="text-2xl font-semibold mt-7 -mb-10">{children}</h1>
);

export const Answer = ({ children }) => (
  <div className="mt-3">
    <ImArrowRight2 className="inline text-xl text-indigo-600 relative bottom-0.5" />
    <h3 className="inline ml-2 font-semibold">{children}</h3>
  </div>
);
