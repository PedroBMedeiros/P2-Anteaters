import React, { useState } from "react";
import { Formik, Form } from "formik";
import { bubbleSort } from "./functions";
import { InputForm, SubmitButton, FormWrapper, Label, Answer } from "./utils";
export const BubbleSort = () => {
  const [res, setRes] = useState(bubbleSort("172,643,4,6,42,433,12"));
  return (
    <div>
      <Label>Bubble Sort:</Label>
      <Formik
        initialValues={{ arr: "" }}
        onSubmit={(values) => {
          const { arr } = values;
          setRes(bubbleSort(arr));
        }}
      >
        {() => (
          <Form>
            <FormWrapper>
              <InputForm
                label="List (number separated by commas no spaces)"
                name="arr"
                type="text"
                placeholder="172,643,4,6,42,433,12"
              />
              <SubmitButton text="Submit" />
            </FormWrapper>
          </Form>
        )}
      </Formik>
      <Answer>
        Sorted list: [
        {res.map((v, index) => (
          <span key={v}>
            {v}
            {res.length - 1 === index ? null : ","}
          </span>
        ))}
        ]
      </Answer>
    </div>
  );
};
