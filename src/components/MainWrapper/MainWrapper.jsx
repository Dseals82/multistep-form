import React from 'react';
import './MainWrapper.css';

const MainWrapper = ({ children }) => {
  return (
    <div className='main'>{children}</div>
  )
}

export default MainWrapper