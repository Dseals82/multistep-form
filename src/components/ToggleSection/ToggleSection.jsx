import React from 'react';
import { useState, useContext } from 'react';
import { CardContext } from '../../context/CardContex';
import './ToggleSection.css';

const ToggleSection = ({optionA, optionB}) => {
const [toggle, setToggle] = useState(false);
const { setToggleSelection } = useContext(CardContext);
const handleToggle = () => {
    let toggleSelection = optionA
    setToggle(!toggle)
    !toggle ? toggleSelection = optionB : toggleSelection = optionA;
    setToggleSelection(toggleSelection)
    console.log("check", toggleSelection)
}
  return (
    <div className="toggle-section">
        <h5 className="toggle-month">{optionA}</h5>
        <label className="switch">
            <input onChange={handleToggle} type="checkbox"/>
            <span className="slider round"></span>
        </label>
        <h5 className="toggle-year">{optionB}</h5>
    </div>
  )
}

export default ToggleSection