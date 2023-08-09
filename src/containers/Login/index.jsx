import React from 'react';
// import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import LoginForm from '@components/LoginForm';
import { login } from '@reducers/oauth';

import { setNotification } from '@reducers/notification';

const Login = (props) => {
  const successLogin = (data) => {
    console.log(data);
    window.localStorage.setItem('isUserLogin', true);
    // window.localStorage.setItem('access_token', data.access_token);
    // window.localStorage.setItem('allowedServices', JSON.stringify(data.AllowedServices));
    // window.localStorage.setItem('rocketChatAuthToken', data.userData.rocketChatAuthToken);
    // window.localStorage.setItem('rocketChatUserId', data.userData.rocketChatUserId);
    props.history.replace('/dashboard');
  };

  /* Failure of login function */
  const failureLogin = (error) => {
    props.setNotification({
      type: 'danger',
      message: error.body.error_description,
    });
  };

  /* Login */
  const onSubmit = (data) => {
    props
      .BookList(data)
      .then(successLogin)
      .catch(failureLogin);
  };

  const validationSchemaLogin = () => Yup.object().shape({
    username: Yup.string().required('Username required'),
    password: Yup.string().required('Password required'),
  });

  const renderFormComponent = (renderProps) => {
    return <LoginForm props={renderProps} loading={props.loading} />;
  };

  return (
    <div className="container-fuild login-page-background">
      <Formik
        onSubmit={onSubmit}
        validationSchema={validationSchemaLogin}
        render={renderFormComponent}
      />
    </div>
  );
};

Login.propTypes = {
};

const mapStateToProps = ({ oauth }) => ({
  loading: oauth.loading,
  // isLoading: state.,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    login,
    setNotification,
  },
  dispatch
);

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);
