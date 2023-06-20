import React from 'react'
import './SidebarLink.css';

const SidebarLink = ({step, text}) => {
  return (
    <li className="list-item">
        <div className="list-item-circle active">{step}</div>
        <div className="list-item-container">
            <h5 className="list-item-heading-primary">Step{step}</h5>
            <h4 className="list-item-heading-secondary">{text}</h4>
        </div>
    </li>
  )
}

export default SidebarLink;