
import React from 'react';
import { Field } from 'formik';
import ErrorMessage from '@formElements/ErrorMessage';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './index.css';

// class CustomInputComponent extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       focused: false,
//       value: ''
//     };
//     this.onFocus = this.onFocus.bind(this);
//     this.onBlur = this.onBlur.bind(this);
//   }

//   onFocus() {
//     this.setState({
//       focused: true
//     });
//   }

//   onBlur() {
//     this.setState({
//       focused: false
//     });
//   }

//   render() {
//     const {
//       type,
//       field,
//       label,
//       value,
//       customClass,
//       placeholder,
//       readOnly
//     } = this.props;
//     return (
//       <div >
//         <label className="label-text clr-input-box-label background_color_transparant">
//           {label}
//         </label>
//         <ReactQuill  onChange={field.onChange(field.name)}  type={type} theme="snow" value={field.value || ''}  />
//       </div>
//     );
//   }
// }

const CustomInputComponent = (props) => {
  const { type, field, label } = props;
  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link'
  ];
  return (
    <div>
      <label className="label-text clr-input-box-label background_color_transparant">
        {label}
      </label>
      <ReactQuill onChange={field.onChange(field.name)} formats={formats} type={type} theme="snow" value={field.value || ''} />
    </div>
  );
};

const ReactQuillFormik = (props) => {
  const {
    name,
    label,
    type,
    errorLabel,
    placeholder,
    readOnly,
    validate,
    customClass
  } = props;
  return (
    <div>
      <Field
        name={name}
        component={CustomInputComponent}
        label={label}
        placeholder={placeholder}
        type={type}
        errorLabel={errorLabel}
        readOnly={readOnly}
        validate={validate}
        customClass={customClass}
      />
      <ErrorMessage name={name} />
    </div>
  );
};

export default ReactQuillFormik;
