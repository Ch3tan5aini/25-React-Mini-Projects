import React from "react";
import { useState } from "react";
import CustomModal from "./CustomModal";

const TestModal = () => {
  const [popUp, setPopUp] = useState(false);

  function handlePopUpToggle() {
    setPopUp(!popUp);
  }
  function handalOnClose() {
    setPopUp(false);
  }

  return (
    <div className="flex flex-col justify-center items-center w-full h-full relative">
      <button
        className="bg-black p-3 text-white m-2 rounded-md"
        onClick={handlePopUpToggle}
      >
        Show Modal
      </button>
      {popUp ? <CustomModal onClose={handalOnClose} id={1} header={"Header Test"} body={"Custom Body text Test"} footer={"Its Just a test Of footer"} /> : null}
    </div>
  );
};

export default TestModal;
