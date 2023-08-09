import React, { Fragment } from 'react';
import { Form } from 'formik';
import Textfield from '@formElements/TextFieldFormik';
import Button from '@formElements/Button';
// import style from './ForgotPasswordForm.css';

const ForgotPasswordForm = ({ loading }) => {
  return (
    <div>
      <h1 className="main-header text-center">Forgot Password</h1>
      <div className="w-300 m-auto">
        <Form>
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="mb-10 vulHuntFormPlaceholder">
                <Textfield
                  name="emailAddress"
                  type="text"
                  label="Email"
                  placeholder="Email"
                  customClass="mt-1"
                />
              </div>
            </div>
          </div>
          <div className="col-8 m-auto">
            <Button
              type="submit"
              className="btn btn-primary btn-block"
              customClass="pl-20"
              loading={loading}
              disabled={loading}
            >
              <Fragment>
                SUBMIT
              </Fragment>
              <Fragment>
                SENDING LINK
              </Fragment>
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default ForgotPasswordForm;
