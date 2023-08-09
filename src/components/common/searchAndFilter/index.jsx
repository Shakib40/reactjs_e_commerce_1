import React, { useState } from 'react';
import { Form } from 'formik';
import Textfield from '@formElements/TextFieldFormik';
import ReactSelect from '@formElements/ReactSelectFormik';
import DateTimepicker from '@formElements/DateTimepickerFormik';

const SearchAndFilter = (props) => {
  const [selectcomponents, setSelectComponents] = useState([]);
  const [clear, setClear] = useState(false);
  const { components } = props;
  const setSelectedComponents = (name) => {
    if (selectcomponents) {
      const itemPresent = selectcomponents.includes(name);
      if (!itemPresent) {
        setSelectComponents(prevState => [...prevState, name]);
      }
    } else {
      setSelectComponents(name);
    }
  };
  const onClear = () => {
    props.onClear();
    props.formProps.resetForm({
      active: {
        id: 1, name: 'Active'
      },
      isactive: {
        id: 1, name: 'Active'
      }
    });
    setClear(true);
  };
  return (
    <Form>
      <div className="border-bottom py-3">
        <span className="text-primary pl-10">Search & Filter</span>
        <span role="presentation" className="text-danger float-right pr-10 cursor-pointer" onClick={() => onClear()}>Clear</span>
      </div>
      <div>
        {components && components.map((el) => {
          if (el.type === 'textfield') {
            if (el.name === 'rolename') {
              return (
                <div className="pb-3 pt-4 pl-2 pr-2">
                  <Textfield
                    name={el.name}
                    onChange={data => props.onChangeTextfield(data)}
                    placeholder={el.placeholder}
                    type="text"
                  />
                </div>
              );
            }
            return (
              <div className="pb-3 pt-4 pl-4 pr-4 w-100">
                <Textfield
                  name={el.name}
                  onChange={data => props.onChangeTextfield(data)}
                  placeholder={el.placeholder}
                  type="text"
                />
              </div>
            );
          }
          if (el.type === 'reactselect') {
            if (el.name === 'roleType' || el.name === 'customRoleId' || el.name === 'active') {
              return (
                <div className="pb-3 pl-2 pr-2">
                  <ReactSelect
                    placeholder={el.placeholder}
                    onChangeNameOption={(data) => { props.onChangeSelectOption(data); setSelectedComponents(el.name); }}
                    options={el.options || []}
                    name={el.name}
                    isDisabled={el.isDisabled}
                    clear={el.name === 'active' ? '' : clear}
                    setClear={setClear}
                    defaultValue={el.name === 'active' && { id: 1, name: 'Active' }}
                  />
                </div>
              );
            }
            return (
              <div className="pb-3 pl-4 pr-4">
                <ReactSelect
                  placeholder={el.placeholder}
                  onChangeNameOption={(data) => { props.onChangeSelectOption(data); setSelectedComponents(el.name); }}
                  options={el.options || []}
                  name={el.name}
                  isDisabled={el.isDisabled}
                  clear={el.name === 'isactive' ? '' : clear}
                  setClear={setClear}
                  defaultValue={el.name === 'isactive' && { id: 1, name: 'Active' }}
                />
              </div>
            );
          }
          if (el.type === 'datefield') {
            return (
              <div className="pb-3 pl-4 pr-4 customDatePicker">
                <DateTimepicker
                  name={el.name}
                  showTime={el.showTime}
                  placeholder={el.placeholder}
                  onChangeNameDate={data => props.onDateChange(data)}
                  disabled={el.disabled}
                />
              </div>
            );
          }
          return null;
        })}
      </div>
    </Form>
  );
};

export default SearchAndFilter;
