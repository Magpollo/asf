import React from 'react';

const ButtonOne = ({ children, width, bgColor, style, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={style}
      className={`${className} ${width || 'w-56'} py-3 mx-10 my-5 rounded-lg ${
        bgColor || 'bg-[#F7CC32]'
      } text-center text-white-500 uppercase font-bold outline-offset-0 outline-1 hover:outline-inherit 
      hover:bg-red hover:text-[#F7CC32] hover:shadow-red-500 hover:shadow-[inset_15rem_0_0_0]  duration-[500ms,700ms] transition-[color,box-shadow]`}
    >
      {children}
    </button>
  );
};

export default ButtonOne;
