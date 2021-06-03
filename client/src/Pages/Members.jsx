import React from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { SubmitButton, FormWrapper } from "../members/utils";
export const Members = () => {
  const history = useHistory();
  return (
    <div>
      <Formik
        initialValues={{ member: "Mackenzie" }}
        onSubmit={(values) => {
          history.push(`/member/${values.member}`);
        }}
      >
        {() => (
          <Form>
            <FormWrapper>
              <Field
                name="member"
                component="select"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                <option value="Mackenzie">Mackenzie</option>
                <option value="Anthony">Anthony</option>
                <option value="Pedro">Pedro</option>
                <option value="Naweid">Naweid</option>
                <option value="Cherry">Cherry</option>
              </Field>
              <SubmitButton text="Go" />
            </FormWrapper>
          </Form>
        )}
      </Formik>
    </div>
  );
};
