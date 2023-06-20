import React from 'react';
import './FormInput.css';

const FormInput = ({lableName, id, placeholder, type, value, onChange, error }) => {
  return (
    <div className="form-group">
      <div className="labels-container">
        <label for={id} className="form-lable">{lableName}</label>
        <label for={id} className="error-text-name">This field is required</label>
      </div>
      <input name={id} value={value} onChange={onChange} type={type} className={error ? "form-input error-border" : "form-input"} id={id} placeholder={placeholder}/>
    </div>
  )
}

export default FormInput