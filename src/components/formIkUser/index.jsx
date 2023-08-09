import React from 'react';
import Textfield from '@formElements/TextFieldFormik';
import SelectBox from '@formElements/SelectBoxFormik';
import ReactSelect from '@formElements/ReactSelectFormik';
import TextArea from '@formElements/TextAreaFormik';
import CheckBox from '@formElements/CheckBoxFormik';
import RadioGroup from '@formElements/RadioFormIk';
import ReactAsyncSelect from '@formElements/ReactAsyncSelectFormik';
import FormikEffect from '@components/common/FormikEffect';
import DateTimepicker from '@formElements/DateTimepickerFormik';
import { Form } from 'formik';

const userForm = ({
  props,
  reducer,
  loadCities,
  asyncEmailValidate
}) => {
  const {
    isSubmitting,
    handleSubmit
  } = props;
  const options = [
    {
      label: 'chikkamagluru',
      value: '1',
    },
    {
      label: 'bangaluru',
      value: '2',
    },
    {
      label: 'hassana',
      value: '3',
    },
    {
      label: 'mysuru',
      value: '4',
    },
  ];
  const optionsRadio = [
    {
      label: 'current',
      value: '1',
    },
    {
      label: 'savings',
      value: '2',
    }
  ];
  return (
    <Form onSubmit={handleSubmit}>
      <FormikEffect
        formikProps={props}
        didUpdate={reducer}
      />
      <div className="row col">
        <div className="form-group col-6">
          <Textfield
            type="text"
            name="firstName"
            errorLabel="Name"
            label="First Name"
          />
        </div>
        <div className="form-group col-6">
          <Textfield
            type="text"
            name="lastName"
            errorLabel="Name"
            label="Last Name"
          />
        </div>
        <div className="form-group col-12">
          <Textfield
            type="text"
            name="holderName"
            errorLabel="Card Name"
            label="Card Holder Name"
            readOnly
          />
        </div>
        <div className="form-group col-12">
          <Textfield
            type="text"
            name="email"
            errorLabel="Email"
            label="Email"
            validate={asyncEmailValidate}
          />
        </div>
        <div className="form-group col-6">
          <Textfield
            type="password"
            name="password"
            errorLabel="Password"
            label="Password"
          />
        </div>
        <div className="form-group col-6">
          <Textfield
            type="password"
            name="cPassword"
            errorLabel="Confirm password"
            label="Comfim password"
          />
        </div>
        <div className="form-group col-6">
          <SelectBox
            name="addressType"
            label="Address type"
            options={[{ name: 'please choose an option', value: undefined }, { name: 'option-1', value: 1 }, { name: 'option-2', value: 2 }]}
          />
        </div>
        <div className="form-group col-6">
          <DateTimepicker
            name="date"
            options={options}
            errorLabel="city"
            label="City"
            placeholder="search here"
            className=""
            loadOptions={loadCities}
            isMulti
            isSearchable
          />
        </div>
        <div className="form-group col-12">
          <RadioGroup
            options={optionsRadio}
            name="choice"
            label="Account Type"
          />
        </div>
        <div className="form-group col-12">
          <ReactSelect
            name="branch"
            options={options}
            errorLabel="Field"
            label="Branch"
            placeholder="search here"
            className=""
            isMulti
            isSearchable
          />
        </div>
        <div className="form-group col-12">
          <ReactAsyncSelect
            name="city"
            options={options}
            errorLabel="city"
            label="City"
            placeholder="search here"
            className=""
            loadOptions={loadCities}
            isMulti
            isSearchable
          />
        </div>
        <div className="form-group col-12">
          <TextArea
            name="comments"
            label="Comments"
          />
        </div>
        <div className="form-group col-12">
          <CheckBox
            name="agreed"
            label="i agree with the tearms and conditions"
          />
        </div>
        <button
          className="btn btn-primary btn-block btn-md"
          type="submit"
          disabled={isSubmitting}
        >
          Submit
        </button>
      </div>
    </Form>
  );
};
export default userForm;
