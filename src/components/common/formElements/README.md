# Getting Started With redux-form elements ![CI status](https://img.shields.io/badge/build-passing-brightgreen.svg)
Hi there, welcome!

The basic implementation of redux-form elements is simple. However, to make the most of it, it's recommended to have basic knowledge on:

* [redux-form](https://redux-form.com/7.4.2/),
* [Redux state container](https://redux.js.org/)

### You don’t have to use redux-form with the standard Redux Field elements. You can use your own custom components.

Overall, rendered component tree looks like this:

```
1. reduxForm() wrapper component from redux-form.
  2. form component (with HTML <form> element).
    3. Form - elements component (which we builded).
        4. Field component from redux-form
            5. HTML <input> element with react-bootstrap boilerplate.
```
## __Components__ ##
----------
1. TextField
2. TextArea
3. RadioGroup
4. SelectBox
5. Checkbox
6. DateTimepicker
7. ReduxRange
8. ReactSelect
9. ReactAsyncSelect

## __Common props__ ##
> __these are props which applicale for all components__
#### name : String
The name of the field. It will be the same as the key in the fields Object, but useful if bundling up a field to send down to a specialized input component.
#### onChange(eventOrValue) : Function
A function to call when the form field is changed. It expects to either receive the React SyntheticEvent or the new value of the field.
#### customClass : String
Appends any number of classes to the field’s class attribute.
#### validate : Function  
There are many validation options included within Redux. You can also build your own validation option if necessary.
#### Required Fields
To make a field required you will need to use the following setting:
'validate' => 'not_empty'
> export const required = (value) => { return value ? undefined : 'is Required!'; };
#### errorLabel : String
errorLabel will append to error
> errorMesaage = `errorLabel` + `validate()`

## TextField
The Text field accepts any form of text and optionally validates the text before saving the value.

```
<Textfield
   name="fieldName"
   label="Placeholder Label"
   maxLength={10}
   errorLabel="ERROR_LABEL.LABEL"
   validate={[required]}
   onChange={changeHandler}
   customClass="customClass for field"
/>
```
### __Aditional props__

#### maxLength Number
Maximum allowed character for the field

## TextArea
The Text field accepts any form of multi-line text and optionally validates the text before saving the value.

```
<Textarea
   name="fieldName"
   label="Placeholder Label"
   maxLength={10}
   errorLabel="error label"
   validate={[required]}
   onChange={changeHandler}
   customClass="customClass for field"
/>
```
### __Aditional props__

#### maxLength : Number
Maximum allowed character for the field
## SelectBox
The SelectBox field displays information in a drop-down field only single formats.

```
<SelectBox
  name="fieldName"
  label="Placeholder Label"
  errorLabel="error label"
  options={selectArray}
  validate={[required]}
  placeholder="Please select an option"
  onChange={changeHandler}
/>
```
### __Aditional props__

#### maxLength : Number
Maximum allowed character for the field
#### options : Array
objects inside of array should be contain name and value
##### __example: __
>[{
      name: '10-25 lac',
      value: '1',
    },
    {
      name: '25 lacs-1 cr',
      value: '2',
    },
    {
      name: 'More than 1 cr',
      value: '3',
    }]

`name: option name value: value for that option`

## Checkbox
The Checkbox field may be used to offer a single check option,.

```
<Checkbox
  name="fieldName"
  label="Placeholder Label"
  errorLabel="error label"
  options={selectArray}
  validate={[required]}
  placeholder="Please select an option"
  onChange={changeHandler}
/>
```
## RadioGroup
The Radio field is an excellent way to present a set of choices for users to select from.

```
<RadioGroup
  name="fieldName"
  label="Placeholder Label"
  errorLabel="error label"
  options={selectArray}
  validate={[required]}
  placeholder="Please select an option"
  onChange={changeHandler}
/>
```
### __Aditional props__

#### options : Array
Array of key pair values representing the radio buttons.  The value parameter for field value The label parameter accepts the text to display beside the radio button.
##### __example: __
>  [
    {
      label: '1-13',
      value: '1',
    },
    {
      label: '14-18',
      value: '2',
    },
    {
      label: '18-23',
      value: '3',
    },
    {
      label: '>23',
      value: '4',
    },
  ];

`label: text to display beside the radio button.` `value: value for field`
## ReactSelect
The Checkbox field may be used to offer a single check option,.

```
<ReactSelect
  name="fieldName"
  label="Placeholder Label"
  errorLabel="error label"
  options={options}
  id="multiEX"
  onChange={handleChange}
  validate={[validate]}
  errorLabel="specify errorLabel"
  placeholder="specify placeholder"
  className="use custom class"
  isMulti
  isSearchable
/>
```
The Select control for React. click [here](https://github.com/JedWatson/react-select) to know more
### __Aditional props__
#### id : any
should be unique
#### isDisabled : Boolean
  disable the control
#### isMulti : Boolean
 allow the user to select multiple values
#### isSearchable
allow the user to search for matching options
events
#### options
specify the options the user can select from
##### __example: __
>  [
    {
      label: '1-13',
      value: '1',
    },
    {
      label: '14-18',
      value: '2',
    },
    {
      label: '18-23',
      value: '3',
    },
    {
      label: '>23',
      value: '4',
    },
  ];

`label: option label,` `value: option value`

[see more...](https://react-select.com/props)

## ReactAsyncSelect
The Checkbox field may be used to offer a single check option,.

```
<ReactAsyncSelect
  name="fieldName"
  label="Placeholder Label"
  errorLabel="error label"
  loadOptions={loadOptions}
  defaultOptions={props.options}
  id="multiEX"
  onChange={handleChange}
  validate={[validate]}
  errorLabel="specify errorLabel"
  placeholder="specify placeholder"
  className="use custom class"
  isMulti
  isSearchable
  isCreatable
/>
```
The Select control for React. click [here](https://github.com/JedWatson/react-select) to know more
### __Aditional props__
#### id : any
should be unique
#### isDisabled : Boolean
  disable the control
#### isMulti : Boolean
 allow the user to select multiple values
#### isSearchable
allow the user to search for matching options
events
#### isCreatable
allow the user to create new option

#### cacheOptions
save option in cache

#### defaultOptions
default options before calling async api
##### __example: __
>  [
    {
      label: '1-13',
      value: '1',
    },
    {
      label: '14-18',
      value: '2',
    },
    {
      label: '18-23',
      value: '3',
    },
    {
      label: '>23',
      value: '4',
    },
  ];

`label: option label,` `value: option value`
### loadOptions : Function
this function will call on every value change,
and update select option when callback function returns
```
const loadOptions = (inputValue, callback) => {
    inputValue - value in search box
    callback - callback function it should return array
};
```
* callback function should return array of objects which  will look like bellow snippet

>  [
    {
      label: '1-13',
      value: '1',
    },
    {
      label: '14-18',
      value: '2',
    },
    {
      label: '18-23',
      value: '3',
    },
    {
      label: '>23',
      value: '4',
    },
  ];

`label: option label,` `value: option value`

[see more...](https://react-select.com/async#async)
