import React from 'react'

export const Button = ({className, type, children, onSubmit, onClick}) => {
  return (
    <button onClick={onClick} onSubmit={onSubmit} className={className} type={type}>{children}</button>
  );
};

export default Button;