import React from 'react'
import "./AppLayout.css";

const AppLayout = ({ children }) => {
  return (
    <div className="app-container">{children}</div>
  )
}

export default AppLayout