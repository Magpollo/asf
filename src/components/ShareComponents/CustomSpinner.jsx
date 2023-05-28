import React, { useEffect, useState } from 'react';
import loading from '../../assets/loadingscreen.png';

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
      <div className="m-0">
        {showLoader ? (
          <div className="h-screen absolute top-0 bottom-0 z-50 w-screen flex justify-center items-center">
            <img
              src={loading}
              alt=""
              className="w-full h-full z-[1]"
            />
          </div>
        ) : (
          <WrappedComponent />
        )}
      </div>
    );
  };
};

export default CustomSpinner;
