// CustomScrollbars.js
import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';

const CustomScrollbars = ({ children }) => {
  const renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
      background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      borderRadius: '4px',
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  };

  return (
    <Scrollbars
      renderThumbVertical={renderThumb}
      renderThumbHorizontal={renderThumb}
      autoHide
    >
      {children}
    </Scrollbars>
  );
};

export default CustomScrollbars;
