import React from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import LoginForm from '@components/LoginForm';
import { LOGGEDIN } from '@reducers/oauth';

const Login = (props) => {
  const successLogin = (data) => {
    console.log(data);
    window.localStorage.setItem('isUserLogin', true);
    props.history.replace('/dashboard');
  };

  /* Failure of login function */
  const failureLogin = () => {
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
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    LOGGEDIN,
  },
  dispatch
);

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);
