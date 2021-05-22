import React, { useState } from "react";
import { Formik, Form } from "formik";
import { add } from "./functions";
import {
  InputForm,
  SubmitButton,
  FormWrapper,
  Label,
  Heading,
  Answer,
} from "./utils";
export const Naweid = () => {
  const [res, setRes] = useState(add(2, 5));
  return (
    <div>
      <Heading name="Naweid" />
      <Label>Addition Formula:</Label>
      <Formik
        initialValues={{ x: "", y: "" }}
        onSubmit={(values) => {
          const { x, y } = values;
          setRes(add(x, y));
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
