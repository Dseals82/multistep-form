import React from 'react';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Form.css';

const Form = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
    });
    const [nameInputEmpty, setNameInputEmpty] = useState(false);
    const [emailInputEmpty, setEmailInputEmpty] = useState(false);
    const [phoneInputEmpty, setPhoneInputEmpty] = useState(false);

    const { name, email, phone} = formData;
    const handleForm = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const nameIsEmpty = name === "";
        const emailIsEmpty = email === "";
        const phoneIsEmpty = phone === "";
        if( nameIsEmpty | emailIsEmpty | phoneIsEmpty){
            nameIsEmpty && setNameInputEmpty(true)
            emailIsEmpty && setEmailInputEmpty(true)
            phoneIsEmpty && setPhoneInputEmpty(true)
            console.log("Nah Dawg");
            return 
        }
        console.log(formData)
        setFormData({
            name: "",
            email: "",
            phone: "",
        })
        navigate("/select-plan");
    }

  return (
    <form className="form" onSubmit={handleSubmit}>
        <FormInput error={nameInputEmpty} onChange={handleForm} value={name} lableName="Name" id="name" placeholder="e.g. Stephen King" type="text" />
        <FormInput error={emailInputEmpty} onChange={handleForm} value={email}  lableName="Email Address" id="email" placeholder="e.g. stephenking@lorem.com" type="email" />
        <FormInput error={phoneInputEmpty} onChange={handleForm} value={phone}  lableName="Phone Number" id="phone" placeholder="e.g. +1 234 567 890" />
        <Button className="form-submit" type="submit">Next Step</Button>
    </form>
  );
};

export default Form;