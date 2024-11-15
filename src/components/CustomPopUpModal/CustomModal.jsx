import React from "react";
import { IoMdClose } from "react-icons/io";
import "./modal.css";

const CustomModal = ({ id, header, body, footer, onClose }) => {
  return (
    <div
      id={id || "modal"}
      className="modal z-20 w-full h-screen top-0 absolute bg-yellow-400 flex justify-center items-center"
    >
      <div className="modal-content w-5/6 font-semibold absolute">
        <div className="header bg-green-600 p-4 flex justify-center relative text-white ">
          <h1>{header ? header : "Hello this is Header"}</h1>
          <span
            className="absolute right-3 text-lg cursor-pointer"
            onClick={onClose}
          >
            <IoMdClose />
          </span>
        </div>
        <div className="body bg-white h-40 p-4 flex justify-center">
          <p>{body ? body : "This is just the body"}</p>
        </div>
        <div className="footer bg-green-600 p-4 flex justify-center text-white">
          <h2>{footer ? footer : "And it's Footer"}</h2>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
