/* eslint-disable */
import React, { Component } from 'react';
import { Formik } from 'formik';
import InitialImage from '@assets/images/company.png';
// import { Effect } from 'formik-effect';
import { Field } from 'formik';
import { Form } from 'formik';
import FormikEffect from '@components/common/FormikEffect';
import userForm from '@components/formIkUserWithReducer';
import Banner from '@components/common/Banner';

class FormikWithReducer extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  // FormIk = () => {
  //   const validationSchema = Yup.object().shape({
  //     email: Yup.string()
  //       .email('is not valid!')
  //       .required('is required!'),
  //     name: Yup.string()
  //       .required('is required!'),
  //     password: Yup.string()
  //       .required('is required!')
  //       .test('Validation failure message', (value) => {
  //         console.log('nkdjcmnkcdkmdc', value);
  //         return true;
  //       }),
  //     cPassword: Yup.string()
  //       .oneOf([Yup.ref('password'), null], 'must match')
  //       .required('is required!'),
  //     addressType: Yup.string()
  //       .required('is required!'),
  //     comments: Yup.string()
  //       .required('comments is required!'),
  //     choice: Yup.string()
  //       .required('is required!'),
  //     agreed: Yup.boolean().required('is required!').oneOf([true], 'must agree with the terms and conditions'),
  //     branch: Yup.string()
  //       .required('is required!')
  //   })};

    onSubmit = (values, { setSubmitting }) => {
      console.log('submit', values);
      // setTimeout(() => {
      //   alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
      // }, 400);
    };

    render() {
      /* eslint-disable */
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
                      // initialValues={{ name: 'xx', surname: 'ss', card_holder: 'x' }}
                      // onSubmit={handleSubmit}
                      renedr={userForm}
                    >
                </Formik>
              );
              </div>
            </div>
          </div>
        </div>
      );
    }
}
export default FormikWithReducer;
