import React, { useState } from "react";
import { Formik, Form } from "formik";
import { multiplication } from "./functions";
import {
  InputForm,
  SubmitButton,
  FormWrapper,
  Label,
  Heading,
  Answer,
} from "./utils";
export const Cherry = () => {
  const [res, setRes] = useState(multiplication(2, 5));
  return (
    <div>
      <Heading name="Cherry" />
      <Label>Multiplication Formula:</Label>
      <Formik
        initialValues={{ x: "", y: "" }}
        onSubmit={(values) => {
          const { x, y } = values;
          setRes(multiplication(x, y));
        }}
      >
        {() => (
          <Form>
            <FormWrapper>
              <InputForm label="x" name="x" type="number" />
              <InputForm label="x" name="y" type="number" />
              <SubmitButton text="Submit" />
            </FormWrapper>
          </Form>
        )}
      </Formik>
      <Answer>{res}</Answer>
    </div>
  );
};
