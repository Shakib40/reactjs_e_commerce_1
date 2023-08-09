import React from 'react';
import { Field } from 'formik';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';
import moment from 'moment';
import momentLocalizer from 'react-widgets-moment';
import ErrorMessage from '@formElements/ErrorMessage';
import 'react-widgets/dist/css/react-widgets.css';

moment.locale('en');
momentLocalizer();
const renderDateTimePicker = ({
  field, form: { setFieldValue }, className, showTime, date, placeholder, onChangeDate = () => {}, disabled, min, onChangeNameDate = () => {},
}) => (
  <DateTimePicker
    onChange={(value) => { setFieldValue(field.name, value); onChangeDate(value); onChangeNameDate({ name: field.name, date: value }); }}
    format="DD-MM-YYYY"
    className={className}
    date={date}
    disabled={disabled}
    time={showTime}
    value={!field.value ? null : new Date(field.value)}
    placeholder={placeholder}
    dropUp
    min={min}
  />
);
const DateTimepicker = (props) => {
  const {
    name, showTime, dateLabel, onChangeDate, placeholder, className, date, disabled, min, onChangeNameDate
  } = props;
  return (
    <div>
      {dateLabel && (
        <label className="fs-12 clr-input-box-label mb-1 background_color_transparant">
          {dateLabel}
        </label>
      )}
      <Field
        name={name}
        onChangeDate={onChangeDate}
        className={className}
        placeholder={placeholder}
        date={date}
        showTime={showTime}
        component={renderDateTimePicker}
        disabled={disabled}
        min={min}
        onChangeNameDate={onChangeNameDate}
      />
      <ErrorMessage name={name} />
    </div>
  );
};
export default DateTimepicker;
