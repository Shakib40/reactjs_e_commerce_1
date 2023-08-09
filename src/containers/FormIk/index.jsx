import React, { useEffect } from 'react';
import { Formik } from 'formik';
import UserForm from '@components/formIkUser';
import InitialImage from '@assets/images/company.png';
import Banner from '@components/common/Banner';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import { bindActionCreators } from 'redux';
import {
  getCities,
  getUser,
  getExistingEmailIds,
  putUser
} from '../../reducers/users';
import { emailValidate, required, password } from '../../components/common/FormValidatrionFormik';

const FormIk = (props) => {
  useEffect(() => {
    props.getUser(props.match.params.id);
  }, []);
  const onSubmit = (values, helpers) => {
    console.log('submit', values, helpers);
    props.putUser(1, values);
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      helpers.setSubmitting(false);
    }, 400);
  };

  const loadCities = (data, callback) => {
    props.getCities(data).then((options) => { callback([options]); });
  };

  // don't set state inside the reducer and it shold be a pure function
  const formikReducer = (nextState, prevState) => {
    console.log(nextState, prevState);
    const { firstName, lastName } = nextState.values;
    if ((firstName !== prevState.values.firstName) || lastName !== prevState.values.lastName) {
      nextState.setFieldValue('holderName', `${firstName} ${lastName}`);
    }
  };

  const asyncEmailValidate = (value) => {
    return props.getExistingEmailIds().then((res) => {
      let errors = null;
      if (res.includes(value)) {
        errors = 'is already exists';
      }
      if (errors) {
        throw errors;
      }
    });
  };

  const validationSchemaComp = () => {
    return Yup.object().shape({
      email: emailValidate(),
      password: required()
        .test('Validation failure message', password),
      cPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'must match')
        .required('is required!'),
      addressType: Yup.string()
        .required('is required!'),
      comments: Yup.string()
        .required('is required!'),
      choice: Yup.string()
        .required('is required!'),
      agreed: Yup.boolean().required('is required!').oneOf([true], 'must agree with the terms and conditions'),
      branch: Yup.string()
        .required('is required!'),
      city: Yup.string()
        .required('is required!'),
      holderName: Yup.string()
        .required('is required!')
    });
  };

  const renderFormComponent = (renderProps) => {
    return (
      <UserForm
        props={renderProps}
        asyncEmailValidate={asyncEmailValidate}
        reducer={formikReducer}
        loadCities={loadCities}
      />
    );
  };

  return (
    <div className="row m-0 justify-content-md-center h-100">
      <div className="card-wrapper">
        <Banner
          icon={`<img src=${InitialImage} alt="company logo" width="130"/>`}
          title="Financial freedom, work freedom."
          subheader="Welcome Back!"
          subtitle="Your investments. <br/> Our goal."
        />
        <div className="card fat w-700">
          <div className="card-body">
            <Formik
              initialValues={props.activeUser}
              render={renderFormComponent}
              validationSchema={validationSchemaComp}
              onSubmit={onSubmit}
              formikReducer={formikReducer}
              enableReinitialize
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  loading: state.users.loading,
  loaded: state.users.loaded,
  cities: state.users.cities,
  activeUser: state.users.activeUser
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getCities,
  getUser,
  getExistingEmailIds,
  putUser
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormIk);
