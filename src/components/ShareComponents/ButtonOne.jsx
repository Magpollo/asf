import React from 'react';

const ButtonOne = ({ children, width, bgColor, style, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={style}
      className={`${className} ${width || 'w-56'} py-3 mx-10 my-5 rounded-lg ${
        bgColor || 'bg-[#F7CC32]'
      } text-center text-black uppercase font-bold outline-offset-0 outline-1 hover:outline hover:outline-inherit hover:bg-neutral hover:text-[#F7CC32] transition-all duration-200 ease-in-out delay-75`}
    >
      {children}
    </button>
  );
};

export default ButtonOne;
