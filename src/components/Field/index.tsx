import React, { FC, InputHTMLAttributes, useState  }from 'react';

interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
    type: string;
    label: string;
    name: string;
  }

const Field: React.FC<FieldProps> = ({ type, name, label, ...rest }) => {

    const [valueInput, setValueInput] = useState('');

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
      const newValue = e.target.value;
      setValueInput(e.target.value)
   }

    return (
      <div className="input_wrapper">
        <label htmlFor={name}>{label}</label>
        <input
        type={type}
        name={name}
        className={'input_'+type}
        value={valueInput}
        onChange={handleOnChange}
        {...rest}
        />
      </div>
    )
}

export default Field