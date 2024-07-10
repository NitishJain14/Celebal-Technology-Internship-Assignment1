import React from "react";
import { useLocation } from "react-router-dom";

const Success = () => {
  const location = useLocation();
  const form = location.state;

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Form Submitted Successfully</h2>
      <pre className="whitespace-pre-wrap break-words bg-gray-100 p-4 rounded-md">{JSON.stringify(form, null, 2)}</pre>
    </div>
  );
};

export default Success;
