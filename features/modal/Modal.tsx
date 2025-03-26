"use client";

import React, { useState } from "react";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setIsOpen(true)}
      >
        Open Modal
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4 border border-red-600"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-violet-500 rounded-lg shadow-lg w-full h-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* title */}
            <div className="flex justify-between">
              <p>Title</p>
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
                onClick={() => setIsOpen(false)}
              >
                &times;
              </button>
            </div>
            {/* title */}
            {/* content */}
            <p className="text-white">Some text in the Modal...</p>
            {/* content */}
            {/* footer */}
            <div className="flex justify-between">
              <p>footer</p>
              <button
                className=" text-gray-500 hover:text-gray-700 text-xl"
                onClick={() => setIsOpen(false)}
              >
                close
              </button>
            </div>
            {/* footer */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
