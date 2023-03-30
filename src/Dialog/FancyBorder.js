import React from 'react';
import "./FancyBorder.css"

const FancyBorder = ({color, children}) => {
  // 透過將目標包含在內來Composition
  return (
      <div className={"FancyBorder FancyBorder-" + color}>
        {children}
      </div>
    );    
}

export default FancyBorder;
