import React, { useEffect, useState, useContext } from 'react'
import { AddonsContext } from '../../context/AddonsContext';
import "./AddonsOption.css";


const AddonsOption = ({options}) => {
  // const [addonOptions, setAddonOptions] = useState([]);
  const [optionsDisplay, setOptionsDisplay] = useState([]);
  const {setAddonsDisplay} = useContext(AddonsContext)
  
   

  // const handleOptionToggle = (option) => {
  //   const updatedOptions = [...optionsDisplay]
  //   const index = updatedOptions.indexOf(option)

  //   if(index > -1){
  //     updatedOptions.splice(index, 1)
  //   }else {
  //     updatedOptions.push(option)
  //   }

  //   setOptionsDisplay(updatedOptions)
  //   setAddonsDisplay(optionsDisplay)
  // }
  const handleOptionToggle = (option) => {
    setOptionsDisplay(prevOption => {
      const updatedOptions = [...prevOption]
      const index = updatedOptions.indexOf(option)
  
      if(index > -1){
        updatedOptions.splice(index, 1)
      }else {
        updatedOptions.push(option)
      }
      setAddonsDisplay(updatedOptions)
      return updatedOptions
    });
  }

  return (
    <>
      {
        options.map((option) => {
          const {id, heading, text, price} = option;
          return (
            <div key={id} className='addons-option'>
              <div className='addons-container'>
              <input checked={optionsDisplay.includes(option)} className='addons-checkbox' type="checkbox" onChange={()=>handleOptionToggle(option)}/>
                  <div className='addons-hgroup'>
                      <h3 className='addons-hgroup--heading'>{heading}</h3>
                      <p className='addons-hgroup--p'>{text}</p>
                  </div>
              </div>  
                <span className='addosn-price'>+{price}/yr</span>
            </div>
          )
        })
      }
    </>
  )
}

export default AddonsOption