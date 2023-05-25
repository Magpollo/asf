import React from "react";
import usePageTitle from "../../Hooks/usePageTitle";

const ErrorPage = () => {
  usePageTitle("Error Page");
  return (
    <div className="h-screen flex items-center justify-center">
      <h1 className="text-center text-5xl text-red-600">
        Not found that page 404
      </h1>
    </div>
  );
};

export default ErrorPage;
