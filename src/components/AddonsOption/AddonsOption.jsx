import React from 'react'
import "./AddonsOption.css";

const AddonsOption = () => {
  return (
    <div className='addons-option'>
    <div className='addons-container'>
    <input className='addons-checkbox' type="checkbox"/>
        <div className='addons-hgroup'>
            <h3 className='addons-hgroup--heading'>heading</h3>
            <p className='addons-hgroup--p'>some text goes here</p>
        </div>
    </div>  
        <span className='addosn-price'>+13/yr</span>
    </div>
  )
}

export default AddonsOption