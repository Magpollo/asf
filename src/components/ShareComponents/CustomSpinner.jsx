import React, { useEffect, useState } from 'react';
import loading from '../../assets/loadingscreen.png';
import creamBg from '../../assets/cream.png';
import logo from '../../assets/ASF_logo_color.png';

const CustomSpinner = (WrappedComponent) => {
  return () => {
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
      const timeout = setTimeout(() => {
        setShowLoader(false);
      }, 1000); // Set the desired time duration in milliseconds

      return () => clearTimeout(timeout);
    }, []);

    return (
      <>
        {showLoader ? (
          <div className="h-screen w-screen z-50 absolute inset-0 mx-0 flex justify-center items-center overflow-hidden overscroll-none">
            <img
              src={creamBg}
              alt=""
              className="object-cover h-screen w-screen"
            />
            <img
              src={logo}
              alt=""
              height={150}
              width={150}
              className="w-60 h-40 z-50 inset-0 absolute mx-auto my-auto"
            />
          </div>
        ) : (
          <WrappedComponent />
        )}
      </>
    );
  };
};

export default CustomSpinner;
