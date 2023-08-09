/* eslint-disable */
import React from 'react';
import Textfield from '@formElements/TextFieldFormik';
// import { Effect } from 'formik-effect';
import { Field } from 'formik';
import { Form } from 'formik';
import FormikEffect from '@components/common/FormikEffect';

const userForm = (formik) => {
  return (
    <Form>
      <FormikEffect
        values={formik.values}
        setFieldValue={formik.setFieldValue}
        submitForm={formik.submitForm}
        isSubmitting={formik.isSubmitting}
        isValidating={formik.isValidating}
        didUpdate={ ( props, prevProps ) => {
          console.log(prevProps.values.name, props.values.name);
          const { name, surname } = props.values;
          console.log(name, surname);

          if (props.isSubmitting) {
            return;
          }

          if (
            name !== prevProps.values.name ||
            surname !== prevProps.values.surname
          ) {
            props.setFieldValue('card_holder', `${name} ${surname}`);
            console.log('submitForm');
            props.submitForm();
          }
        }}
      />
      <div>
        <label>Name</label>
        <br />
        <Field name="name" placeholder="Insert name" />
      </div>
      <br />

      <div>
        <label>Surname</label>
        <br />
        <Field name="surname" placeholder="Insert surname" />
      </div>
      <br />

      <div>
        <label>
          Card Holder <small>(read only)</small>
        </label>
        <br />
        <Field
          name="card_holder"
          readOnly
          placeholder="Insert card holder"
        />
      </div>
      <br />
      <input type="submit" />
      <br />
      <br />
    </Form>
);
};
export default userForm;
