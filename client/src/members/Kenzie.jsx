import React, { useState } from "react";
import { Formik, Form } from "formik";
import { quadratic } from "./functions";
import {
  InputForm,
  SubmitButton,
  FormWrapper,
  Label,
  Heading,
  Answer,
} from "./utils";
export const Kenzie = () => {
  const [res, setRes] = useState(quadratic(2, 5, 2));
  return (
    <div>
      <Heading name="Mackenzie" />
      <Label>Quadratic Formula:</Label>
      <Formik
        initialValues={{ a: "", b: "", c: "" }}
        onSubmit={(values) => {
          const { a, b, c } = values;
          setRes(quadratic(a, b, c));
        }}
      >
        {() => (
          <Form>
            <FormWrapper>
              <InputForm label="a" name="a" type="number" />
              <InputForm label="b" name="b" type="number" />
              <InputForm label="c" name="c" type="number" />
              <SubmitButton text="Submit" />
            </FormWrapper>
          </Form>
        )}
      </Formik>
      <Answer>{res}</Answer>
    </div>
  );
};
