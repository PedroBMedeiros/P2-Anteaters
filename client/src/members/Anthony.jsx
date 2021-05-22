import React, { useState } from "react";
import { Formik, Form } from "formik";
import { cube } from "./functions";
import {
  InputForm,
  SubmitButton,
  FormWrapper,
  Label,
  Heading,
  Answer,
} from "./utils";
export const Anthony = () => {
  const [res, setRes] = useState(cube(2));
  return (
    <div>
      <Heading name="Anthony" />
      <Label>Cube Formula:</Label>
      <Formik
        initialValues={{ x: "" }}
        onSubmit={(values) => {
          const { x } = values;
          setRes(cube(x));
        }}
      >
        {() => (
          <Form>
            <FormWrapper>
              <InputForm label="x" name="x" type="number" />
              <SubmitButton text="Submit" />
            </FormWrapper>
          </Form>
        )}
      </Formik>
      <Answer>{res}</Answer>
    </div>
  );
};
