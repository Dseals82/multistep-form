import React from 'react';
import './HeadingGroup.css';

const HeadingGroup = ({heading, text}) => {
  return (
    <hgroup className="main-hgroup">
      <h1 className="main-header">{heading}</h1>
      <p className="main-p">{text}</p>
    </hgroup>
  );
}

export default HeadingGroup