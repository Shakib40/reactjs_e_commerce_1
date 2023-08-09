import React from 'react';
import { Field } from 'formik';

const renderFileInput = ({
  name,
  multiple,
  // field,
  id,
  form: { setFieldValue }
}) => (
  <input
    onChange={(event) => { setFieldValue('file', event.currentTarget.files); }}
    name={name}
    type="file"
    multiple={multiple}
    id={id}
    // value={!field.value ? null : field.value}
  />
);
const UploadFile = (props) => {
  const {
    multiple,
    name,
    id,
    label,
    uploadIcon
  } = props;
  return (
    <div className="text-center">
      <label htmlFor={id} className="pos-a custom-label-date border rounded py-3 px-2 cursor-pointer">
        <img src={uploadIcon} className="uploadImage" alt="upload" />
        <Field name={name} id={id} multiple={multiple} component={renderFileInput} />
      </label>
      {label && (
        <p className="text-center fs-10 clr-input-box-label">{label}</p>
      )}
    </div>
  );
};
export default UploadFile;
