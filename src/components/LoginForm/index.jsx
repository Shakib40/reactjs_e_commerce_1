import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'formik';
import Textfield from '@formElements/TextFieldFormik';
import Button from '@formElements/Button';
// import StalkerLogo from '@assets/images/StalkerLogoM.png';
// import FaceBook from '@assets/images/Facebook.png';
// import GooglePuls from '@assets/images/Google+.png';
import { APP_CONFIG } from '@constants';
import style from './login.module.css';
import cn from 'classnames';

const LoginForm = (props) => {
  const { loading } = props;
  return (
    <div className="card-wrapper w-300">
      <div className="fat">
        <h1 className="main-header text-center">Login</h1>
        <div className="card-body p-0">
          <Form>
            <div className="form-group">
              <Textfield
                name="username"
                type="text"
                label="Email"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <Textfield
                name="password"
                type="password"
                label="Password"
                placeholder="Password"
              />
            </div>
            <div className="mb-10 no-margin d-flex justify-content-center ">
              <Button type="submit" loading={loading} customClass="pl-45" className="btn btn-primary btn-block btn-md w-75per">
                <Fragment>
                    SUBMIT
                </Fragment>
                <Fragment>
                    Loading
                </Fragment>
              </Button>
            </div>
            <div className="mb-10 mb-10 text-center">
              <Link
                to={`${APP_CONFIG.BASE_URL}/resetpassword`}
                className={cn(style.forgotPassword, 'd-flux justify-content-center fs-14')}
              >
                  Forgot Password ?
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
