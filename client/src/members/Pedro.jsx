import React, { useState } from "react";
import { Formik, Form } from "formik";
import { pythagorean } from "./functions";
import {
  InputForm,
  SubmitButton,
  FormWrapper,
  Label,
  Heading,
  Answer,
} from "./utils";
export const Pedro = () => {
  const [res, setRes] = useState(pythagorean(2, 5));
  return (
    <div>
      <Heading name="Pedro" />
      <Label>Pythagorean theorem:</Label>
      <Formik
        initialValues={{ x: "", y: "" }}
        onSubmit={(values) => {
          const { x, y } = values;
          setRes(pythagorean(x, y));
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
